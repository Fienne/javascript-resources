function insert_Row(){
    var insert = document.querySelector("#sampleTable").insertRow(0);
    var cell1 = insert.insertCell(0)
    var cell2 = insert.insertCell(1)

    cell1.innerHTML = "New Cell1"
    cell2.innerHTML = "New Cell2"
}