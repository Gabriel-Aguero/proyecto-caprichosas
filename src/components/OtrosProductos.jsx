import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";

const OtrosProductos = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    const getProductos = async () => {
        const db = getFirestore();
        const productosCollection = collection(db, "productos");
        const productosSnapshot = await getDocs(productosCollection);
        const productos = productosSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            return productos;
    };
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
        });
    }    
        
    useEffect(() => {
        getProductos().then((productos) => {
        const productosAleatorios = productos.sort(() => Math.random() - 0.5).slice(0, 4);
        setItems(productosAleatorios);
        scrollTop();
        });
    }, [id]);
        

    return (
        <Container className="mt-5">
            <Row>
                <h1 className="my-5">Otros productos</h1>
                <ItemList items={items}/>
            </Row>
        </Container>
    )
}

export default OtrosProductos;