/*
1) Chiedi all’utente il suo nome,
2) chiedi il suo cognome,
3) chiedi il suo colore preferito
4) chiedi la sua età
5) scrivi sulla pagina nome cognome colore preferito
*/

const nome = prompt("inserire nome");

const cognome = prompt("inserisci cognome");

const colorePreferito = prompt("colore preferito?");

const età = prompt("inserire età");

console.log(nome, cognome, colorePreferito, età);

const output =`
ciao ${nome} ${cognome} <br>
il tuo colore preferito è ${colorePreferito} <br>
e la ta età è ${età}
`

console.log(output);

document.getElementById("output").innerHTML = output;
