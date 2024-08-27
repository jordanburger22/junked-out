


const ContactInfo = ({showEstimate}) => {
    return (
        <div className="contact-info-container">
            {showEstimate && 
            <div className="contact-header">
                <h1>Get a Free Estimate</h1>
                <p>Ready to reclaim your space? Contact us for a free estimate and let us handle all your junk removal needs.</p>
            </div>}
            <div className="contact-info">
                <h2>Contact Us!</h2>
                <p>435-230-0520</p>
                <p>info@junked-out.com</p>
            </div>
        </div>
    );
}

export default ContactInfo;