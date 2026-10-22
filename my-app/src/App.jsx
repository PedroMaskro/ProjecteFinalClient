import { useState } from "react";
import './App.css';
import { products } from './Data/products';


function ProductForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState(Date());

    function handleSubmit(event) {
        e.preventDefault();
        alert("SUBMIT")
    }
    
     
    return (
        <>
        <p>Nuevo producto</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre de Producto:</label>
                <input type="text" onChange={(event)=>setName(e.target.value)}/>
            </div>

            <div>
                <label>Precio:</label>
                <input type="text" onChange={(event)=>setPrice(e.target.value)}/>
            </div>

            <div>
                <label>Fecha en la que se añadió</label>
                <input type="date" name="fecha" onChange={(event)=>setDate(e.target.value)} />
            </div>

            <div>
                <button type="submit">AÑADIR</button>
            </div>
        </form>
        </>
    );
}

export default ProductForm