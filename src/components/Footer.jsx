import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#f8f9fa', // Adjust background color as needed
      };
    return (
        <Navbar expand="lg" style={footerStyle} className="bg-body-tertiary">
            <Container className='mt-2 mb-5'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-center">
                    <a href="https://www.linkedin.com/in/colin-robinson-10a4b947/" target="_blank" className="btn btn-light border">
                                LinkedIn</a>
                                <a href="https://github.com/Splash1972" target="_blank" className="btn btn-light border">
                                GitHub</a>
                                <a href="https://www.instagram.com/robinsoncolin72/" target="_blank" className="btn btn-light border">
                                Instagram</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer
