import React, { useState } from 'react'
import './Header.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/carApp/carSlice'
import { useSelector } from 'react-redux';

const Header = () => {
    const [close, setClose] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <div className="header">
            <a className="header__logo">
                <img src="/Images/logo.svg" alt="" />
            </a>
            <div className="header__list">
                {cars && cars.map((car, index) => (
                    <a key={index} href="#" >{car}</a>
                ))}
            </div>
            <div className="header__menu">
                <div className="header__menu__a">
                    <a href="#" >Shop</a>
                    <a href="#" >Account</a>
                </div>
                <p className="header__menu__1" onClick={() => setClose(true)}  >Menu</p>
            </div>
            {close ?
                <div className="header__menu__list"    >
                    <div className="header__menu__close">
                        <CloseIcon fontSize="large" onClick={() => setClose(false)} />
                    </div>
                    <div className="header__menu__item">
                        {cars && cars.map((car, index) => (
                            <a key={index} href="#" >{car}</a>
                        ))}
                    </div>
                    <a href="#">Existing Inventory</a>
                    <a href="#">Used Inventory</a>
                    <a href="#">Trade-In</a>
                    <a href="#">Test Drive</a>
                    <a href="#">Powerwall</a>
                    <a href="#">Commercial Energy</a>
                    <a href="#">Utilities</a>
                    <a href="#">Charging</a>
                    <a href="#">Find Us</a>
                    <a href="#">Support</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Account</a>
                    <a className="header__menu__icon" href="#">More<ChevronRightIcon fontSize="small" /></a>
                </div> : null
            }
        </div>
    )
}

export default Header
