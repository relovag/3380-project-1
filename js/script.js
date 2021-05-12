/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
CSIS 3380 - Gonzalo Relova 300306471
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * An array of quote objects with quote, source, citation, and year keys.
***/
var quotes = [
  {
    quote: "Some people can’t believe in themselves until \
    someone else believes in them first.",
    source: "Sean Maguire", citation: "Good Will Hunting",
    year: 1997
  },
  {
    quote: "It is not our abilities that show what we truly are... \
    it is our choices.",
    source: "Albus Dumbledore", 
    citation: "Harry Potter and the Chamber of Secrets",
    year: 2002},
  {
    quote: "Do, or do not. There is no try.",
    source: "Master Yoda", citation: "The Empire Strikes Back",
    year: 1980},
  {
    quote: "There is some good in this world, and it’s worth fighting for.",
    source: "J.R.R. Tolkien", citation: "The Two Towers", year: 1954},
  {
    quote: "All human wisdom is summed up in these two words – Wait and hope.",
    source: "Alexandre Dumas", citation: "The Count of Monte Cristo", 
    year: 1844},
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: "Robin Williams", citation: "Dead Poets Society", year: 1989},
  {
    quote: "His dream must have seemed so close that he could hardly fail to grasp it.",
    source: "F. Scott Fitzgerald", citation: "The Great Gatsby", year: 1925}
]


/***
 * `getRandomQuote` function
 * Generates a random number from 0 to the last index of the quotes array and returns a quote object.
***/
function getRandomQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex]
}


/***
 * `printQuote` function
 * Creates an HTML string containing the quote and source as well as the citation and year if they exist.
***/
function printQuote() {
  let RandomQuote = getRandomQuote();
  console.log(RandomQuote);
  let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "</p>" +
  "<p class='source'>" + RandomQuote.source;

  if ("citation" in RandomQuote) {
    PtoHTML1 += "<span class='citation'>" + RandomQuote.citation + "</span>"
  }

  if ("year" in RandomQuote) {
    PtoHTML1 += "<span class='year'>" + RandomQuote.year + "</span>"
  }
  PtoHTML1 += "</p>"

  document.getElementById("quote-box").innerHTML = PtoHTML1;
  console.log(PtoHTML1);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);