import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/BlueLogo.webp';
import NavMenu from './NavMenu';

const CustomNavbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="d-inline-block align-top" 
                        style={{ cursor: 'pointer', height: '40px' }} 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavMenu />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
