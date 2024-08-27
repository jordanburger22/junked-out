import { useState } from 'react';

const EstimateForm = ({toggleModal}) => {
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
        console.log(inputs); // Replace with actual submission logic
        toggleModal()
        setInputs(initInputs);
    };

    return (
        <form onSubmit={handleSubmit} className="estimate-form">
            <div className="form-group">
                <label htmlFor="zipCode" className="label">Zip Code:</label>
                <input 
                    type="text" 
                    id="zipCode" 
                    name="zipCode" 
                    value={inputs.zipCode} 
                    onChange={handleChange} 
                    className="input"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="estimatedDate" className="label">Estimated Date:</label>
                <input 
                    type="date" 
                    id="estimatedDate" 
                    name="estimatedDate" 
                    value={inputs.estimatedDate} 
                    onChange={handleChange} 
                    className="input"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="firstName" className="label">First Name:</label>
                <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={inputs.firstName} 
                    onChange={handleChange} 
                    className="input"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className="label">Last Name:</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={inputs.lastName} 
                    onChange={handleChange} 
                    className="input"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfRooms" className="label">Number of Rooms:</label>
                <select 
                    id="numberOfRooms" 
                    name="numberOfRooms" 
                    value={inputs.numberOfRooms} 
                    onChange={handleChange}
                    className="input"
                    >
                    <option value="" disabled>Select Number of Rooms</option>
                    <option value="N/A">N/A</option>
                    <option value="studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="label">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={inputs.email} 
                    onChange={handleChange} 
                    className="input"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className="label">Phone:</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={inputs.phone} 
                    onChange={handleChange} 
                    className="input"
                    />
            </div>
            <button type="submit" className="submit-button" disabled={!isFormValid()}>
                Submit
            </button>
        </form>
    );
}

export default EstimateForm;