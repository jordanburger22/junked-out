import logo from '../assets/BlueLogo.webp'
import NavMenu from './NavMenu';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <nav className='navbar'>
            <img className='navbar-logo' src={logo} onClick={() => navigate('/')}/>
            <div className='navbar-btns'>
                <NavMenu />
            </div>
        </nav>
    );
}

export default Navbar;