import React from 'react';
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         Movie Database
       </h1>
      </header>
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
