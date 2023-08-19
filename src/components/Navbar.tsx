import './Navbar.css';
import Logo from '../Lemvigh-Muller_Logo.png'

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
      <a href="https://www.lemu.dk/da/" className="brand"><img src={Logo} height={70} width={70} alt='logo'/></a>
      <a href="https://github.com/Mathias2860DK/Lemvigh-Muller-assignment/tree/main" className="brand"><h4 className='top-heading'>Link to GitHub</h4></a>
       
    </nav>
  );
}

export default Navbar;
