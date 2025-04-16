const processNumbers = (...numbers) => {
  const evenNumbers = [];
  const oddNumbers = [];
  let sumEven = 0;
  let sumOdd = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
      sumEven += num;
    } else {
      oddNumbers.push(num);
      sumOdd += num;
    }
  }

  console.log(`Số chẵn: ${evenNumbers}`);
  console.log(`Số lẻ: ${oddNumbers}`);
  console.log(`Tổng số chẵn: ${sumEven}`);
  console.log(`Tổng số lẻ: ${sumOdd}`);

  return { evenNumbers, oddNumbers, sumEven, sumOdd };
};

// Gọi hàm
processNumbers(1, 2, 3, 4, 5, 6);
// Output:
// Số chẵn: 2, 4, 6
// Số lẻ: 1, 3, 5
// Tổng số chẵn: 12
// Tổng số lẻ: 9
