import { useState } from 'react';
import { Button, Modal, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import burgerMenu from '../assets/burger-menu.svg';

export default function NavMenu() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigateTo = (route) => {
        navigate(route);
        handleClose();
    };

    return (
        <>
            <Button 
                variant="outline-primary" 
                onClick={handleShow} 
                style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }}
            >
                <img 
                    src={burgerMenu} 
                    alt="Menu" 
                    style={{ width: 30, height: 30 }} 
                />
            </Button>

            <Modal 
                show={show} 
                onHide={handleClose} 
                centered
                size="lg"  // Adjust size if needed
            >
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Nav className="flex-column">
                        <Nav.Link onClick={() => navigateTo('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigateTo('/services')}>Services</Nav.Link>
                        <Nav.Link onClick={() => navigateTo('/estimate')}>Estimate</Nav.Link>
                    </Nav>
                </Modal.Body>
            </Modal>
        </>
    );
}
