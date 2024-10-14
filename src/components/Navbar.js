import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
    const [navbarBlur, setNavbarBlur] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 20) {
                setNavbarBlur(true);
            } else {
                setNavbarBlur(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const showMenu = () => {
        const bars = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        bars[0].classList.toggle("barOne");
        bars[1].classList.toggle("barTwo");
        bars[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    const hideMenu = () => {
        const bars = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        bars[0].classList.remove("barOne");
        bars[1].classList.remove("barTwo");
        bars[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }

    return (
        <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'}>
            <h1 title='Reload' onClick={() => window.location.reload()} className='Logo'>kp</h1>

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>
                <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument /> Resume</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
