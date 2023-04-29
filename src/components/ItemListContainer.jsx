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
    const [loading, setLoading] = useState(true);
    const [categoryName, setCategoryName] = useState(null);
    const {id} = useParams();
    
    const itemsRef = useRef(items);
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "productos")
        
        const q = (id ? query(itemsCollection, where("categoria","==",id)) : itemsCollection)
        getDocs(q).then((snapShot) => {
            const itemsSorted = snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}));
            itemsRef.current = itemsSorted;
            setItems(itemsSorted);
            setCategoryName(snapShot.docs[0]?.data().categoria || "");
            setLoading(false);
        });
    }, [id])
    
    
    return (
        <div>
            {loading && <SpinnerComponents />}
            {!loading && (
                <div>
                    {!id && <CarouselComponents />}
                    <ItemList  items={items} setItems={setItems} itemsRef={itemsRef} categoryName={categoryName} categoryId={id}/>
                    {!id && <ComoComprar/>}
                    {!id && <Visitanos/>}
                </div>
            )}
        </div>
    )
}

export default ItemListContainer;
