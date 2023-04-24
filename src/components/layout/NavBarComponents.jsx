import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Form, Container, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

const NavBarComponents = () => {
	
	//function de busqueda 
	const handleChange = (e) => {
		console.log(e.target.value);
		
	}

	return (
		<div className='container px-5'>
			<Navbar variant="light" expand="lg">
				<Container fluid>
					<Navbar.Brand as={Link} to="/"><img className="img-fluid" src={"/images/logoPrincipal.svg"} alt="" /></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto my-2 my-lg-0">
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
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Buscar"
								className="me-2"
								aria-label="Search"								
								onChange={handleChange}
							/>
							<Button variant="outline-dark">Buscar</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<section>
				<Outlet>

				</Outlet>
			</section>
		</div>
	);
}

export default NavBarComponents;