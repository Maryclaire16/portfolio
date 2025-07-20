function showEmployees() {

    let table =document.getElementById('employee');

    employees.forEach(element => {
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = element.emp_id;
        cell2.innerHTML = element.name;
        cell3.innerHTML = element.position;

    });
}
