grammar Excel;

formula: EQ expr EOF;
function_name: FN_SUM | FN_AVERAGE | FN_COUNT | FN_MIN | FN_MAX;
function_call: function_name LPAREN expr (COMMA expr)* RPAREN;
boolean_operator: AND | OR | XOR;
logic_operator: EQ | NEQ | LT | GT | LTE | GTE;
low_arithmetic_operator: ADD | SUB;
high_arithmetic_operator: MUL | DIV;

prefix_operator: ADD | SUB;

var_range: VAR_NAME COLON VAR_NAME;

operand:
	VAR_NAME
	| var_range
	| function_call
	| STRING
	| BOOL
	| NUMERIC;

expr:
	LPAREN expr RPAREN
	| prefix_operator expr
	| expr boolean_operator expr
	| expr logic_operator expr
	| expr low_arithmetic_operator expr
	| expr high_arithmetic_operator expr
	| NOT expr
	| operand;

ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
EQ: '=';
NEQ: '!=';
LT: '<';
GT: '>';
LTE: '<=';
GTE: '>=';

AND: 'AND';
OR: 'OR';
NOT: 'NOT';
XOR: 'XOR';

LPAREN: '(';
RPAREN: ')';
COLON: ':';
COMMA: ',';

WS: [ \t\n]+ -> skip;

fragment VAR_COL: [A-Z]+;
fragment VAR_ROW: [1-9][0-9]*;
VAR_NAME: VAR_COL VAR_ROW;

fragment NUM: [0-9]+;
fragment DEC: '.' NUM;
NUMERIC: NUM (DEC)?;
STRING: '"' (~["])* '"';
BOOL: 'TRUE' | 'FALSE' | 'true' | 'false';

FN_SUM: 'SUM';
FN_AVERAGE: 'AVERAGE';
FN_COUNT: 'COUNT';
FN_MIN: 'MIN';
FN_MAX: 'MAX';