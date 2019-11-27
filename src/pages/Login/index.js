import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { Form } from "./styles" 


class Login extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  }
  
  render() {
    return (
      <Container>
        <Form>
          <label>
            <span> E-mail</span>
            <input
                type="text"
            />
          </label>
          <label>
            <span>Senha</span> 
            <input
              type="text"
            />
          </label>
            
          {/* <SubmitButton>Entrar</SubmitButton> */}
          <Link 
            to="/cadastrar"
            style={{
              borderRadius: 15,
              backgroundColor: "#7e72a8",
              width: "90%",
              padding: "5px 10px",
              color: "#FFF",
              border: 0,
              fontWeight: 500,
              lineHeight: 1.3,
              textAlign: "center",
              textDecoration: "none",
            }}
           >
            Entrar
          </Link>
        </Form>
      </Container>
    );
  }
}

export default Login;