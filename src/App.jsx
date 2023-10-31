
import './App.css'
import SnakeGame from './Games/Snake/SnakeGame'
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/wack-a-mole" element={<CommingSoon />} />
        <Route path="/tic-tac-toe" element={<CommingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

const Home = () => {
  return (
    <div className="home">
      <h1 className='header'>Games</h1>
      <div className='divider'></div>
      <div className='gameList'>
        <NavLink to="/snake" className='navLink'>Snake</NavLink>
        <NavLink to="/tic-tac-toe" className='navLink'>Tic-Tac-Toe</NavLink>
        <NavLink to="/wack-a-mole" className='navLink'>Wack-A-Mole</NavLink>
      </div>
    </div>
  )
}

const CommingSoon = () => {
  return (
    <div className="">
      Comming Soon<br />
      Feel free to raise a pr
    </div>
  )
}