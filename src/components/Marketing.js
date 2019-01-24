import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default class Marketing extends Component {
    render() {
        return (
            <div>
                <Container className="marketing">
                    <Row>
                        <Col className="col-lg-4">
                            <Image roundedCircle
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                alt="Generic Placeholder image"
                                width="140"
                                height="140" />
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <Button variant="secondary" href="#">View details  &raquo;</Button>
                        </Col>
                        <div className="col-lg-4">
                            <Image roundedCircle
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                alt="Generic Placeholder image"
                                width="140"
                                height="140" />
                            <h2>Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <Button variant="secondary" href="#">View details  &raquo;</Button>
                        </div>
                        <div className="col-lg-4">
                            <Image roundedCircle
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                alt="Generic Placeholder image"
                                width="140"
                                height="140" />
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <Button variant="secondary" href="#">View details  &raquo;</Button>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
