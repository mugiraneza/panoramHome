import React from 'react';

const  CityCard = ({city}) => {
    console.log(city)
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
};
export default CityCard;