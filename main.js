
const students = [
    {name: "Jace", class: "Sophmore", grade: 90},
    {name: "Jada", class: "Senior", grade: 80},
    {name: "Jazz", class: "Senior", grade: 70},
    {name: "Jax", class: "Freshman", grade: 60}
]

function buildTable(student){
    let table = document.getElementById("table")
    for(let i = 0; i < student.length; i++){
        let row = `
                <tr>
                    <td>${student[i].name}</td>
                    <td>${student[i].class}</td>
                    <td>${student[i].grade}</td>
                </tr>
        `
        table.innerHTML += row
    }
}
buildTable(students);
