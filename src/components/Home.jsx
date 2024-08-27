import { Link } from 'react-router-dom'
import logo from '../assets/image.png'
import altLogo from '../assets/junkedout-logo.jpg'
import ContactInfo from './ContactInfo'

const Home = () => {

    const cards = ['Efficient & Eco-Friendly', 'Licensed & Insured', 'Customer Satisfaction Guaranteed']

    const cardElements = cards.map((card, i) => {
        return (
            <div className='card' key={i}>
                <img src={logo}/>
                <h2 className="card-text">{card}</h2>
            </div>
        )
    })


    return (
        <div className="home">
            <img src={altLogo} className='alt-logo'/>
            <div className="home-top">
                <h1>Premium Junk Removal and Demolition Service</h1>
                <ContactInfo showEstimate={false}/>
            </div>
            <div className="home-mid">
                <div className="home-header">
                    <h1>Your Trusted Junk Removal Partner</h1>
                    <p>At Junked Out, we specialize in providing efficient and reliable junk removal services for both residential and commercial clients. Our team is dedicated to ensuring that the process is hassle-free for you, allowing you to enjoy a clean and clutter-free space. Let us take care of your junk removal needs, so you can focus on what matters to you.</p>
                    <p>See what <Link to='/estimate'>Services</Link> we offer.</p>
                    <p>Get your free <Link to='/estimate'>Estimate</Link>.</p>
                </div>
                <div className="card-container">
                    {cardElements}
                </div>
            </div>
        </div>
    );
}

export default Home;