import { useState } from "react";
import './App.css';
import './Data/products.js';

// Variables
function ProductForm() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [priceV, setPriceV] = useState("");
    const [priceC, setPriceC] = useState("");
    const [date, setDate] = useState(Date());

    //Funcion en SUBMIT
    function handleSubmit(e) {
            e.preventDefault();
            alert("Recibido, añadiendo el producto al proyecto...") 
                const datosP = document.querySelector(".formu")      //Declaramos variable que obtiene los valores del form.
                const formdata = new FormData(datosP);               // Varieble 'formdata' tipo FormData (como datos) que obtiene los datos de datosP.
                const data = Object.fromEntries(formdata)            // Variable que transforma los datos de 'formdata' a un objeto.

                console.log(data)                                    // Muestra los datos convertidos a objeto (para probar que va bien)   

            fetch('/products', {                   //Ruta de la pagina
                method: 'POST',                    // Obtiene los datos y envia a la pagina correspondiente
                headers: {
                    'Content-Type': 'application/json' //Formato
                },
                body: JSON.stringify(data)
            });
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