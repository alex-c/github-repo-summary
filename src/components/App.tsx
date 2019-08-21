import React from 'react';
import Summary from './Summary';
import Navbar from './Navbar';
import Favorites from './Favorites';

function App() {
  return (
    <>
      <Navbar />
      <main className="viewport">
        <Favorites />
        <Summary />
      </main>
    </>
  );
}

export default App;
