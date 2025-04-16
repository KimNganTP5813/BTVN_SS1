function tinhHinhTron(r) {
  const banKinh = parseFloat(r);

  if (isNaN(banKinh) || banKinh <= 0) {
    document.write("Bán kính không hợp lệ. Vui lòng nhập một số dương!");
    return;
  }

  const chuVi = 2 * Math.PI * banKinh;
  const dienTich = Math.PI * Math.pow(banKinh, 2);

  document.write(`<h3>Kết quả với bán kính = ${banKinh}</h3>`);
  document.write(`Chu vi: ${chuVi.toFixed(2)}<br>`);
  document.write(`Diện tích: ${dienTich.toFixed(2)}<br>`);
}

// Gọi hàm:
tinhHinhTron("7");
