import React from 'react'

function Search({searchChange}){
    return(
        <div className="pa2">
            <input className="pa3 ba b--pink bg-near-white" type="search" placeholder="Search avengers" onChange={searchChange}></input>
        </div>
    )
}

export default Search;