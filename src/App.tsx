import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

interface Quote {
 quote: string; 
 author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}; 

const getRandomColor = (): string => {
  const colors = [
    "#800080",
    "#4682B4",
    "#FFFFE0",
    "#FF8C00",
    "#00FFFF",
    "#66CDAA",
  ];

  return colors[Math.floor(Math.random() * colors.length)]
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
  <div className="background" style={{backgroundColor: randomColor, transition}}>
    <div id="quote-box">
      <div className="quote-content" style={{ color: randomColor, transition }}>
        
        <h2 id="text">
        <FaQuoteLeft size="30" style={{ marginRight: "10px"}}/>
          {quote.quote}
          <FaQuoteRight size="30" style={{ marginleft: "10px"}}/>
          </h2>
        
        <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}'} 
        id="tweet-quote"
        style={{
          backgroundColor: randomColor,
          marginRight: "10px",
          transition,
        }}
        >
          <FaTwitter color="white" />
        </a>
        <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>
          Change Quote
        </button>
      </div>
    </div>
  </div>
  );
}

export default App;
