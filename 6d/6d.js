function addRow() {
    const newRow = document.querySelector("table").insertRow(-1);

    const text1 = newRow.insertCell(0);
    const text2 = newRow.insertCell(1);
    const text3 = newRow.insertCell(2);

    text1.innerHTML = document.querySelector("#input_1").value;
    text2.innerHTML = document.querySelector("#input_2").value;
    text3.innerHTML = document.querySelector("#input_3").value;

    return true;
}