import { Container, Row, Col, Image } from 'react-bootstrap';
import ConfirmModal from "./ConfirmModal";
import ContactInfo from "./ContactInfo";
import EstimateForm from "./EstimateForm";
import { useState } from "react";
import logo from '../assets/Blue-Logo.png';

const Contact = () => {
    const [isModalOn, setIsModalOn] = useState(false);

    const toggleModal = () => setIsModalOn(!isModalOn);

    return ( 
        <>
            <Container className="my-5 container-fluid">
                <Row>
                    <Col md={6}>
                        <ContactInfo showEstimate={true} />
                    </Col>
                    <Col md={6}>
                        <EstimateForm toggleModal={toggleModal} />
                    </Col>
                </Row>
            </Container>

            {/* Ensure the image is placed outside of any container with a background color */}
            <div className="image-wrapper">
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Image src={logo} className="form-image" fluid />
                    </Col>
                </Row>
            </div>
            
            <ConfirmModal isModalOn={isModalOn} toggleModal={toggleModal} />
        </>
    );
}

export default Contact;
