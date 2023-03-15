// Generated from Excel.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class ExcelLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'+'", "'-'", "'*'", 
                                                   "'/'", "'='", "'!='", 
                                                   "'<'", "'>'", "'<='", 
                                                   "'>='", "'AND'", "'OR'", 
                                                   "'NOT'", "'XOR'", "'('", 
                                                   "')'", "':'", "','", 
                                                   null, null, null, null, 
                                                   null, "'SUM'", "'AVERAGE'", 
                                                   "'COUNT'", "'MIN'", "'MAX'" ];
	public static readonly symbolicNames: string[] = [ null, "ADD", "SUB", 
                                                    "MUL", "DIV", "EQ", 
                                                    "NEQ", "LT", "GT", "LTE", 
                                                    "GTE", "AND", "OR", 
                                                    "NOT", "XOR", "LPAREN", 
                                                    "RPAREN", "COLON", "COMMA", 
                                                    "WS", "VAR_NAME", "NUMERIC", 
                                                    "STRING", "BOOL", "FN_SUM", 
                                                    "FN_AVERAGE", "FN_COUNT", 
                                                    "FN_MIN", "FN_MAX" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"ADD", "SUB", "MUL", "DIV", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "AND", 
		"OR", "NOT", "XOR", "LPAREN", "RPAREN", "COLON", "COMMA", "WS", "VAR_COL", 
		"VAR_ROW", "VAR_NAME", "NUM", "DEC", "NUMERIC", "STRING", "BOOL", "FN_SUM", 
		"FN_AVERAGE", "FN_COUNT", "FN_MIN", "FN_MAX",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, ExcelLexer._ATN, ExcelLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Excel.g4"; }

	public get literalNames(): (string | null)[] { return ExcelLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return ExcelLexer.symbolicNames; }
	public get ruleNames(): string[] { return ExcelLexer.ruleNames; }

	public get serializedATN(): number[] { return ExcelLexer._serializedATN; }

	public get channelNames(): string[] { return ExcelLexer.channelNames; }

	public get modeNames(): string[] { return ExcelLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,28,200,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,
	1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,
	1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,
	18,4,18,113,8,18,11,18,12,18,114,1,18,1,18,1,19,4,19,120,8,19,11,19,12,
	19,121,1,20,1,20,5,20,126,8,20,10,20,12,20,129,9,20,1,21,1,21,1,21,1,22,
	4,22,135,8,22,11,22,12,22,136,1,23,1,23,1,23,1,24,1,24,3,24,144,8,24,1,
	25,1,25,5,25,148,8,25,10,25,12,25,151,9,25,1,25,1,25,1,26,1,26,1,26,1,26,
	1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,
	26,173,8,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
	1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,0,
	0,32,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
	14,29,15,31,16,33,17,35,18,37,19,39,0,41,0,43,20,45,0,47,0,49,21,51,22,
	53,23,55,24,57,25,59,26,61,27,63,28,1,0,5,2,0,9,10,32,32,1,0,65,90,1,0,
	49,57,1,0,48,57,1,0,34,34,204,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
	0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
	19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,
	0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,43,1,0,0,0,0,
	49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,
	0,0,0,61,1,0,0,0,0,63,1,0,0,0,1,65,1,0,0,0,3,67,1,0,0,0,5,69,1,0,0,0,7,
	71,1,0,0,0,9,73,1,0,0,0,11,75,1,0,0,0,13,78,1,0,0,0,15,80,1,0,0,0,17,82,
	1,0,0,0,19,85,1,0,0,0,21,88,1,0,0,0,23,92,1,0,0,0,25,95,1,0,0,0,27,99,1,
	0,0,0,29,103,1,0,0,0,31,105,1,0,0,0,33,107,1,0,0,0,35,109,1,0,0,0,37,112,
	1,0,0,0,39,119,1,0,0,0,41,123,1,0,0,0,43,130,1,0,0,0,45,134,1,0,0,0,47,
	138,1,0,0,0,49,141,1,0,0,0,51,145,1,0,0,0,53,172,1,0,0,0,55,174,1,0,0,0,
	57,178,1,0,0,0,59,186,1,0,0,0,61,192,1,0,0,0,63,196,1,0,0,0,65,66,5,43,
	0,0,66,2,1,0,0,0,67,68,5,45,0,0,68,4,1,0,0,0,69,70,5,42,0,0,70,6,1,0,0,
	0,71,72,5,47,0,0,72,8,1,0,0,0,73,74,5,61,0,0,74,10,1,0,0,0,75,76,5,33,0,
	0,76,77,5,61,0,0,77,12,1,0,0,0,78,79,5,60,0,0,79,14,1,0,0,0,80,81,5,62,
	0,0,81,16,1,0,0,0,82,83,5,60,0,0,83,84,5,61,0,0,84,18,1,0,0,0,85,86,5,62,
	0,0,86,87,5,61,0,0,87,20,1,0,0,0,88,89,5,65,0,0,89,90,5,78,0,0,90,91,5,
	68,0,0,91,22,1,0,0,0,92,93,5,79,0,0,93,94,5,82,0,0,94,24,1,0,0,0,95,96,
	5,78,0,0,96,97,5,79,0,0,97,98,5,84,0,0,98,26,1,0,0,0,99,100,5,88,0,0,100,
	101,5,79,0,0,101,102,5,82,0,0,102,28,1,0,0,0,103,104,5,40,0,0,104,30,1,
	0,0,0,105,106,5,41,0,0,106,32,1,0,0,0,107,108,5,58,0,0,108,34,1,0,0,0,109,
	110,5,44,0,0,110,36,1,0,0,0,111,113,7,0,0,0,112,111,1,0,0,0,113,114,1,0,
	0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,117,6,18,0,0,117,
	38,1,0,0,0,118,120,7,1,0,0,119,118,1,0,0,0,120,121,1,0,0,0,121,119,1,0,
	0,0,121,122,1,0,0,0,122,40,1,0,0,0,123,127,7,2,0,0,124,126,7,3,0,0,125,
	124,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,42,1,0,
	0,0,129,127,1,0,0,0,130,131,3,39,19,0,131,132,3,41,20,0,132,44,1,0,0,0,
	133,135,7,3,0,0,134,133,1,0,0,0,135,136,1,0,0,0,136,134,1,0,0,0,136,137,
	1,0,0,0,137,46,1,0,0,0,138,139,5,46,0,0,139,140,3,45,22,0,140,48,1,0,0,
	0,141,143,3,45,22,0,142,144,3,47,23,0,143,142,1,0,0,0,143,144,1,0,0,0,144,
	50,1,0,0,0,145,149,5,34,0,0,146,148,8,4,0,0,147,146,1,0,0,0,148,151,1,0,
	0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,152,1,0,0,0,151,149,1,0,0,0,152,
	153,5,34,0,0,153,52,1,0,0,0,154,155,5,84,0,0,155,156,5,82,0,0,156,157,5,
	85,0,0,157,173,5,69,0,0,158,159,5,70,0,0,159,160,5,65,0,0,160,161,5,76,
	0,0,161,162,5,83,0,0,162,173,5,69,0,0,163,164,5,116,0,0,164,165,5,114,0,
	0,165,166,5,117,0,0,166,173,5,101,0,0,167,168,5,102,0,0,168,169,5,97,0,
	0,169,170,5,108,0,0,170,171,5,115,0,0,171,173,5,101,0,0,172,154,1,0,0,0,
	172,158,1,0,0,0,172,163,1,0,0,0,172,167,1,0,0,0,173,54,1,0,0,0,174,175,
	5,83,0,0,175,176,5,85,0,0,176,177,5,77,0,0,177,56,1,0,0,0,178,179,5,65,
	0,0,179,180,5,86,0,0,180,181,5,69,0,0,181,182,5,82,0,0,182,183,5,65,0,0,
	183,184,5,71,0,0,184,185,5,69,0,0,185,58,1,0,0,0,186,187,5,67,0,0,187,188,
	5,79,0,0,188,189,5,85,0,0,189,190,5,78,0,0,190,191,5,84,0,0,191,60,1,0,
	0,0,192,193,5,77,0,0,193,194,5,73,0,0,194,195,5,78,0,0,195,62,1,0,0,0,196,
	197,5,77,0,0,197,198,5,65,0,0,198,199,5,88,0,0,199,64,1,0,0,0,8,0,114,121,
	127,136,143,149,172,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExcelLexer.__ATN) {
			ExcelLexer.__ATN = new ATNDeserializer().deserialize(ExcelLexer._serializedATN);
		}

		return ExcelLexer.__ATN;
	}


	static DecisionsToDFA = ExcelLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}