import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
   const navigate = useNavigate();

   const handleLogout = () => {
       logout();
       navigate("/");
   };

   return (
       <div>
           <h1>Retail Dashboard</h1>
           <button onClick={handleLogout}>Logout</button>

           <AddProduct />
           <ProductList />
       </div>
   );
}
