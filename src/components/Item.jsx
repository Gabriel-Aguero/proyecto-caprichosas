import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none">
            <Card className="text-center text-md-center">
                <Card.Img variant="top" src={item.imagen} style={{height: "200px", objectFit: 'cover'}}/>
                <Card.Body>
                    <Card.Title className='font-bold fw-medium' style={{ marginTop: '2px' }}>{item.nombre}</Card.Title>
                    
                        <Card.Text>
                            {"$" + item.precio + " ARS"}
                        </Card.Text>
                    
                </Card.Body>
            </Card>
        </Link>
    )
}


export default Item;
