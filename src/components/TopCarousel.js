import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Carousel, Image, Button } from 'react-bootstrap';

export default class TopCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel slide indicators  >

                    <Carousel.Item active="true">
                        <Image
                            className="first-slide"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
                        <Container>
                            <Carousel.Caption >
                                <h1>Example Headline</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <Button variant="primary" href="#" role="button">Sign up today</Button>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image
                            className="second-slide"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                        />
                        <Container>
                            <Carousel.Caption>
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <Button variant="primary" href="#" role="button">Learn more</Button>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="third-slide"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                        />
                        <Container>
                            <Carousel.Caption>
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <Button variant="primary" href="#" role="button">Third one</Button>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>

                </Carousel>

            </div>
        )
    }
}
