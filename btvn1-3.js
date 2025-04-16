function createUser(name, age = 18, role = "user") {
  return {
    name: name,
    age: age,
    role: role,
  };
}

console.log(createUser("Alice"));
// Output với giá trị mặt định: { name: 'Alice', age: 18, role: 'user' }

console.log(createUser("Bob", 25, "admin"));
// Output: { name: 'Bob', age: 25, role: 'admin' }
