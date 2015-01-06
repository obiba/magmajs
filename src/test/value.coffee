Magma = require '../lib/magma.js'

exports.ValueTest =

	'test text type': (test) ->
    val = new Magma.Value(Magma.ValueType.TEXT, "toto")
    test.equal(val.value(), "toto")
    test.done()

	'test text type 2': (test) ->
    val = Magma.ValueType.TEXT.valueOf("toto")
    test.equal(val.value(), "toto")
    test.done()

	'test integer type': (test) ->
		val = new Magma.Value(Magma.ValueType.INTEGER, 1)
		test.equal(val.value(), 1)
		test.done()

	'test integer type 2': (test) ->
    val = Magma.ValueType.INTEGER.valueOf(1)
    test.equal(val.value(), 1)
    test.done()

	'test decimal type': (test) ->
		val = new Magma.Value(Magma.ValueType.DECIMAL, 1.2)
		test.equal(val.value(), 1.2)
		test.done()

	'test null value': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, null)
		test.equal(val.value(), null)
		test.done()

	'test undefined value': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, undefined)
		test.equal(val.value(), null)
		test.done()

exports.ToStringTest = 

	'test text type': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, "toto")
		test.equal(val.toString(), "toto")
		test.done()

	'test integer type': (test) ->
		val = new Magma.Value(Magma.ValueType.INTEGER, 1)
		test.equal(val.toString(), "1")
		test.done()

	'test decimal type': (test) ->
		val = new Magma.Value(Magma.ValueType.DECIMAL, 1.2)
		test.equal(val.toString(), "1.2")
		test.done()

exports.IsNullTest = 

	'test text value is not null': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, "toto")
		test.equal(val.isNull(), false)
		test.done()

	'test null text value is null': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, null)
		test.equal(val.isNull(), true)
		test.done()

	'test undefined text value is null': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, undefined)
		test.equal(val.isNull(), true)
		test.done()

exports.IsSequenceTest = 

	'test text value does not make a sequence': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, "toto")
		test.equal(val.isSequence(), false)
		test.done()

	'test text values make a sequence': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, ["toto", "tutu"])
		test.equal(val.isSequence(), true)
		test.done()

	'test null text value is not a sequence': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, null)
		test.equal(val.isSequence(), false)
		test.done()

	'test undefined text value is not a sequence': (test) ->
		val = new Magma.Value(Magma.ValueType.TEXT, undefined)
		test.equal(val.isSequence(), false)
		test.done()

exports.IsSingletonTest =

  'test text value type is a singleton': (test) ->
    test.equal(Magma.ValueType.TEXT, Magma.ValueType.TEXT)
    test.done()