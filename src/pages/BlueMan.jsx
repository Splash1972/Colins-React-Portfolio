import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import BM from '../components/img/IMG_2950.jpeg';

function BlueMan() {
    return (
        <Container className='text-center d-flex justify-content-center align-items-center'>
            <Card className='shadow' style={{ width: '25rem' }}>
                <Card.Img variant="top" src={BM} />
                <Card.Body>
                    <Card.Title>Fun Fact</Card.Title>
                    <Card.Text>
                        That's me, second from the right.  I joined Blue Man Group in 2005 in Toronto Canada, and moved to Florida with them in 2007, performing at Universal Studios
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BlueMan;