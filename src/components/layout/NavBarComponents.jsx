
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Buscador from '../Buscador';

const NavBarComponents = () => {

	
	

	return (
		 
			<Navbar variant="light" expand="lg" className="mx-md-4 mt-3">
				<Container>
					<Navbar.Brand as={Link} to="/"><img className="img-fluid" src={"/images/logoPrincipal.svg"} alt="" /></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="d-flex justify-content-center w-100 my-3 my-lg-0">
							<Nav.Link as={Link} to="/" className='font'>Inicio</Nav.Link>
							<NavDropdown title="Categoria" className='font' id="collasible-nav-dropdown">             
								<NavDropdown.Item as={Link} to={"/categoria/Arnés"} className='font navBackground'>Arnés</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/categoria/Conjunto"} className='font navBackground'>Conjuntos</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/categoria/Liga"} className='font navBackground'>Liga</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/categoria/Bustier"} className='font navBackground'>Bustier</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link as={Link} to="/preguntasfrecuentes" className='font'>Preguntas Frecuentes</Nav.Link>
							<Nav.Link as={Link} to="/nosotros" className='font'>Nosotros</Nav.Link>
						</Nav>
						<Buscador/>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		
	);
}

export default NavBarComponents;