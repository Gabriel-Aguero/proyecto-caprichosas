import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

const Item = ({item, showPrice}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none">
            <Card className="text-center text-md-start">
                <Card.Img variant="top" src={"/images/productoUno.jpg"} />
                <Card.Body>
                    <Card.Title className='font' style={{ marginTop: '2px' }}>{item.Categoria + " " + item.Nombre}</Card.Title>
                    {showPrice && (
                        <Card.Text>
                            {"$" + item.Precio + " ARS"}
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </Link>
    )
}


export default Item;
