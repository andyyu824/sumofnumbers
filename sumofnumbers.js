const test = [1, 2, 3];

function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

console.log(sumFor(test));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

console.log(sumWhile(test));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion(test));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (cumu, accum) { return cumu + accum; });
}

console.log(sumTheSimpleWay(test));
