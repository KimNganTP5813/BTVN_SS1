function sendMail(name, companyName) {
  return `Dear ${name},
      Thank you for purchasing our product. We hope you enjoy it.
      Best regards,
      ${companyName}`;
}

console.log(sendMail("Nguyễn Văn A", "Rikkei"));
// Output:
// Dear Nguyễn Văn A,
// Thank you for purchasing our product. We hope you enjoy it
// Best regards,
// Rikkei
