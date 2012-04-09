ram = new Array(0x10000)
program = []

# registers
r = {}

resetRegisters = ->
	r = {a: 0, b: 0, c: 0, x: 0, y: 0, z: 0, i: 0, j: 0, pc: 0, sp: 0xffff, o: 0}

resetRegisters()


loadProgram = (prog) ->
	program = prog

runProgram = ->
	
