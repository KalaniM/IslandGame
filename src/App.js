import React from 'react';
import './App.css';
import { GameStart, CharactersChoices, DaysBackground } from './daysBg/daysBg';
import { Logo } from "./logo/logo";
import { Sound } from "./sound/sound";

function App() {
  return (
    <div className="home">
      <Logo />
      <Sound />
      {/* <GameStart /> */}
      {/* <CharactersChoices /> */}
      <DaysBackground />
      <aside>Une collaboration d'Arthur Barré & Kalani Marquand</aside>
    </div>
  );
}

export default App;
