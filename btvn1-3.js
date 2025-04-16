function createUser(name, age = 18, role = "user") {
  return {
    name: name,
    age: age,
    role: role,
  };
}

console.log(createUser("Nguyễn B"));
// Output với giá trị mặt định: { name: 'Nguyễn B', age: 18, role: 'user' }

console.log(createUser("Nguyễn Văn A", 20, "admin"));
// Output: { name: 'Bob', age: 25, role: 'admin' }
