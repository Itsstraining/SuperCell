// Generated from Excel.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { FormulaContext } from "./ExcelParser";
import { Function_nameContext } from "./ExcelParser";
import { Function_callContext } from "./ExcelParser";
import { Boolean_operatorContext } from "./ExcelParser";
import { Logic_operatorContext } from "./ExcelParser";
import { Low_arithmetic_operatorContext } from "./ExcelParser";
import { High_arithmetic_operatorContext } from "./ExcelParser";
import { Prefix_operatorContext } from "./ExcelParser";
import { Var_rangeContext } from "./ExcelParser";
import { OperandContext } from "./ExcelParser";
import { ExprContext } from "./ExcelParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExcelParser`.
 */
export default class ExcelListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ExcelParser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.boolean_operator`.
	 * @param ctx the parse tree
	 */
	enterBoolean_operator?: (ctx: Boolean_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.boolean_operator`.
	 * @param ctx the parse tree
	 */
	exitBoolean_operator?: (ctx: Boolean_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.logic_operator`.
	 * @param ctx the parse tree
	 */
	enterLogic_operator?: (ctx: Logic_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.logic_operator`.
	 * @param ctx the parse tree
	 */
	exitLogic_operator?: (ctx: Logic_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.low_arithmetic_operator`.
	 * @param ctx the parse tree
	 */
	enterLow_arithmetic_operator?: (ctx: Low_arithmetic_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.low_arithmetic_operator`.
	 * @param ctx the parse tree
	 */
	exitLow_arithmetic_operator?: (ctx: Low_arithmetic_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.high_arithmetic_operator`.
	 * @param ctx the parse tree
	 */
	enterHigh_arithmetic_operator?: (ctx: High_arithmetic_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.high_arithmetic_operator`.
	 * @param ctx the parse tree
	 */
	exitHigh_arithmetic_operator?: (ctx: High_arithmetic_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.prefix_operator`.
	 * @param ctx the parse tree
	 */
	enterPrefix_operator?: (ctx: Prefix_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.prefix_operator`.
	 * @param ctx the parse tree
	 */
	exitPrefix_operator?: (ctx: Prefix_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.var_range`.
	 * @param ctx the parse tree
	 */
	enterVar_range?: (ctx: Var_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.var_range`.
	 * @param ctx the parse tree
	 */
	exitVar_range?: (ctx: Var_rangeContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

