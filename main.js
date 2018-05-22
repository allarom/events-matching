'use strict'

// Daten
var inputName = document.getElementById("input");

var input1 = [];
var output = [];



function submit() {
 // splitting after new
  var a = inputName.value.split(/\n/gm);
  input1.push(a);
  console.log(cityArray);
}
var spiel = {
  quelleNTore: [],
  quelleMTore: [],
  quelleNZeiten: [],
  quelleMZeiten: [],
  richtigeAnzahlDerTore: function(){
    var tore = [spiel.quelleNTore, spiel.quelleMTore];
    return Math.max(...tore);
  }
}


function a (input, arr){
  // Quelle N + Quelle M Tore 
  var regex = /(\d+)/g;
  spiel.quelleNTore.push(input[0].match(regex)[0]);
  spiel.quelleMTore.push(input[0].match(regex)[1]);

  // Richtige Tore
  output.push(spiel.richtigeAnzahlDerTore());

  // Zeiten Quelle N
  for (var i = 1; i <= spiel.quelleNTore; i++){
    spiel.quelleNZeiten.push(input[i]);
  }
  // Zeiten Quelle M
  for (var i = input.length-1; i >= (input.length-1)-(spiel.quelleMTore-1); i--) {
    spiel.quelleMZeiten.push(input[i]);
  }

  spiel.quelleNZeiten.sort(function (a,b) { 
    a =  a.replace(/G|H/gm, '').trim();
    b =  b.replace(/G|H/gm, '').trim();
    
      return a.localeCompare(b, undefined, {numeric: true});
    });

  spiel.quelleMZeiten.sort(function (a,b) { 
      a =  a.replace(/G|H/gm, '').trim();
      b =  b.replace(/G|H/gm, '').trim();
      
        return a.localeCompare(b, undefined, {numeric: true});
      });

}



a(input1);
console.log(spiel.quelleNZeiten);
console.log(spiel.quelleMZeiten);















// console.log("N TORE: " + spiel.quelleNTore);
// console.log("M TORE: " + spiel.quelleMTore);


// console.log(output);
// console.log("N ZEITEN: " + spiel.quelleNZeiten);
// console.log("M ZEITEN: " + spiel.quelleMZeiten);



// if(input[i].charAt(0) === "G") {
//   var g =  input[i].slice(2);
//   spiel.gastZeiten.push(g);
// } else if(input[i].charAt(0) === "H") {
//   var h =  input[i].substring(2);
//   spiel.heimZeiten.push(h);
// }
// }







// var quelleNZeiten = [ "G 32,1", "G 100,5", "H 60,4", "H 80,4", "G 51,4", "G 11,4", "H 5,4"];

// quelleNZeiten.sort(function (a,b) { 
// a =  a.replace(/G|H/gm, '').trim();
// b =  b.replace(/G|H/gm, '').trim();

//   return a.localeCompare(b, undefined, {numeric: true});
// });
