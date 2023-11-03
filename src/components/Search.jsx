import React from 'react'

function Search(props) {
    const {onSearch}=props
   return (
    <>
        <div className="searchBar">
            <input type="search" className='searchBox' placeholder='Search' onChange={(e)=>onSearch(e.target.value)}/>
        </div>     
    </>
  )
}

export default Search