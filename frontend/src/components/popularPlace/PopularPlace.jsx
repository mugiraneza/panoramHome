import React, {Component} from 'react';
import {reqGetCities} from "../../api/url";
import CityCard from "../cityCard/CityCard";

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
                                    <CityCard key={index} city={city}/>
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