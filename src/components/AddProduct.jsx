import { useState } from "react";
import API from "../services/api";

export default function AddProduct() {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");

   const handleSubmit = async (e) => {
       e.preventDefault();

       try {
           await API.post("/products", { name, price });
           alert("Product added");
       } catch (err) {
           alert("Unauthorized or error");
       }
   };

   return (
       <form onSubmit={handleSubmit}>
           <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
           <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
           <button>Add</button>
       </form>
   );
}




// import { useState } from "react";
// import { addProduct } from "../services/api";

// export default function AddProduct({ onProductAdded }) {
//    const [name, setName] = useState("");
//    const [price, setPrice] = useState("");

//    const handleSubmit = async (e) => {
//        e.preventDefault();

//        await addProduct({ name, price });
//        setName("");
//        setPrice("");
//        onProductAdded();
//    };

//    return (
//        <form onSubmit={handleSubmit}>
//            <input
//                placeholder="Product Name"
//                value={name}
//                onChange={(e) => setName(e.target.value)}
//            />
//            <input
//                placeholder="Price"
//                value={price}
//                onChange={(e) => setPrice(e.target.value)}
//            />
//            <button type="submit">Add Product</button>
//        </form>
//    );
// }