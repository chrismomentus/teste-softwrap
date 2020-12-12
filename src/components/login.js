import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Assets/AuthContext";
import { Button, Form, Alert } from 'react-bootstrap';


export default function Login() {
    const emailRef = useRef()
    const SenhaRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, SenhaRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }

    return (
        <>
        <div className="jumbotron-fluid">
            <Container className="p-3">
                <Jumbotron>
                    <h1 className='display-4'>Login Form</h1>
                    <hr/>
                    {error && <Alert variant="danger">{error}</Alert>}                    
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={SenhaRef} required/>
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">Log in</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        Cadastra-se <Link to="/signup">Cadastro</Link>
                    </div>                                    
                </Jumbotron>
            </Container>            
        </div>
        
        </>
    )
}