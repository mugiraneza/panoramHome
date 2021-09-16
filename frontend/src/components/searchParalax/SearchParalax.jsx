import React, {Component} from 'react';
import Typed from 'typed.js';

class SearchParalax extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let options = {
            strings: ["House ^2000", "Apartment ^2000", "Plaza ^4000"],
            smartBackspace: false,
            loop: true,
            showCursor: true,
            cursorChar: "|",
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 800
        };
        let typed = new Typed(this.typedx, options);
    }

    render() {
        return (
            <section id="hero-area" className="parallax-searchs home15 overlay thome-6"
                     data-stellar-background-ratio="0.5">
                <div className="hero-main">
                    <div className="container aos-init aos-animate" data-aos="zoom-in">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-inner">
                                    <div className="welcome-text">
                                        <h1 className="h1">Find Your Dream
                                            <br className="d-md-none"/>
                                            <span className="typed border-bottom" ref={(typedx) => {
                                                this.typedx = typedx;
                                            }}>House </span>
                                            <span
                                                className="typed-cursor typed-cursor--blink">|</span><span
                                                className="typed-cursor">|</span>
                                        </h1>
                                        <p className="mt-4">We Have Over Million Properties For You.</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="banner-search-wrap">
                                            <ul className="nav nav-tabs rld-banner-tab">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab"
                                                       href="#tabs_1">For Sale</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tabs_2">For
                                                        Rent</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane fade active show" id="tabs_1">
                                                    <div className="rld-main-search">
                                                        <div className="row">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tabs_2">
                                                    <div className="rld-main-search">
                                                        <div className="row">


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchParalax;
