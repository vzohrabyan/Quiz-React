import React from 'react'
import {MdQuiz} from "react-icons/md"
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <header>
        <Link to="/"><MdQuiz /></Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/amount=10&category=&difficulty=&type=">Any Categories 10 Questions</Link>
            <Link to="/amount=50&category=&difficulty=hard&type=">Hard Questions</Link>
            <Link to="/amount=10&category=&difficulty=&type=boolean">True/False</Link>
        </nav>
    </header>
    )
}

export default Header