import React, {Component} from 'react';
import {reqGetCities} from "../../api/url";

class PopularPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city_list: []
        };
    }

    componentDidMount() {
        this.load_city();
    }

    load_city = () => {
        reqGetCities().then((res) => {
            this.setState({city_list: res.data.results})
        })
    }

    render() {

        return (
            <section className="feature-categories bg-white-3">
                <div className="container">
                    <div className="sec-title">
                        <h2><span>Popular </span>Places</h2>
                        <p>Properties In Most Popular Places.</p>
                    </div>
                    <div className="row">
                        {
                            this.state.city_list.map((city, index) => {
                                return (
                                    <div className="col-xl-4 col-lg-6 col-sm-6" key={city.id} data-aos="zoom-in">
                                        <div className="small-category-2">
                                            <div className="small-category-2-thumb img-1">
                                                <a href="properties-map.html">
                                                    <img src={city.photo} alt=""/>
                                                </a>
                                            </div>
                                            <div className="sc-2-detail">
                                                <h4 className="sc-jb-title"><a href="properties-map.html">
                                                    {city.name}
                                                </a></h4>
                                                <span>{city.count_properties}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default PopularPlace;