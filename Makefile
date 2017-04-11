include n.Makefile

unit-test:
	mocha spec.js

test: verify unit-test
