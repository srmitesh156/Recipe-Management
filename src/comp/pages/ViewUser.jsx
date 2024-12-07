
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3000/menu')
      .then(response => {
        setUsers(response.data);
        console.log(setUsers);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (menuId) => {
    axios.delete(`http://localhost:3000/menu/${menuId}`)
      .then(response => {
        setUsers(users.filter(menu => menu.id !== menuId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleUpdate = (menuId) => {
    navigate(`/update-user/${menuId}`);
  };

  return (
    <>
      <div className="container my-5 viewuser">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
          <h2 className='text-info h1'>All Food  List</h2>
         
          </div>
        </div>
        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">All Details</a>
          </li>
        </ul>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col"> ID</th>
              <th scope="col">Title</th>
              <th scope="col">Ingredients</th>
              <th scope="col">Instructions</th>
              <th scope="col">Cuisine</th>
              <th scope="col">CookingTime</th>
              <th scope="col">Image</th>
              <th scope="col ">Action</th>
            </tr>
          </thead>

<tbody>
  {users.length > 0 ? (
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.title}</td>
        <td>ingredients</td>
        <td>instructions</td>
        <td>{user.cuisine}</td>
        <td>{user.cookingTime}</td>
        <td><img src={user.Img_url} alt={user.title} style={{ height: '50px', width: '50px' }} /></td>
        <td >
          <button className="badge bg-warning text-dark" style={{ width: '70px', marginLeft: '100px' }} onClick={() => handleUpdate(user.id)}>
            Update
          </button>
          <button className="badge bg-success" style={{ width: '70px' }} onClick={() => handleDelete(user.id)}>
            Delete
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="8">No users found</td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </>
  );
}

export default ViewUser;
