
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from './pages/Home.jsx'
import { Game } from './pages/Game.jsx';
import { GameOver } from './pages/GameOver.jsx';
import { NotFound } from './pages/NotFound.jsx';

function App() {

  const [scoreBoard, setScoreBoard] = useState([{name:'Marion',score:80}])

  function updateScoreBoard(name, score ){
    const updatedScoreBoard = [...scoreBoard, {name, score}];
     const topScores = updatedScoreBoard
      .sort((a, b) => b.score - a.score) 
      .slice(0, 5);
    setScoreBoard((topScores))
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Menu version='0.0'/>}/>
        <Route path="/game" element = {<Game />}/>
        <Route path="/gameover" element = {<GameOver scoreBoard={scoreBoard} updateScoreBoard={updateScoreBoard}/>}/>
        <Route path="*" element = {<NotFound/>}/>
        
      </Routes>
    </BrowserRouter>
    // <div className='min-h-screen'>
  )
}

export default App
