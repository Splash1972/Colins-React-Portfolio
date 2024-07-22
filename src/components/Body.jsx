import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import tb from './img/techblog.jpg';
import nt from './img/notetaker.jpg'
import jate from './img/jate.jpg'

function Body() {
    return (
        <Container className='mb-5'>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={nt} />
                        <Card.Body>
                            <Card.Title>Note Taker</Card.Title>
                            <Card.Text>
                                A website that allows you to take notes and displays them on the screen.
                            </Card.Text>
                            <a href="https://colin-s-tech-blog.onrender.com/" target="_blank" className="btn btn-primary">
                                Website
                            </a>{' '}
                            <a href="https://github.com/Splash1972/Colin-s-Tech-Blog" target="_blank" className="btn btn-primary">
                                GitHub Repo</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tb} />
                        <Card.Body>
                            <Card.Title>Tech Blog</Card.Title>
                            <Card.Text>
                                An app that allows a user to register/login and post their thoughts on all things tech.
                            </Card.Text>
                            <a href="https://colin-s-tech-blog.onrender.com/" target="_blank" className="btn btn-primary">
                                Website
                            </a>{' '}
                            <a href="https://github.com/Splash1972/Colin-s-Tech-Blog" target="_blank" className="btn btn-primary">
                                GitHub Repo</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={jate} />
                        <Card.Body>
                            <Card.Title>JATE</Card.Title>
                            <Card.Text>
                                A project that turns your browser into a simple text editor, and can be installed on your system.
                            </Card.Text>
                            <a href="https://colin-s-tech-blog.onrender.com/" target="_blank" className="btn btn-primary">
                                Website
                            </a>{' '}
                            <a href="https://github.com/Splash1972/Colin-s-Tech-Blog" target="_blank" className="btn btn-primary">
                                GitHub Repo</a>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>
            
        </Container>
    );
}

export default Body;