import React, { Component } from "react";
import "./login.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState,useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function LoginUpdated() {
    const [roleData,setRoleData] =  useState([]);
    const history = useHistory();
    const [user, setUser] = useState({
        userId:" ",
        password:" ",
        role:" "
      });


    let fetchData = async() =>{
     const res =  await fetch("http://localhost:8080/user/role");
     const roleData = await res.json();
     console.log(roleData);

     setRoleData(roleData);
     
    };

   const syncUserId = (e)=> setUser({...user,userId:e.target.value});
   const syncPassword = (e)=> setUser({...user,password:e.target.value})
   const syncRoleId = (e)=> setUser({...user,role:e.target.value})
   

    useEffect(() =>{
     console.log("initialized","load me");
     fetchData();
 
    },[]);



    const fetchData1 = useCallback((user)=>{ 
        console.log(user);

        axios.post(`http://localhost:8080/student/login/${user.userId}`).then(
  
    (res)=>{
        if(user.userId!== res.data.userId && user.password!== res.data.password)
        {
            alert("error")
        }
        else{
            alert("success");
            console.log(res.data.role)
            if(res.data.role.roleId == 1){
                history.push("/supadmin");
            }else if(res.data.role.roleId == 2){
                history.push("/admin");  
            }else{
                history.push("/student");  
            }
           
        }
    }).catch((error)=>{
        console.log("wrong");
    })
    },[user]);



   const LoginUser = useCallback((e)=>{
    e.preventDefault();
    if(user.userId === " " || user.password === " "){
        alert("enter name please");
    }
      
    fetchData1(user);
  },[user]);
 
  

    return (
       
      <div className="container">
        <div className="login-form" id="login-form">
          <div className="login-data">
            <Form>
              <h3 className="form-heading">Login</h3>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="User Id"
                  name="userId"
                  value={user.userId}
                  onChange={syncUserId}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={syncPassword}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Control as="select" name="role" >
                <option name="role" value={user.role}
                  onChange={syncRoleId}>Select Role</option>
                  {
                    roleData.map((item,index) =>(
                     <option key={index} value={item.roleId}>{item.role}</option>
                    ))
                  }
                </Form.Control>
              </Form.Group>

              <Button className="mt-3" variant="secondary" type="submit" onClick={LoginUser}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }

export default LoginUpdated;