import React, { Component } from "react";
import {createBrowserHistory} from "history";
import { Route, BrowserRouter as Router,Switch ,withRouter} from "react-router-dom";
import "./login.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import LoginService from "../services/LoginService";
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        userId:"",
        password:"",
        roleId:"",
        role1:[]
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
  login=(e)=>{
    e.preventDefault();
    let user=({userId:this.state.userId,password:this.state.password,role:{roleId:this.state.roleId}});
    console.log("user", JSON.stringify(user));
     LoginService.login(user).then(res=>{
      this.props.history.push("/admin");
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
