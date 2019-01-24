import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


export default class Featurette extends Component {
    render() {
        return (
            <Container className="marketing">
                <hr className="featurette-divider" />
                <Row className="featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                        </p>

                    </div>
                    <div className="col-md-5">
                        <Image className="featurette-image img-fluid mx-auto"
                            data-src="holder.js/500x500/auto"
                            alt="Generic"
                        />
                    </div>
                </Row>

                <hr className="featurette-divider" />
                <Row className="featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>

                    </div>
                    <div className="col-md-5 order-md-1">
                        <Image className="featurette-image img-fluid mx-auto"
                            data-src="holder.js/500x500/auto"
                            alt="Generic"
                        />
                    </div>
                </Row>


                <hr className="featurette-divider" />

                <Row className="featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">And lastly, this one
                         <span className="text-muted">Checkmate.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <Image className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
                    </div>
                </Row>

                <hr className="featurette-divider" />

            </Container>
        )
    }
}
