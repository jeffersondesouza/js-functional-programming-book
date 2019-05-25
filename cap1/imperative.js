(function() {
  const columbian = {
    name: "columbian",
    basePrice: 5
  };

  const frenchRoast = {
    name: "french roast",
    basePrice: 8
  };

  const decaf = {
    name: "decaf",
    basePrice: 6
  };

  function printPrice(coffee, size) {
    let price;
    if (size === "small") {
      price = coffee.basePrice + 2;
    } else if (size == "medium") {
      price = coffee.basePrice + 4;
    } else {
      price = coffee.basePrice + 6;
    }

    const node = document.createElement("li");
    const label = coffee.name + " " + size;
    const textNode = document.createTextNode(label + " - price: R$" + price);

    node.appendChild(textNode);

    document.getElementById("products1").appendChild(node);
  }

  printPrice(columbian, "small");
  printPrice(columbian, "medium");
  printPrice(columbian, "large");
  printPrice(frenchRoast, "small");
  printPrice(frenchRoast, "medium");
  printPrice(frenchRoast, "large");
  printPrice(decaf, "small");
  printPrice(decaf, "medium");
  printPrice(decaf, "large");
})();
