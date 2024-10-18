/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A")
let sum=(10+20)
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B")
const random =Math.floor(Math.random()*21)
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C")
let me = {
  name: "Francesco",
  surname: "Malafronte",
  age:19,
}

console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D")
delete me.age
console.log(me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E")
 me.skills= ["html","css","javaScript"]
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F")
me.skills.push("PHP")
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G")
me.skills.pop();
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1")
function dice(){
   return  Math.floor(Math.random()*6)+1
}
console.log(dice())
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2")
function whoIsBigger(n1,n2){
  if(n1>n2){
    return n1;
  }else{
    return n2;
  }
}

console.log(whoIsBigger(25,30))
console.log(whoIsBigger(25,20))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3")
function splitMe(stringa){
  return stringa
  .split(" ")
  .map((carattere) => carattere.charAt(0).toUpperCase()+carattere.slice(1))

}
console.log(splitMe("I love coding"))


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("ESERCIZIO 4")
function deleteOne(stringa,booleano){
  if(booleano === 5){
    return stringa.slice(1)
  }else{
    return stringa.slice(0,-1)
  }
}

console.log(deleteOne("ciao sono Francesco",5))
console.log(deleteOne("ciao sono Francesco",8))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5")
function onlyLetters(stringa){
  return stringa.replace(/\d+/g, '');
}

console.log(onlyLetters("I have 4 dogs"))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6")
function isThisAnEmail(email){
  if(email.includes('@')&&email.includes('.')){
    return email
  }else{
    console.log("non è un reale indirizzo mail")
  }
}

console.log(isThisAnEmail("francimalafronte05@gmail.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7")
function whatDayIsIt(){
  let days= ["Domenica","Lunedi","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"]
  return days[date.getDay()]
}

let date = new Date()
console.log(whatDayIsIt(date))

console.log("ESERCIZIO 8 NON ESEGUITO CORRETTAMENTE")
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

 /* function rollTheDices(num1){

  for(let i=0;i<num1; i++){
     return dice()
  }
  
}

console.log(rollTheDices(num1))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9")
function howManyDays(datagenerata){
  let datacasuale = new Date(datagenerata);
  let oggi = new Date();
  let differenzaditempo = oggi-datacasuale;
  let differenzadigiorni = Math.floor(differenzaditempo / (1000*60*60*24))
  return differenzadigiorni;
}

let datadiprova = howManyDays("2024-01-01")
console.log(datadiprova)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("ESERCIZIO 10")
function isTodayMyBirthday(oggi){
  let datacasuale = new Date(oggi);
  let datadioggi = new Date();
  let datadimesi = datacasuale.getMonth();
  let datadigiorni = datacasuale.getDate();

  if(datadimesi === datadioggi.getMonth() && datadigiorni === datadioggi.getDate() ){
   return  console.log("Auguri!!")
  }else{
    return console.log("Oggi non è il tuo compleanno!")
  }
}


isTodayMyBirthday("2024-08-16")





// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("ESERCIZIO 11 NON ESEGUITO CORRETTAMENTE")
/*function deleteProp(oggetto,str){

   if(oggetto.hasOwnProperty(str)){
    delete oggetto[str]
   }
   return oggetto
  }

console.log(deleteOne(me,"surname"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


//lo trovi in basso


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function Numfilm(movies){
  return movies.length
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(){ 
const soloAnni = movies.map(function(elemento){
  return elemento.Year;
})
console.log(soloAnni)
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(){
  const film900 = movies.filter(elemento => elemento.Year<= 2000)
console.log(film900);
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(){
let sommaAnni = movies.reduce((aggiornato,valoreCorrente) =>
  aggiornato + parseInt(valoreCorrente.Year),0)
 
 console.log("la somma degli anni è", sommaAnni)
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/*function searchByTitle (Title){
  return movies.filter(movies=>movies.Title.includes(Title))

}

console.log(searchByTitle("Avengers"))


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* const searchAndDivide = (oggetto,stringa3) =>{
  const nuovooggetto= {
    Match: [],
    Unmatch: [],
  };
  for(let i=0;i<oggetto.length;i++){
    if(oggetto[i].title.toLowerCase().includes(stringa3)){
      nuovooggetto.Match.push(stringa3[i]);
    }else{
      nuovooggetto.Unmatch.push(stringa3[i])
    }
  }
  return nuovooggetto
}

console.log(searchAndDivide(movies,stringa3))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(num5){
  movies.splice(num5,1);
  return movies;
}

//RICHIAMO SOTTO


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
//LE FUNZIONI QUINDI NON ME LE RICHIAMO VISTO CHE NON ESISTONO QUESTI ELEMENTI

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezionaID(){
let  elemento1 = document.getElementById("container")
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function trovatd(){
let collezionetd= document.querySelectorAll('td')
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function Ciclatd(){
  collezionetd.forEach(td =>{
  console.log(td.textContent)
})
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/


function cambiaColoreLink(){
  let collezionelink= document.querySelectorAll('a')
  collezionelink.forEach(a =>{
    a.style.backgroundColor= "red"
  })
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungiElemento(){
let ul1= document.getElementById("myList")
let newLi= document.createElement('li')
ul1.appendChild(newLi)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista(){
document.getElementById("myList")
while(myList.firstChild){
  myList.removeChild(myList.firstChild);
}
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse(){
  let collezionetr= document.querySelectorAll('tr')
  collezionetr.classList.add("test")
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(){
let simbolo= "*"
let larghezza=5;
for(let i=0;i<=larghezza;i++){
  console.log(simbolo.repeat(i))
}
}


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(){
  let simbolo= "*"
  let altezza=5;
  for(let i=0;i<=altezza;i++){
    let spazio = ' '.repeat(altezza -i -1)
    console.log(spazio+ simbolo.repeat(2*i+1))
  }
  }



/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log("ESERCIZIO 29")
function isItPrime(num6){

  for(let i=2;i<=Math.sqrt(num6);i++){

    if(num6 %i ===0){
      return false;
    }
  
  }
  return true;
}

console.log(isItPrime(11))
console.log(isItPrime(4))

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

//funzioni da mandare dopo l'aray


//ESERCIZIO 12

let recentMovie = movies[0] 
function newestMovie(){
movies.forEach(function(movies){
  if(movies.Year < recentMovie.Year){
  }else{
    recentMovie = movies;
    
  }
})
console.log("Il film piu' recente è",recentMovie.Title," pubblicato nel",recentMovie.Year)
}



//RICHIAMI FUNZIONI
console.log("ESERCIZIO 12")
newestMovie()
console.log("ESERCIZIO 13")
console.log((Numfilm(movies)))
console.log("ESERCIZIO 14")
onlyTheYears()
console.log("ESERCIZIO 15")
onlyInLastMillennium()
console.log("ESERCIZIO 16")
sumAllTheYears()
console.log("ESERCIZI 17 e 18 NON ESEGUITI CORRETTAMENTE")

console.log("ESERCIZIO 19")
let uptadeMovies = removeIndex(1)
console.log(uptadeMovies)


console.log("GLI ESERCIZI 20-26 SONO CON IL DOM E CON ELEMENTI NON VISUALIZZABILI IN CONSOLE")
console.log("ESERCIZIO 27")
halfTree()
console.log("ESERCIZIO 28")
tree()


//ESERCIZIO 29

