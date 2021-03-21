import React, { Component } from "react";

import { Route, BrowserRouter as Router,Switch ,withRouter, useHistory} from "react-router-dom";
import "./login.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import LoginService from "../services/LoginService";
import history from "./history";
import {ExcelRenderer,OutTable } from "react-excel-renderer";
class Login extends Component {
 
  constructor(props){
    super(props);
    this.state={
        user:[],  
        userId:"",
        password:"",
        role1:[],    
        roleId:"",
        
    }
    
    this.roleChnage=this.roleChnage.bind(this);
    this.login=this.login.bind(this);
    this.userIdChange=this.userIdChange.bind(this);
    this.passwordChange=this.passwordChange.bind(this);
  }
  componentDidMount(){
    LoginService.getRole().then((res)=>{
       this.setState({role1:res.data});
    });
  }
  roleChnage=(e)=>{
      this.setState({roleId:e.target.value});
  }
   login(){
     
      // let user1={userId:this.state.userId,password:this.state.password,role:{roleId:this.state.roleId}};
      // console.log("user", JSON.stringify(user1));
      LoginService.login(this.state.userId,this.state.password,this.state.roleId).then((res)=>{
        console.log("data"+res.data);
        if(res.data==null){
          history.push('/');
          alert("Invalid");
        }else{
          if(this.state.roleId==1){
            history.push('/supadmin');
          }else if(this.state.roleId==2){
            history.push('/admin');
          }else if(this.state.roleId==3){
            history.push('/student');
          }
        }     
       
       
      });
     
    
  }
  userIdChange=(e)=>{
    this.setState({userId:e.target.value});
  }
  passwordChange=(e)=>{
    this.setState({password:e.target.value});
  }
  
  render() {
    return (
      //   <div className="container div-border admin-field mt-5 p-3">
      //     <div className="row">
      //       <Col md="12">
      //         <Form>
      //           <Form.Group controlId="formBasicEmail">
      //             <Form.Label>Username</Form.Label>
      //             <Form.Control type="text" placeholder="Enter email" />
      //           </Form.Group>

      //           <Form.Group controlId="formBasicPassword">
      //             <Form.Label>Password</Form.Label>
      //             <Form.Control type="password" placeholder="Password" />
      //           </Form.Group>
      //           <Button
      //             type="submit"
      //             className="next-button p-2"
      //             variant="primary"
      //           >
      //             Login
      //           </Button>
      //         </Form>
      //       </Col>
      //     </div>
      //   </div>

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
                  onChange={this.userIdChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.passwordChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Control as="select" name="role" onChange={this.roleChnage}>
                <option value="">Select Role</option>
                {
                   this.state.role1.map(
                     role1=>
                      <option key={role1.roleId} value={role1.roleId}>{role1.role}</option>
                     
                   )
                }
                  
                </Form.Control>
              </Form.Group>

              <Button className="mt-3" variant="secondary" type="submit" onClick={this.login}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
