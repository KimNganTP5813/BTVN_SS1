import { useState } from "react";


export default function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, 
     name: "Nguyễn Văn A", 
     age: 20, 
     email: "a@example.com" 
    },
    { id: 2,
     name: "Trần Thị B",
     age: 22,
     email: "b@example.com" 
    },
    { id: 3,
     name: "Lê Văn C", 
     age: 19, 
     email: "c@example.com"
    },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

//Hàm tạo mới học viên
  const handleAddOrUpdateStudent = () => {
    if (newStudent.name && newStudent.age && newStudent.email) {
      if (editingId === null) {
        const newId = students.length ? students[students.length - 1].id + 1 : 1;
        setStudents([
          ...students,
          { id: newId, ...newStudent, age: parseInt(newStudent.age) },
        ]);
      } else {
        const updatedStudents = students.map((student) =>
          student.id === editingId
            ? { ...student, ...newStudent, age: parseInt(newStudent.age) }
            : student
        );
        setStudents(updatedStudents);
        setEditingId(null);
      }
      setNewStudent({ name: "", age: "", email: "" });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

//Hàm xóa học viên
  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    if (editingId === id) {
      setEditingId(null);
      setNewStudent({ name: "", age: "", email: "" });
    }
  };

//Hàm cập nhật lại id và thông tin học viên
  const handleEditStudent = (student) => {
    setEditingId(student.id);
    setNewStudent({ name: student.name, age: student.age, email: student.email });
  };

//Hàm tìm kiếm theo tên học viên
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Danh sách học viên sau khi lọc
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Danh sách học viên</h2>

      <input
        type="text"
        placeholder="Tìm kiếm học viên theo tên..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px' }}
      />

      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} tuổi - {student.email}
            <button onClick={() => handleEditStudent(student)} style={{ marginLeft: '10px' }}>
              Sửa
            </button>
            <button onClick={() => handleDeleteStudent(student.id)} style={{ marginLeft: '10px' }}>
              Xoá
            </button>
          </li>
        ))}
        {filteredStudents.length === 0 && <li>Không tìm thấy học viên nào!</li>}
      </ul>

      <h3>{editingId ? "Cập nhật học viên" : "Thêm học viên mới"}</h3>
      <input
        type="text"
        name="name"
        placeholder="Tên"
        value={newStudent.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Tuổi"
        value={newStudent.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newStudent.email}
        onChange={handleChange}
      />
      <button onClick={handleAddOrUpdateStudent}>
        {editingId ? "Cập nhật" : "Thêm học viên"}
      </button>
    </div>
  );
}
