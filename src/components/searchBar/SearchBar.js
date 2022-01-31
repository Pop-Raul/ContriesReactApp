import React from "react";
import "./SearchBar.css"

const SearchBar = ({ searchfield, searchChange, searchByCapital }) => {
    return (
        <div >
            <h3>Hello! Please search for any country you want. </h3>
            <form className="form-wrapper cf">
                <input
                    type="text"
                    placeholder="Search here..."

                    onChange={searchChange}
                />

                <button type="submit">Search</button>
            </form>

        </div>
    );
}

export default SearchBar;
