Magma = exports ? this 

class TextType
  constructor: ->
    @_name = "text"

  name: ->
    @_name

  valueOf: (v) ->
    if (v == null || v == undefined)
      new Magma.Value(@_name, null)
    else
      new Magma.Value(@_name, v + "")


class IntegerType
  constructor: ->
    @_name = "integer"

  name: ->
    @_name

  valueOf: (v) ->
    if (v == null || v == undefined)
      new Magma.Value(@_name, null)
    else
      new Magma.Value(@_name, v)


class DecimalType
  constructor: ->
    @_name = "decimal"

  name: ->
    @_name

  valueOf: (v) ->
    if (v == null || v == undefined)
      new Magma.Value(@_name, null)
    else
      new Magma.Value(@_name, v)


class BooleanType
  constructor: ->
    @_name = "boolean"

  name: ->
    @_name

  valueOf: (v) ->
    if (v == null || v == undefined)
      new Magma.Value(@_name, null)
    else
      new Magma.Value(@_name, v ? true : false)


Magma.ValueType = 
	TEXT: new TextType()
	INTEGER: new IntegerType()
	DECIMAL: new DecimalType()
	BOOLEAN: new BooleanType()
	DATETIME:
		name: "datetime"
	DATE: 
		name: "date"
	POINT: 
		name: "point"
	LINESTRING: 
		name: "linestring"
	POLYGON: 
		name: "polygon"
	BINARY:
		name: "binary"


class Magma.Value
	constructor: (@_type, @_value) ->

	isNull: ->
		@_value == undefined || @_value == null

	isSequence: ->
		@_value instanceof Array

	toString: ->
		if (@isNull())
			null
		else
			@_value + ""

	type: (t) ->
		if (t == undefined)
			new Value(ValueType.TEXT, @_type.name)
		else
			t.valueOf(@_value)

	value: ->
		@_value
