import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import cs from '../components/img/CS.jpg';


function MoreWork() {
    return (
        <Container className='mb-5 d-flex justify-content-center align-items-center'>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cs} />
                        <Card.Body>
                            <Card.Title>Coming Soon</Card.Title>
                            <Card.Text>
                                Future Projects will be displayed here
                            </Card.Text>
                            <a href="#" target="_blank" className="btn btn-primary">
                                Website
                            </a>{' '}
                            <a href="#" target="_blank" className="btn btn-primary">
                                GitHub Repo</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cs} />
                        <Card.Body>
                            <Card.Title>Coming Soon</Card.Title>
                            <Card.Text>
                            Future Projects will be displayed here
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
                        <Card.Img variant="top" src={cs} />
                        <Card.Body>
                            <Card.Title>Coming Soon</Card.Title>
                            <Card.Text>
                            Future Projects will be displayed here
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

export default MoreWork;