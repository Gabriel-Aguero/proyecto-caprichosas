import { Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { where, collection, query, getDocs } from "firebase/firestore"
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { useEffect } from "react";

const ProductList = () => {

  const { categoriaName } = useParams();  
  const [ categoria, setCategoria] = useState([]);
  
  useEffect(() => {
    
    const itemCollection = collection( db, "productos")

    if (categoriaName) {
      const consulta = query( itemCollection, where("Categoria" , "==" , categoriaName ) )
      getDocs(consulta)
      .then( (res) => { 
        const products = res.docs.map( product => {
          return {
            id: product.id,
            ...product.data()
          }
        })
        setCategoria(products)
      })
      .catch( (err) => console.log(err))
  
    } else {
      getDocs(itemCollection)
        .then( (res) => { 
          const products = res.docs.map( product => {
            return {
              id: product.id,
              ...product.data()
            }
          })
          setCategoria(products)
        })
        .catch( (err) => console.log(err))
    }
    
  }, [categoriaName])

  

  return (
    <>
      <div className="container">
        <h1 style={{marginTop:'10px', color:'black'}}>Productos</h1>
        <Row xs={1} md={2} lg={4} className="g-4" style={{ marginTop: '1rem' }}>
          {categoria.map(categorias => (
            <Col key={categorias.id}>
              <Card className="container text-center">
                <Card.Img style={{ height: '250px', objectFit: 'cover' }} variant="top" src={categorias.imagen} />
                <Card.Body>
                  <Card.Title style={{ color: 'gray', marginTop: '2px' }}>{categorias.Categoria + " " + categorias.Nombre}</Card.Title>
                  <Button style={{ textAlign: 'center', marginTop: '5px' }} variant="primary">Ver Producto</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>

  )
}

export default ProductList;