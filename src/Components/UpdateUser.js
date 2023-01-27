import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateUserAction } from "../Config/actions";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UpdateUser() {
  const {id} = useParams()
  const user = useSelector(data=>data.users.find((u)=>u.id===parseInt(id)));
  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () =>{
    dispatch(updateUserAction({
      id:id,
      name:name,
      email:email
    }))
    navigate('/')
  }
  return (
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control className="w-50" type="text" value={name} onChange={(e) =>setName(e.target.value)}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control className="w-50"  type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
      </Form.Group>

      <Button onClick={handleClick} variant="primary" >
        Update
      </Button>
    </Form>
  )
}
{/* <input type="text" value={name} onChange={(e) =>setName(e.target.value)} />
    <input  type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
    <button onClick={handleClick}>Enregistrer</button> */}
