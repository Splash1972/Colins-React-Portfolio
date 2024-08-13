import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import tb from './img/techblog.jpg';
import nt from './img/notetaker.jpg';
import iq from './img/IQ.png';

function Body() {
    return (
        <Container className='mb-5 d-flex justify-content-center align-items-center'>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
                <Col>
                    <Card className="shadow text-center" style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src={iq} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>IntelliQuest</Card.Title>
                            <Card.Text className="flex-grow-1">
                                A learning app that helps you improve your coding skills with various activities.
                            </Card.Text>
                            <div className="mt-auto">
                                <a href="https://intelliquest.onrender.com/" target="_blank" className="btn btn-primary">
                                    Website
                                </a>{' '}
                                <a href="https://github.com/IVIonsters/IntelliQuest" target="_blank" className="btn btn-primary">
                                    GitHub Repo</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow text-center" style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src={nt} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Note Taker</Card.Title>
                            <Card.Text className="flex-grow-1">
                                A website that allows you to take notes and displays them on the screen.
                            </Card.Text>
                            <div className="mt-auto">
                                <a href="https://colins-note-taker.onrender.com" target="_blank" className="btn btn-primary">
                                    Website
                                </a>{' '}
                                <a href="https://github.com/Splash1972/Note-Taker" target="_blank" className="btn btn-primary">
                                    GitHub Repo</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow text-center" style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src={tb} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Tech Blog</Card.Title>
                            <Card.Text className="flex-grow-1">
                                An app that allows a user to register/login and post their thoughts on all things tech.
                            </Card.Text>
                            <div className="mt-auto">
                                <a href="https://colin-s-tech-blog.onrender.com/" target="_blank" className="btn btn-primary">
                                    Website
                                </a>{' '}
                                <a href="https://github.com/Splash1972/Colin-s-Tech-Blog" target="_blank" className="btn btn-primary">
                                    GitHub Repo</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>

        </Container>
    );
}

export default Body;