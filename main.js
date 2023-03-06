const author = document.getElementById('author');
const quoteText = document.getElementById('quote-text');
const newQuoteButton = document.getElementById('new-quote');
const twitterButton = document.getElementById('twitter');

let apiQuotes = [];

getQuotes = async() => {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        alert(error);
    }
}

newQuote = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(quote.author === 0) {
        author.textContent = "Unknown"
    } else {
        author.textContent = quote.author;
    }

    quoteText.textContent = quote.text;
}

twitterQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', twitterQuote);

getQuotes();