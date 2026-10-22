import './App.css'
import { products } from './Data/products'


function ProductForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit(e) => {
        e.preventDefault();
        alert("SUBMIT")
    }
    
     
    return (
        <>
        <form onSubmit={(e)=>handleSubmit(e)}
            <div>
                <label>Nombre de Producto:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div>
                <label>Precio:</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
            </div>

            <div>
                <button type="submit">AÑADIR</button>
            </div>
        </form>
        </>
    );
}

