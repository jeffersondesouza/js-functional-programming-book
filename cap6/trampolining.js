var trampoline = function(f) {
  while (f && f instanceof Function) {
    f = f.apply(f.context, f.args);
  }
  return f;
};

var thunk = function(fn) {
  return function() {
    var args = Array.prototype.slice.apply(arguments);
    return function() {
      return fn.apply(this, args);
    };
  };
};

var factorial = function(n) {
  var fact = function(x, n) {
    if (n == 0) {
      return x;
    } else {
      return thunk(fact)(n * x, n - 1);
    }
  };
  return trampoline(thunk(fact)(1, n));
};

console.log(factorial(24567));
var trampoline = function(f) {
  while (f && f instanceof Function) {
    f = f.apply(f.context, f.args);
  }
  return f;
};

var thunk = function(fn) {
  return function() {
    var args = Array.prototype.slice.apply(arguments);
    return function() {
      return fn.apply(this, args);
    };
  };
};

var factorial = function(n) {
  var fact = function(x, n) {
    if (n == 0) {
      return x;
    } else {
      return thunk(fact)(n * x, n - 1);
    }
  };
  return trampoline(thunk(fact)(1, n));
};

console.log(factorial(24567));



var Y = function(F) {
  return (function(f) {
    return f(f);
  })(function(f) {
    return F(function(x) {
      return f(f)(x);
    });
  });
};

var FactorialGen2 = function(factorial) {
  return function(n) {
    var factorial = thunk(function(x, n) {
      if (n == 0) {
        return x;
      } else {
        return factorial(n * x, n - 1);
      }
    });
    return trampoline(factorial(1, n));
  };
};

const Factorial2 = Y(FactorialGen2);
console.log(Factorial2(4));
