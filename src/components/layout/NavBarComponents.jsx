import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Form, Container, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

function NavBarComponents() {

  const apretar = () =>{
    alert("Hola aprete el boton");
  }

  const handleChange = (e) =>{
    console.log(e.target.value);
  }

  return (
    <>
      <Navbar className="container" bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" >Caprichosas</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
            >
              <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
              <NavDropdown title="Categoria" to={"/"} id="navbarScrollingDropdown">             
                <NavDropdown.Item as={Link} to={"/categoria/Arnés"}>Arnés</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/categoria/Conjunto"}>Conjuntos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/categoria/Liga"}>Liga</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/categoria/Bustier"}>Bustier</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/preguntas-frecuentes" >Preguntas Frecuentes</Nav.Link>
              <Nav.Link as={Link} to="/nosotros" >Nosotros</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
              <Button onClick={apretar} variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet>

        </Outlet>
      </section>
    </>
  );
}

export default NavBarComponents;