import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Consumo from './consumo';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
     let passwordError = "";

    if (!this.state.name) {
      nameError = "nome não pode estar em branco";
    }

    if (this.state.name !== "admin") {
      nameError = "login incorreto";
    }

    if (this.state.password !== "123") {
      passwordError = "senha incorreta";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError,passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    
    if (isValid) {
      console.log(this.state);
      // clear form
     // this.setState(initialState );
     this.setState({ redirect: true });
     
    }
  };

  render() {
    if (this.state.redirect) {
      return (
        <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => (
            <Consumo
              books={this.state.books}
            />
          )}/>
        </div>
      </BrowserRouter>
      )
    }
    return (

     
      <form onSubmit={this.handleSubmit}>
       <div>
       <img src={logo} alt="Logo" />
      </div>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
        
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br></br>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            
          />
            <br></br>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <br></br>
        <button  type="submit">Entrar</button>
      </form>
    );
  }
}
