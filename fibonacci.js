function fibs(n) {
	fibsArr = [];
 for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibsArr.push(0);
    } else if (i === 1) {
      fibsArr.push(1);
    } else {
      fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
    }
  }
  return fibsArr;
}

console.log(fibs(8));

/****************/

function fibsRec(n) {
	console.log("This was printed recursively");
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}

console.log(fibsRec(8));