import React from 'react'

function Result({ result }) {
    return (
        <div className="result">
            <h3>{result.Title}</h3> 
            <h4>{result.Year}</h4>
            <img src={result.Poster} alt=""/>
        </div>
    )
}

export default Result
