import ExcelListener from '../gen/ExcelListener';
import {
  ExprContext,
  FormulaContext,
  OperandContext,
  Low_arithmetic_operatorContext,
  High_arithmetic_operatorContext,
  Boolean_operatorContext,
  Logic_operatorContext,
  Prefix_operatorContext,
  Function_callContext,
} from '../gen/ExcelParser';
import { MemoryZone } from './MemoryZone';

export interface IValue {
  getValue(): any;
}

export class MyFormulaContext extends FormulaContext implements IValue {
  constructor() {
    super();
  }
  public value = null;

  getValue() {
    return this.value;
  }
}

export class MyOperandContext extends OperandContext implements IValue {
  constructor() {
    super();
  }
  public value = null;

  getValue() {
    return this.value;
  }
}

export class MyExprContext extends ExprContext implements IValue {
  constructor() {
    super();
  }
  public value = null;

  getValue() {
    return this.value;
  }
}

export class MyFunctionCallContext
  extends Function_callContext
  implements IValue
{
  constructor() {
    super();
  }
  public value = null;

  getValue() {
    return this.value;
  }
}

export class ExcelDefaultListener extends ExcelListener {
  constructor(private memory: MemoryZone) {
    super();
    this.exitFormula = this._exitFormula;
    this.exitOperand = this._exitOperand;
    this.exitExpr = this._exitExpr;
    this.exitFunction_call = this._exitFunction_call;
    this.enterOperand = this._enterOperand;
  }
  public finalResult = null;

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

  private _exitFormula(ctx: MyFormulaContext) {
    ctx.value = (ctx.children[1] as MyExprContext).value;
    this.finalResult = ctx.value;
    // console.log('exitFormula', ctx);
  }

  private _enterOperand(ctx: MyOperandContext) {
    // console.log('enterOperand', ctx.getText());
  }

  private _exitOperand(ctx: MyOperandContext) {
    let value = ctx.BOOL();
    if (value) {
      ctx.value = value.getText() === 'true' || value.getText() == 'TRUE';
      return;
    }
    value = ctx.NUMERIC();
    if (value) {
      ctx.value = parseFloat(value.getText());
      return;
    }

    value = ctx.STRING();
    if (value) {
      ctx.value = value.getText().substring(1, value.getText().length - 1);
      return;
    }

    let varName = ctx.VAR_NAME();
    if (varName) {
      let [row, col] = this.splitVarName(varName.getText());
      // console.log('varName', row, col);
      let varValue = this.memory.getValue(row, col);
      if (varValue) {
        ctx.value = varValue;
      } else {
        // throw new Error(`Variable ${varName.getText()} is not defined`);
        ctx.value = 0;
      }
      return;
    }

    let context = ctx.function_call();
    if (context) {
      ctx.value = (context as MyFunctionCallContext).value;
      return;
    }
  }

  private _exitExpr(ctx: MyExprContext) {
    if (ctx.children.length == 1) {
      if (ctx.children[0] instanceof ExprContext) {
        ctx.value = (ctx.children[0] as MyExprContext).value;
      } else if (ctx.children[0] instanceof OperandContext) {
        ctx.value = (ctx.children[0] as MyOperandContext).value;
      }
    }
    if (ctx.children.length == 2) {
      if (ctx.children[0] instanceof Prefix_operatorContext) {
        if (ctx.children[0].getText() == '-') {
          ctx.value = 0 - (ctx.children[1] as MyExprContext).value;
        } else {
          ctx.value = (ctx.children[1] as MyExprContext).value;
        }
      } else {
        if (ctx.children[0].getText() == 'NOT') {
          ctx.value = !(ctx.children[1] as MyExprContext).value;
        }
      }
    }

    if (ctx.children.length == 3) {
      if (ctx.children[1] instanceof Low_arithmetic_operatorContext) {
        if (ctx.children[1].getText() == '+') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value +
            (ctx.children[2] as MyExprContext).value;
        } else {
          ctx.value =
            (ctx.children[0] as MyExprContext).value -
            (ctx.children[2] as MyExprContext).value;
        }
      } else if (ctx.children[1] instanceof High_arithmetic_operatorContext) {
        if (ctx.children[1].getText() == '*') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value *
            (ctx.children[2] as MyExprContext).value;
        } else {
          ctx.value =
            (ctx.children[0] as MyExprContext).value /
            (ctx.children[2] as MyExprContext).value;
        }
      } else if (ctx.children[1] instanceof Boolean_operatorContext) {
        if (ctx.children[1].getText() == 'AND') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value &&
            (ctx.children[2] as MyExprContext).value;
        } else if (ctx.children[1].getText() == 'OR') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value ||
            (ctx.children[2] as MyExprContext).value;
        } else if (ctx.children[1].getText() == 'XOR') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value ^
            (ctx.children[2] as MyExprContext).value;
        }
      } else if (ctx.children[1] instanceof Logic_operatorContext) {
        if (ctx.children[1].getText() == '<') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value <
            (ctx.children[2] as MyExprContext).value;
        } else if (ctx.children[1].getText() == '>') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value >
            (ctx.children[2] as MyExprContext).value;
        } else if (ctx.children[0].getText() == '=') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value ==
            (ctx.children[2] as MyExprContext).value;
        } else if (ctx.children[0].getText() == '>=') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value >=
            (ctx.children[2] as MyExprContext).value;
        } else if (ctx.children[0].getText() == '<=') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value <=
            (ctx.children[2] as MyExprContext).value;
        } else if (ctx.children[0].getText() == '!=') {
          ctx.value =
            (ctx.children[0] as MyExprContext).value !=
            (ctx.children[2] as MyExprContext).value;
        }
      } else if (
        ctx.children[0].getText() == '(' &&
        ctx.children[2].getText() == ')'
      ) {
        ctx.value = (ctx.children[1] as MyExprContext).value;
      }
    }
    // console.log('exitExpr', ctx);
  }

  private _exitFunction_call(ctx: MyFunctionCallContext) {
    if (ctx.children[0].getText().toLocaleLowerCase() == 'sum') {
      let sum = 0;
      for (let i = 2; i < ctx.children.length - 1; i++) {
        if (ctx.children[i] instanceof ExprContext) {
          sum += (ctx.children[i] as MyExprContext).value;
        }
      }
      ctx.value = sum;
    }
    if (ctx.children[0].getText().toLocaleLowerCase() == 'average') {
      let sum = 0;
      let count = 0;
      for (let i = 2; i < ctx.children.length - 1; i++) {
        if (ctx.children[i] instanceof ExprContext) {
          sum += (ctx.children[i] as MyExprContext).value;
          count++;
        }
      }
      ctx.value = sum / count;
    }
    if (ctx.children[0].getText().toLocaleLowerCase() == 'max') {
      let max = 0;
      for (let i = 2; i < ctx.children.length - 1; i++) {
        if (ctx.children[i] instanceof ExprContext) {
          let value = (ctx.children[i] as MyExprContext).value;
          if (value > max) {
            max = value;
          }
        }
      }
      ctx.value = max;
    }
    if (ctx.children[0].getText().toLocaleLowerCase() == 'min') {
      let min = 0;
      for (let i = 2; i < ctx.children.length - 1; i++) {
        if (ctx.children[i] instanceof ExprContext) {
          let value = (ctx.children[i] as MyExprContext).value;
          if (value < min) {
            min = value;
          }
        }
      }
      ctx.value = min;
    }

    // console.log(ctx);
  }
}
