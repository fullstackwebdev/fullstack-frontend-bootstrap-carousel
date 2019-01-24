import React, { Component } from 'react';
import { Form, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CarouselNavbar extends Component {
    render() {
        return (
            <header>
                <Navbar className="navbar-dark fixed-top bg-dark">
                    <Navbar.Brand href="">Carousel</Navbar.Brand>
                    <Navbar.Toggle>
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">

                            <Nav.Link href="#">Home <span className="sr-only">(current)</span>
                            </Nav.Link>

                            <Nav.Link href="#">Link</Nav.Link>

                            <Nav.Link disabled href="#">Disabled</Nav.Link>

                        </Nav>
                        <Form inline className="mt-2 mt-md0">
                            <Form.Control type="text" className="mr-sm-2" placeholder="Search">
                            </Form.Control>
                            <Button variety="success" className="my-2 my-sm-0">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </header >
        )
    }
}
