out/parser.js: src/parser.jison
	jison -m js -o out/parser.js $<

out/%.js: src/%.coffee
	coffee -c -o out/ $<

tests/%.js: src/tests/%.coffee out/web-dcpu-16.js
	coffee -c -o tests/ $<

SRC = $(wildcard src/*.coffee)
JS  = $(subst src/,out/,$(SRC:.coffee=.js))

TESTSRC = $(wildcard src/tests/*.coffee)
TESTJS  = $(subst src/,,$(TESTSRC:.coffee=.js))

all: out/parser.js $(JS) $(TESTJS)
	cat out/start.js out/parser.js $(JS) out/end.js >out/dcpu-16.js
	rm $(JS)

test: $(TESTJS)	
	#RES  = cat $@ sed -n '/<</,/>>/p' | sed 's/^[ \t]*//'
