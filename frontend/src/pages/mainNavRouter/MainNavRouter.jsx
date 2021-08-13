import React, {Component} from 'react';
import HeaderParalax from "../../components/headerParalax/HeaderParalax";
import SearchParalax from "../../components/searchParalax/SearchParalax";
import PopularPlace from "../../components/popularPlace/PopularPlace";
import PropertyForSale from "../../components/propertiesForSale/PropertyForSale";

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
                    <PropertyForSale>
                    </PropertyForSale>
                </div>
            </>
        );
    }
}

export default MainNavRouter;
