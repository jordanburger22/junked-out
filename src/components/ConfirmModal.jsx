import React, { useState } from 'react';



const ConfirmModal = ({isModalOn, toggleModal}) => {

    

    return ( 
        <div className={isModalOn ? 'modal' : 'modal-off'}>
            <div className={isModalOn ? 'overlay' : 'overlay-off'} onClick={toggleModal}></div>
            <div className="modal-content">
                <h2>Thank You!</h2>
                <p>Your estimate form has been successfully submitted. We appreciate your interest and will get in touch with you soon.</p>
                <button onClick={toggleModal}>Close</button>
            </div>
        </div>
     );
}
 
export default ConfirmModal;