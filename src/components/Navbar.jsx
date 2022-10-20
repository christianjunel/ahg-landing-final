import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import altruvitaLogo from '../imgs/altruvita-logo.svg';
import '../styles/Navbar.css';


const NavbarComp = props => {

    return (
        <div>
            <Navbar collapseOnSelect className='main-nav' expand="lg" variant='light'>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={altruvitaLogo}
                        width='200'
                        // height="94"
                        className="navbar-main-logo d-inline-block align-top"
                        alt="Altruvita Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="basic-navbar-nav" bg="light">
                <Nav
                    className="me-auto my-2 my-lg-0"
                >
                    <Nav.Link eventkey={1} href="#">Home</Nav.Link>
                    <Nav.Link eventkey={2} href="#">About Us</Nav.Link>
                    <NavDropdown title="Programs" id="navbarScrollingDropdown">
                        <Nav.Link eventkey={3} href="#">Feeding</Nav.Link>
                        <Nav.Link eventkey={4} href="#">Livelihood</Nav.Link>
                        <Nav.Link eventkey={5} href="#">Sports</Nav.Link>
                    </NavDropdown>
            
                </Nav>
                <Nav className='right-nav'>
                <Button eventkey={6} variant="dark" href="#">Donate Now</Button>
                <Nav.Link eventkey={7} href="#contact-form">Volunteer</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    );
}

export default NavbarComp;