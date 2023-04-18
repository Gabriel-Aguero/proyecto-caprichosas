import React, { useState } from "react";
import { Row, Col, Container, DropdownButton } from 'react-bootstrap';
import Item from "./Item";
import { Dropdown,  } from 'react-bootstrap';


const ItemList = ({items, showPrice, setItems, itemsRef}) => {
    const [selectedOption, setSelectedOption] = useState("Menor a mayor");
    const handleSortChange = (value) => {
        const itemsSorted = [...itemsRef.current];
        if (value === "Menor a mayor") {
            itemsSorted.sort((a, b) => a.precio - b.precio);
        } else if (value === "Mayor a menor") {
            itemsSorted.sort((a, b) => b.precio - a.precio);
        }else {
            itemsSorted.sort((a, b) => a.nombre.localeCompare(b.nombre));
        }
        setItems(itemsSorted);
        setSelectedOption(value)
    };

    return(
        <Container className="my-5 ">
            <Row className="font">
                <DropdownButton title={"Ordenar por: " + selectedOption} className='text-end buttonDrop' variant="light" style={{ backgroundColor: 'transparent', border: 'none' }} align="end">
                    <Dropdown.Item onClick={() => handleSortChange("Menor a mayor")}>Menor a mayor</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortChange("Mayor a menor")}>Mayor a menor</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortChange("Orden alfabético")}>Orden alfabético</Dropdown.Item>
                </DropdownButton>
                {items.map(item =>
                    <Col xs={"6"} md={"3"} className="my-3" key={item.id}>
                        <Item item={item} showPrice={showPrice}/> 
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default ItemList;

