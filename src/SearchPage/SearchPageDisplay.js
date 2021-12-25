

const SearchPageDisplay = (props) => {
    // if (!props.loaded) {

    //     return <h1>Not loaded</h1>
    // }

    return (
        <div className="searchPageDiv">
            <div>
                {props.loaded ?

                    Object.keys(props.selectItem).map(index => (
                        <div key={index}>  {

                            <p>
                                {props.selectItem[index].content}
                            </p>
                        } </div>
                    ))

                    : <h2>No Search Message, Please type a valid keyword</h2>}

            </div>

        </div>
    )
}

export default SearchPageDisplay;