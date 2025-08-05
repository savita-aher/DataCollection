//Part 1: Refactoring Old Code
// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Split the string into rows
let rows = csvStr.split("\n");

// Loop through each row
for (let i = 0; i < rows.length; i++) 
    {
    let cells = rows[i].split(",");
    console.log(cells[0], cells[1], cells[2], cells[3]);
    }
