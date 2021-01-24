/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var numSeconds= 12560

var ore = Math.floor(numSeconds/3600)
var min = Math.floor((numSeconds%3600)/60)
var seconds= numSeconds - ore*3600 - min*60
var sec= numSeconds%60

var time = ore + " ore " + min + " min "+ seconds+ " seconds"

console.log(ore)
console.log(min)
console.log(seconds)
console.log(time)
