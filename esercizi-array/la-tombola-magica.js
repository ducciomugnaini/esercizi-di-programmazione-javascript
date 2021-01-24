/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/



var tombolArray = []
var ginaArrayTombola =[2,4,7,56]

for (var i = 0; i < 10; i++) {
  var numEsistente= true
  while (numEsistente) {
    newNumGenerate= Math.floor((Math.random() * 20) + 1)
    numEsistente = tombolArray.includes(newNumGenerate)
  }
  tombolArray.push(newNumGenerate)
}

console.log(''+tombolArray)

var res = 0

for (let j = 0; j < 4; j++) {
 
  for (var i = 0; i < 10; i++) {
    if (tombolArray[i]==ginaArrayTombola[j]) {
      res = res+1
      break;
   }; 
 };
}


switch(res) {
  case 2:
    text='ambo'
    break;
  case 3:
    text='terna'
    break;
  case 4:
    text='quaterna'
    break;
  case 5:
    text='cinquina'
  break;
  case 10:
    text='tombola'
  break;
}

console.log(text)

if (text) {
  console.log("Hai fatto "+ text)
}
if (res=0) {
  console.log("Mi dispiace, hai perso!")
}