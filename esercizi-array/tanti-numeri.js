/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

console.log('tanti numeri')

var a = [3, 5, 10, 2,5 ]
var sum =0
var media =sum/5
var countless=0
var countmax= 0

for (var i = 0; i < a.length; i++) {
   sum = sum+a[i];
}

var media =sum/5

for (var i = 0; i < a.length; i++) {
  if(a[i]< media) { 
    countless=countless+1
  }
  if(a[i]> media) { 
    countmax=countmax+1
  }
}

console.log('la media è '+ media)
console.log('num minori sono ' + countless)
console.log('num maggiori sono ' +countmax)

