import React, {Component} from 'react';
import "./style.css"
import {
    FaAngleLeft, FaAngleRight,
    FaCalendar,
    FaCar,
    FaCheckSquare,
    FaGraduationCap, FaMapMarkerAlt, FaMinus,
    FaPlus, FaRegCheckSquare,
    FaRegSquare,
    FaStar,
    FaStarHalf
} from "react-icons/all";
import {reqGetSingleProperty} from "../../api/url";
import {roundDecimal} from "../../gb_function/global_func";
import Slider from "react-slick";
// import {Carousel} from "react-responsive-carousel";

const carousel_config = {
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0'
}

class SingleProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let id = this.props.id;
        if (id) {
            reqGetSingleProperty(id).then((res) => {
                this.setState({data: res.data});
            })
        } else {
        }
    }

    load_plan = (plans) => {
        if (plans !== undefined) {
            return plans.map((plan, idx_plan) => {
                return (
                    <div key={idx_plan} className="floor-plan property wprt-image-video w50 pro">
                        <h5>Floor {plan.floorNum} Plans</h5>
                        <img alt="image" src={plan.plan}/>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <>
                <section className="single-proper blog details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 blog-pots">
                                <div className="row">
                                    <div className="col-md-12">
                                        <section className="headings-2 pt-0">
                                            <div className="pro-wrapper">
                                                <div className="detail-wrapper-body" style={{width: "60%"}}>
                                                    <div className="listing-title-bar">
                                                        <h3>{this.state.data.name} <span
                                                            className="mrg-l-5 category-tag test">{this.state.data.status}</span>
                                                        </h3>
                                                        <div className="mt-0">
                                                            <a href="#listing-location" className="listing-address">
                                                                <FaMapMarkerAlt
                                                                    className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5">

                                                                </FaMapMarkerAlt>{this.state.data.address}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single detail-wrapper mr-2">
                                                    <div className="detail-wrapper-body">
                                                        <div className="listing-title-bar">
                                                            <h4>$ {this.state.data.cost}</h4>
                                                            <div className="mt-0">
                                                                <a href="#listing-location" className="listing-address">
                                                                    <p>$ {
                                                                        roundDecimal((this.state.data.cost / this.state.data.surface), 2)
                                                                    } /sq ft</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div id="listingDetailsSlider"
                                             className="carousel listing-details-sliders slide mb-70">
                                            <h5 className="mb-4">Gallery</h5>
                                            <Slider {...carousel_config} className="carousel-inner">
                                                <div className="active item carousel-item" data-slide-number="0">
                                                    <img src={this.state.data.presentation_image} className="img-fluid"
                                                         alt="slider-listing"/>
                                                </div>
                                                <div className="item carousel-item" data-slide-number="1">
                                                    <img src={this.state.data.presentation_image} className="img-fluid"
                                                         alt="slider-listing"/>
                                                </div>
                                                <div className="item carousel-item" data-slide-number="2">
                                                    <img src={this.state.data.presentation_image} className="img-fluid"
                                                         alt="slider-listing"/>
                                                </div>
                                                <div className="item carousel-item" data-slide-number="4">
                                                    <img src={this.state.data.presentation_image} className="img-fluid"
                                                         alt="slider-listing"/>
                                                </div>
                                                <div className="item carousel-item" data-slide-number="5">
                                                    <img src={this.state.data.presentation_image} className="img-fluid"
                                                         alt="slider-listing"/>
                                                </div>
                                            </Slider>
                                            {/*main slider carousel nav controls*/}
                                            <ul className="carousel-indicators smail-listing list-inline">
                                                <li className="list-inline-item active">
                                                    <a id="carousel-selector-0" className="selected" data-slide-to="0"
                                                       data-target="#listingDetailsSlider">
                                                        <img src={this.state.data.presentation_image}
                                                             className="img-fluid"
                                                             alt="listing-small"/>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a id="carousel-selector-1" data-slide-to="1"
                                                       data-target="#listingDetailsSlider">
                                                        <img src={this.state.data.presentation_image}
                                                             className="img-fluid"
                                                             alt="listing-small"/>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a id="carousel-selector-2" data-slide-to="2"
                                                       data-target="#listingDetailsSlider">
                                                        <img src={this.state.data.presentation_image}
                                                             className="img-fluid"
                                                             alt="listing-small"/>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a id="carousel-selector-3" data-slide-to="3"
                                                       data-target="#listingDetailsSlider">
                                                        <img src={this.state.data.presentation_image}
                                                             className="img-fluid"
                                                             alt="listing-small"/>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a id="carousel-selector-4" data-slide-to="4"
                                                       data-target="#listingDetailsSlider">
                                                        <img src={this.state.data.presentation_image}
                                                             className="img-fluid"
                                                             alt="listing-small"/>
                                                    </a>
                                                </li>
                                            </ul>
                                            {/*main slider carousel items*/}
                                        </div>
                                        <div className="blog-info details mb-30">
                                            <h5 className="mb-4">Description</h5>
                                            {/*<p className="mb-3">*/}
                                            {this.state.data.description}
                                            {/*</p>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="single homes-content details mb-30">
                                    <h5 className="mb-4">Property Details</h5>
                                    <ul className="homes-list clearfix">
                                        <li>
                                            <span className="font-weight-bold mr-1">Property ID:</span>
                                            <span className="det">{this.state.data.id}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Property Type:</span>
                                            <span className="det">{this.state.data.type}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Property status:</span>
                                            <span className="det">{this.state.data.status}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Property Price:</span>
                                            <span className="det">${this.state.data.cost}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Rooms:</span>
                                            <span className="det">{this.state.data.room}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Bedrooms:</span>
                                            <span className="det">{this.state.data.bedroom}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Bath:</span>
                                            <span className="det">{this.state.data.bathroom}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Garages:</span>
                                            <span className="det">{this.state.data.garage}</span>
                                        </li>
                                        <li>
                                            <span className="font-weight-bold mr-1">Year Built:</span>
                                            <span className="det">{this.state.data.build_in}</span>
                                        </li>
                                    </ul>
                                    {/*title*/}
                                    <h5 className="mt-5">Amenities</h5>
                                    {/*cars List*/}
                                    <ul className="homes-list clearfix">
                                        <li>
                                            {
                                                this.state.data.airCond ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Air Cond</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.balcony ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Balcony</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.balcony ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Internet</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.dishwasher ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Dishwasher</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.bedding ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Bedding</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.cableTV ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Cable TV</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.parking ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Parking</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.pool ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Pool</span>
                                        </li>
                                        <li>
                                            {
                                                this.state.data.fridge ?
                                                    <FaRegCheckSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegCheckSquare>
                                                    :
                                                    <FaRegSquare className="fa fa-check-square" aria-hidden="true">
                                                    </FaRegSquare>
                                            }
                                            <span>Fridge</span>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    this.load_plan(this.state.data.planProperties)
                                }
                                <div className="floor-plan property wprt-image-video w50 pro">
                                    <h5>What's Nearby</h5>
                                    <div className="property-nearby">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="nearby-info mb-4">
                                                <span className="nearby-title mb-3 d-block text-info">
                                                    <FaGraduationCap className="fas fa-graduation-cap mr-2">
                                                    </FaGraduationCap>
                                                    <b className="title">Education</b>
                                                </span>
                                                    <div className="nearby-list">
                                                        <ul className="property-list list-unstyled mb-0">
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">Education Mandarin</h6>
                                                                <span>(15.61 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">Marry's Education</h6>
                                                                <span>(15.23 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStarHalf
                                                                            className="fas fa-star-half fa-xs"></FaStarHalf>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">The Kaplan</h6>
                                                                <span>(15.16 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="fas fa-star fa-xs"></FaStar></li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="fas fa-star fa-xs"></FaStar></li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="fas fa-star-half fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="far fa-star fa-xs"></FaStar></li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="far fa-star fa-xs"></FaStar></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nearby-info mb-4">
                                            <span className="nearby-title mb-3 d-block text-success">
                                              <i className="fas fa-user-md mr-2"></i><b className="title">Health & Medical</b>
                                            </span>
                                                    <div className="nearby-list">
                                                        <ul className="property-list list-unstyled mb-0">
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">Natural Market</h6>
                                                                <span>(13.20 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStarHalf
                                                                            className="fas fa-star-half fa-xs"></FaStarHalf>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">Food For Health</h6>
                                                                <span>(13.22 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar
                                                                            className="fas fa-star-half fa-xs"></FaStar>
                                                                    </li>

                                                                </ul>
                                                            </li>
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">A Matter of Health</h6>
                                                                <span>(13.34 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStarHalf
                                                                            className="fas fa-star-half fa-xs"></FaStarHalf>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nearby-info">
                                            <span className="nearby-title mb-3 d-block text-danger">
                                                <FaCar className="fas fa-car mr-2"></FaCar><b
                                                className="title">Transportation</b>
                                            </span>
                                                    <div className="nearby-list">
                                                        <ul className="property-list list-unstyled mb-0">
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">Airport Transportation</h6>
                                                                <span>(11.36 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStarHalf
                                                                            className="fas fa-star-half fa-xs"></FaStarHalf>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">NYC Executive Limo</h6>
                                                                <span>(11.87 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStarHalf
                                                                            className="fas fa-star-half fa-xs"></FaStarHalf>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="d-flex">
                                                                <h6 className="mb-3 mr-2">Empire Limousine</h6>
                                                                <span>(11.52 miles)</span>
                                                                <ul className="list-unstyled list-inline ml-auto">
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="fas fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStarHalf
                                                                            className="fas fa-star-half fa-xs"></FaStarHalf>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                    <li className="list-inline-item m-0 text-warning">
                                                                        <FaStar className="far fa-star fa-xs"></FaStar>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="property-location map">
                                    <h5>Location</h5>
                                    <div className="divider-fade"></div>
                                    <div id="map-contact" className="contact-map"></div>
                                </div>
                            </div>
                            <aside className="col-lg-4 col-md-12 car">
                                <div className="single widget">
                                    {/*Start: Schedule a Tour*/}
                                    <div className="schedule widget-boxed mt-33 mt-0">
                                        <div className="widget-boxed-header">
                                            <h4>
                                                <FaCalendar className="fa fa-calendar pr-3 padd-r-10"></FaCalendar>
                                                Schedule a Tour
                                            </h4>
                                        </div>
                                        <div className="widget-boxed-body">
                                            <div className="row mb-3">
                                                <div className="col-lg-6 col-md-12 book">
                                                    <input type="date" id="reservation-date"
                                                           className="form-control"/>
                                                </div>
                                                <div className="col-lg-6 col-md-12 book2">
                                                    <input type="time" id="reservation-time" className="form-control"
                                                           readOnly=""/>
                                                </div>
                                            </div>
                                            <div className="row mrg-top-15 mb-3">
                                                <div className="col-lg-6 col-md-12 mt-4">
                                                    <label className="mb-4">Adult</label>
                                                    <div className="input-group">
                                                    <span className="input-group-btn">
                                                        <button type="button"
                                                                className="btn counter-btn theme-cl btn-number"
                                                                disabled="disabled" data-type="minus"
                                                                data-field="quant[1]">
                                                            <FaMinus className="fa fa-minus"></FaMinus>
                                                        </button>
                                                    </span>
                                                        <input type="text" name="quant[1]"
                                                               className="border-0 text-center form-control input-number"
                                                               data-min="0" data-max="10" value="0" onChange={() => {
                                                            console.log("")
                                                        }}/>
                                                        <span className="input-group-btn">
                                                        <button type="button"
                                                                className="btn counter-btn theme-cl btn-number"
                                                                data-type="plus" data-field="quant[1]">
                                                            <FaPlus className="fa fa-plus"></FaPlus>
                                                        </button>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 mt-4">
                                                    <label className="mb-4">Children</label>
                                                    <div className="input-group">
                                                    <span className="input-group-btn">
                                                         <button type="button"
                                                                 className="btn counter-btn theme-cl btn-number"
                                                                 disabled="disabled" data-type="minus"
                                                                 data-field="quant[2]">
                                                             <FaMinus className="fa fa-minus"></FaMinus>
                                                         </button>
                                                    </span>
                                                        <input type="text" name="quant[2]"
                                                               className="border-0 text-center form-control input-number"
                                                               data-min="0" data-max="10" value="0" onChange={() => {
                                                            console.log("")
                                                        }}/>
                                                        <span className="input-group-btn">
                                                             <button type="button"
                                                                     className="btn counter-btn theme-cl btn-number"
                                                                     data-type="plus" data-field="quant[2]">
                                                                    <FaPlus className="fa fa-plus"></FaPlus>
                                                             </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="payment-method.html"
                                               className="btn reservation btn-radius theme-btn full-width mrg-top-10">Submit
                                                Request</a>
                                        </div>
                                    </div>
                                    {/*End: Schedule a Tour*/}
                                    {/*end author-verified-badge*/}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default SingleProperty;
