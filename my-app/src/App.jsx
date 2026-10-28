import { useState } from "react";
import './App.css';
import './Data/products.js';


function ProductForm() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [priceV, setPriceV] = useState("");
    const [priceC, setPriceC] = useState("");
    const [date, setDate] = useState(Date());

    function handleSubmit(e) {
        e.preventDefault();
        alert("Recibido, añadiendo el producto a la proyecto...")
    }
    
     
    return (
        <>
        <p className="txtFormu">Nuevo producto!</p>
        <form className="formu" onSubmit={handleSubmit}>
            <div className="apartadoFormu">
                <label>Nombre de Producto:</label>
                <input className="input" name="nombre" type="text" onChange={(event)=>setName(event.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Categoria:</label>
                <input className="input" name="categoria" type="text" onChange={(event)=>setCategory(event.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Precio de venta:</label>
                <input className="input" name="pventa" type="number" onChange={(event)=>setPriceV(event.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Precio de compra:</label>
                <input className="input" name="pcompra" type="number" onChange={(event)=>setPriceC(event.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Cantidad minima para empezar a vender (existencias)</label>
                <input className="input" name="cmin" type="number" onChange={(event)=>setDate(event.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <button type="submit">AÑADIR</button>
            </div>
        </form>
        </>
    );
}

export default ProductForm