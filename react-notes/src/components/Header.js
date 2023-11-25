import React from "react";

const Header =({switchMode})=>{
    return(
        <div className="header">
        <h1>Note-List</h1>
        <button className="save" onClick={()=>{
            switchMode((previousDarkMode)=>!previousDarkMode)
        }}>Toggle</button>


        </div>
    )
}
export default Header;