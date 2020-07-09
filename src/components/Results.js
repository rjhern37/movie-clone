import React from 'react'
import Result from "./Result"

function results({ results }) {
    
    return (

        <section className="results">
            
            {results.map(result => (
                <Result result={result} />
            ))}

        </section>
            
    
    )
}

export default results
