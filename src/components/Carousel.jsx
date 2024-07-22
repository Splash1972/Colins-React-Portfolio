import Carousel from 'react-bootstrap/Carousel';

function Slides() {
    return (
        <Carousel data-bs-theme="dark" style={{ marginTop: '1rem', marginBottom: '1rem' }} >
            <Carousel.Item>
                <p className="text-center mb-5">Colin Is A Full-Stack Developer</p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="text-center mb-5">Graduated from UCF's Coding BootCamp 2024</p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="text-center mb-5">Click The Link Above To Send Me An Email!</p>
            </Carousel.Item>
        </Carousel>


    );
}

export default Slides;