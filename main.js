
const students = [
    {name: "Jace", grade: 90},
    {name: "Jada", grade: 80},
    {name: "Jazz", grade: 70},
    {name: "Jax", grade: 60}
]

function buildTable(student){
    let table = document.getElementById("table")
    for(let i = 0; i < student.length; i++){
        let row = `
                <tr>
                    <td>${student[i].name}</td>
                    <td>${student[i].grade}</td>
                </tr>
        `
        table.innerHTML += row
    }
}
buildTable(students);


function filter(e){
    e.nextElementSibling.value = e.value;
    let filteredStudents = students.filter(s=>s.grade>=e.value);
    table.clear();
    buildTable(filteredStudents);

}