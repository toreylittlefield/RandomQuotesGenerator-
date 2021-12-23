import { useState } from "react";

const SearchBar = () => {

    const [searchItem, setSearchItem] = useState([])



    const handleInput = (e) => {
        setSearchItem(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(searchItem)


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