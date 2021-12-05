import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FaCaretDown, FaGlobeAfrica, FaHome} from "react-icons/fa";

import "./HeaderParalax.css"
import {hrefUseless} from "../../gb_function/global_func";

class HeaderParalax extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <header id="header-container" className="header head-tr">
                <div id="header" className="head-tr bottom cloned sticky">
                    <div className="container container-header">
                        <div className="left-side">
                            <div id="logo">
                                <Link to={"/"}>
                                    <img src="images/logo-red.svg"
                                         data-sticky-logo="images/logo-red.svg" alt=""/>
                                </Link>
                            </div>
                            <div className="mmenu-trigger">
                                <button className="hamburger hamburger--collapse" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner">
                                        </span>
                                    </span>
                                </button>
                            </div>
                            <nav id="navigation" className="style-1 head-tr">
                                <ul id="responsive">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={"properties-grid-1.html"}>Listing</Link>
                                    </li>
                                    <li>
                                        <Link to={"contact-us.html"}>Contact</Link>
                                    </li>
                                    <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0">
                                        <a href="add-property.html"
                                           className="button border btn-lg btn-block text-center">
                                            Add Listing
                                            <FaHome className=" ml-2"> </FaHome>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right-side d-none d-none d-lg-none d-xl-flex">
                            <div className="header-widget">
                                <a href="add-property.html" className="button border">
                                    Add Listing
                                    <FaHome className=" ml-2"> </FaHome>
                                </a>
                            </div>
                        </div>
                        <div className="header-user-menu user-menu add">
                            <div className="header-user-name">
                                <span><img src="images/testimonials/ts-1.jpg" alt=""/></span>Hi, Mary!
                            </div>
                            <ul>
                                <li><a href="user-profile.html"> Edit profile</a></li>
                                <li><a href="add-property.html"> Add Property</a></li>
                                <li><a href="payment-method.html"> Payments</a></li>
                                <li><a href="change-password.html"> Change Password</a></li>
                                <li><a to="#" data-lantext="De"> Log Out</a></li>
                            </ul>
                        </div>
                        <div className="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                            <div className="header-widget sign-in">
                                <div className="show-reg-form modal-open"><a onClick={(e) => hrefUseless(e)}>Sign In</a>
                                </div>
                            </div>
                        </div>
                        <div className="header-user-menu user-menu add d-none d-lg-none d-xl-flex">
                            <div className="lang-wrap">
                                <div className="show-lang">
                                    <span>
                                        <FaGlobeAfrica>
                                        </FaGlobeAfrica>
                                        <strong>ENG</strong>
                                    </span>
                                    <FaCaretDown className="arrlan">
                                    </FaCaretDown>
                                </div>
                                <ul className="lang-tooltip lang-action no-list-style">
                                    <li><a onClick={(e) => hrefUseless(e)} className="current-lan"
                                           data-lantext="En">English</a></li>
                                    <li><a onClick={(e) => hrefUseless(e)} data-lantext="Fr">Francais</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderParalax;
