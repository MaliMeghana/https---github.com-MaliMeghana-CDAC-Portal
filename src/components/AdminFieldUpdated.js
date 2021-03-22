import SearchStud from "./SearchStud";
import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";
import { useEffect, useState } from "react";




function AdminFieldUpdated(){
    const [status,setStatus] =  useState("");
    function handleStatus(s){
      setStudent(s);
    }
    const [batchList,setBatchList] =  useState([]);
    const [moduleList,setModuleList] =  useState([]);
    const[upload,setUpload]=useState({
      batchId:"",
      moduleId:""     
    });
    const [student,setStudent]=useState([]);
    function handleChange(newStudent){
      setStudent(newStudent);
    }

    const syncBatch=(e)=>setUpload({...upload,batchId:e.target.value});
    const syncModule=(e)=>setUpload({...upload,moduleId:e.target.value});
   

    let fetchData = async() =>{
     const res =  await fetch("http://localhost:8080/dropdown/batchs");
     const batchList = await res.json();
     console.log(batchList);
     
     setBatchList(batchList);
     
    };

    let fetchData2 = async() =>{
        const res =  await fetch("http://localhost:8080/dropdown/modules");
        const moduleList = await res.json();
        console.log(moduleList);
      
        setModuleList(moduleList); 
       };


    let fetchUpload=async()=>{
       console.log(upload.moduleId);
       console.log(upload.batchId);
      const fileElement=document.getElementById("fileId");  
      const file1=fileElement.files[0];    
      const myformData=new FormData();
      myformData.append("moduleId",upload.moduleId);
      myformData.append("batchId",upload.batchId);   
      myformData.append("file",file1);      
      console.log(myformData);
      const url="http://localhost:8080/result/upload";
      await fetch(url,{method:"post",body:myformData});
      setStatus("upload");
    };
    useEffect(() =>{
     console.log("initialized","load me");
     fetchData();
     fetchData2();    
    },[]);
    

    return (
        <div>
        <div className="my-5">
          <SearchStud student={student} setStudent={handleChange} status={status} setStatus={handleStatus}/>
        </div>
        <hr />
        <div className="container-fluid admin-field-container">
          <div className="row d-flex justify-content-around">
            <div className="col-2 p-2 div-border admin-field">
              <Form>
                <Form.Group>
                  <Form.Label className="mr-2">Upload Marks</Form.Label>
                </Form.Group>
                <Form.Control className="my-2" as="select" value={upload.batchId} custom onChange={syncBatch}>
                <option >Select Batch</option>
                  {
                    batchList.map((item,index) =>(
                     <option key={index} value={item.batchId}>{item.batchMonth}{item.batchYear}</option>
                    ))
                  }
       

          </Form.Control>
                <Form.Control
                  className="my-2"
                  as="select"
                  id="inlineFormCustomSelectPref"
                  custom
                  value={upload.moduleId}
                  onChange={syncModule}
                >

                <option >Select Subject</option>
                  {
                    moduleList.map((item,index) =>(
                     <option key={index} value={item.moduleId}>{item.moduleName}</option>
                    ))
                  }
               
                </Form.Control>
                <Form.Control
                  className="my-2"
                  as="select"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option>Exam Type</option>
                  <option value="1">MCQ</option>
                  <option value="1">Lab</option>
                </Form.Control>
                <Form.Group>
                  <Form.File id="fileId" name="file" label="Select File"  />
                </Form.Group>
                <Button
                  className="my-2 text-center"
                  variant="secondary"
                  type="submit"
                  onClick={fetchUpload}
                >
                  Upload
                </Button>
              </Form>
            </div>
            <div className="col-7 div-border admin-field admin-field-middle">
             <div>
            {/* Excel Export */}
                
            {status =="search" ? (
               <div>
                {  
                  student.map((item,index) =>(
                  <div key={index}>{item.studId}</div>
                  ))
                }
               </div>
            ) : status == "upload" ? (
                <div>Uploaded Succesfully</div>
            ) : (
              <div>Done</div>
            )}

                  
                   

              </div>
              <div className="export">
                <Button className="export-button" variant="secondary"  href="/excel">
                  Export
                </Button>
              </div>
            </div>
            <div className="col-2 div-border px-2 admin-field">
              <div>
                <Button href="/notice" variant="secondary notice" type="button">
                  Notice
                </Button>

                <hr />
              </div>
              <div>
                <Form className="">
                  <Form.Group>
                    <Form.Label className="mr-2">Upload Marks</Form.Label>
                  </Form.Group>
                  <Form.Control className="my-2" as="select" custom>
                  <option name="batchs">Select Batch</option>
                  {
                    batchList.map((item,index) =>(
                     <option key={index} value={item.batchId}>{item.batchMonth}{item.batchYear}</option>
                    ))
                  }
                  </Form.Control>
                  <Form.Control
                    className="my-2"
                    as="select"
                    id="inlineFormCustomSelectPref"
                    custom
                    name="module"
                 
                  >


             <option >Select Subject</option>
             <option name="batchs">Select Subject</option>
                  {
                    moduleList.map((item,index) =>(
                     <option key={index} value={item.moduleId}>{item.moduleName}</option>
                    ))
                  }
                   
                  </Form.Control>
                  <Button
                    variant="secondary"
                    className="button-align"
                    type="submit"
                   // onClick={()=>viewResultData(item)}
                   
                  >
                    View
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <Button
              href="/adminnext"
              className="next-button"
              variant="secondary"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
   
}

export default AdminFieldUpdated;