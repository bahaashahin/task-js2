var entries = [];

function data() {
  var number = document.getElementById("number").value;
  var name = document.getElementById("name").value;

  
  entries.push({ name: name, number: number });

  
  var table =
    "<table class='table table-bordered'><thead class='thead-light'><tr><th> N </th><th>Name</th><th>Number</th></tr></thead><tbody>";
  for (var i = 0; i < entries.length; i++) {
    table +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      entries[i].name +
      "</td><td>" +
      entries[i].number +
      "</td></tr>";
  }
  table += "</tbody></table>";

  document.getElementById("contant").innerHTML = table;
}
