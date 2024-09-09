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
import image16 from '../assets/IMG_4520.jpg';
import image17 from '../assets/IMG_4521.jpg';
import image18 from '../assets/IMG_4519.jpg';
import image19 from '../assets/IMG_4518.jpg';
import image20 from '../assets/IMG_4516.jpg';
import image21 from '../assets/IMG_4517.jpg';
import image22 from '../assets/IMG_4533.jpg';
import image23 from '../assets/IMG_4532.jpg';
import image24 from '../assets/IMG_4531.jpg';
import image25 from '../assets/IMG_4530.jpg';
import image26 from '../assets/IMG_4529.jpg';
import image27 from '../assets/IMG_4528.jpg';
import image28 from '../assets/IMG_4527.jpg';
import image29 from '../assets/IMG_4525.jpg';
import image30 from '../assets/IMG_4524.jpg';
import image31 from '../assets/IMG_4523.jpg';
import image32 from '../assets/IMG_4522.jpg';
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
        { src: image15, alt: "Service Image 15" },
        { src: image16, alt: "Service Image 16" },
        { src: image17, alt: "Service Image 17" },
        { src: image18, alt: "Service Image 18" },
        { src: image19, alt: "Service Image 19" },
        { src: image20, alt: "Service Image 20" },
        { src: image21, alt: "Service Image 21" },
        { src: image22, alt: "Service Image 22" },
        { src: image23, alt: "Service Image 23" },
        { src: image24, alt: "Service Image 24" },
        { src: image25, alt: "Service Image 25" },
        { src: image26, alt: "Service Image 26" },
        { src: image27, alt: "Service Image 27" },
        { src: image28, alt: "Service Image 28" },
        { src: image29, alt: "Service Image 29" },
        { src: image30, alt: "Service Image 30" },
        { src: image31, alt: "Service Image 31" },
        { src: image32, alt: "Service Image 32" }
    ];

    return (
        <Container fluid className="services container-fluid">
            <Row>
                {/* Text on the top for mobile (md and smaller) */}
                <Col lg={6} md={12} className="order-md-1 order-lg-2 d-flex align-items-center">
                    <div className="text-container">
                        <h1 className='text-light'>Our Services</h1>
                        <p className='custom-p'>
                            At Junked Out LLC, we specialize in top-tier junk removal and small structure demolition services for both homes and businesses. Whether you need to get rid of a single item or clear out an entire property, we’re ready to assist. Our full range of services is available for residential and commercial needs alike.
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

                {/* Carousel underneath text on mobile (md and smaller) */}
                <Col lg={6} md={12} className="order-md-2 order-lg-1">
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
            </Row>
        </Container>
    );
};

export default Services;
