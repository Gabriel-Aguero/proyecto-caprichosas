import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getDoc, getFirestore, doc} from "firebase/firestore";
import SpinnerComponents from "./SpinnerComponents";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const db = getFirestore();
        const producto = doc(db, "productos", id)
        getDoc(producto).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("error 404");
            }
        })
    },[id])

    return (
        <div>
            {loading ? <SpinnerComponents/> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;