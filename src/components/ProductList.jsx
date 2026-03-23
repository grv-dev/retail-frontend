import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import ProductCard from "./ProductCard";

export default function ProductList() {
   const [products, setProducts] = useState([]);

   const fetchProducts = async () => {
       const res = await getProducts();
       setProducts(res.data);
   };

   useEffect(() => {
       fetchProducts();
   }, []);

   const handleDelete = async (id) => {
       await deleteProduct(id);
       fetchProducts();
   };

   return (
       <div>
           <h2>Products</h2>
           {products.map(p => (
               <ProductCard key={p.id} product={p} onDelete={handleDelete} />
           ))}
       </div>
   );
}
