import { Injectable } from '@angular/core';
import { MemoryZone } from '../core/fx/core/MemoryZone';
import ExcelLexer from '../core/fx/gen/ExcelLexer';
import ExcelParser from '../core/fx/gen/ExcelParser';

@Injectable({
  providedIn: 'root',
})
export class FxService {
  lexer!: ExcelLexer;
  parser!: ExcelParser;
  public memoryZone: MemoryZone = new MemoryZone(
    new Map<string, Map<string, any>>(),
    new Set<any>()
  );

  constructor() {}

  // public interpret(input: string) {

  //   this.lexer = new ExcelLexer(new CharStream(input));
  //   this.parser = new ExcelParser(new CommonTokenStream(this.lexer));
  //   this.parser.buildParseTrees = true;
  //   const tree = this.parser.formula();
  //   console.log(tree.toStringTree(this.parser.ruleNames, this.parser));
  //   ParseTreeWalker.DEFAULT.walk(new ExcelDefaultListener(), tree);
  // }

  public execute() {
    this.memoryZone.execute();
  }

  public reset() {
    this.memoryZone = new MemoryZone(
      new Map<string, Map<string, any>>(),
      new Set<any>()
    );
  }

  public setFormula(row: string, col: string, formula: string) {
    try {
      this.memoryZone.setCellFormula(row, col, formula);
    } catch (e: any) {
      this.memoryZone.getCell(row, col).value = e.message;
      throw e;
    }
  }

  public getValue(row: string, col: string) {
    return this.memoryZone.getCell(row, col).value;
  }

  public getFormula(row: string, col: string) {
    return this.memoryZone.getCell(row, col).formula;
  }

  public getDependencies(row: string, col: string) {
    return this.memoryZone.getCell(row, col).dependencies;
  }

  public getPrerequisites() {
    return this.memoryZone.prerequisites;
  }

  public getMemory() {
    return this.memoryZone.saveToString();
  }

  public loadMemory(memory: string) {
    this.memoryZone.loadFromString(memory);
    this.memoryZone.execute();
    // console.log(this.memoryZone);
  }
}
