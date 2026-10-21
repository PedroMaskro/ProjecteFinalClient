import './App.css'
import { products } from './Data/products'


function ProductForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState(date());

    function handleSubmit(event) {
        event.preventDefault();
    }
  
    return (
        <form onSubmit={this.handleSubmit}>
    )
}

