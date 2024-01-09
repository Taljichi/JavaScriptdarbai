import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className="header">
            <ul>
                <li><Link to="/" className="sandelys1">1 Sandėlio aukštas</Link></li>
                <li><Link to="/plan" className="sandelys2">2 Sandėlio aukštas</Link></li>
                <li><Link to="/last" className="admin">Administracinės patalpos</Link></li>
            </ul>
        </header>
        </>
    )
}

export default Header