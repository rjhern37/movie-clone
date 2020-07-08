import React from 'react'

export default function searchBar({ handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input 
            type="text" 
            placeholder="Search for a Movie/TV series" 
            className="searchbox" 
            onChange= {handleInput}
            onKeyPress= {search} 
            
            />

        </section>
    )
}
