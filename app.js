var electron = require('electron');
var {
  remote,
  ipcRenedere
} = electron;

//Globalevariablen
var alife = 0;
var dead = 0;
var calls = -1;
var h = 400;
var w = 400;
var grid = create(w);
var nextGrid = create(w);
/*Button Menu
//Generation Start und Stop button*/
var g;
var g = window.requestAnimationFrame(beat);

//Choose speed
document.getElementById('1ms').addEventListener('click', function() {
  clearInterval(g);
  g = setInterval(beat, 1);
});
document.getElementById('50ms').addEventListener('click', function() {
  clearInterval(g);
  g = setInterval(beat, 50);
});
document.getElementById('200ms').addEventListener('click', function() {
  clearInterval(g);
  g = setInterval(beat, 200);
});
document.getElementById('500ms').addEventListener('click', function() {
  clearInterval(g);
  g = setInterval(beat, 500);
});
document.getElementById('1000ms').addEventListener('click', function() {
  clearInterval(g);
  g = setInterval(beat, 1000);
});

//Stop interval
document.getElementById('stop').addEventListener('click', function() {
  clearInterval(g);
});

document.getElementById('refresh').addEventListener('click', function() {
  filler();
  calls = 0;
});

//Clear canvas
document.getElementById('Clear').addEventListener('click', function() {
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      grid[y][x] === 0;
    }
  }
});

//Choose
document.getElementById('Gleider').addEventListener('click', function() {
  grid[20][20] = 1;
  grid[21][21] = 1;
  grid[19][22] = 1;
  grid[20][22] = 1;
  grid[21][22] = 1;
});

document.getElementById('Gun').addEventListener('click', function() {
  for (var y = 0; y <= 40; y++) {
    for (var x = 0; x <= 40; x++) {
      grid[y][x] = 0;
    }
  }

  grid[2][6] = 1;
  grid[2][7] = 1;
  grid[3][6] = 1;
  grid[3][7] = 1;

  grid[12][6] = 1;
  grid[12][7] = 1;
  grid[12][8] = 1;
  grid[13][5] = 1;
  grid[13][9] = 1;
  grid[14][4] = 1;
  grid[14][10] = 1;
  grid[15][4] = 1;
  grid[15][10] = 1;
  grid[16][7] = 1;
  grid[17][5] = 1;
  grid[17][9] = 1;
  grid[18][6] = 1;
  grid[18][7] = 1;
  grid[18][8] = 1;
  grid[19][7] = 1;

  grid[22][4] = 1;
  grid[22][5] = 1;
  grid[22][6] = 1;
  grid[23][4] = 1;
  grid[23][5] = 1;
  grid[23][6] = 1;
  grid[24][3] = 1;
  grid[24][7] = 1;

  grid[26][2] = 1;
  grid[26][3] = 1;
  grid[26][7] = 1;
  grid[26][8] = 1;

  grid[36][4] = 1;
  grid[36][5] = 1;
  grid[37][4] = 1;
  grid[37][5] = 1;

});

//make your own
/*document.getElementById('mky').addEventListener('click', function() {
  var c = document.getElementById("myCan");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, 400, 400);
});*/

//exit the program
document.getElementById('exit').addEventListener('click', function() {

});

/*
document.getElementById('alife').innerHTML = 'Alive: ' + alive;

document.getElementById('dead').innerHTML = 'Dead: ' + dead;
*/

filler();

beat();

function beat() {
  newGrid();
  nextGeneration();
};

// die "rows" creieren
function create(rows) {
  var array = [];
  for (var i = 0; i < rows; i++) {
    array[i] = [];
  }
  return array;
}

//die "rows" nach einer belibigen Zahl fühlen
function filler() {
  for (var y = 0; y < h; y++) { //wenn y++ zu y += a geändert wird gibt man jeden a punkt aus
    for (var x = 0; x < w; x++) {
      var r = Math.random();
      var n = (r * 4); //alle x zellen ausgeben
      var b = Math.floor(n);
      if (b === 1) {
        grid[y][x] = 1; //Lebendig
      } else {
        grid[y][x] = 0; //Tot
      }
    }
  }
}

//die Toten oder Lebendigen Zellen wieder geben im canvas
function newGrid() {
  var c = document.getElementById("myCan");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, 400, 400); //canvas aufräumen
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      if (grid[y][x] === 1) {
        //ctx.gridWidth = 5; || ctx.lineWidth = 15;
        ctx.fillStyle = '#AA0011'; //'hsl(' + 360 * Math.random() + ', 100%, 50%)'; //Farbe der Punkte
        ctx.fillRect(y, x, 1, 1);
      };
      /*else {
             ctx.fillStyle = '#888888'; //'hsl(' + 360 * Math.random() + ', 100%, 50%)'; //Farbe der Punkte
             ctx.fillRect(y, x, 1, 1);
           }*/
    }
  }
}

function nextGeneration() {
  for (var y = 1; y < h - 1; y++) { //Durchlauf
    for (var x = 1; x < w - 1; x++) {

      //Check Neighbors
      var s = 0;
      //Check North
      s += grid[y - 1][x];
      //Check North East
      s += grid[y - 1][x + 1];
      //Check East
      s += grid[y][x + 1];
      //Check South East
      s += grid[y + 1][x + 1];
      //Check South
      s += grid[y + 1][x];
      //Check South West
      s += grid[y + 1][x - 1];
      //Check West
      s += grid[y][x - 1];
      //Check North West
      s += grid[y - 1][x - 1];

      if (grid[y][x] === 0) {
        switch (s) {
          case 3: //Wenn 3 lebende Nachbarn
            nextGrid[y][x] = 1;
            break;
          default:
            nextGrid[y][x] = 0;
        }
      } else if (grid[y][x] === 1) {
        switch (s) { //die neun szenarien
          case 0:
          case 1:
            nextGrid[y][x] = 0;
            break;
          case 2:
          case 3:
            nextGrid[y][x] = 1;
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            nextGrid[y][x] = 0;
            break;
          default:
            nextGrid[y][x] = 0;
        }
      }
    }
  }
  document.getElementById('calls').innerHTML = 'Generation: ' + calls;
  calls++;
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      grid[y][x] = nextGrid[y][x];
    }
  }
}
