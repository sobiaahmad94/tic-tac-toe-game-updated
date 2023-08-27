import React from 'react';
import Footer from './components/Footer';
import GameContainer from './containers/GameContainer';
import "./App.css";
// import '/Users/sobiaahmad/codeclan_work/personal_projects/tic-tac-toe-game-updated/src/components/App.css';


function App() {
  return (
    <div className="App">
      <GameContainer />
      <Footer />
    </div>
  );
}

export default App;
