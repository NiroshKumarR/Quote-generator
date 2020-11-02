const quoteContainer =document.getElementById('quoteContainer');
const quoteText=document.getElementById('quote');
const authorText =document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newQuote =document.getElementById('new-quote');





async function getQuote(){
    const proXy = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proXy + apiUrl);
        const data = await response.json()
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
    }catch(error)
    {
        getQuote();
    }
}

//getQuote();

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    try{
    const data = await response.json();
    authorText.innerText = ('-' + data.author);
    quoteText.innerText = data.content;

  }catch(error){
      console.log('wait');
      randomQuote();
  }
}

function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl ='https://twitter.com/intent/tweet?text=$(quote) - $(author)';
    window.open(twitterUrl,'_blank');
}

twitterBtn.addEventListener('click',tweetQuote);
newQuote.addEventListener('click',randomQuote);

randomQuote();