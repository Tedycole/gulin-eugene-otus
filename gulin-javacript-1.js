let sum = function (a) {

  let newSum = a;

     let inner = function (b) {
      if (b != undefined) {
          newSum += b;
          console.log(newSum);

          return inner;
} else {
  console.log(inner);
  return newSum
};
};
return inner
};
