import React from 'react'
import "./Navbar.scss";
import { useState, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import { logout } from "../../AuthContext/AuthActions";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const { dispatch } = useContext(AuthContext);

    const { user } = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout());
        history.push("/register");
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                <div className='left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='netflix-logo'></img>
                    <Link to="/" className='link'>
                        <span>Home</span>
                    </Link>

                    <Link to="/series" className='link'>
                        <span className="navbarmainLinks">Series</span>
                    </Link>

                    <Link to="/movies" className='link'>
                        <span className="navbarmainLinks">Movies</span>
                    </Link>

                    <span>New & Popular</span>
                    <span>My List</span>
                </div>

                <div className='right'>
                    <SearchIcon className='icon' />
                    <span>KIDS</span>
                    <NotificationsIcon className='icon' />
                    <img src={user.profilePic === "" ? "https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" : user.profilePic} alt=""></img>

                    <div className='profile'>
                        <ArrowDropDownIcon className='icon' />
                        <div className='options'>
                            <span>Settings</span>
                            <span onClick={handleLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;