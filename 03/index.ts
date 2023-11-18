function makeMultiplicationTable(array: number[]) {
  const arrayMultiplication: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arrayMultiplication.length; j++) {
      console.log(
        `${array[i]} X ${arrayMultiplication[j]} = ${
          arrayMultiplication[j] * array[i]
        }`
      );
    }
    console.log("------------");
  }
}

makeMultiplicationTable([1, 3]);
