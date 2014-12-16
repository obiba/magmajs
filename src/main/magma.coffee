Magma = exports ? this 

Magma.ValueType = 
	TEXT: 
		name: "text"
		valueOf: (v) ->
			if (v == null || v == undefined)
				new Value("text", null)
			else
				new Value("text", v + "")
	INTEGER: 
		name: "integer"
	DECIMAL: 
		name: "decimal"
	BOOLEAN: 
		name: "boolean"
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
