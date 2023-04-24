import { useState } from 'react'
import { Button, Form, FormGroup, Modal } from 'react-bootstrap'
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalUpdate = ({ newitems, handleClose }) => {

    const [items, setItems] = useState();

    const onUpdate = async (id) => {
        
        const db = getFirestore();

        const docRef = doc(db, "productos", id);
        await updateDoc(docRef, {
            precio: Number(items.precio)
        })
        
        toast('🦄 Datos actualizados correctamente!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
          
    }

    const handleChange = ({ target: { name, value } }) => {
        setItems({ ...items, [name]: value });

    }

    return (

        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Formulario de Actualización</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <FormGroup className="my-3" controlId="formBasicEmail"
                        name="producto">
                        <Form.Label>Productos</Form.Label>                        
                        <Form.Control type="text" placeholder={newitems.nombre}
                            name="nombre"                            
                            />
                    </FormGroup >

                    <FormGroup className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text" placeholder="Precio"
                            name="precio"
                            onChange={handleChange} />
                    </FormGroup>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={() => { onUpdate(newitems.id) }}>
                    Guardar Cambios
                </Button>
                <ToastContainer />
                
            </Modal.Footer>
        </Modal>

    )
}

export default ModalUpdate