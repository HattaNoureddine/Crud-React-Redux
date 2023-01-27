import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUserAction } from "../Config/actions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddUser() {
  const count = useSelector(data=>data.users.length);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () =>{
    dispatch(addUserAction({
      id:count+1,
      name:name,
      email:email
    }))
    navigate('/')
  }
  return (
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control className="w-50" type="text" value={name} onChange={(e) =>setName(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control className="w-50"  type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
      </Form.Group>

      <Button onClick={handleClick} variant="primary" >
        Add
      </Button>
    </Form>
  )
}
{/* <input type="text" value={name} onChange={(e) =>setName(e.target.value)} />
<input  type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
<button onClick={handleClick}>Enregistrer</button> */}
