import React,{useState} from 'react';
import { supabase } from '../supabase';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () =>{
    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const handleInputs = (e) =>{
        setInputs({
          ...inputs,
          [e.target.name]:e.target.value

        })
    }
  
    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        setLoading(true)
        const { error } = await supabase.auth.signIn(inputs)
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        setLoading(false)
      }
    }
    return (  
        <div>
            <h1>Login </h1>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail"  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputs} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputs} />
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            
        </div>
    )
}

export default Login