import React from 'react';
import './Header.css';
import picture from '../image/Image.jpg';

const Header = () => {
    return ( 
    <div className="container">
       <div class="row-header">
            <div className="header">
            <h1 className="header-title">Good Book Us Good Mood</h1>   
            
            <div className="header">
                <p className="header-text">There is no need to coin new words to describe the exciting life of a book lover. The classic dictionary is full of them.
                </p>
            </div>
            </div>
            <div className="coverBook">
                <img className="picture" src={picture} alt='logo...' />
            </div>
        </div>
        </div>
    )
}

export default Header