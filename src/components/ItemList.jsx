import React, { useState } from "react";
import { Row, Col, Container,  Dropdown, DropdownButton } from 'react-bootstrap';
import Item from "./Item";

const ItemList = ({items, setItems, itemsRef, categoryName, categoryId}) => {

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
        <Container className="my-5">
            
            <Row>
                {categoryId && (
                    <>
                        <h2 className="fw-medium">{categoryName}</h2>
                        <Col xs={"12"} align="end">
                            <DropdownButton id="bntDropdown" title={"Ordenar por: " + selectedOption} size="sm" align="end">
                                <Dropdown.Item className="btnItem" onClick={() => handleSortChange("Menor a mayor")}>Menor a mayor</Dropdown.Item>
                                <Dropdown.Item className="btnItem" onClick={() => handleSortChange("Mayor a menor")}>Mayor a menor</Dropdown.Item>
                                <Dropdown.Item className="btnItem" onClick={() => handleSortChange("Orden alfabético")}>Orden alfabético</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </>
                )}
                {items.map(item =>
                    <Col xs={"12"} md={"3"} className="my-3" key={item.id}>
                        <Item item={item}/> 
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default ItemList;

