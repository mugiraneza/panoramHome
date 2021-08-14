import React, {Component} from 'react';
import HeaderParalax from "../../components/headerParalax/HeaderParalax";
import SearchParalax from "../../components/searchParalax/SearchParalax";
import PopularPlace from "../../components/popularPlace/PopularPlace";
import PropertyForSale from "../../components/propertiesForSale/PropertyForSale";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

class MainNavRouter extends Component {
    render() {
        return (
            <>
                <div id="wrapper">
                    <HeaderParalax>
                    </HeaderParalax>
                    <div className="clearfix">
                    </div>
                    <SearchParalax>
                    </SearchParalax>
                    <PopularPlace>
                    </PopularPlace>
                    <PropertyForSale type="For Sale">
                    </PropertyForSale>
                    <PropertyForSale type="For Rent">
                    </PropertyForSale>
                    <WhyChooseUs>
                    </WhyChooseUs>
                </div>
            </>
        );
    }
}

export default MainNavRouter;
