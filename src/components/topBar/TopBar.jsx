
import React from 'react';
import './topBar.scss';
import {LocationOn, Call, Email, Facebook, Instagram, Twitter } from '@material-ui/icons';

export default function TopBar() {
  return (
    <div className='topBar'>
        <div className="top">
            <div className="logoLinks">
                <span><Facebook/></span>

                <span><Instagram/></span>
                <span><Twitter/></span>

            </div>
            <div className="welcome">
                Welcome to <span>Sheba </span>

            </div>
            <div className="logSign">

                <span>language</span>

                <div className="log">
                    <span>LogIn</span>
                    <span>
                        Sign Up
                    </span>
                </div>

            </div>

        </div>
        <div className="bottom">

            <div className="logo">

                Sheba

            </div>
            <div className="contactCell">
                <Email className='icons'/>
                <span>Email Us</span>
                <span>masud@gmail.com</span>
                
            </div>
            <div className="contactCell">
                <Call className='icons'/>
                <span>Call Us</span>
                <span>01885355627</span>


            </div>
            <div className="contactCell">
                <LocationOn className='icons'/>
                <span>Address</span>
                <span>Birganj,Dinajpur</span>
            </div>

        </div>
    </div>
  )
}
