import { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ModalUpdate from './ModalUpdate';

const UpdatePrice = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [newitems, setNewItems] = useState([]);
  const [newupdate, setNewUpdate] = useState([false]);

  const handleShow = (item) => {
    setNewItems(item);
    setShow(true);
    setNewUpdate(!newupdate);
  } 

  const updateTable = () => setNewUpdate(true);
  const handleClose = () => setShow(false);
        
  const getDatos = async () => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "productos"));
    let docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id })
      // console.log(doc.id, " => ", doc.data());
    });
    setItems(docs);
  }

  useEffect(() => {
    getDatos();
  }, [newupdate])

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Table striped="columns" className="text-center">
        <thead>
          <tr>            
            <th>Categoría</th>
            <th>Nombre</th>
            <th>Precio ($)</th>
            <th>Editar</th>
          </tr>
        </thead>
        {items.map(item => (
          <tbody key={item.id}>
            <tr>            
              <td>{item.categoria}</td>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>
                <img src="/images/edit.svg" style={{ width: "100%", height: "20px", cursor: "pointer" }} alt="Editar"
                  onClick={() => handleShow(item)} />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      {show && <ModalUpdate newitems={newitems} updateTable={updateTable} handleClose={handleClose}/> }
    </div>

  )
}

export default UpdatePrice