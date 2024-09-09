import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/BlueLogo.webp';
import NavMenu from './NavMenu';

const CustomNavbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="d-inline-block align-top" 
                        style={{ height: '40px' }} 
                    />
                </Navbar.Brand>
                {/* Directly use NavMenu without Navbar.Toggle */}
                <NavMenu />
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
