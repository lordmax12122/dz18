import { getStudentApi } from "./api/getstudentsapi.js";
import { createStudentApi } from "./api/createstudentapi.js"
import { makeStudentsMarkUp } from "./markup/makestudentsmarkup.js";

const students = document.querySelector("#students-table");
const addButton = document.querySelector(".add-student");

addButton.addEventListener("submit", (event) => {
  console.log(event.target)
  event.preventDefault();
  const studentName = event.target.nameForm.value;
  const studentAge = event.target.ageForm.value;
  const studentCourse = event.target.courseForm.value;
  const studentSkills = event.target.skillsForm.value;
  const studentEmail = event.target.emailForm.value;
  const studentEnrolled = event.target.enrolledForm.value;
  const student = {
    name: studentName,
    age: studentAge,
    course: studentCourse,
    skills: studentSkills,
    email: studentEmail,
    isEnrolled: studentEnrolled
  };
    createStudentApi(student);
    getStudentApi().then((data) => {
      students.innerHTML = makeStudentsMarkUp(data);
    });
});


getStudentApi().then((data) => {
  students.innerHTML = makeStudentsMarkUp(data);
});
