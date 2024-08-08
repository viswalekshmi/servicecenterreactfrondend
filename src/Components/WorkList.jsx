import React, { useEffect, useState } from 'react'
import { deleteWorkApi, retriveCustamerApi } from '../Services/Api'
import Button from 'react-bootstrap/Button';

function WorkList({custId,refreshRequired,setWorkId}) {
    const [work,setWorks]=useState()

    const [workTotal,setWorkTotal]=useState()

    async function handleDelete(workId){

      let res=await deleteWorkApi(workId)

      if (res.status>199 && res.status<300){

        fetchCustomerData(custId)
      }
    }

    async function fetchCustomerData(custId){

        let res= await retriveCustamerApi(custId)

        if (res.status>199&&res.status<300){

            console.log(res.data.works);

            setWorks(res.data.works);

            setWorkTotal(res.data.work_total);

        }
    }
    useEffect(()=>{fetchCustomerData(custId)},[refreshRequired])
    

  return (
    <div  className='border border-2 border-dark p-3 rounded mt-2'>
      <table className='table'>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
        </tr>
        <tbody>
            {work && work.map((w,i)=><tr>

                <td>{w.title}</td>
                <td>{w.description}</td>
                <td>{w.amount}</td>
                <td className='d-flex gap-2'>
                        <Button className='btn btn-danger' onClick={()=>handleDelete(w.id)} >
                        <i class="fa-solid fa-trash"></i>
                        </Button>

                        <Button className='btn btn-warning' onClick={()=>setWorkId(w.id)} >
                        <i class=" fa-solid fa-pen-to-square"></i>
                        </Button>
                       


                    </td>


            </tr>)}

            <tr>
              <td></td>
              <td></td>
              <td>Total:{workTotal}</td>
              <td></td>
            </tr>



        </tbody>
      </table>
    </div>
  )
}

export default WorkList
