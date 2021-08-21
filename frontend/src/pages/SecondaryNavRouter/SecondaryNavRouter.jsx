import React, {Component} from 'react';
import HeaderSimple from "../../components/headerSimple/HeaderSimple";
import SingleProperty from "../../components/singleProperty/SingleProperty";

class SecondaryNavRouter extends Component {

    render() {
        return (
            <>
                <div id="wrapper">
                    <HeaderSimple>
                    </HeaderSimple>
                    <div className="clearfix">
                    </div>
                    <SingleProperty>
                    </SingleProperty>
                </div>
            </>
        );
    }
}

export default SecondaryNavRouter;
