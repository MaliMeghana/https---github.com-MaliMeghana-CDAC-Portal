import React, { Component } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState,useCallback} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Notice (){
    const history = useHistory();
    const [batchList,setBatchList] =  useState([]);
    const [notice ,setNotice] =useState({
        noticeId:"",
        noticeDesc:"",
        noticeTitle:"",
        batch:{batchId:""}
    });

    const [noticeData,setnoticeData]=useState([]);

    const syncTitle=(e)=>setNotice({...notice,noticeTitle:e.target.value});
    const syncDesc=(e)=>setNotice({...notice,noticeDesc:e.target.value});
    const syncBatch=(e)=>setNotice({...notice,batch:{batchId:e.target.value}});

        let fetchData = async() =>{
            const res =  await fetch("http://localhost:8080/dropdown/batchs");
            const batchList = await res.json();
            console.log(batchList);        
            setBatchList(batchList);        
        };

        let fetchNotices=async()=>{
            const res=await fetch("http://localhost:8080/notice/get-all");
            const notice=await res.json();
            console.log(notice);
            setnoticeData(notice);
        }

        useEffect(() =>{
        console.log("initialized","load me");
        fetchData();   
        fetchNotices();
       },[]); 
       
       let addNotice=useCallback(()=>{
            //console.log(notice);
            const json=JSON.stringify(notice);
            axios.post('http://localhost:8080/notice/add',json,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
       });
       let deleteNotice=useCallback((e)=>{
          const noticeId=e.target.value;
          console.log(noticeId);
            axios.delete(`http://localhost:8080/notice/delete/${noticeId}`)
       });

       let selectNotice=async(e) =>{
        const noticeId=e.target.value;
        const res =  await fetch(`http://localhost:8080/notice/get-One/${noticeId}`);
        const notice1 = await res.json();
        console.log(notice1);        
        setNotice(notice1);        
    };
    let updateNotice=useCallback(()=>{
        //console.log(notice);
        const json=JSON.stringify(notice);
        axios.put('http://localhost:8080/notice/update',json,{
            headers:{
                'Content-Type':'application/json'
            }
        });
   });
    return (
      <div className="container div-border admin-field mt-5 p-3">
        <div className="row">
            <Col md="12" className="d-flex justify-content-center">
                <button className="btn btn-lg btn-warning text-dark" style={{width:"40%"}} disabled>Notice</button>
            </Col>
        </div>
        <div className="row mt-3">
          <Col md="12">
                 <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Notice Title" value={notice.noticeTitle} onChange={syncTitle} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="text" placeholder="Description" value={notice.noticeDesc} onChange={syncDesc} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">                       
                        <Form.Control as="select" onChange={syncBatch} value={notice.batch.batchId} >
                        <option >Select Batch</option>
                            {
                                batchList.map((item,index) =>(
                                <option key={index} value={item.batchId}>{item.batchMonth}{item.batchYear}</option>
                                ))
                            }
                        </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                        {
                            notice.noticeId==""?(
                                <Button variant="success" type="submit" className="form-control" onClick={addNotice}>
                                  Add +
                                 </Button>
                            ):(
                                <Button variant="info" type="submit" className="form-control" onClick={updateNotice}>
                                  Update
                                 </Button>
                            )
                        }
                        
                        </Form.Group>
                    </Form.Row>
                    </Form>
              </Col>
        </div>
        <div className="row mt-3">
        <Col md="12">
        <Form>
            <table className="table">                
                <thead>
                <tr>
                   <th>Sr No</th>
                   <th>Title</th>
                   <th>Desc</th>
                   <th>Batch</th>
                   <th colSpan="2">Action</th>
                   </tr>
                </thead>
                
                <tbody>
                {
                    noticeData.length>0 ? ( noticeData.map((item,index)=>(
                         <tr key={index} >
                             <td>{index+1}</td>
                             <td>{item.noticeTitle}</td>
                             <td>{item.noticeDesc}</td>
                             <td>{item.batch.batchMonth}{item.batch.batchYear}</td>
                             <td><Button variant="danger" type="submit" value={item.noticeId} className="form-control" onClick={deleteNotice}>
                                        Delete
                                       </Button></td>
                             <td><Button variant="info"  value={item.noticeId} className="form-control" onClick={selectNotice}>
                                        Update
                                  </Button></td>
                         </tr>
                     ))
                     ):(
                            <tr>
                                <td colSpan={5}>No Notice</td>
                            </tr>
                     )
                 }
                </tbody>               
            </table>
        </Form> 
        </Col>
        </div>
      </div>
    );
  }


export default Notice;
