import React, {Component} from 'react';
import {reqGetPropertiesForSales} from "../../api/url";

class PropertyForSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties_list: []
        }
    }

    componentDidMount() {
        this.load_properties_list();
    }

    load_properties_list = () => {
        reqGetPropertiesForSales().then((res) => {
            this.setState({properties_list: res.data})
        })
    }

    getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }

    render() {
        return (
            <section className="recently portfolio bg-white">
                <div className="container">
                    <div className="sec-title">
                        <h2><span>Properties </span>For Sale</h2>
                        <p>Find your dream home from our Sale added properties.</p>
                    </div>
                    <div className="portfolio col-xl-12">
                        <div className="slick-lancers">
                            {
                                this.state.properties_list.map((property, index) => {
                                    return (
                                        <div className="agents-grid" key={property.id} data-aos="fade-up">
                                            <div className="landscapes">
                                                <div className="project-single">
                                                    <div className="project-inner project-head">
                                                        <div className="homes">
                                                            <a href="single-property-1.html" className="homes-img">
                                                                <div className="homes-tag button alt featured">Featured
                                                                </div>
                                                                <div
                                                                    className="homes-tag button alt sale">{property.status}</div>
                                                                <div className="homes-price">{property.cost}</div>
                                                                <img src="images/blog/b-11.jpg" alt="home-1"
                                                                     className="img-responsive"/>
                                                            </a>
                                                        </div>
                                                        <div className="button-effect">
                                                            <a href="single-property-1.html" className="btn">
                                                                <i className="fa fa-link">
                                                                </i>
                                                            </a>
                                                            <a href="https://www.youtube.com/watch?v=2xHQqYRcrx4"
                                                               className="btn popup-video popup-youtube">
                                                                <i className="fas fa-video">
                                                                </i>
                                                            </a>
                                                            <a href="single-property-2.html" className="img-poppu btn">
                                                                <i className="fa fa-photo">
                                                                </i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="homes-content">
                                                        <h3><a href="single-property-1.html">{property.name}</a>
                                                        </h3>
                                                        <p className="homes-address mb-3">
                                                            <a href="single-property-1.html">
                                                                <i className="fa fa-map-marker"></i><span>{property.address}</span>
                                                            </a>
                                                        </p>
                                                        <ul className="homes-list clearfix">
                                                            <li>
                                                                <span>{property.bedroom} Bedrooms</span>
                                                            </li>
                                                            <li>
                                                                <span>{property.bathroom} Bathrooms</span>
                                                            </li>
                                                            <li>
                                                                <span>{property.surface} sq ft</span>
                                                            </li>
                                                            <li>
                                                                <span>{property.garage} Garages</span>
                                                            </li>
                                                        </ul>
                                                        <div className="footer">
                                                            <a href="agent-details.html">
                                                                <img src="images/testimonials/ts-1.jpg" alt=""
                                                                     className="mr-2"/>
                                                                Lisa Jhonson
                                                            </a>
                                                            <span>
                                                              <i className="fa fa-calendar">
                                                              </i>
                                                                {this.getDifferenceInDays(new Date(), property.created_at)} day(s) ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PropertyForSale;
