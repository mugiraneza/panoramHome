import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reqGetCities} from "../../api/url";

class PopularPlace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        reqGetCities()
        return (
            <section className="feature-categories bg-white-3">
                <div className="container">
                    <div className="sec-title">
                        <h2><span>Popular </span>Places</h2>
                        <p>Properties In Most Popular Places.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6" data-aos="zoom-in">
                            <div className="small-category-2">
                                <div className="small-category-2-thumb img-1">
                                    <a href="properties-map.html">
                                        <img src="images/popular-places/12.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="sc-2-detail">
                                    <h4 className="sc-jb-title"><a href="properties-map.html">New York</a></h4>
                                    <span>203 Properties</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6" data-aos="zoom-in">
                            <div className="small-category-2">
                                <div className="small-category-2-thumb img-2">
                                    <a href="properties-map.html">
                                        <img src="images/popular-places/13.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="sc-2-detail">
                                    <h4 className="sc-jb-title"><a href="properties-map.html">Los Angeles</a></h4>
                                    <span>307 Properties</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6" data-aos="zoom-in">
                            <div className="small-category-2">
                                <div className="small-category-2-thumb img-3">
                                    <a href="properties-map.html">
                                        <img src="images/popular-places/14.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="sc-2-detail">
                                    <h4 className="sc-jb-title"><a href="properties-map.html">San Francisco</a></h4>
                                    <span>409 Properties</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6" data-aos="zoom-in">
                            <div className="small-category-2 mob-mt pc-mb">
                                <div className="small-category-2-thumb img-8">
                                    <a href="properties-map.html">
                                        <img src="images/popular-places/15.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="sc-2-detail">
                                    <h4 className="sc-jb-title"><a href="properties-map.html">Miami</a></h4>
                                    <span>145 Properties</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6" data-aos="zoom-in">
                            <div className="small-category-2 pc-mb">
                                <div className="small-category-2-thumb img-10">
                                    <a href="properties-map.html"><img src="images/popular-places/10.jpg" alt=""/></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h4 className="sc-jb-title"><a href="properties-map.html">Chicago</a></h4>
                                    <span>112 Properties</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6" data-aos="zoom-in">
                            <div className="small-category-2 no-mb si-mt">
                                <div className="small-category-2-thumb img-11">
                                    <a href="properties-map.html">
                                        <img src="images/popular-places/5.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="sc-2-detail">
                                    <h4 className="sc-jb-title"><a href="properties-map.html">Houston</a></h4>
                                    <span>254 Properties</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

PopularPlace.propTypes = {};
export default PopularPlace; 