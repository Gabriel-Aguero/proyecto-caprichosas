import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import CarouselComponents from "./layout/CarouselComponents";
import ItemList from "./ItemList";
import ComoComprar from "./layout/ComoComprar";
import Visitanos from "./layout/Visitanos";
import SpinnerComponents from "./SpinnerComponents";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [isCategoryFiltered, setIsCategoryFiltered] = useState(true);
    
    const itemsRef = useRef(items);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "productos")
        const q = (id ? query(itemsCollection, where("Categoria","==",id)) : itemsCollection)
        getDocs(q).then((snapShot) => {
            const itemsSorted = snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}));
        itemsRef.current = itemsSorted;
        setItems(itemsSorted);
        setIsCategoryFiltered(!!id);
        setLoading(false);
        });
    }, [id])
    
    return (
        <div>
            {!id && <CarouselComponents />}
            {loading ? <SpinnerComponents/> : <ItemList items={items} showPrice={isCategoryFiltered} setItems={setItems} itemsRef={itemsRef}/>}
            {!id && <ComoComprar/>}
            {!id && <Visitanos/>}
        </div>
    )
}

export default ItemListContainer;
