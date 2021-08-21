import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineGlobal, AiOutlineLaptop} from "react-icons/ai";

class HeaderSimple extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="header-container">
                <div id="header">
                    <div className="container container-header">
                        <div className="left-side">
                            <div id="logo">
                                <Link to={"/"}>
                                    <img src="images/logo.svg" alt=""/>
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
                            <nav id="navigation" className="style-1 ">
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
                                        <Link to={"add-property.html"}
                                              className="button border btn-lg btn-block text-center">
                                            Add Listing
                                            <AiOutlineLaptop className="ml-2" />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right-side d-none d-none d-lg-none d-xl-flex">
                            <div className="header-widget">
                                <a href="add-property.html" className="button border">Add Listing
                                    <AiOutlineLaptop className="ml-2" />
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
                                <li><a href="change-password.html"> Change Password</a></li>
                                <li><a href="/logout">Log Out</a></li>
                            </ul>
                        </div>
                        <div className="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                            <div className="header-widget sign-in">
                                <div className="show-reg-form modal-open"><a href="#">Sign In</a></div>
                            </div>
                        </div>
                        <div className="header-user-menu user-menu add d-none d-lg-none d-xl-flex">
                            <div className="lang-wrap">
                                <div className="show-lang">
						<span>
							<AiOutlineGlobal></AiOutlineGlobal>
							<strong>ENG</strong>
						</span>
                                    <i className="fa fa-caret-down arrlan">
                                    </i>
                                </div>
                                <ul className="lang-tooltip lang-action no-list-style">
                                    <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                                    <li><a href="#" data-lantext="Fr">Francais</a></li>
                                    <li><a href="#" data-lantext="Es">Espanol</a></li>
                                    <li><a href="#" data-lantext="De">Deutsch</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderSimple;
