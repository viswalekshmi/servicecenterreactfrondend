import axios from "axios"



const BASE_URL="http://127.0.0.1:8000/api/"


function getHeader(){

    let accessToken=localStorage.getItem("access")
    let headers={

        "Authorization":"Bearer "+accessToken

        
    }

    return headers
}


export async function addCustomerApi(data){


    return await axios.post(BASE_URL+"customers/",data,{headers:getHeader()})
}
export async function listCustomerApi(){

    return await axios.get(BASE_URL+"customers/",{headers:getHeader()})
}


export async function retriveCustamerApi(id){

    return await axios.get(BASE_URL+`customers/${id}/`,{headers:getHeader()})
}

export async function addWorkApi(custId,data){

    return await axios.post(BASE_URL+`customers/${custId}/work/`,data,{headers:getHeader()})
}


export async function retriveWorkApi(workId){

    return await axios.get(BASE_URL+`work/${workId}/`,{headers:getHeader()})
}

export async function updateWorkApi(workId,data){

    return await axios.put(BASE_URL+`work/${workId}/`,data,{headers:getHeader()})
}

export async function deleteWorkApi(workId){

    return await axios.delete(BASE_URL+`work/${workId}/`,{headers:getHeader()})
}


export async function editCustomerApi(custId,data){

    return await axios.put(BASE_URL+`customers/${custId}/`,data,{headers:getHeader()})
}


export async function deleteCustomerApi(custId){

    return await axios.delete(BASE_URL+`customers/${custId}/`,{headers:getHeader()})
}

export async function getTokenApi(data){

    return await axios.post(BASE_URL+`token/`,data)
}