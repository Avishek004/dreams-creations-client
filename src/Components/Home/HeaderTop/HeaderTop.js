import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/" className="d-flex text-white text-uppercase fw-bolder">Dream Creations</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex justify-content-end">
                    <Nav.Link href="/home" className="text-white">Home</Nav.Link>
                    <Nav.Link href="/dashboard" className="text-white">Admin</Nav.Link>
                    <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                    <Nav.Link href="/dashboard" className="text-white">Dashboard</Nav.Link>
                    <Nav.Link href="/" className="text-white">Contact US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderTop;