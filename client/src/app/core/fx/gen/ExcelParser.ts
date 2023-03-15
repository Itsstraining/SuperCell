// Generated from Excel.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import ExcelListener from "./ExcelListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ExcelParser extends Parser {
	public static readonly ADD = 1;
	public static readonly SUB = 2;
	public static readonly MUL = 3;
	public static readonly DIV = 4;
	public static readonly EQ = 5;
	public static readonly NEQ = 6;
	public static readonly LT = 7;
	public static readonly GT = 8;
	public static readonly LTE = 9;
	public static readonly GTE = 10;
	public static readonly AND = 11;
	public static readonly OR = 12;
	public static readonly NOT = 13;
	public static readonly XOR = 14;
	public static readonly LPAREN = 15;
	public static readonly RPAREN = 16;
	public static readonly COLON = 17;
	public static readonly COMMA = 18;
	public static readonly WS = 19;
	public static readonly VAR_NAME = 20;
	public static readonly NUMERIC = 21;
	public static readonly STRING = 22;
	public static readonly BOOL = 23;
	public static readonly FN_SUM = 24;
	public static readonly FN_AVERAGE = 25;
	public static readonly FN_COUNT = 26;
	public static readonly FN_MIN = 27;
	public static readonly FN_MAX = 28;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_formula = 0;
	public static readonly RULE_function_name = 1;
	public static readonly RULE_function_call = 2;
	public static readonly RULE_boolean_operator = 3;
	public static readonly RULE_logic_operator = 4;
	public static readonly RULE_low_arithmetic_operator = 5;
	public static readonly RULE_high_arithmetic_operator = 6;
	public static readonly RULE_prefix_operator = 7;
	public static readonly RULE_var_range = 8;
	public static readonly RULE_operand = 9;
	public static readonly RULE_expr = 10;
	public static readonly literalNames: (string | null)[] = [ null, "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'='", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'AND'", 
                                                            "'OR'", "'NOT'", 
                                                            "'XOR'", "'('", 
                                                            "')'", "':'", 
                                                            "','", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'SUM'", "'AVERAGE'", 
                                                            "'COUNT'", "'MIN'", 
                                                            "'MAX'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ADD", 
                                                             "SUB", "MUL", 
                                                             "DIV", "EQ", 
                                                             "NEQ", "LT", 
                                                             "GT", "LTE", 
                                                             "GTE", "AND", 
                                                             "OR", "NOT", 
                                                             "XOR", "LPAREN", 
                                                             "RPAREN", "COLON", 
                                                             "COMMA", "WS", 
                                                             "VAR_NAME", 
                                                             "NUMERIC", 
                                                             "STRING", "BOOL", 
                                                             "FN_SUM", "FN_AVERAGE", 
                                                             "FN_COUNT", 
                                                             "FN_MIN", "FN_MAX" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "function_name", "function_call", "boolean_operator", "logic_operator", 
		"low_arithmetic_operator", "high_arithmetic_operator", "prefix_operator", 
		"var_range", "operand", "expr",
	];
	public get grammarFileName(): string { return "Excel.g4"; }
	public get literalNames(): (string | null)[] { return ExcelParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ExcelParser.symbolicNames; }
	public get ruleNames(): string[] { return ExcelParser.ruleNames; }
	public get serializedATN(): number[] { return ExcelParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ExcelParser._ATN, ExcelParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public formula(): FormulaContext {
		let localctx: FormulaContext = new FormulaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ExcelParser.RULE_formula);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 22;
			this.match(ExcelParser.EQ);
			this.state = 23;
			this.expr(0);
			this.state = 24;
			this.match(ExcelParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let localctx: Function_nameContext = new Function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ExcelParser.RULE_function_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 520093696) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let localctx: Function_callContext = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ExcelParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			this.function_name();
			this.state = 29;
			this.match(ExcelParser.LPAREN);
			this.state = 30;
			this.expr(0);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 31;
				this.match(ExcelParser.COMMA);
				this.state = 32;
				this.expr(0);
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this.match(ExcelParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_operator(): Boolean_operatorContext {
		let localctx: Boolean_operatorContext = new Boolean_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ExcelParser.RULE_boolean_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 22528) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logic_operator(): Logic_operatorContext {
		let localctx: Logic_operatorContext = new Logic_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ExcelParser.RULE_logic_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2016) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public low_arithmetic_operator(): Low_arithmetic_operatorContext {
		let localctx: Low_arithmetic_operatorContext = new Low_arithmetic_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ExcelParser.RULE_low_arithmetic_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 44;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public high_arithmetic_operator(): High_arithmetic_operatorContext {
		let localctx: High_arithmetic_operatorContext = new High_arithmetic_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ExcelParser.RULE_high_arithmetic_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 46;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===4)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prefix_operator(): Prefix_operatorContext {
		let localctx: Prefix_operatorContext = new Prefix_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ExcelParser.RULE_prefix_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_range(): Var_rangeContext {
		let localctx: Var_rangeContext = new Var_rangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, ExcelParser.RULE_var_range);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this.match(ExcelParser.VAR_NAME);
			this.state = 51;
			this.match(ExcelParser.COLON);
			this.state = 52;
			this.match(ExcelParser.VAR_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let localctx: OperandContext = new OperandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, ExcelParser.RULE_operand);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 54;
				this.match(ExcelParser.VAR_NAME);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 55;
				this.var_range();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 56;
				this.function_call();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 57;
				this.match(ExcelParser.STRING);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 58;
				this.match(ExcelParser.BOOL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 59;
				this.match(ExcelParser.NUMERIC);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, ExcelParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				{
				this.state = 63;
				this.match(ExcelParser.LPAREN);
				this.state = 64;
				this.expr(0);
				this.state = 65;
				this.match(ExcelParser.RPAREN);
				}
				break;
			case 1:
			case 2:
				{
				this.state = 67;
				this.prefix_operator();
				this.state = 68;
				this.expr(7);
				}
				break;
			case 13:
				{
				this.state = 70;
				this.match(ExcelParser.NOT);
				this.state = 71;
				this.expr(2);
				}
				break;
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
				{
				this.state = 72;
				this.operand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 93;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 91;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ExcelParser.RULE_expr);
						this.state = 75;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 76;
						this.boolean_operator();
						this.state = 77;
						this.expr(7);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ExcelParser.RULE_expr);
						this.state = 79;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 80;
						this.logic_operator();
						this.state = 81;
						this.expr(6);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ExcelParser.RULE_expr);
						this.state = 83;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 84;
						this.low_arithmetic_operator();
						this.state = 85;
						this.expr(5);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ExcelParser.RULE_expr);
						this.state = 87;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 88;
						this.high_arithmetic_operator();
						this.state = 89;
						this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,28,97,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,5,2,34,8,2,10,2,12,
	2,37,9,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,
	8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,61,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,3,10,74,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,92,8,10,10,10,12,10,95,9,10,
	1,10,0,1,20,11,0,2,4,6,8,10,12,14,16,18,20,0,5,1,0,24,28,2,0,11,12,14,14,
	1,0,5,10,1,0,1,2,1,0,3,4,98,0,22,1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,6,40,
	1,0,0,0,8,42,1,0,0,0,10,44,1,0,0,0,12,46,1,0,0,0,14,48,1,0,0,0,16,50,1,
	0,0,0,18,60,1,0,0,0,20,73,1,0,0,0,22,23,5,5,0,0,23,24,3,20,10,0,24,25,5,
	0,0,1,25,1,1,0,0,0,26,27,7,0,0,0,27,3,1,0,0,0,28,29,3,2,1,0,29,30,5,15,
	0,0,30,35,3,20,10,0,31,32,5,18,0,0,32,34,3,20,10,0,33,31,1,0,0,0,34,37,
	1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,
	16,0,0,39,5,1,0,0,0,40,41,7,1,0,0,41,7,1,0,0,0,42,43,7,2,0,0,43,9,1,0,0,
	0,44,45,7,3,0,0,45,11,1,0,0,0,46,47,7,4,0,0,47,13,1,0,0,0,48,49,7,3,0,0,
	49,15,1,0,0,0,50,51,5,20,0,0,51,52,5,17,0,0,52,53,5,20,0,0,53,17,1,0,0,
	0,54,61,5,20,0,0,55,61,3,16,8,0,56,61,3,4,2,0,57,61,5,22,0,0,58,61,5,23,
	0,0,59,61,5,21,0,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,0,0,60,57,1,0,
	0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,19,1,0,0,0,62,63,6,10,-1,0,63,64,5,15,
	0,0,64,65,3,20,10,0,65,66,5,16,0,0,66,74,1,0,0,0,67,68,3,14,7,0,68,69,3,
	20,10,7,69,74,1,0,0,0,70,71,5,13,0,0,71,74,3,20,10,2,72,74,3,18,9,0,73,
	62,1,0,0,0,73,67,1,0,0,0,73,70,1,0,0,0,73,72,1,0,0,0,74,93,1,0,0,0,75,76,
	10,6,0,0,76,77,3,6,3,0,77,78,3,20,10,7,78,92,1,0,0,0,79,80,10,5,0,0,80,
	81,3,8,4,0,81,82,3,20,10,6,82,92,1,0,0,0,83,84,10,4,0,0,84,85,3,10,5,0,
	85,86,3,20,10,5,86,92,1,0,0,0,87,88,10,3,0,0,88,89,3,12,6,0,89,90,3,20,
	10,4,90,92,1,0,0,0,91,75,1,0,0,0,91,79,1,0,0,0,91,83,1,0,0,0,91,87,1,0,
	0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,21,1,0,0,0,95,93,1,0,0,
	0,5,35,60,73,91,93];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExcelParser.__ATN) {
			ExcelParser.__ATN = new ATNDeserializer().deserialize(ExcelParser._serializedATN);
		}

		return ExcelParser.__ATN;
	}


	static DecisionsToDFA = ExcelParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FormulaContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(ExcelParser.EQ, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(ExcelParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_formula;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterFormula) {
	 		listener.enterFormula(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitFormula) {
	 		listener.exitFormula(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FN_SUM(): TerminalNode {
		return this.getToken(ExcelParser.FN_SUM, 0);
	}
	public FN_AVERAGE(): TerminalNode {
		return this.getToken(ExcelParser.FN_AVERAGE, 0);
	}
	public FN_COUNT(): TerminalNode {
		return this.getToken(ExcelParser.FN_COUNT, 0);
	}
	public FN_MIN(): TerminalNode {
		return this.getToken(ExcelParser.FN_MIN, 0);
	}
	public FN_MAX(): TerminalNode {
		return this.getToken(ExcelParser.FN_MAX, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_function_name;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterFunction_name) {
	 		listener.enterFunction_name(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitFunction_name) {
	 		listener.exitFunction_name(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_name(): Function_nameContext {
		return this.getTypedRuleContext(Function_nameContext, 0) as Function_nameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ExcelParser.LPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ExcelParser.RPAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ExcelParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ExcelParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_function_call;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterFunction_call) {
	 		listener.enterFunction_call(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitFunction_call) {
	 		listener.exitFunction_call(this);
		}
	}
}


export class Boolean_operatorContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(ExcelParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(ExcelParser.OR, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(ExcelParser.XOR, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_boolean_operator;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterBoolean_operator) {
	 		listener.enterBoolean_operator(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitBoolean_operator) {
	 		listener.exitBoolean_operator(this);
		}
	}
}


export class Logic_operatorContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(ExcelParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(ExcelParser.NEQ, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(ExcelParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(ExcelParser.GT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(ExcelParser.LTE, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(ExcelParser.GTE, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_logic_operator;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterLogic_operator) {
	 		listener.enterLogic_operator(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitLogic_operator) {
	 		listener.exitLogic_operator(this);
		}
	}
}


export class Low_arithmetic_operatorContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(ExcelParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(ExcelParser.SUB, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_low_arithmetic_operator;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterLow_arithmetic_operator) {
	 		listener.enterLow_arithmetic_operator(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitLow_arithmetic_operator) {
	 		listener.exitLow_arithmetic_operator(this);
		}
	}
}


export class High_arithmetic_operatorContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MUL(): TerminalNode {
		return this.getToken(ExcelParser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(ExcelParser.DIV, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_high_arithmetic_operator;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterHigh_arithmetic_operator) {
	 		listener.enterHigh_arithmetic_operator(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitHigh_arithmetic_operator) {
	 		listener.exitHigh_arithmetic_operator(this);
		}
	}
}


export class Prefix_operatorContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(ExcelParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(ExcelParser.SUB, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_prefix_operator;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterPrefix_operator) {
	 		listener.enterPrefix_operator(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitPrefix_operator) {
	 		listener.exitPrefix_operator(this);
		}
	}
}


export class Var_rangeContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR_NAME_list(): TerminalNode[] {
	    	return this.getTokens(ExcelParser.VAR_NAME);
	}
	public VAR_NAME(i: number): TerminalNode {
		return this.getToken(ExcelParser.VAR_NAME, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(ExcelParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_var_range;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterVar_range) {
	 		listener.enterVar_range(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitVar_range) {
	 		listener.exitVar_range(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR_NAME(): TerminalNode {
		return this.getToken(ExcelParser.VAR_NAME, 0);
	}
	public var_range(): Var_rangeContext {
		return this.getTypedRuleContext(Var_rangeContext, 0) as Var_rangeContext;
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(ExcelParser.STRING, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(ExcelParser.BOOL, 0);
	}
	public NUMERIC(): TerminalNode {
		return this.getToken(ExcelParser.NUMERIC, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_operand;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterOperand) {
	 		listener.enterOperand(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitOperand) {
	 		listener.exitOperand(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ExcelParser.LPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ExcelParser.RPAREN, 0);
	}
	public prefix_operator(): Prefix_operatorContext {
		return this.getTypedRuleContext(Prefix_operatorContext, 0) as Prefix_operatorContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(ExcelParser.NOT, 0);
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public boolean_operator(): Boolean_operatorContext {
		return this.getTypedRuleContext(Boolean_operatorContext, 0) as Boolean_operatorContext;
	}
	public logic_operator(): Logic_operatorContext {
		return this.getTypedRuleContext(Logic_operatorContext, 0) as Logic_operatorContext;
	}
	public low_arithmetic_operator(): Low_arithmetic_operatorContext {
		return this.getTypedRuleContext(Low_arithmetic_operatorContext, 0) as Low_arithmetic_operatorContext;
	}
	public high_arithmetic_operator(): High_arithmetic_operatorContext {
		return this.getTypedRuleContext(High_arithmetic_operatorContext, 0) as High_arithmetic_operatorContext;
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_expr;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}
