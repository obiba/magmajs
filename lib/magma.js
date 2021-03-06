// Generated by CoffeeScript 1.8.0
(function() {
  var BooleanType, DecimalType, IntegerType, Magma, TextType;

  Magma = typeof exports !== "undefined" && exports !== null ? exports : this;

  TextType = (function() {
    function TextType() {
      this._name = "text";
    }

    TextType.prototype.name = function() {
      return this._name;
    };

    TextType.prototype.valueOf = function(v) {
      if (v === null || v === void 0) {
        return new Magma.Value(this._name, null);
      } else {
        return new Magma.Value(this._name, v + "");
      }
    };

    return TextType;

  })();

  IntegerType = (function() {
    function IntegerType() {
      this._name = "integer";
    }

    IntegerType.prototype.name = function() {
      return this._name;
    };

    IntegerType.prototype.valueOf = function(v) {
      if (v === null || v === void 0) {
        return new Magma.Value(this._name, null);
      } else {
        return new Magma.Value(this._name, v);
      }
    };

    return IntegerType;

  })();

  DecimalType = (function() {
    function DecimalType() {
      this._name = "decimal";
    }

    DecimalType.prototype.name = function() {
      return this._name;
    };

    DecimalType.prototype.valueOf = function(v) {
      if (v === null || v === void 0) {
        return new Magma.Value(this._name, null);
      } else {
        return new Magma.Value(this._name, v);
      }
    };

    return DecimalType;

  })();

  BooleanType = (function() {
    function BooleanType() {
      this._name = "boolean";
    }

    BooleanType.prototype.name = function() {
      return this._name;
    };

    BooleanType.prototype.valueOf = function(v) {
      if (v === null || v === void 0) {
        return new Magma.Value(this._name, null);
      } else {
        return new Magma.Value(this._name, v != null ? v : {
          "true": false
        });
      }
    };

    return BooleanType;

  })();

  Magma.ValueType = {
    TEXT: new TextType(),
    INTEGER: new IntegerType(),
    DECIMAL: new DecimalType(),
    BOOLEAN: new BooleanType(),
    DATETIME: {
      name: "datetime"
    },
    DATE: {
      name: "date"
    },
    POINT: {
      name: "point"
    },
    LINESTRING: {
      name: "linestring"
    },
    POLYGON: {
      name: "polygon"
    },
    BINARY: {
      name: "binary"
    }
  };

  Magma.Value = (function() {
    function Value(_type, _value) {
      this._type = _type;
      this._value = _value;
    }

    Value.prototype.isNull = function() {
      return this._value === void 0 || this._value === null;
    };

    Value.prototype.isSequence = function() {
      return this._value instanceof Array;
    };

    Value.prototype.toString = function() {
      if (this.isNull()) {
        return null;
      } else {
        return this._value + "";
      }
    };

    Value.prototype.type = function(t) {
      if (t === void 0) {
        return new Value(ValueType.TEXT, this._type.name);
      } else {
        return t.valueOf(this._value);
      }
    };

    Value.prototype.value = function() {
      return this._value;
    };

    return Value;

  })();

}).call(this);
