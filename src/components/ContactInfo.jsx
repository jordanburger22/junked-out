import { Container, Row, Col } from 'react-bootstrap';

const ContactInfo = ({ showEstimate }) => {
    return (
        <Container className="contact-info-container text-center">
            {showEstimate && (
                <Row className="contact-header mb-4">
                    <Col>
                        <h1 className='text-light'>Get a Free Estimate</h1>
                        <p className=' custom-p'>Ready to reclaim your space? Contact us for a free estimate and let us handle all your junk removal needs.</p>
                    </Col>
                </Row>
            )}
            <Row className="contact-info">
                <Col>
                    <h2 className='text-light'>Contact Us!</h2>
                    <p className='custom-p'>435-230-0520</p>
                    <p className='custom-p'>info@junked-out.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactInfo;
