export const getStudentApi = () => fetch("http://localhost:3000/students")
.then((response) => response.json())