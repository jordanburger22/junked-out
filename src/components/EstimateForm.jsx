import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const EstimateForm = ({ toggleModal }) => {
    const initInputs = {
        zipCode: '',
        estimatedDate: '',
        firstName: '',
        lastName: '',
        numberOfRooms: '',
        email: '',
        phone: ''
    };

    const [inputs, setInputs] = useState(initInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const isFormValid = () => {
        return Object.values(inputs).every(value => value.trim() !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle additional logic here if needed
        toggleModal();
        setInputs(initInputs);
    };

    return (
        <Form 
            onSubmit={handleSubmit} 
            className="estimate-form" 
            name="estimate-form" 
            method="POST" 
            data-netlify="true"
        >
            <input type="hidden" name="form-name" value="estimate-form" />
            <Row>
                <Col md={6}>
                    <Form.Group controlId="zipCode">
                        <Form.Label className='custom-p'>Zip Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="zipCode"
                            value={inputs.zipCode}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="estimatedDate">
                        <Form.Label className="custom-p">Estimated Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="estimatedDate"
                            value={inputs.estimatedDate}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="firstName">
                        <Form.Label className='custom-p'>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={inputs.firstName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="lastName">
                        <Form.Label className='custom-p'>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={inputs.lastName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="numberOfRooms">
                <Form.Label className='custom-p'>Number of Rooms</Form.Label>
                <Form.Control
                    as="select"
                    name="numberOfRooms"
                    value={inputs.numberOfRooms}
                    onChange={handleChange}
                >
                    <option value="" disabled>Select Number of Rooms</option>
                    <option value="N/A">N/A</option>
                    <option value="studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                </Form.Control>
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="email">
                        <Form.Label className='custom-p'>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="phone">
                        <Form.Label className='custom-p'>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phone"
                            value={inputs.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={!isFormValid()} className="mt-3">
                Submit
            </Button>
        </Form>
    );
};

export default EstimateForm;
