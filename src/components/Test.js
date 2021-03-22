
import { Form, Button } from "react-bootstrap";

import React, { Component } from "react";


function Test(){
    const  onFileChange=async ()=>{
      console.log("File upload...");
      const fileElement=document.getElementById("fileId");     
      const file=fileElement.files[0];    
      const myformData=new FormData();
      myformData.append("moduleId",1);
      myformData.append("batchId",1);   
      myformData.append("file",file);      
     console.log(myformData);
      const url="http://localhost:8080/result/upload";
      await fetch(url,{method:"post",body:myformData});
    }
    return <div>
    <div className="container">
    Hello world edac
    <form>
        <input type="file" className="form-control" onChange={onFileChange} id="fileId"/>
    </form>
    </div>
   </div>
    
}

export default Test;
