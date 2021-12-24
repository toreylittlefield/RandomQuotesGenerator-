import { useEffect, useState } from "react";

const SearchBar = () => {

    const [searchItem, setSearchItem] = useState('')

    const asyncFunction = async () => {
        try {
            const response = await fetch(`https://api.quotable.io/search/quotes?query=${searchItem}&fields=content`)



            if (response.ok) {
                const json = await response.json();
                console.log(json)
            }

        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {

        asyncFunction()



    }, [])



    const handleInput = (e) => {
        setSearchItem(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        asyncFunction();

        console.log(searchItem)


        // setSearchItem('')


    }

    const styles = {
        fontSize: '1.25rem',
        borderRadius: '5px'

    }



    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Search"
                style={styles}
                onChange={handleInput} value={searchItem} />
            <input type="submit" value="Submit" style={styles} />
        </form>
    )
}

export default SearchBar;