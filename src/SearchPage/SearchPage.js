import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchPageDisplay from "./SearchPageDisplay";

const SearchPage = () => {
    const [selectItem, setSelectItem] = useState({});
    const [loaded, setLoaded] = useState(false)


    // if (Object.keys(selectItem).length === 0 && selectItem.constructor === Object) {
    //     setLoaded(false);
    //     return <h1>Hi </h1>;


    // }
    console.log(selectItem)


    return (
        <div className="searchPageMainDiv">

            <SearchPageDisplay selectItem={selectItem} loaded={loaded} />
            <SearchBar setSelectItem={setSelectItem} setLoaded={setLoaded} />
        </div>
    )
}

export default SearchPage;