import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { isAuthenticated } from "./utils/auth";

// Protected Route Wrapper
function PrivateRoute({ children }) {
   return isAuthenticated() ? children : <Navigate to="/" />;
}

function App() {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Login />} />

               <Route
                   path="/dashboard"
                   element={
                       <PrivateRoute>
                           <Dashboard />
                       </PrivateRoute>
                   }
               />
           </Routes>
       </BrowserRouter>
   );
}

export default App;


// *******************************
// import ProductList from "./components/ProductList";
// import AddProduct from "./components/AddProduct";
// import { useState } from "react";

// function App() {
//    const [refresh, setRefresh] = useState(false);

//    const reload = () => setRefresh(!refresh);

//    return (
//        <div>
//            <h1>Retail Dashboard</h1>
//            <AddProduct onProductAdded={reload} />
//            <ProductList key={refresh} />
//        </div>
//    );
// }
// export default App;