import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { db } from "../../firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

const Inicio = () => {

  const [listproduct, setListProduct] = useState([]);

  const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"));
    let docs = [];
    productos.forEach(documento => {
      docs.push({ ...documento.data(), id: documento.id })
      console.log(docs);
    });
    setListProduct(docs);
  }

  useEffect(() => {
    getProductos();
  }, [])

  return (
    <div className="container">
      <Row style={{marginTop:'5rem' }}>
        {listproduct.map(producto => (
          <Col style={{marginTop:'1rem' }}>
            <Card className="container" style={{ width: '18rem' }}>
              <Card.Body key={producto.id}>
                <Card.Img style={{ width: '250px', height: '300px'}} variant="top" src={producto.imagen} />
                <Card.Title>{producto.Categoria}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Inicio;