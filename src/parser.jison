%lex
%%

\s+                   /* skip whitespace */
';'\s*                /* skip comments */
\r\n                  return 'NEWLINE'
\r                    return 'NEWLINE'
\n                    return 'NEWLINE'
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
	: stmt                              { return $1; }
	| stmt EOF                          { return $1; }
	| stmt NEWLINE program              { $$ = [$1].concat($2); };

stmt
	: ':' LABEL                         { $$ = 0; }
	| basicOp numOrReg ',' numOrReg     { $$ = $1; }
	| JSR numOrLabel                    { $$ = 0; };

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

numOrLabel
	: NUMBER                            { $$ = $1; }
	| LABEL                             { $$ = $1; };

numOrReg
	: NUMBER                            { $$ = $1; }
	| REG                               { $$ = $1; };
