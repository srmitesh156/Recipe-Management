import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ title: '', ingredients: '', instructions: '' ,cuisine :'',cookingTime:'' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/menu/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/menu/${id}`, user)
      .then(response => {
        alert('User updated successfully');
        navigate('/ViewUser');
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="container my-5">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={user.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ingredients</label>
          <input
            type="ingredients"
            className="form-control"
            name="ingredients"
            value={user.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">instructions</label>
          <input
            type="text"
            className="form-control"
            name="instructions"
            value={user.instructions}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">cuisine</label>
          <input
            type="text"
            className="form-control"
            name="cuisine"
            value={user.cuisine}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">cookingTime</label>
          <input
            type="text"
            className="form-control"
            name="cookingTime"
            value={user.cookingTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Food Image</label>
          <input
            type="text"
            className="form-control"
            name="img"
            value={user.img}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
