import ExcelListener from '../gen/ExcelListener';
import { OperandContext } from '../gen/ExcelParser';

export interface MemoryCellPosition {
  row: string;
  col: string;
}

export class MemoryListener extends ExcelListener {
  public memory: MemoryCellPosition[] = [];

  constructor() {
    super();
    this.enterOperand = this._enterOperand;
  }

  private splitVarName(varName: string) {
    let varColName = '';
    let varRowName = '';

    for (let i = 0; i < varName.length; i++) {
      if (varName.charCodeAt(i) >= 48 && varName.charCodeAt(i) <= 57) {
        varRowName += varName[i];
      } else {
        varColName += varName[i];
      }
    }
    return [varRowName, varColName];
  }

  private _enterOperand(ctx: OperandContext) {
    if (ctx.VAR_NAME()) {
      // console.log('memory', ctx.VAR_NAME().getText());            //split the var_name into col and row
      const varName = ctx.VAR_NAME().getText();
      const [row, col] = this.splitVarName(varName);
      this.memory.push({ row: row, col: col });
    } else if (ctx.var_range()) {
      const var1 = ctx.var_range().children[0] as OperandContext;
      const var2 = ctx.var_range().children[2] as OperandContext;
      const [row1, col1] = this.splitVarName(var1.VAR_NAME().getText());
      const [row2, col2] = this.splitVarName(var2.VAR_NAME().getText());

      for (let i = Number(row1); i <= Number(row2); i++) {
        for (let j = Number(col1) - 1; j <= Number(col2) - 1; j++) {
          this.memory.push({ row: i.toString(), col: j.toString() });
        }
      }
    }
  }
}
