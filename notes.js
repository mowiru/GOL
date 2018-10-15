//Klassen Beispiel 1: (Funktioniert im Browser)
var Person1 = function(Name, Alter) {
  var id = Math.random(); // Private

  this.name = Name; //Public
  this.alter = Alter; //Public

  this.print = function() { //Public
    console.log(this.name + ': ' + this.alter);
  }.bind(this);

  var age = function() {
    this.alter += 1;
  }.bind(this);
};



//Klassen Beispiel 2: !!!! C# !!!!
/*
class Person2 {

  private double id = Math.random();

  public string name, alter;

  Person2(Name, Alter) {
    name = Name;
    alter = Alter;
  }

  public int print() {
    console.log(name + ': ' + alter);
    return 5;
  }

  private void age() {
    alter += 1;
  }

}*/


class Person2 {
//  var id = Math.random();
}


//Verwendungs Beispiel
var Mo1 = new Person1("MoRu", 25);
var Mo2 = new Person2("MpRuu", 25);

Mo1.print();
Mo2.print();

Mo1.name = "MooRu";
Mo2.age -= 1;

Mo1.print();
Mo2.print();





// Tabelle
/*
 __   __  ___   __    _  _______
|  | |  ||   | |  |  | ||       |
|  |_|  ||   | |   |_| ||_     _|
|       ||   | |       |  |   |
|       ||   | |  _    |  |   |
|   _   ||   | | | |   |  |   |
|__| |__||___| |_|  |__|  |___|

*/
var Tabelle = [
  [{lives:false}, {lives:false}, {lives:false}, {lives:false}],
  [{lives:false}, {lives:false}, {lives:false}, {lives:false}],
  [{lives:false}, {lives:false}, {lives:false}, {lives:false}],
  [{lives:false}, {lives:false}, {lives:false}, {lives:false}]
];


Tabelle[1][2].lives = false;






function draw() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var myTable = createCompleteTable(100,100);

  ctx.fillStyle="#007FFF";

  for (var y = 0; y < myTable.length; y++) {
    for (var x = 0; x < myTable[y].length; x++) {
      var cell = myTable[y][x];
      ctx.fillRect(x * cell.w, y * cell.h, cell.w - 1, cell.h - 1);
    }
  }
}
// Width
var w = 400;
// Height
var h = 400;
// Start
var p = 0;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function grid() {
  for (var x = 0; x <= w; x += 40) { //change this number to manipulate grid
    ctx.moveTo(x, p);                //must be smaller than w & h
    ctx.lineTo(x, h);
  }

  for (var x = 0; x <= h; x += 40) { //change this number to manipulate grid
    ctx.moveTo(p, x);                //must be smaller than w & h
    ctx.lineTo(w, x);
  }

  ctx.strokeStyle = "black";//grid color
  ctx.stroke();
}

grid();



function createCompleteTable (H, B) {
  var table = [];
  for (var y = 0; y < H; y++) {
    var row = [];
    for(var x = 0; x < B; x++) {
      row.push({lives:true,w:8,h:8});
    }
    table.push(row);
  }
  return table;
}


function createCell() {
  return {
    lives: true,
    w: 8,
    h: 8
  }
}

function createRow(Breite) {
  var row = [];
  for (var x = 0; x < Breite; x++) {
    var Cell = createCell();
    row.push(Cell);
  }
  return row;
}

function createTable(Höhe, Breite) {
  var table = [];
  for (var y = 0; y < Höhe; y++) {
    var Row = createRow(Breite);
    table.push(Row);
  }
  return table;
}






const notes = require('notes.js');


var MyRow1 = notes.createRow(3991); //399
var MyRow1 = notes.createRow(3992); //399
var MyRow1 = notes.createRow(3993); //399

var MyRow2 = notes.createRow(6000); //6000



































// .
