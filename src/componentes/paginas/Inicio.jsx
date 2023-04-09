import { Row, Col, Card, Button } from 'react-bootstrap';
import { useAuth } from "../../context/AuthContext";

const Inicio = () => {

  const { listproduct } = useAuth();
  
    
  const verProducto = (id) =>{
    console.log(id);
  }
  
  return (
    <>
      <div className="container">
        <Row xs={1} md={2} lg={4} className="g-4" style={{ marginTop: '1rem' }}>
          {listproduct.map(producto => (
            <Col key={producto.id}>
              <Card className="container text-center">
                <Card.Img style={{ height: '250px', objectFit: 'cover' }} variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title style={{ color: 'gray', marginTop: '2px' }}>{producto.Categoria + " " + producto.Nombre}</Card.Title>
                  <Card.Text style={{ color: 'black', fontSize:'18px', marginTop: '2px' }}>{"$ " + producto.Precio}</Card.Text>
                  <Button onClick={()=>{verProducto(producto.id)}} style={{ textAlign: 'center', marginTop: '5px' }} variant="outline-secondary">Ver Producto</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>      
    </>
  )
}

export default Inicio;