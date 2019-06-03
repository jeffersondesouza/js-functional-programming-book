(function() {

  /*  */
  function printPrice(price, label) {
    const liNode = document.createElement("li");
    const textNode = document.createTextNode(label + " - price: R$" + price);

    liNode.appendChild(textNode);

    document.getElementById("products2").appendChild(liNode);
  }

  const columbian = function() {
    this.name = "columbian";
    this.basePrice = 5;
  };

  const frenchRoast = function() {
    this.name = "french roast";
    this.basePrice = 8;
  };

  const decaf = function() {
    this.name = "decaf";
    this.basePrice = 6;
  };

  const small = {
    getPrice: function() {
      return this.basePrice + 2;
    },
    getLabel: function() {
      return this.name + " small";
    }
  };

  const medium = {
    getPrice: function() {
      return this.basePrice + 4;
    },
    getLabel: function() {
      return this.name + " medium";
    }
  };

  const large = {
    getPrice: function() {
      return this.basePrice + 6;
    },
    getLabel: function() {
      return this.name + " large";
    }
  };

  var coffeeTypes = [columbian, frenchRoast, decaf];
  var coffeeSizes = [small, medium, large];

  var extraLarge = {
    getPrice: function() {
      return this.basePrice + 10;
    },
    getLabel: function() {
      return this.name + " extra large";
    }
  };

  coffeeSizes.push(extraLarge);

  /* awsome!!! */
  const plusMixin = function(objFn, mixin) {
    var newObj = objFn;
    newObj.prototype = Object.create({});

    for (var prop in mixin) {
      if (mixin.hasOwnProperty(prop)) {
        newObj.prototype[prop] = mixin[prop];
      }
    }

    return new newObj();
  };

  const setSizesPropertiesToCoffee = sizes => coffee =>
    coffeeSizes.map(size => plusMixin(coffee, size));

  const flatCoffeesSizes = (prev, current) => [...prev, ...current];

  const prinCoffeeEl = coffee =>
    printPrice(coffee.getPrice(), coffee.getLabel());

  coffeeTypes
    .map(setSizesPropertiesToCoffee(coffeeSizes))
    .reduce(flatCoffeesSizes, [])
    .forEach(prinCoffeeEl);

  /*  */
})();
