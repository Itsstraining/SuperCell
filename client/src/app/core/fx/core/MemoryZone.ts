import { CharStream, CommonTokenStream, ParseTreeWalker } from 'antlr4';
import ExcelLexer from '../gen/ExcelLexer';
import ExcelParser, { FormulaContext } from '../gen/ExcelParser';
import { ExcelDefaultListener } from './ExcelDefaultListener';
import { MemoryCellPosition, MemoryListener } from './MemoryListener';

export class MemoryCell {
  constructor(
    public formula: string,
    public value: any,
    public formulaContext: FormulaContext,
    public dependencies: MemoryCellPosition[],
    public row: string,
    public col: string,
    public isComputed: boolean = false
  ) {}
}

export class MemoryZone {
  constructor(public memory: any, public prerequisites: Set<MemoryCell>) {
    this.memory = {};
    this.prerequisites = new Set<MemoryCell>();
  }

  getCell(row: string, col: string): MemoryCell {
    if (this.memory[col] == undefined) {
      this.memory[col] = {};
    }
    if (this.memory[col][row] == undefined) {
      this.memory[col][row] = new MemoryCell(null, null, null, [], row, col);
    }
    return this.memory[col][row];
  }

  setCellFormula(row: string, col: string, formula: string) {
    if (this.memory[col] == undefined) {
      this.memory[col] = {};
    }
    // console.log(this.memory);
    this.memory[col][row] = new MemoryCell(formula, null, null, [], row, col);
    let lexer = new ExcelLexer(new CharStream(formula));
    let parser = new ExcelParser(new CommonTokenStream(lexer));
    parser.buildParseTrees = true;

    let tree = null;
    try {
      tree = parser.formula();
    } catch (e) {
      throw e;
    }
    let memListener = new MemoryListener();
    ParseTreeWalker.DEFAULT.walk(memListener, tree);
    this.memory[col][row].dependencies = memListener.memory;
    this.memory[col][row].formulaContext = tree;
    if (this.memory[col][row].dependencies.length === 0) {
      this.prerequisites.add(this.memory[col][row]);
    } else {
      this.prerequisites.delete(this.memory[col][row]);
    }
    //check circular dependencies
    let queue = [];
    for (let cell of this.memory[col][row].dependencies) {
      queue.push(this.getCell(cell.row, cell.col));
    }
    while (queue.length > 0) {
      let cell = queue.shift();
      if (cell.dependencies.length === 0) {
        continue;
      }
      if (cell.dependencies.find((dep) => dep.row === row && dep.col === col)) {
        alert('Circular dependency');
        throw new Error('Circular dependency');
      }
      for (let dep of cell.dependencies) {
        queue.push(this.getCell(dep.row, dep.col));
      }
    }
  }

  getValue(row: string, col: string): any {
    return this.getCell(row, col).value;
  }

  setValue(row: string, col: string, value: any) {
    this.getCell(row, col).value = value;
  }

  execute() {
    while (this.prerequisites.size > 0) {
      let cell = this.prerequisites.values().next().value;
      this.prerequisites.delete(cell);
      let listener = new ExcelDefaultListener(this);
      if (cell.formulaContext == null) {
        cell.value = 0;
        cell.isComputed = true;
        continue;
      }
      ParseTreeWalker.DEFAULT.walk(listener, cell.formulaContext);
      cell.value = listener.finalResult;
      cell.isComputed = true;
    }
    let queue = [];
    // console.log('memory:', this.memory);
    for (let col of Object.keys(this.memory)) {
      for (let row of Object.keys(this.memory[col])) {
        let cell = this.memory[col][row];
        if (!cell.isComputed) {
          queue.push(cell);
        }
      }
    }

    // console.log('queue:', queue);
    while (queue.length > 0) {
      let cellPos = queue.shift();
      let cell = this.getCell(cellPos.row, cellPos.col);
      //check if all dependencies are computed
      let allComputed = true;
      for (let dep of cell.dependencies) {
        if (!this.getCell(dep.row, dep.col).isComputed) {
          allComputed = false;
          queue.push(cell);
          break;
        }
      }
      let listener = new ExcelDefaultListener(this);
      if (cell.formulaContext == null) {
        cell.value = 0;
        cell.isComputed = true;
        continue;
      }
      ParseTreeWalker.DEFAULT.walk(listener, cell.formulaContext);
      cell.value = listener.finalResult;
      cell.isComputed = true;
    }
  }

  saveToString() {
    let result = '';
    for (let col of Object.keys(this.memory)) {
      for (let row of Object.keys(this.memory[col])) {
        let cell = this.memory[col][row];
        if (cell.formula != null) {
          result += `${cell.row}${cell.col}=${cell.formula};`;
        }
      }
    }
    return result;
  }

  loadFromString(str: string) {
    let lines = str.split(';');
    lines = lines.filter((line) => line.length > 0);
    console.log(lines);
    // let lines = str.split(';');
    // for (let line of lines) {
    //   let parts = line.split('=');
    //   console.log(parts);
    //   if (parts.length == 2) {
    //     let cell = parts[0];
    //     let formula = parts[1];
    //     this.setCellFormula(cell.substring(1), cell.substring(0, 1), formula);
    //   }
    //   if (parts.length == 1) {
    //     let cell = parts[0];
    //     this.setCellFormula(cell.substring(1), cell.substring(0, 1), '');
    //   }
    //   if (parts.length == 0) {
    //     continue;
    //   }
    // if (parts.length > 2) {
    //   let cell = parts[0];
    //   let formula = parts[2];
    //   console.log('=' + formula);
    //   this.setCellFormula(
    //     cell.substring(1),
    //     cell.substring(0, 1),
    //     '=' + formula
    //   );
    // }
  }
}
