import React from 'react'
import Logo from '../assets/img/logo.png'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './Header.css'

const menus = [
    {
        'name': 'Accueil',
        'url': '/'
    },
    {
        'name': 'Nos services',
        'url': '/services',
    },
    {
        'name': 'Origine',
        'url': '/origin'
    },
    {
        'name': 'Qui sommes nous ?',
        'url': '/about-us'
    },
    {
        'name': 'Pourquoi nous ?',
        'url': '/why-us'
    },
    {
        'name': 'Nous joindre',
        'url': '/contact-us'
    }
]

function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <header className='my-container'>
                <div className='grid d-flex justify-content-between align-items-center'>
                    <img className='logo' src={Logo} alt='Logo Mbombo'onClick={() => navigate('/')}/>
                    <nav className='menu-pc'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            {menus.map((menu, index) => {
                                return(
                                    <li key = {index} className='mx-2'>
                                        <Link className={(location.pathname === menu.url ? 'menu-item active ' : 'menu-item')} to={menu.url}> {menu.name} </Link>
                                    </li>
                                ) 
                            })}
                            <li><a className='button' href="tel:+33649121434">+33649121434</a></li>
                        </ul>
                    </nav>
                    <div className="dropdown menu-phone">
                        <i className="fa-solid fa-bars" data-bs-toggle="dropdown" id="dropdownMenuButton1" aria-expanded="false"></i>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {menus.map((menu, index) => {
                                return(
                                    <li key = {index} className='mx-2'>
                                        <Link className='dropdown-item menu-item' to={menu.url}> {menu.name} </Link>
                                    </li>
                                ) 
                            })}
                        </ul>
                    </div>                    
                </div>
            </header>
        </>
    )
}

export default Header