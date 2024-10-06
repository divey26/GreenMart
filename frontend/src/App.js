import './App.css';
import Packaging from './Pages/packaging';
import PackagingMaterials from './Pages/packagingMaterials';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
/*
import Signup from './Pages/Signup'; 
import VerifyOTP from './Pages/VerifyOTP'; 
import Login from './Pages/Login'; 
import Profile from './Pages/Profile'; 
*/
import Navbar from './Components/Navbar/Navbar';

//import MainLayout from './MainLayout'; // Import the new layout

import AddProduct from './productManagment/AddProduct';
import ViewProduct from './productManagment/ViewProduct';
import AdminView from './productManagment/AdminView';
import Dashboard from './productManagment/Dashboard';
import Cart from './cart/Cart'; // Import the new layout
import { CartProvider } from "./cart/CartContext"
/*
// Manager Components
import Table from './ManagerComponent/table';
import Deli from './ManagerComponent/DeliveryPersonD'
import ManagerSignUp from './ManagerComponent/ManagerSignUp';
import ManagerSignin from './ManagerComponent/ManagerSignin';
import DeliveryDetails from './ManagerComponent/managerdetails';
import ManagerUpdateItem from './ManagerComponent/UpdateMnaneger';

*/


import Product from './ItemComponent/product';
import Card from './ItemComponent/card sample';


//payment
import CreditCardPaymentForm from "./Payment/Credit_card";
import PaymentPage from "./Payment/paymentpage";
import MakePayment from "./Payment/Make_payment";
import QRCodePaymentScreen from "./Payment/Qr_payment";
import PaymentConfirmationScreen from "./Payment/Succcsss_msg";
import AdminProfile from "./Payment/Admin_profile";


//package 
import Package from './package/packaging';


function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Navbar />

        <Routes>
          {/* Routes that include the Navbar */}
          
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<PackagingMaterials />} />
            <Route path='/aboutUs' element={<PackagingMaterials />} />
            <Route path='/service' element={<PackagingMaterials />} />
            <Route path="/cart" element={<Cart />} />


            <Route path='/product' element={<ViewProduct />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/admin-product' element={<AdminView />} />
            <Route path='/dashboard' element={<Dashboard />} />


            <Route path='/home' element={<Product />} />
            <Route path='/itemdetails' element={<Card />} />


         {/* Manager Routes
         <Route path='/table' element={<Table />} />
         <Route path='/delper' element={<Deli />} />

         <Route path='/manager' element={<ManagerSignUp />} />
         <Route path='/manager/login' element={<ManagerSignin />} />
         <Route path='/manager/details' element={<DeliveryDetails />} />
         <Route path='/manager/update/:id' element={<ManagerUpdateItem />} />

 */}
         { /*payment */}
          <Route path="/start" element={<PaymentPage />} />
          <Route path="/credit-card/:paymentId" element={<CreditCardPaymentForm />} />
          <Route path="/make-payment/:paymentId" element={<MakePayment />} />
          <Route path="/qr-payment/:paymentId" element={<QRCodePaymentScreen />} />
          <Route path="/confirmation/:paymentId" element={<PaymentConfirmationScreen />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
         
         {/*package*/}
          <Route path='/package' element={<Package />} />
          {/* Routes without the Navbar
          <Route path='/signup' element={<Signup />} />
          <Route path='/verifyotp' element={<VerifyOTP />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
 */}

        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
