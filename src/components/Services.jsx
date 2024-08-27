import dumpTruck from '../assets/dump-truck.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='services'>
            <div className='header-img'>
                <img src={dumpTruck} alt="Dump Truck" />
            </div>
            <div className='services-info'>
                <div className='text-container'>
                    <h1>Our Services</h1>
                    <p>
                        At Junked Out LLC, we provide top-notch junk removal and small structure demolition services for homes and businesses. Whether you need to clear out a single item or an entire home, we're here to help. Our comprehensive services include:
                    </p>
                    <h2>Junk Removal:</h2>
                    <ul>
                        <li>Mattresses</li>
                        <li>Appliances</li>
                        <li>Yard waste</li>
                        <li>Furniture</li>
                        <li>Bagged or boxed garbage</li>
                        <li>And more!</li>
                    </ul>
                    <h2>Small Structure Demolition:</h2>
                    <ul>
                        <li>Sheds</li>
                        <li>Treehouses</li>
                        <li>Hot tubs</li>
                        <li>Gazebos</li>
                        <li>Play sets</li>
                        <li>And more!</li>
                    </ul>
                    <p>Get your free <Link to='/estimate'>Estimate</Link>.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
