import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCustomerApi, editCustomerApi, retriveCustamerApi } from '../Services/Api';
import { useNavigate } from 'react-router-dom';

function CustomerCreate({cls,custId,setReloadRequired}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [customer,setCustomer]=useState({name:"",phone:"",email:"",vehicle_no:"",running_km:""})

    const navigate =useNavigate()

    async function handleFormSubmit(){

       if(custId){

        //edit logic

        let res= await editCustomerApi(custId,customer)

            if (res.status>199&&res.status<300){

              setReloadRequired(Math.random())

              setShow(false)

              
            }
          
        


       }

       else{

        //create logic

        let res=await addCustomerApi(customer)

        console.log(res);

        setShow(false)

        if (res.status>199&&res.status<300)

          navigate(`/customer/${res.data.id}`)
       }
    }

    async function fetchCustomerDetail(custId){

      let res= await retriveCustamerApi(custId)

      if (res.status>199 && res.status<300){

        setCustomer(res.data)
      }
    }

    useEffect(()=>{fetchCustomerDetail(custId)},[custId])
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          <i className={cls}></i>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {custId?<Modal.Title>change Customer</Modal.Title>:<Modal.Title>Add New Customer</Modal.Title>}
          </Modal.Header>
          <Modal.Body>
          <form action="">
                <div className="mb-3">
                    <label htmlFor="">Enter Customer Name</label>
                    <input
                     type="text" 
                     className='form-control'

                     value={customer.name}
                     onChange={(e)=>setCustomer({...customer,name:e.target.value})}
                      />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Enter Customer Phone</label>
                    <input 
                    type="text"
                     className='form-control' 

                     value={customer.phone}
                     onChange={(e)=>setCustomer({...customer,phone:e.target.value})}
                     
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Enter Customer Email</label>
                    <input
                     type="email" 
                     className='form-control' 

                     value={customer.email}
                     onChange={(e)=>setCustomer({...customer,email:e.target.value})}
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Enter Customer Vehicle Number</label>
                    <input
                     type="text"
                      className='form-control'

                      value={customer.vehicle_no}
                      onChange={(e)=>setCustomer({...customer,vehicle_no:e.target.value})}
                       />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Enter vehicle Running Km</label>
                    <input 
                    type="text" 
                    className='form-control' 

                    value={customer.running_km}
                    onChange={(e)=>setCustomer({...customer,running_km:e.target.value})}
                    />
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleFormSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default CustomerCreate
