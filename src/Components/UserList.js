import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { deleteUserAction } from "../Config/actions";
import Table from 'react-bootstrap/Table';

export default function UserList() {
  const users = useSelector((data)=>data.users);
  const dispatch = useDispatch();
  const handlDelete = (id) =>{
    dispatch(deleteUserAction(id))
  }
  return (
    <div>
      <p>
        <Link to="/add-user">
          <button className='btn btn-primary'>Add user</button>
        </Link>
      </p>
      <Table  striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
                    {users.map((user, index)=> {
                            return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`}>
                                        <button className='btn btn-success'>Edit</button>
                                    </Link>
                                    <button className='btn btn-danger m-1' onClick={() => handlDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
      </Table>
    </div>
  )
}
