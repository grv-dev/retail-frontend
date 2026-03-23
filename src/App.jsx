import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { useState } from "react";

function App() {
   const [refresh, setRefresh] = useState(false);

   const reload = () => setRefresh(!refresh);

   return (
       <div>
           <h1>Retail Dashboard</h1>
           <AddProduct onProductAdded={reload} />
           <ProductList key={refresh} />
       </div>
   );
}
export default App;