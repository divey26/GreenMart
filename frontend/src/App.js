import './App.css';
import Packaging from './Pages/packaging';
import PackagingMaterials from './Pages/packagingMaterials';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Signup from './Pages/Signup'; 
import VerifyOTP from './Pages/VerifyOTP'; 
import Login from './Pages/Login'; 
import Profile from './Pages/Profile'; 
import MainLayout from './MainLayout'; // Import the new layout

import AddProduct from './productManagment/AddProduct';
import ViewProduct from './productManagment/ViewProduct';
import AdminView from './productManagment/AdminView';
import Dashboard from './productManagment/Dashboard';
import Cart from './cart/Cart'; // Import the new layout
import { CartProvider } from "./cart/CartContext"

// Manager Components
import Table from './ManagerComponent/table';
import Deli from './ManagerComponent/DeliveryPersonD'
import ManagerSignUp from './ManagerComponent/ManagerSignUp';
import ManagerSignin from './ManagerComponent/ManagerSignin';
import DeliveryDetails from './ManagerComponent/managerdetails';
import ManagerUpdateItem from './ManagerComponent/UpdateMnaneger';


// Screens
import HomeScreen from './summa/screens/HomeScreen';
import ProductScreen from './summa/screens/ProductScreen';
import CartScreen from './summa/screens/CartScreen';
import DeliveryForm from './summa/screens/DeliveryForm';
import CheckoutScreen from './summa/screens/CheckoutScreen';  // New import

import Product from './ItemComponent/product';
import Card from './ItemComponent/card sample';

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes that include the Navbar */}
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<PackagingMaterials />} />
            <Route path='/aboutUs' element={<PackagingMaterials />} />
            <Route path='/service' element={<PackagingMaterials />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/profile' element={<Profile />} />


            <Route path='/product' element={<ViewProduct />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/admin-product' element={<AdminView />} />
            <Route path='/dashboard' element={<Dashboard />} />


            <Route path='/home' element={<Product />} />
            <Route path='/itemdetails' element={<Card />} />


        {/* Manager Routes */}
        <Route path='/table' element={<Table />} />
        <Route path='/delper' element={<Deli />} />

        <Route path='/manager' element={<ManagerSignUp />} />
        <Route path='/manager/login' element={<ManagerSignin />} />
        <Route path='/manager/details' element={<DeliveryDetails />} />
        <Route path='/manager/update/:id' element={<ManagerUpdateItem />} />


          </Route>

          {/* Routes without the Navbar */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/verifyotp' element={<VerifyOTP />} />
          <Route path='/login' element={<Login />} />
          
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
