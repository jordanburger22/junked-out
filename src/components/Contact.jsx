import ConfirmModal from "./ConfirmModal";
import ContactInfo from "./ContactInfo";
import EstimateForm from "./EstimateForm";
import { useState } from "react";


const Contact = () => {

    const [isModalOn, setIsModalOn] = useState(false)

    const toggleModal = () => setIsModalOn(!isModalOn)

    return ( 
        <div className="contact">
            <ContactInfo />
            <EstimateForm toggleModal={toggleModal}/>
            <ConfirmModal isModalOn={isModalOn} toggleModal={toggleModal}/>
        </div>
     );
}
 
export default Contact;