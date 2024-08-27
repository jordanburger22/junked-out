import logo from '../assets/BlueLogo.webp'
import NavMenu from './NavMenu';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <img className='navbar-logo' src={logo} />
            <div className='navbar-btns'>
                <NavMenu />
            </div>
        </nav>
    );
}

export default Navbar;