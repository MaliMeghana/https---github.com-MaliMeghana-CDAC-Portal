// import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


import React, { Component } from 'react';
import { useEffect, useState } from "react";

function SearchStud(props){
  const [batchList,setBatchList] =  useState([]);
  //const [student,setStudent] =  useState([]);
  const [search, setSearch]=useState({
    batchId:"",
    by:"",
    stud:""
  });

  const syncBatchId=(e)=>setSearch({...search,batchId:e.target.value});
  const syncBy=(e)=>setSearch({...search,by:e.target.value});
  const syncStud=(e)=>setSearch({...search,stud:e.target.value});

  let fetchData = async() =>{
    const res =  await fetch("http://localhost:8080/dropdown/batchs");
    const batchList = await res.json();
    console.log(batchList);    
    setBatchList(batchList);    
   };

   useEffect(() =>{
    console.log("initialized","load me");
    fetchData();   
   },[]);

   const searchStudent=async()=>{
     console.log(search.by);
     let url;
     if(search.by==1){
         url=`http://localhost:8080/student/byId/${search.stud}/${search.batchId}`;
     }
     else if(search.by==2){
      url=`http://localhost:8080/student/byName/${search.stud}/${search.batchId}`;
     }
     
     axios.post(url).then(
       (res)=>{
         console.log(res.data);
         props.setStudent(res.data);
         props.setStatus("search");
       }).catch((error)=>{
        console.log("wrong");
    });
    
   }
  return (
      <div>
      <div className='my-3 mr-2 d-flex justify-content-center'>
      <Form inline>
        <Form.Label className='mr-2' htmlFor='inlineFormCustomSelectPref'>
          Search Student
        </Form.Label>
        <Form.Control
          className='mr-2'
          as='select'
          id='inlineFormCustomSelectPref'
          custom  
          value={search.batchId}    
          onChange={syncBatchId}   
        >
                   <option >Select Batch</option>
                  {
                    batchList.map((item,index) =>(
                     <option key={index} value={item.batchId}>{item.batchMonth}{item.batchYear}</option>
                    ))
                  }
        </Form.Control>
        <Form.Control
          className='mr-2'
          as='select'
          id='inlineFormCustomSelectPref'
          custom
          onChange={syncBy}   
        >
          <option>Select</option>
          <option value='2'>Name</option>
          <option value='1'>Id</option>
        </Form.Control>
        <Form.Control
          className='mr-2'
          id='inlineFormInputName2'
          placeholder='Name/Id'
          onChange={syncStud}
        />

        <Button className='outline-secondary mr-2' variant='outline-secondary'   onClick={searchStudent}>
          Search
        </Button>
      </Form>
    </div>
    </div>
    );
  
}

export default SearchStud;