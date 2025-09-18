function createTable() {
  // Prompt for number of rows
  const rn = prompt("Input number of rows");
  const rowCount = parseInt(rn);

  // Prompt for number of columns
  const cn = prompt("Input number of columns");
  const colCount = parseInt(cn);

  // Validate inputs
  if (isNaN(rowCount) || isNaN(colCount)) return;
  if (rowCount <= 0 || colCount <= 0) {
    alert("Number of rows and columns must be positive integers.");
    return;
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing content
  table.innerHTML = "";

  // Create rows and columns
  for (let i = 0; i < rowCount; i++) {
    const row = table.insertRow();
    for (let j = 0; j < colCount; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
