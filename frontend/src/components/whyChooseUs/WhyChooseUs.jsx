import React, {Component} from 'react';

class WhyChooseUs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section class="how-it-works bg-white">
                <div class="container">
                    <div class="sec-title">
                        <h2><span>Why </span>Choose Us</h2>
                        <p>We provide full service at every step.</p>
                    </div>
                    <div class="row service-1">
                        <article class="col-lg-4 col-md-6 col-xs-12 serv" data-aos="zoom-in">
                            <div class="serv-flex">
                                <div class="art-1 img-13">
                                    <img src="images/icons/icon-4.svg" alt=""/>
                                    <h3>Wide Renge Of Properties</h3>
                                </div>
                                <div class="service-text-p">
                                    <p class="text-center">lorem ipsum dolor sit amet, consectetur pro adipisici
                                        consectetur debits adipisicing lacus consectetur Business Directory.</p>
                                </div>
                            </div>
                        </article>
                        <article class="col-lg-4 col-md-6 col-xs-12 serv" data-aos="zoom-in">
                            <div class="serv-flex">
                                <div class="art-1 img-14">
                                    <img src="images/icons/icon-5.svg" alt=""/>
                                    <h3>Trusted by thousands</h3>
                                </div>
                                <div class="service-text-p">
                                    <p class="text-center">lorem ipsum dolor sit amet, consectetur pro adipisici
                                        consectetur debits adipisicing lacus consectetur Business Directory.</p>
                                </div>
                            </div>
                        </article>
                        <article class="col-lg-4 col-md-6 col-xs-12 serv mb-0 pt" data-aos="zoom-in">
                            <div class="serv-flex arrow">
                                <div class="art-1 img-15">
                                    <img src="images/icons/icon-6.svg" alt=""/>
                                    <h3>Financing made easy</h3>
                                </div>
                                <div class="service-text-p">
                                    <p class="text-center">lorem ipsum dolor sit amet, consectetur pro adipisici
                                        consectetur debits adipisicing lacus consectetur Business Directory.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}
export default WhyChooseUs;
