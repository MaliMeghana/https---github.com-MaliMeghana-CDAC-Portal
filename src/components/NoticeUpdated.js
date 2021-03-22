import React, { Component } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";


function Notice (){
    const [batchList,setBatchList] =  useState([]);
    const [notice ,setNotice] =useState({
        noticeDesc:"",
        noticeTitle:"",
        batch:{batchId:""}
    });

    const syncTitle=(e)=>setNotice({...notice,noticeTitle:e.target.value});
    const syncDesc=(e)=>setNotice({...notice,noticeDesc:e.target.value});
    const syncBatch=(e)=>setNotice({...notice,batch:{batchId:e.target.value}});

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
       
       let addNotice=()=>{
            console.log(notice);
            axios.post('')
       }
    return (
      <div className="container div-border admin-field mt-5 p-3">
        <div className="row">
            <Col md="12" className="d-flex justify-content-center">
                <button className="btn btn-lg btn-info" style={{width:"40%"}}>Notice</button>
            </Col>
        </div>
        <div className="row mt-3">
          <Col md="12">
                 <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Notice Title" value={notice.noticeTitle} onChange={syncTitle} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="text" placeholder="Description" value={notice.noticeDesc} onChange={syncDesc} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">                       
                        <Form.Control as="select" onChange={syncBatch} selected={notice.batch.batchId}>
                        <option >Select Batch</option>
                            {
                                batchList.map((item,index) =>(
                                <option key={index} value={item.batchId}>{item.batchMonth}{item.batchYear}</option>
                                ))
                            }
                        </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Button variant="primary" type="submit" className="form-control" onClick={addNotice}>
                           Add +
                        </Button>
                        </Form.Group>
                    </Form.Row>
                    </Form>
              </Col>
        </div>
        <div className="row">
        <Col md="12">
            <table className="table">
                <tr>
                <thead>
                   <th>Title</th>
                   <th>Desc</th>
                   <th>Btach</th>
                </thead>
                <tbody>

                </tbody>
                </tr>
            </table>
        </Col>
        </div>
      </div>
    );
  }


export default Notice;
