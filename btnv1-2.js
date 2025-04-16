function kiemTraChanLe(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Đối số không hợp lệ, vui lòng nhập một số!";
  }

  if (num % 2 === 0) {
    return "Số chẵn";
  } else {
    return "Số lẻ";
  }
}

console.log(kiemTraChanLe(12)); // Output: "Số chẵn"
console.log(kiemTraChanLe(17)); // Output: "Số lẻ"
console.log(kiemTraChanLe("a"));
