import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel, Image, Button } from 'react-bootstrap';
import './BootstrapCarousel.css';
import TopCarousel from './TopCarousel.js';
import Marketing from './Marketing.js';
import Featurette from './Featurette.js';

const Footer = () => (
    <div>
        <Container>
            <p className="float-right"><Link to="" href="#">Back top top</Link></p>
            <p>&copy; 2017-2018 Company, Inc. &middot;
            <Link to="#" href="#">Privacy</Link>
                &middot;
            <Link to="#" href="#">Terms</Link>
            </p>
        </Container >
    </div >
);

export default class BootstrapCarousel extends Component {
    render() {
        return (
            <main>
                <TopCarousel />
                <Marketing />
                <Featurette />
                <Footer />
            </main >
        )
    }
}

