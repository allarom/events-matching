'use strict'

// Daten
var inputName = document.getElementById("input");

var input1 = [];
var output = [];


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

 function submit () {
  // splitting after new line
   var splitted = inputName.value.split(/\n/gm);
   input1.push(...splitted);
   splitData(input1);
}

function splitData (input) {
      // digit
      var regex = /(\d+)/g;

      // storing the goals of N and M
      spiel.quelleNTore.push(Number(input[0].match(regex)[0]));
      spiel.quelleMTore.push(Number(input[0].match(regex)[1]));

      // storing the right goal number in output
      output.push(spiel.richtigeAnzahlDerTore());

      // Zeiten Quelle N
      for (var i = 1; i <= spiel.quelleNTore; i++){
        spiel.quelleNZeiten.push(input[i]);
      }
      // Zeiten Quelle M
      for (var i = input.length-1; i >= (input.length-1)-(spiel.quelleMTore-1); i--) {
        spiel.quelleMZeiten.push(input[i]);
      }
      // Sorting quelleNZeiten according to numbers (without letter)
      spiel.quelleNZeiten.sort(function (a,b) { 
      a =  a.replace(/G|H/gm, '').trim();
      b =  b.replace(/G|H/gm, '').trim();

        return a.localeCompare(b, undefined, {numeric: true});
      });
  
      // Sorting quelleMZeiten according to numbers (without letter)
        spiel.quelleMZeiten.sort(function (a,b) { 
        a =  a.replace(/G|H/gm, '').trim();
        b =  b.replace(/G|H/gm, '').trim();
        
          return a.localeCompare(b, undefined, {numeric: true});
        });

// Case: source N is the right goal source
    if(spiel.richtigeAnzahlDerTore() === Number(spiel.quelleNTore)) {

      function findMissing (element) {
 
       var pairArr = [];
        
        for (var j = 0; j < spiel.quelleMZeiten.length; j++){
          var M = spiel.quelleMZeiten[j];

          var compareElements = function(element, M){
            // if first letter matches
             if((element[0])=== (M[0])){

              let firstNumber =  parseFloat(element.replace(/G|H/gm, '').trim());
              let m1 =  parseFloat(M.replace(/G|H/gm, '').trim());
              // if the difference between elements is less then 9
               if((Math.abs(element-m1))<=9){
                 var pair = [element, m1]
                  pairArr.push(pair);
                  console.log(pair);
               }
             }

          }
          var condition1 = (element[0] === spiel.quelleMZeiten[j][0]);
          // element =  Number(element.replace(/G|H/gm, '').trim());
          var m =  Number(spiel.quelleMZeiten[j].replace(/G|H/gm, '').trim());
        
          
          if(!((Math.abs(element-m))<=9) && condition1) {
            console.log("elemnt "+ element)
            return element;
          }
        }
      }


      for (var i = 0; i < spiel.quelleNZeiten.length; i++){
        var n =  Number(spiel.quelleNZeiten[i].replace(/G|H/gm, '').trim());

        for (var j = 0; j < spiel.quelleMZeiten.length; j++){
          var m =  Number(spiel.quelleMZeiten[j].replace(/G|H/gm, '').trim());

          var condition = (Math.abs(n-m))<=9 && (spiel.quelleNZeiten[i][0] === spiel.quelleMZeiten[j][0]);

           if(condition){
            var avg = spiel.quelleNZeiten[i][0] + " " + ((n + m)/2).toFixed(1);
            }
          
            output.push(avg);
           }
       }
       var missing = spiel.quelleNZeiten.filter(findMissing);

      }
  }   
  

  






// function submit1(input) {
//   // splitting after new
//    var a = inputName.value.split(/\n/gm);
//    input1.push(a);

//    var sortArr = new Promise((resolve, reject) => {
//     if(input1){
//       var regex = /(\d+)/g;
//       var t = input[0].match(regex)[0];
//       spiel.quelleNTore.push(t);
//       spiel.quelleMTore.push(input[0].match(regex)[1]);
//       console.log(spiel.quelleNTore);
    
//      resolve();
//      } else {
//       reject();
//      }
//    });
  
//    console.log(input1);
//    b(input1);
//  }
 

// function b (input, arr){
//   // Quelle N + Quelle M Tore 
//   var regex = /(\d+)/g;
//   console.log("Hier: " + input);
//   var t = input[0].match(regex)[0];
//   spiel.quelleNTore.push(t);
//   spiel.quelleMTore.push(input[0].match(regex)[1]);

//   // Richtige Tore
//   output.push(spiel.richtigeAnzahlDerTore());

//   // Zeiten Quelle N
//   for (var i = 1; i <= spiel.quelleNTore; i++){
//     spiel.quelleNZeiten.push(input[i]);
//   }
//   // Zeiten Quelle M
//   for (var i = input.length-1; i >= (input.length-1)-(spiel.quelleMTore-1); i--) {
//     spiel.quelleMZeiten.push(input[i]);
//   }

//   spiel.quelleNZeiten.sort(function (a,b) { 
//     a =  a.replace(/G|H/gm, '').trim();
//     b =  b.replace(/G|H/gm, '').trim();
    
//       return a.localeCompare(b, undefined, {numeric: true});
//     });

//   spiel.quelleMZeiten.sort(function (a,b) { 
//       a =  a.replace(/G|H/gm, '').trim();
//       b =  b.replace(/G|H/gm, '').trim();
      
//         return a.localeCompare(b, undefined, {numeric: true});
//       });

// }














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







// var quelleNZeiten = ["3 2", "G 32,1", "G 100,5", "H 60,4", "H 80,4", "G 51,4", "G 11,4", "H 5,4"];

// quelleNZeiten.sort(function (a,b) { 
// a =  a.replace(/G|H/gm, '').trim();
// b =  b.replace(/G|H/gm, '').trim();

//   return a.localeCompare(b, undefined, {numeric: true});
// });
