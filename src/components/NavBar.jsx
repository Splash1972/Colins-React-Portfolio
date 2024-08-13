import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from 'react-bootstrap/Collapse';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const currentPage = useLocation().pathname;
  const [open, setOpen] = useState(false);
  return (
  <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand><Button className='btn-light border'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >Colin Robinson's React Portfolio
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className='fs-6'>
          Colin is a professional drummer/producer and full-stack developer
        </div>
      </Collapse>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" className='text-decoration-none'>Home</Link></Nav.Link>
            <Nav.Link href="mailto:colindrums@me.com">Email Me</Nav.Link>
            <NavDropdown title="More Here" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://music.apple.com/us/artist/colin-robinson/1485445835" target="_blank">Music I've Written</NavDropdown.Item>
              <NavDropdown.Item><Link to="/MoreWork" className='text-decoration-none'>
                More Work Examples
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/BlueMan" className='text-decoration-none'>Fun Fact</Link>
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/AboutMe" className='text-decoration-none'>
                About Me
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
