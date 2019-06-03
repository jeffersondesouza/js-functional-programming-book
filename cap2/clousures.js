const obj1 = { value: 1 };
const obj2 = { value: 2 };
const obj3 = { value: 3 };

const acumulator = () => {
  const values = [];
  return obj => {
    if (obj) {
      values.push(obj.value);
    }
    return values;
  };
};

const acumulatorCount = acumulator();

console.log(acumulatorCount(obj1));
console.log(acumulatorCount(obj2));
console.log(acumulatorCount(obj3));
