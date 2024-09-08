import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ isModalOn, toggleModal }) => {
    return (
        <Modal show={isModalOn} onHide={toggleModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Your estimate form has been successfully submitted. We appreciate your interest and will get in touch with you soon.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;
