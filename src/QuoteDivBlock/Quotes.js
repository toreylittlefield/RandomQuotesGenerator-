

const Quotes = (props) => {

    return (
        <div>
            <p className="mainQuotes" id="text">
                "{props.quote.content}"
            </p>
            <p style={{ fontStyle: "italic", textDecoration: 'underline' }} id="author">-{props.quote.author}</p>
        </div>

    )
}

export default Quotes;