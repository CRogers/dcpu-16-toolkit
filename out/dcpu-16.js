(function() {
	var out = (typeof process === 'undefined' || !process.versions)
	          ? this.window || {}
	          : exports;
	
	out.dcpu = dcpu = {};
/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"stmt":4,"EOF":5,"NEWLINE":6,":":7,"LABEL":8,"basicOp":9,"numOrReg":10,",":11,"JSR":12,"numOrLabel":13,"SET":14,"ADD":15,"SUB":16,"MUL":17,"DIV":18,"MOD":19,"SHL":20,"SHR":21,"AND":22,"BOR":23,"XOR":24,"IFE":25,"IFN":26,"IFG":27,"IFB":28,"NUMBER":29,"REG":30,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"NEWLINE",7:":",8:"LABEL",11:",",12:"JSR",14:"SET",15:"ADD",16:"SUB",17:"MUL",18:"DIV",19:"MOD",20:"SHL",21:"SHR",22:"AND",23:"BOR",24:"XOR",25:"IFE",26:"IFN",27:"IFG",28:"IFB",29:"NUMBER",30:"REG"},
productions_: [0,[3,1],[3,2],[3,3],[4,2],[4,4],[4,2],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[13,1],[13,1],[10,1],[10,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0]; 
break;
case 2: return $$[$0-1]; 
break;
case 3: this.$ = [$$[$0-2]].concat($$[$0-1]); 
break;
case 4: this.$ = 0; 
break;
case 5: this.$ = $$[$0-3]; 
break;
case 6: this.$ = 0; 
break;
case 7: this.$ = $$[$0] 
break;
case 8: this.$ = $$[$0] 
break;
case 9: this.$ = $$[$0] 
break;
case 10: this.$ = $$[$0] 
break;
case 11: this.$ = $$[$0] 
break;
case 12: this.$ = $$[$0] 
break;
case 13: this.$ = $$[$0] 
break;
case 14: this.$ = $$[$0] 
break;
case 15: this.$ = $$[$0] 
break;
case 16: this.$ = $$[$0] 
break;
case 17: this.$ = $$[$0] 
break;
case 18: this.$ = $$[$0] 
break;
case 19: this.$ = $$[$0] 
break;
case 20: this.$ = $$[$0] 
break;
case 21: this.$ = $$[$0] 
break;
case 22: this.$ = $$[$0]; 
break;
case 23: this.$ = $$[$0]; 
break;
case 24: this.$ = $$[$0]; 
break;
case 25: this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,7:[1,3],9:4,12:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17],26:[1,18],27:[1,19],28:[1,20]},{1:[3]},{1:[2,1],5:[1,21],6:[1,22]},{8:[1,23]},{10:24,29:[1,25],30:[1,26]},{8:[1,29],13:27,29:[1,28]},{29:[2,7],30:[2,7]},{29:[2,8],30:[2,8]},{29:[2,9],30:[2,9]},{29:[2,10],30:[2,10]},{29:[2,11],30:[2,11]},{29:[2,12],30:[2,12]},{29:[2,13],30:[2,13]},{29:[2,14],30:[2,14]},{29:[2,15],30:[2,15]},{29:[2,16],30:[2,16]},{29:[2,17],30:[2,17]},{29:[2,18],30:[2,18]},{29:[2,19],30:[2,19]},{29:[2,20],30:[2,20]},{29:[2,21],30:[2,21]},{1:[2,2]},{3:30,4:2,7:[1,3],9:4,12:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17],26:[1,18],27:[1,19],28:[1,20]},{1:[2,4],5:[2,4],6:[2,4]},{11:[1,31]},{1:[2,24],5:[2,24],6:[2,24],11:[2,24]},{1:[2,25],5:[2,25],6:[2,25],11:[2,25]},{1:[2,6],5:[2,6],6:[2,6]},{1:[2,22],5:[2,22],6:[2,22]},{1:[2,23],5:[2,23],6:[2,23]},{1:[2,3]},{10:32,29:[1,25],30:[1,26]},{1:[2,5],5:[2,5],6:[2,5]}],
defaultActions: {21:[2,2],30:[2,3]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                var errStr = "";
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this._input = this.match.slice(n) + this._input;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip comments */
break;
case 2:return 6
break;
case 3:return 6
break;
case 4:return 6
break;
case 5:return 7
break;
case 6:return 11
break;
case 7:return '['
break;
case 8:return ']'
break;
case 9:return 14
break;
case 10:return 15
break;
case 11:return 16
break;
case 12:return 17
break;
case 13:return 18
break;
case 14:return 19
break;
case 15:return 20
break;
case 16:return 21
break;
case 17:return 22
break;
case 18:return 23
break;
case 19:return 24
break;
case 20:return 25
break;
case 21:return 26
break;
case 22:return 27
break;
case 23:return 28
break;
case 24:return 12
break;
case 25:return 29
break;
case 26:return 29
break;
case 27:return 8
break;
case 28:return 5
break;
case 29:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/,/^;\s*/,/^\r\n\b/,/^\r\b/,/^\n\b/,/^:/,/^,/,/^\[/,/^\]/,/^SET\b/,/^ADD\b/,/^SUB\b/,/^MUL\b/,/^DIV\b/,/^MOD\b/,/^SHL\b/,/^SHR\b/,/^AND\b/,/^BOR\b/,/^XOR\b/,/^IFE\b/,/^IFN\b/,/^IFG\b/,/^IFB\b/,/^JSR\b/,/^-?[1-9][0-9]*/,/^0x[0-9]+/,/^\w+/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();(function() {
  var assemble;
  assemble = function(program) {};
}).call(this);
(function() {
  var loadProgram, program, r, ram, resetRegisters, runProgram;
  ram = new Array(0x10000);
  program = [];
  r = {};
  resetRegisters = function() {
    return r = {
      a: 0,
      b: 0,
      c: 0,
      x: 0,
      y: 0,
      z: 0,
      i: 0,
      j: 0,
      pc: 0,
      sp: 0xffff,
      o: 0
    };
  };
  resetRegisters();
  loadProgram = function(prog) {
    return program = prog;
  };
  runProgram = function() {};
}).call(this);
dcpu.parser = parser;
}).call(this);
