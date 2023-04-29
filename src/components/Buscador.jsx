import React from "react";
import { useState } from "react";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Buscador = () => {
    
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    const getProductos = async () => {
        const db = getFirestore();
        const productosCollection = collection(db, "productos");
        const productosSnapshot = await getDocs(productosCollection);
        const productos = productosSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setProduct(productos);
    };
    useEffect(() => {
        getProductos()
    }, []);

    const results = !search
    ? []
    : product.filter((p) =>
        p.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLocaleLowerCase())
    );
    
    
    const searcher = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div>
            <div id="barraBuscar">
                <img className="lupaBuscar" src="/images/lupa.svg" alt="Lupa" />
                <input type="text" placeholder="Descubrí tu estilo" className="form-control fuente" value={search} onChange={searcher}  />
                <table className="table tablaBusqueda">
                    <tbody>
                        {results.map(product => (
                            <tr key={product.id}>
                                <td onClick={() => setSearch("")}><Link className="resultadosBusqueda fuente" to={"/item/" + product.id}><img className="rounded-3 me-4" src={product.imagen} alt={product.nombre} width={25} />{product.nombre}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Buscador;
