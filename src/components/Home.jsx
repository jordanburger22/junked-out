import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import logo from '../assets/image.png';
import altLogo from '../assets/junkedout-logo.jpg';
import ContactInfo from './ContactInfo';
import { Link } from 'react-router-dom';

const Home = () => {
    const cards = [
        { text: 'Efficient & Eco-Friendly', img: logo },
        { text: 'Licensed & Insured', img: logo },
        { text: 'Customer Satisfaction Guaranteed', img: logo }
    ];

    const cardElements = cards.map((card, i) => (
        <Col md={12} key={i} className="mb-3 fit-content">
            <Card className="d-flex flex-row align-items-center card-size">
                <Card.Img variant="start" src={card.img} className="card-image" />
                <Card.Body>
                    <Card.Title className="card-title-custom">{card.text}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    ));

    return (
        <Container fluid className="home">
            {/* Logo at the Top Center */}
            <Row className="mt-3 justify-content-center">
                <Col xs="auto" className="text-center">
                    <Image src={altLogo} className='alt-logo' fluid />
                </Col>
            </Row>
            {/* Main Content Centered */}
            <Row className="home-mid text-center mt-5">
                <Col>
                    <h1 className="text-light">Your Trusted Junk Removal Partner</h1>
                    <p className="text-light  custom-p">
                        At Junked Out, we specialize in providing efficient and reliable junk removal services for both residential and commercial clients.
                    </p>
                    <p className='text-light custom-p'>See what <Link to='/services' className="text-dark">Services</Link> we offer.</p>
                    <p className='text-light custom-p'>Get your free <Link to='/estimate' className="text-dark">Estimate</Link>.</p>
                </Col>
            </Row>
            <Row className="card-container mt-5">
                <Col className='cards'>
                    {cardElements}
                </Col>
                <Col className='alt-image'>
                    <Image src={altLogo} className='alt-logo-bottom' fluid />
                </Col>
            </Row>

            {/* Contact Info at the Bottom Center with Logo */}
            <Row className="mt-5 text-center">
                <Col>
                    <ContactInfo showEstimate={false} />
                </Col>
            </Row>
            <Row className="text-center">

            </Row>
        </Container>
    );
};

export default Home;
