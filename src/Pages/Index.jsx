import React from 'react'
import Header from '../Components/Header'
import CustomerCreate from '../Components/CustomerCreate'
import CustomerList from '../Components/CustomerList'

Header

function Index() {
  return (
    <div>
      
      <div className='container d-flex justify-content-end my-2'>
        <CustomerCreate cls={"fa-solid fa-plus"} custId={null}></CustomerCreate>
      </div>

      <div className="container">
        <CustomerList></CustomerList>
      </div>
    </div>
  )
}

export default Index
