

const SearchPageDisplay = (props) => {

    return (
        <div className="searchPageDiv">
            <div>
                {props.selectItem &&

                    Object.keys(props.selectItem).map(index => (
                        <div key={index}>  {

                            <p>
                                {props.selectItem[index].content}
                            </p>
                        } </div>
                    ))

                }

            </div>

        </div>
    )
}

export default SearchPageDisplay;