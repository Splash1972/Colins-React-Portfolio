import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Body() {
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card One</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Website</Button>{' '}
                            <Button variant="primary">GitHub Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Website</Button>{' '}
                            <Button variant="primary">GitHub Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Website</Button>{' '}
                            <Button variant="primary">GitHub Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Website</Button>{' '}
                            <Button variant="primary">GitHub Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Website</Button>{' '}
                            <Button variant="primary">GitHub Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Website</Button>{' '}
                            <Button variant="primary">GitHub Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>
        </Container>
    );
}

export default Body;