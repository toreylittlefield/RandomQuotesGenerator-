import { useEffect, useState } from "react";

import ButtonNext from "./ButtonNext";
import ButtonShare from "./ButtonShare";
import Quotes from "./Quotes";




const QuotesMain = () => {
    const [currentQuote, setCurrentQuote] = useState('');
    const [currentBgColor, setCurrentBgColor] = useState('');





    function randomGenerator() {
        const bgColor = `rgb(${Math.floor(Math.random() * 255) + 100}, ${Math.floor(Math.random() * 255) + 100}, ${Math.floor(Math.random() * 255) + 100})`

        setCurrentBgColor(bgColor)
    }



    const fetchQuotes = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (response.ok) {
                const jsonResponse = await response.json()
                console.log(jsonResponse)
                randomGenerator()
                setCurrentQuote(jsonResponse)
                return jsonResponse;
            }
            throw new Error('Error')

        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {


        fetchQuotes()
    }, [])




    return (
        <body className="quotesMain" style={{ backgroundColor: currentBgColor }} id="quote-box">

            <div>
                <Quotes quote={currentQuote} />
            </div>
            <div>
                <ButtonShare id="tweet-quote" />
                <ButtonNext onClick={fetchQuotes} id="new-quote" />

            </div>

        </body>
    )
}

export default QuotesMain;