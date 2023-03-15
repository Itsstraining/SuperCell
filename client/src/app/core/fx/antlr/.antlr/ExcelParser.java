// Generated from /Users/manhvipro/Repos/ITSS/Web23S/Exelsis/projects/excelsis/src/lib/fx/antlr/Excel.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ExcelParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ADD=1, SUB=2, MUL=3, DIV=4, EQ=5, NEQ=6, LT=7, GT=8, LTE=9, GTE=10, AND=11, 
		OR=12, NOT=13, XOR=14, LPAREN=15, RPAREN=16, COLON=17, COMMA=18, WS=19, 
		VAR_NAME=20, NUMERIC=21, STRING=22, BOOL=23, FN_SUM=24, FN_AVERAGE=25, 
		FN_COUNT=26, FN_MIN=27, FN_MAX=28;
	public static final int
		RULE_formula = 0, RULE_function_name = 1, RULE_function_call = 2, RULE_boolean_operator = 3, 
		RULE_logic_operator = 4, RULE_low_arithmetic_operator = 5, RULE_high_arithmetic_operator = 6, 
		RULE_prefix_operator = 7, RULE_var_range = 8, RULE_operand = 9, RULE_expr = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"formula", "function_name", "function_call", "boolean_operator", "logic_operator", 
			"low_arithmetic_operator", "high_arithmetic_operator", "prefix_operator", 
			"var_range", "operand", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'+'", "'-'", "'*'", "'/'", "'='", "'!='", "'<'", "'>'", "'<='", 
			"'>='", "'AND'", "'OR'", "'NOT'", "'XOR'", "'('", "')'", "':'", "','", 
			null, null, null, null, null, "'SUM'", "'AVERAGE'", "'COUNT'", "'MIN'", 
			"'MAX'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ADD", "SUB", "MUL", "DIV", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", 
			"AND", "OR", "NOT", "XOR", "LPAREN", "RPAREN", "COLON", "COMMA", "WS", 
			"VAR_NAME", "NUMERIC", "STRING", "BOOL", "FN_SUM", "FN_AVERAGE", "FN_COUNT", 
			"FN_MIN", "FN_MAX"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Excel.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ExcelParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class FormulaContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(ExcelParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(ExcelParser.EOF, 0); }
		public FormulaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formula; }
	}

	public final FormulaContext formula() throws RecognitionException {
		FormulaContext _localctx = new FormulaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_formula);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(EQ);
			setState(23);
			expr(0);
			setState(24);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_nameContext extends ParserRuleContext {
		public TerminalNode FN_SUM() { return getToken(ExcelParser.FN_SUM, 0); }
		public TerminalNode FN_AVERAGE() { return getToken(ExcelParser.FN_AVERAGE, 0); }
		public TerminalNode FN_COUNT() { return getToken(ExcelParser.FN_COUNT, 0); }
		public TerminalNode FN_MIN() { return getToken(ExcelParser.FN_MIN, 0); }
		public TerminalNode FN_MAX() { return getToken(ExcelParser.FN_MAX, 0); }
		public Function_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_name; }
	}

	public final Function_nameContext function_name() throws RecognitionException {
		Function_nameContext _localctx = new Function_nameContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_function_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FN_SUM) | (1L << FN_AVERAGE) | (1L << FN_COUNT) | (1L << FN_MIN) | (1L << FN_MAX))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_callContext extends ParserRuleContext {
		public Function_nameContext function_name() {
			return getRuleContext(Function_nameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ExcelParser.LPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(ExcelParser.RPAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ExcelParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ExcelParser.COMMA, i);
		}
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_function_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			function_name();
			setState(29);
			match(LPAREN);
			setState(30);
			expr(0);
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(31);
				match(COMMA);
				setState(32);
				expr(0);
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(38);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Boolean_operatorContext extends ParserRuleContext {
		public TerminalNode AND() { return getToken(ExcelParser.AND, 0); }
		public TerminalNode OR() { return getToken(ExcelParser.OR, 0); }
		public TerminalNode XOR() { return getToken(ExcelParser.XOR, 0); }
		public Boolean_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolean_operator; }
	}

	public final Boolean_operatorContext boolean_operator() throws RecognitionException {
		Boolean_operatorContext _localctx = new Boolean_operatorContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_boolean_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AND) | (1L << OR) | (1L << XOR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logic_operatorContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(ExcelParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(ExcelParser.NEQ, 0); }
		public TerminalNode LT() { return getToken(ExcelParser.LT, 0); }
		public TerminalNode GT() { return getToken(ExcelParser.GT, 0); }
		public TerminalNode LTE() { return getToken(ExcelParser.LTE, 0); }
		public TerminalNode GTE() { return getToken(ExcelParser.GTE, 0); }
		public Logic_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logic_operator; }
	}

	public final Logic_operatorContext logic_operator() throws RecognitionException {
		Logic_operatorContext _localctx = new Logic_operatorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_logic_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << NEQ) | (1L << LT) | (1L << GT) | (1L << LTE) | (1L << GTE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Low_arithmetic_operatorContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(ExcelParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ExcelParser.SUB, 0); }
		public Low_arithmetic_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_low_arithmetic_operator; }
	}

	public final Low_arithmetic_operatorContext low_arithmetic_operator() throws RecognitionException {
		Low_arithmetic_operatorContext _localctx = new Low_arithmetic_operatorContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_low_arithmetic_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			_la = _input.LA(1);
			if ( !(_la==ADD || _la==SUB) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class High_arithmetic_operatorContext extends ParserRuleContext {
		public TerminalNode MUL() { return getToken(ExcelParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ExcelParser.DIV, 0); }
		public High_arithmetic_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_high_arithmetic_operator; }
	}

	public final High_arithmetic_operatorContext high_arithmetic_operator() throws RecognitionException {
		High_arithmetic_operatorContext _localctx = new High_arithmetic_operatorContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_high_arithmetic_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			_la = _input.LA(1);
			if ( !(_la==MUL || _la==DIV) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Prefix_operatorContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(ExcelParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ExcelParser.SUB, 0); }
		public Prefix_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefix_operator; }
	}

	public final Prefix_operatorContext prefix_operator() throws RecognitionException {
		Prefix_operatorContext _localctx = new Prefix_operatorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_prefix_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			_la = _input.LA(1);
			if ( !(_la==ADD || _la==SUB) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_rangeContext extends ParserRuleContext {
		public List<TerminalNode> VAR_NAME() { return getTokens(ExcelParser.VAR_NAME); }
		public TerminalNode VAR_NAME(int i) {
			return getToken(ExcelParser.VAR_NAME, i);
		}
		public TerminalNode COLON() { return getToken(ExcelParser.COLON, 0); }
		public Var_rangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_range; }
	}

	public final Var_rangeContext var_range() throws RecognitionException {
		Var_rangeContext _localctx = new Var_rangeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_var_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(VAR_NAME);
			setState(51);
			match(COLON);
			setState(52);
			match(VAR_NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperandContext extends ParserRuleContext {
		public TerminalNode VAR_NAME() { return getToken(ExcelParser.VAR_NAME, 0); }
		public Var_rangeContext var_range() {
			return getRuleContext(Var_rangeContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public TerminalNode STRING() { return getToken(ExcelParser.STRING, 0); }
		public TerminalNode BOOL() { return getToken(ExcelParser.BOOL, 0); }
		public TerminalNode NUMERIC() { return getToken(ExcelParser.NUMERIC, 0); }
		public OperandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operand; }
	}

	public final OperandContext operand() throws RecognitionException {
		OperandContext _localctx = new OperandContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_operand);
		try {
			setState(60);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				match(VAR_NAME);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				var_range();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(56);
				function_call();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(57);
				match(STRING);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(58);
				match(BOOL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(59);
				match(NUMERIC);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ExcelParser.LPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(ExcelParser.RPAREN, 0); }
		public Prefix_operatorContext prefix_operator() {
			return getRuleContext(Prefix_operatorContext.class,0);
		}
		public TerminalNode NOT() { return getToken(ExcelParser.NOT, 0); }
		public OperandContext operand() {
			return getRuleContext(OperandContext.class,0);
		}
		public Boolean_operatorContext boolean_operator() {
			return getRuleContext(Boolean_operatorContext.class,0);
		}
		public Logic_operatorContext logic_operator() {
			return getRuleContext(Logic_operatorContext.class,0);
		}
		public Low_arithmetic_operatorContext low_arithmetic_operator() {
			return getRuleContext(Low_arithmetic_operatorContext.class,0);
		}
		public High_arithmetic_operatorContext high_arithmetic_operator() {
			return getRuleContext(High_arithmetic_operatorContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				{
				setState(63);
				match(LPAREN);
				setState(64);
				expr(0);
				setState(65);
				match(RPAREN);
				}
				break;
			case ADD:
			case SUB:
				{
				setState(67);
				prefix_operator();
				setState(68);
				expr(7);
				}
				break;
			case NOT:
				{
				setState(70);
				match(NOT);
				setState(71);
				expr(2);
				}
				break;
			case VAR_NAME:
			case NUMERIC:
			case STRING:
			case BOOL:
			case FN_SUM:
			case FN_AVERAGE:
			case FN_COUNT:
			case FN_MIN:
			case FN_MAX:
				{
				setState(72);
				operand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(93);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(91);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(75);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(76);
						boolean_operator();
						setState(77);
						expr(7);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(79);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(80);
						logic_operator();
						setState(81);
						expr(6);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(83);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(84);
						low_arithmetic_operator();
						setState(85);
						expr(5);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(87);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(88);
						high_arithmetic_operator();
						setState(89);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(95);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 10:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 5);
		case 2:
			return precpred(_ctx, 4);
		case 3:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\36c\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\7\4$\n\4\f\4\16\4\'"+
		"\13\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\n"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\5\13?\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\5\fL\n\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\7\f^\n\f\f\f\16\fa\13\f\3\f\2\3\26\r\2\4\6\b\n\f"+
		"\16\20\22\24\26\2\7\3\2\32\36\4\2\r\16\20\20\3\2\7\f\3\2\3\4\3\2\5\6\2"+
		"d\2\30\3\2\2\2\4\34\3\2\2\2\6\36\3\2\2\2\b*\3\2\2\2\n,\3\2\2\2\f.\3\2"+
		"\2\2\16\60\3\2\2\2\20\62\3\2\2\2\22\64\3\2\2\2\24>\3\2\2\2\26K\3\2\2\2"+
		"\30\31\7\7\2\2\31\32\5\26\f\2\32\33\7\2\2\3\33\3\3\2\2\2\34\35\t\2\2\2"+
		"\35\5\3\2\2\2\36\37\5\4\3\2\37 \7\21\2\2 %\5\26\f\2!\"\7\24\2\2\"$\5\26"+
		"\f\2#!\3\2\2\2$\'\3\2\2\2%#\3\2\2\2%&\3\2\2\2&(\3\2\2\2\'%\3\2\2\2()\7"+
		"\22\2\2)\7\3\2\2\2*+\t\3\2\2+\t\3\2\2\2,-\t\4\2\2-\13\3\2\2\2./\t\5\2"+
		"\2/\r\3\2\2\2\60\61\t\6\2\2\61\17\3\2\2\2\62\63\t\5\2\2\63\21\3\2\2\2"+
		"\64\65\7\26\2\2\65\66\7\23\2\2\66\67\7\26\2\2\67\23\3\2\2\28?\7\26\2\2"+
		"9?\5\22\n\2:?\5\6\4\2;?\7\30\2\2<?\7\31\2\2=?\7\27\2\2>8\3\2\2\2>9\3\2"+
		"\2\2>:\3\2\2\2>;\3\2\2\2><\3\2\2\2>=\3\2\2\2?\25\3\2\2\2@A\b\f\1\2AB\7"+
		"\21\2\2BC\5\26\f\2CD\7\22\2\2DL\3\2\2\2EF\5\20\t\2FG\5\26\f\tGL\3\2\2"+
		"\2HI\7\17\2\2IL\5\26\f\4JL\5\24\13\2K@\3\2\2\2KE\3\2\2\2KH\3\2\2\2KJ\3"+
		"\2\2\2L_\3\2\2\2MN\f\b\2\2NO\5\b\5\2OP\5\26\f\tP^\3\2\2\2QR\f\7\2\2RS"+
		"\5\n\6\2ST\5\26\f\bT^\3\2\2\2UV\f\6\2\2VW\5\f\7\2WX\5\26\f\7X^\3\2\2\2"+
		"YZ\f\5\2\2Z[\5\16\b\2[\\\5\26\f\6\\^\3\2\2\2]M\3\2\2\2]Q\3\2\2\2]U\3\2"+
		"\2\2]Y\3\2\2\2^a\3\2\2\2_]\3\2\2\2_`\3\2\2\2`\27\3\2\2\2a_\3\2\2\2\7%"+
		">K]_";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}