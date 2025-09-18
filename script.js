function createTable() {
  // Prompt for rows
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to integers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) {
    alert("❌ Please enter valid numbers.");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("❌ Rows and columns must be greater than 0.");
    return;
  }

  // Get table reference
  const table = document.getElementById("myTable");

  // ✅ Completely clear old table (fix for Cypress duplicate issue)
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  // Build rows and columns
  for (let i = 0; i < rn; i++) {
    let row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      let cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
