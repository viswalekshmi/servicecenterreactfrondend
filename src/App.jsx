import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Pages/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerDetail from './Pages/CustomerDetail';
import Header from './Components/Header';
import Login from './Pages/Login';



function App() {
  return (
    <div>
     <BrowserRouter>

     <Header></Header>

     <Routes>

      <Route path='index' element={<Index></Index>}></Route>

      <Route path="customer/:id" element={<CustomerDetail></CustomerDetail>}></Route>

      <Route path='' element={<Login></Login>}></Route>



      

     </Routes>
     
     
     </BrowserRouter>
     
    </div>
  )
}

export default App
