/*//Part 1: Refactoring Old Code
// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Split the string into rows
let rows = csvStr.split("\n");
//console.log(rows);

// Loop through each row
for (let i = 0; i < rows.length; i++) 
    {
    let cells = rows[i].split(",");
    console.log(cells[0], cells[1], cells[2], cells[3]);
    } */

  //Part 2 : Expanding Functionality
  let csvStr2 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
  let rows2 = csvStr2.split("\n");
  let cellArray=[];
  //console.log(rows2);
    
  //console.log(rows2[0]);
  for (let i = 0; i < rows2.length; i++) 
    {
    let cell = rows2[i].split(",");
    cellArray.push(cell);
    }
    
    //console.log(cellArray);

    //Part 3:Transforming Data
    // cellArray is input for this section
    //create object for are the values whr keys are first array
 //const obj={};

 const data = cellArray;

const headers = cellArray[0]; // First row as keys
const result = [];

for (let i = 1; i < data.length; i++) {
  const row = data[i];
  const obj = {};

  for (let j = 0; j < headers.length; j++) {
    const key = headers[j].toLowerCase(); 
    obj[key] = row[j];
  }

  result.push(obj);
}

console.log(result);




/*//Part 5: Full Circle

const dataObjects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];


let csvString = 'Id,Name,Occupation,Age\\n';

for (let i = 0; i < dataObjects.length; i++) 
  {
  const obj = dataObjects[i];
  csvString += `${obj.id},${obj.name},${obj.occupation},${obj.age}'\\n`;
 }

console.log(csvString); */

