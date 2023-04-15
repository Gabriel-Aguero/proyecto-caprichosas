import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import { Col, Container, Row, Card, Button} from "react-bootstrap";
import Item from "./Item";


const ProductosRelacionados = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "productos")
        const q = (id ? query(itemsCollection, where("Categoria","==",id)) : itemsCollection)
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            
        });
    }, [id])

    return (
        <Container className="my-5">
            <h1>Productos relacionados</h1>
            <Row> 
                {items.map(categorias => (
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
        </Container>
    )
}

export default ProductosRelacionados;