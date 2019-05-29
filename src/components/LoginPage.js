import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect:false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRedirect =  this.renderRedirect.bind(this);
  }



  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.username === "" || this.state.password==="")
    {
      alert("Please Enter UserName or Password");
      return;
    }
    let data = JSON.parse(localStorage.getItem('UserData')); 
    for(var i=0; i < data.length ; i++){
   
      if(data[i].uName === this.state.username && data[i].password === this.state.password)
      {
        
        this.setState({redirect: true});
        return ;  
      }
    };
    if(this.state.redirect === false)
    {
    alert("invalid User Name or PassWord");
    }
  }

  renderRedirect()
  {
    if(this.state.redirect){
      return <Redirect to={{pathname:"/todo", uName : this.state.username}}/>
    }
  }
  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    const { username, password, error } = this.state;
    return (
        <div className="Login-Form">
            <h2>Login</h2>
            <form  name="form" onSubmit={this.handleSubmit} autoComplete="off" >
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username"  placeholder="UserName"onChange={this.handleUserChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  name="password" onChange={this.handlePassChange} />
                  
                </div>
                <div className="form-group">
                    <button className="btn">Login</button>
                </div>
              
            </form>
            {this.state.redirect && this.renderRedirect()}
        </div>
    );
}
}


export default LoginPage;