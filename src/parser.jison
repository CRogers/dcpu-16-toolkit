%lex
%%

\n+                   return 'NEWLINE'
\s+                   /* skip whitespace */
';'.*                 /* skip comments */
':'                   return ':'
','                   return ','
'['                   return '['
']'                   return ']'

'SET'                 return 'SET'
'ADD'                 return 'ADD'
'SUB'                 return 'SUB'
'MUL'                 return 'MUL'
'DIV'                 return 'DIV'
'MOD'                 return 'MOD'
'SHL'                 return 'SHL'
'SHR'                 return 'SHR'
'AND'                 return 'AND'
'BOR'                 return 'BOR'
'XOR'                 return 'XOR'
'IFE'                 return 'IFE'
'IFN'                 return 'IFN'
'IFG'                 return 'IFG'
'IFB'                 return 'IFB'

'set'                 return 'SET'
'add'                 return 'ADD'
'sub'                 return 'SUB'
'mul'                 return 'MUL'
'div'                 return 'DIV'
'mod'                 return 'MOD'
'shl'                 return 'SHL'
'shr'                 return 'SHR'
'and'                 return 'AND'
'bor'                 return 'BOR'
'xor'                 return 'XOR'
'ife'                 return 'IFE'
'ifn'                 return 'IFN'
'ifg'                 return 'IFG'
'ifb'                 return 'IFB'

'A'                   return 'A'
'B'                   return 'B'
'C'                   return 'C'
'X'                   return 'X'
'Y'                   return 'Y'
'I'                   return 'I'
'J'                   return 'J'
'PC'                  return 'PC'
'SP'                  return 'SP'
'O'                   return 'O'

'a'                   return 'A'
'b'                   return 'B'
'b'                   return 'C'
'x'                   return 'X'
'y'                   return 'Y'
'i'                   return 'I'
'j'                   return 'J'
'pc'                  return 'PC'
'sp'                  return 'SP'
'o'                   return 'O'

'JSR'                 return 'JSR'
'-'?[1-9][0-9]*       return 'NUMBER'
'0x'[0-9]+            return 'NUMBER'
\w+                   return 'LABEL'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%start program

%% /* language grammar */

program
	: NEWLINE stmts                     { return $2; }
	| stmts                             { return $1; };

stmts
	: stmt                              { $$ = $1; }
	| stmt EOF                          { $$ = $1; }
	| stmt NEWLINE stmts                { $$ = [$1].concat($3); };

stmt
	: ':' LABEL                         { $$ = $2; }
	| basicOp reg ',' access            { $$ = $2; }
	| JSR numOrLabel                    { $$ = $2; };

basicOp
	: SET                               { $$ = $1 }
	| ADD                               { $$ = $1 }
	| SUB                               { $$ = $1 }
	| MUL                               { $$ = $1 }
	| DIV                               { $$ = $1 }
	| MOD                               { $$ = $1 }
	| SHL                               { $$ = $1 }
	| SHR                               { $$ = $1 }
	| AND                               { $$ = $1 }
	| BOR                               { $$ = $1 }
	| XOR                               { $$ = $1 }
	| IFE                               { $$ = $1 }
	| IFN                               { $$ = $1 }
	| IFG                               { $$ = $1 }
	| IFB                               { $$ = $1 };

reg
	: A                                 { $$ = $1 }
	| B                                 { $$ = $1 }
	| C                                 { $$ = $1 }
	| X                                 { $$ = $1 }
	| Y                                 { $$ = $1 }
	| I                                 { $$ = $1 }
	| J                                 { $$ = $1 }
	| PC                                { $$ = $1 }
	| SP                                { $$ = $1 }
	| O                                 { $$ = $1 };

numOrLabel
	: NUMBER                            { $$ = $1; }
	| LABEL                             { $$ = $1; };

numOrReg
	: NUMBER                            { $$ = $1; }
	| reg                               { $$ = $1; };

access
	: numOrReg                          { $$ = $1; }
	| '[' numOrReg ']'                  { $$ = $2; };
