import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchPageDisplay from "./SearchPageDisplay";

const SearchPage = () => {
    const [selectItem, setSelectItem] = useState({});


    return (
        <div className="searchPageMainDiv">

            <SearchPageDisplay selectItem={selectItem} />
            <SearchBar setSelectItem={setSelectItem} />
        </div>
    )
}

export default SearchPage;