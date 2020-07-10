import React from 'react'

function Result({ result }) {
    return (
        <div className="result">
            <img src={result.Poster} alt=""/>
            <h3>{result.Title}</h3> 
            <h4>{result.Year}</h4>
        </div>
    )
}

export default Result
