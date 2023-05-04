
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Buscador from '../Buscador';

const NavBarComponents = () => {

	return (
		<Navbar variant="light" expand="lg" className="mx-lg-3 mt-3">
			<Container fluid>
				<Navbar.Brand as={Link} to="/"><img className="img-fluid" src={"/images/logoPrincipal.svg"} alt="Logo Caprichosas" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="d-flex justify-content-center w-100 my-3 my-lg-0">
						<Nav.Link as={Link} to="/" className='fuente fw-bold'>Inicio</Nav.Link>
						<NavDropdown title="Categoria" className='fuente fw-bold' id="collasible-nav-dropdown">             
							<NavDropdown.Item as={Link} to={"/categoria/Arnés"} className='fuente fw-bold navBackground'>Arnés</NavDropdown.Item>
							<NavDropdown.Item as={Link} to={"/categoria/Conjunto"} className='fuente fw-bold navBackground'>Conjuntos</NavDropdown.Item>
							<NavDropdown.Item as={Link} to={"/categoria/Liga"} className='fuente fw-bold navBackground'>Liga</NavDropdown.Item>
							<NavDropdown.Item as={Link} to={"/categoria/Bustier"} className='fuente fw-bold navBackground'>Bustier</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="/preguntasfrecuentes" className='fuente fw-bold'>Preguntas Frecuentes</Nav.Link>
						<Nav.Link as={Link} to="/nosotros" className='fuente fw-bold'>Nosotros</Nav.Link>
					</Nav>
					<Buscador/>
				</Navbar.Collapse>
			</Container>	
		</Navbar>
	);
}

export default NavBarComponents;