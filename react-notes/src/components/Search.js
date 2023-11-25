import React from "react";
import { MdSearch } from "react-icons/md";


function Search({handleSearch}){
    return(
        <div className="search"> 
        <MdSearch className="search-icon" size='1.3rem'/>
        <input type="text"
         placeholder="type to search"
         onChange={(event)=>{
            handleSearch(event.target.value);
         }}
        ></input>
        </div>
    );
}



export default Search;