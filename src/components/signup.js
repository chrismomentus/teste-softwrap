import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Assets/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function Signup(){
    const emailRef = useRef()
    const SenhaRef = useRef()
    const SenhaConfirmaRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()
    const history = useHistory()

    async function onSubmit (e){
        e.preventDefault()

        if(SenhaRef.current.value !== SenhaConfirmaRef.current.value){
            return setError("Erro na confirmação de senha")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, SenhaRef.current.value)
            history.push("/")
          } catch {
            setError("Failed to create an account")
          }
    }

    return (
        <>
        <div className="jumbotron-fluid">
            <Container className="p-3">
                <Jumbotron>
                    <h1 className='display-4'>Cadastra-se</h1>
                    <hr/>
                    {error && <Alert variant="danger">{error}</Alert>}                    
                    <Form autoComplete="off" onSubmit={onSubmit}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={SenhaRef} required />
                        </Form.Group>
                        <Form.Group controlId="formGroupConfirmPassword">
                            <Form.Label>Confirma Senha</Form.Label>
                            <Form.Control type="password" ref={SenhaConfirmaRef} required />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">Cadastro</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        Ja possui <Link to="/login">Log in</Link>
                    </div>                                    
                </Jumbotron>
            </Container>            
        </div>

        </>
    )
}