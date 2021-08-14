import React, {Component} from 'react';
import {reqGetPropertiesForSales} from "../../api/url";
import Slider from "react-slick";
import "./PropertyForSale.css"

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
    get_content = (focus) => {
        let data = this.state.properties_list.filter((element) => {
            return element.status === focus
        })
        return data.map((property, index) => {
            return (
                <div className="agents-grid" key={property.id} data-aos="fade-up">
                    <div className="landscapes">
                        <div className="project-single">
                            <div className="project-inner project-head">
                                <div className="homes">
                                    <a href="single-property-1.html" className="homes-img">
                                        <div
                                            className="homes-tag button alt featured">Featured
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
                                    <a href="single-property-2.html"
                                       className="img-poppu btn">
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
                                            {property.create_since_day} day(s) ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const settings = {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            className: "little-margin-slick",
            arrows: false,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 1292,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            }, {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }]
        }
        let content = undefined
        if (this.props.type === "For Sale") {
            content = (
                <Slider {...settings} >{
                    this.get_content("for sale")
                }
                </Slider>
            )
        } else {
            content = (
                <Slider {...settings} >
                    {this.get_content("for rent")}
                </Slider>
            )
        }
        return (
            <section className="recently portfolio bg-white-3">
                <div className="container">
                    <div className="sec-title">
                        <h2><span>Properties </span>{this.props.type}</h2>
                        <p>Find your dream home from our {this.props.type==="For Sale" ? "Sale"  : "Rent"} added properties.</p>
                    </div>
                    <div className="portfolio col-xl-12">
                        <div className="slick-lancers">
                            {
                                content
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PropertyForSale;
