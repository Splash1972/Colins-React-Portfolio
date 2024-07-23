import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function AboutMe() {
  const [selectedPill, setSelectedPill] = useState('first'); // Initial selected pill

  const handleSelect = (eventKey) => {
    setSelectedPill(eventKey); // Update state based on eventKey
  };

  const getContent = () => {
    switch (selectedPill) {
      case 'first':
        return (
          <>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              I've always been interested in coding, and computer software in general.  My career trajectory changed after the pandemic happened, so eventually I enrolled in the UCF (University of Central Florida) Full-Stack Developer's Bootcamp.  I'm here and ready to build!
            </Card.Text>
            <Card.Footer>Email me using the link above if you would like to work with me!</Card.Footer> 
          </>
        );
      case 'link':
        return (
          <>
            <Card.Title>About Me</Card.Title>
            
        <Card.Text>I am a full-time drummer with Blue Man Group here in Florida, and an on-call drummer at Cirque Du Soleil's "Drawn To Life".  I've been playing drums for over 30 years, and I'm also a music producer and songwriter and have songs featured in TV shows like The Bachlorette, All Girls' Garage, Life Off The Grid, and several others.

        </Card.Text>
        <Card.Footer>Email me using the link above if you would like to work with me!</Card.Footer>  
          </>
        );
      default:
        return null; // Handle default case if needed
    }
  };

  return (
    <Container className='text-center'>
    <Card className='shadow mb-5'>
      <Card.Header>
        <Nav variant="pills" activeKey={selectedPill} onSelect={handleSelect}> {/* Update state on select */}
          <Nav.Item>
            <Nav.Link eventKey="first">Developer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link">Drummer/Producer</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>{getContent()}</Card.Body> {/* Conditionally render content */}
    </Card>
    </Container>
  );
}

export default AboutMe;
