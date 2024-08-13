import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import cs from '../components/img/CS.jpg';
import jate from '../components/img/jate.jpg';


function MoreWork() {
    return (
        <Container className='mb-5 d-flex justify-content-center align-items-center'>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
                <Col>
                    <Card className="shadow text-center" style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src={jate} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>JATE</Card.Title>
                            <Card.Text className="flex-grow-1">
                                A project that turns your browser into a simple text editor, and can be installed on your system.
                            </Card.Text>
                            <div className="mt-auto">
                                <a href="https://pwa-text-editor-j87s.onrender.com" target="_blank" className="btn btn-primary">
                                    Website
                                </a>{' '}
                                <a href="https://github.com/Splash1972/pwa-text-editor" target="_blank" className="btn btn-primary">
                                    GitHub Repo</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow text-center" style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src={cs} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Coming Soon</Card.Title>
                            <Card.Text className="flex-grow-1">
                                Future Projects will be displayed here
                            </Card.Text>
                            <div className="mt-auto">
                                <a href="#" target="_blank" className="btn btn-primary">
                                    Website
                                </a>{' '}
                                <a href="#" target="_blank" className="btn btn-primary">
                                    GitHub Repo</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow text-center" style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src={cs} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Coming Soon</Card.Title>
                            <Card.Text className="flex-grow-1">
                                Future Projects will be displayed here
                            </Card.Text>
                            <div className="mt-auto">
                                <a href="#" target="_blank" className="btn btn-primary">
                                    Website
                                </a>{' '}
                                <a href="#" target="_blank" className="btn btn-primary">
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

export default MoreWork;