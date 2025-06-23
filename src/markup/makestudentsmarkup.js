export const makeStudentsMarkUp = (students) => {
    return students.map((student) => {
        return `<li>
        <p>${student.name}</p>
        <p>${student.age}</p>
        <p>${student.course}</p>
        <p>${student.skills}</p>
        <p>${student.email}</p>
        <p>${student.isEnrolled}</p>
    </li>`
    }).join("")
}

