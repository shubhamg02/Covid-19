import React, { useState, useEffect } from 'react'

import './Header.css';
import Register from '../Registration/Register';
import { CustomDialog } from '../Dialog/Dialog';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const [isopen, setisOpen] = useState(false);
    const [active, setactive] = useState('Home');
    
    const history = useHistory();

    const handleClick = () => { 
        setisOpen(!isopen);
        setactive('Home');
        history.push('/');
    }

    const optionClick = ({tab, path}) => {
        setactive(tab);
        history.push(`${path}`);
    }

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navLink = document.querySelectorAll(".nav-link");
        hamburger.addEventListener("click", mobileMenu);
        navLink.forEach(n => n.addEventListener("click", closeMenu));
      },[]);

    const mobileMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const closeMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    return (
        <div className='header'>
            <nav className="navbar">
                <div className='header__logo' onClick={() => {history.push('/'); setactive('Home')}}>
                    <img
                        src='/logomaster.png'
                        alt=""
                    />
                   
                </div>
                <div className="nav-menu">
                    <div className={active==='Home' ? "nav-item-active" : "nav-item"} onClick={() => optionClick({tab: 'Home',path: '/'})}>
                        <a className="nav-link">HOME</a>
                    </div>
                    <div className="nav-item" onClick={handleClick}>
                        <a className="nav-link">BE A DONOR</a>
                    </div>
                    {
                        isopen ? (
                        <CustomDialog
                            isopen={isopen}
                            handleClose={handleClick}
                            title={`Become a Donor`}
                        ><Register/></CustomDialog>
                        ) : ( <></> )
                    }
                    <div className={active==='Contact' ? "nav-item-active" : "nav-item"} onClick={() => optionClick({tab: 'Contact',path: '/contact'})}>
                        <a className="nav-link">Red Volunteers</a>
                    </div>
                </div>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    );
}

export default Header
