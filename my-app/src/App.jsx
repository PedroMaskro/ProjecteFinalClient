import { useState } from "react";
import './App.css';
import { products } from './Data/products';


function ProductForm() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [priceV, setPriceV] = useState("");
    const [priceC, setPriceC] = useState("");
    const [date, setDate] = useState(Date());

    function handleSubmit(event) {
        event.preventDefault();
        alert("Recibido, añadiendo el producto a la proyecto...")
    }
    
     
    return (
        <>
        <p className="txtFormu">Nuevo producto!</p>
        <form className="formu" onSubmit={handleSubmit}>
            <div className="apartadoFormu">
                <label>Nombre de Producto:</label>
                <input className="input" type="text" onChange={(event)=>setName(e.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Categoria:</label>
                <input className="input" type="text" onChange={(event)=>setCategory(e.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Precio de venta:</label>
                <input className="input" type="number" onChange={(event)=>setPriceV(e.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Precio de compra:</label>
                <input className="input" type="number" onChange={(event)=>setPriceC(e.target.value)}/>
            </div>

            <div className="apartadoFormu">
                <label>Cantidad minima para empezar a vender (existencias)</label>
                <input className="input" type="number" onChange={(event)=>setDate(e.target.value)} />
            </div>

            <div className="apartadoFormu">
                <button type="submit">AÑADIR</button>
            </div>
        </form>
        </>
    );
}

export default ProductForm