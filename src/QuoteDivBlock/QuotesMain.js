import { useEffect, useState, useCallback } from 'react';

import ButtonNext from './ButtonNext';
import ButtonShare from './ButtonShare.js';
import Quotes from './Quotes';
import TrialButton from './tweetPost';
// import TrialButton from "./tweetPost";

const QuotesMain = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentBgColor, setCurrentBgColor] = useState('');

  function randomGenerator() {
    const bgColor = `rgb(${Math.floor(Math.random() * 255) + 100}, ${Math.floor(Math.random() * 255) + 100}, ${
      Math.floor(Math.random() * 255) + 100
    })`;

    setCurrentBgColor(bgColor);
  }

  const fetchQuotes = useCallback(async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (response.ok) {
        const jsonResponse = await response.json();
        randomGenerator();
        setCurrentQuote(jsonResponse);
        return jsonResponse;
      }
      throw new Error('Error');
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <div className="quotesMain" style={{ backgroundColor: currentBgColor }} id="quote-box">
      <div>
        <Quotes quote={currentQuote} />
      </div>
      <div>
        <ButtonShare id="tweet-quote" shareTweet={currentQuote} />
        <ButtonNext onClick={fetchQuotes} id="new-quote" />
        <TrialButton currentQuote={currentQuote} />
        {/* <TrialButton /> */}
        {/* <TrialButton /> */}
      </div>
    </div>
  );
};

export default QuotesMain;
