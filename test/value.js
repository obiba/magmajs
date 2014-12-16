// Generated by CoffeeScript 1.8.0
(function() {
  var Magma;

  Magma = require('../lib/magma.js');

  exports.ValueTest = {
    'test text type': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, "toto");
      test.equal(val.value(), "toto");
      return test.done();
    },
    'test integer type': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.INTEGER, 1);
      test.equal(val.value(), 1);
      return test.done();
    },
    'test decimal type': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.DECIMAL, 1.2);
      test.equal(val.value(), 1.2);
      return test.done();
    },
    'test null value': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, null);
      test.equal(val.value(), null);
      return test.done();
    },
    'test undefined value': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, void 0);
      test.equal(val.value(), null);
      return test.done();
    }
  };

  exports.ToStringTest = {
    'test text type': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, "toto");
      test.equal(val.toString(), "toto");
      return test.done();
    },
    'test integer type': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.INTEGER, 1);
      test.equal(val.toString(), "1");
      return test.done();
    },
    'test decimal type': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.DECIMAL, 1.2);
      test.equal(val.toString(), "1.2");
      return test.done();
    }
  };

  exports.IsNullTest = {
    'test text value is not null': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, "toto");
      test.equal(val.isNull(), false);
      return test.done();
    },
    'test null text value is null': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, null);
      test.equal(val.isNull(), true);
      return test.done();
    },
    'test undefined text value is null': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, void 0);
      test.equal(val.isNull(), true);
      return test.done();
    }
  };

  exports.IsSequenceTest = {
    'test text value does not make a sequence': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, "toto");
      test.equal(val.isSequence(), false);
      return test.done();
    },
    'test text values make a sequence': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, ["toto", "tutu"]);
      test.equal(val.isSequence(), true);
      return test.done();
    },
    'test null text value is not a sequence': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, null);
      test.equal(val.isSequence(), false);
      return test.done();
    },
    'test undefined text value is not a sequence': function(test) {
      var val;
      val = new Magma.Value(Magma.ValueType.TEXT, void 0);
      test.equal(val.isSequence(), false);
      return test.done();
    }
  };

}).call(this);