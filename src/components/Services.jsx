import { Carousel, Container, Row, Col } from 'react-bootstrap';
import dumpTruck from '../assets/dump-truck.jpg';
import image2 from '../assets/IMG_4365.jpg';
import image3 from '../assets/IMG_4366.jpg';
import image4 from '../assets/IMG_4367.jpg';
import image5 from '../assets/IMG_4368.jpg';
import image6 from '../assets/IMG_4444.jpg';
import image7 from '../assets/IMG_4457.jpg';
import image8 from '../assets/IMG_4452.jpg';
import image9 from '../assets/IMG_4453.jpg';
import image10 from '../assets/IMG_4457.jpg';
import image11 from '../assets/IMG_4458.jpg';
import image12 from '../assets/IMG_4503.jpg';
import image13 from '../assets/IMG_4504.jpg';
import image14 from '../assets/IMG_4505.jpg';
import image15 from '../assets/IMG_4507.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
    const images = [
        { src: dumpTruck, alt: "Dump Truck" },
        { src: image2, alt: "Service Image 2" },
        { src: image3, alt: "Service Image 3" },
        { src: image4, alt: "Service Image 4" },
        { src: image5, alt: "Service Image 5" },
        { src: image6, alt: "Service Image 6" },
        { src: image7, alt: "Service Image 7" },
        { src: image8, alt: "Service Image 8" },
        { src: image9, alt: "Service Image 9" },
        { src: image10, alt: "Service Image 10" },
        { src: image11, alt: "Service Image 11" },
        { src: image12, alt: "Service Image 12" },
        { src: image13, alt: "Service Image 13" },
        { src: image14, alt: "Service Image 14" },
        { src: image15, alt: "Service Image 15" }
    ];

    return (
        <Container fluid className="services container-fluid">
            <Row>
                {/* Carousel on the left side */}
                <Col lg={6} md={12}>
                    <Carousel className="carousel-container">
                        {images.map((image, index) => (
                            <Carousel.Item key={index} className="carousel-item">
                                <div className="image-wrapper">
                                    <img
                                        className="d-block h-100 carousel-image"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>

                {/* Text on the right side */}
                <Col lg={6} md={12} className="d-flex align-items-center">
                    <div className="text-container">
                        <h1 className='text-light'>Our Services</h1>
                        <p className=' custom-p'>
                            At Junked Out LLC, we provide top-notch junk removal and small structure demolition services for homes and businesses. Whether you need to clear out a single item or an entire home, we're here to help. Our comprehensive services include:
                        </p>
                        <h2 className='text-light'>Junk Removal:</h2>
                        <ul>
                            <li>Mattresses</li>
                            <li>Appliances</li>
                            <li>Yard waste</li>
                            <li>Furniture</li>
                            <li>Bagged or boxed garbage</li>
                            <li>And more!</li>
                        </ul>
                        <h2 className='text-light'>Small Structure Demolition:</h2>
                        <ul>
                            <li>Sheds</li>
                            <li>Treehouses</li>
                            <li>Hot tubs</li>
                            <li>Gazebos</li>
                            <li>Play sets</li>
                            <li>And more!</li>
                        </ul>
                        <p className='custom-p'>Get your free <Link to="/estimate" className='text-dark'>Estimate</Link></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;
