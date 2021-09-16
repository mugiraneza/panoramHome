import React, {Component} from 'react';
import {reqGetPropertiesForSales} from "../../api/url";
import Slider from "react-slick";
import "./PropertyForSale.css"
import {Link} from "react-router-dom";
import {FaCalendar, FaLink, FaMapMarker, FaVideo, FaImage} from "react-icons/all";

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
                                    <Link to={"/single-property/" + property.id} className="homes-img">
                                        <div
                                            className="homes-tag button alt featured">Featured
                                        </div>
                                        <div
                                            className="homes-tag button alt sale">{property.status}</div>
                                        <div className="homes-price">{property.cost}</div>
                                        <img src={property.presentation_image} alt={property.name}
                                             className="img-responsive"/>
                                    </Link>
                                </div>
                                <div className="button-effect">
                                    <Link className="btn">
                                        <FaLink className="fa fa-link">
                                        </FaLink>
                                    </Link>
                                    <Link
                                        className="btn">
                                        <FaVideo className="fas fa-video">
                                        </FaVideo>
                                    </Link>
                                    <Link className="btn">
                                        <FaImage className="fa fa-photo">
                                        </FaImage>
                                    </Link>
                                </div>
                            </div>
                            <div className="homes-content">
                                <h3>
                                    <Link to={"/single-property/" + property.id}>{property.name}</Link>
                                </h3>
                                <p className="homes-address mb-3">
                                    <Link to={"/single-property/" + property.id}>
                                        <FaMapMarker
                                            className="fas fa-video"> </FaMapMarker><span>{property.address}</span>
                                    </Link>
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
                                        <FaCalendar className="fa fa-calendar">
                                        </FaCalendar>
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
            arrows: true,
            focusOnSelect: true,
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
        let content
        if (this.props.type === "For Sale") {
            content = (
                <>
                    <Slider {...settings} >{
                        this.get_content("for sale")
                    }
                    </Slider>
                </>
            )
        } else {
            content = (
                <>
                    <Slider {...settings} >
                        {this.get_content("for rent")}
                    </Slider>
                </>
            )
        }
        return (
            <section className="recently portfolio bg-white-3">
                <div className="container">
                    <div className="sec-title">
                        <h2><span>Properties </span>{this.props.type}</h2>
                        <p>Find your dream home from our {this.props.type === "For Sale" ? "Sale" : "Rent"} added
                            properties.</p>
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
