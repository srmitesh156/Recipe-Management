import React, { useState ,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();


  async function submitData(data) {
    await axios.post('http://localhost:3000/menu', data)
      .then((res) => {
        setSubmittedData(data);
        uuidv4();
        alert("Data has been Added");
      });

      async function showapi(){
        const result=await axios.get('http://localhost:3000/menu')
        console.log(result.data.user)
      }
      useEffect(()=>{
        showapi()
        },[])

        
 
  }
  const handleDataClick = ()  => {
    navigate('/viewUser')
}

  return (
    <>
      <div className="wrapper ">
        <div className="login-box">
          <form method="post" onSubmit={handleSubmit(submitData)}>
            <h2>Add FoodRecipe</h2>
      
            <div className="input-box">
              <input type="text" required  {...register('title', {
              required: {
                value: true,
                message: "Enter Your title"
              },
              minLength: {
                value: 3,
                message: "atleast 3 Charcter"
              },
              maxLength: {
                value: 50,
                message: "Maximum  50 Charcter "
              }
            })}/>
                 <span>{errors.title && errors.title.message}</span>
              <label>title</label>
            </div>

            <div className="input-box">
              <input type="ingredients" required  {...register('ingredients', {
              required: {
                value: true,
                message: "Enter Your ingredients"
              },
              minLength: {
                value: 3,
                message: "atleast 3 Charcter"
              },
              maxLength: {
                value: 800,
                message: "Maximum  800 Charcter "
              }
            })}/>
              <span>{errors.ingredients && errors.ingredients.message}</span>
              <label>ingredients</label>
            </div>
      
            <div className="input-box">
              <input type="text" required  {...register('instructions', {
              required: {
                value: true,
                message: "Enter Your instructions"
              },
              minLength: {
                value: 3,
                message: "atleast 3 Charcter"
              },
              maxLength: {
                value: 2050,
                message: "Maximum  2050 Charcter "
              }
            })}/>
            <span>{errors.instructions && errors.instructions.message}</span>
              <label>instructions</label>
            </div>
            <div className="input-box">
              <input type="cuisine" required  {...register('cuisine', {
              required: {
                value: true,
                message: "Enter Your cuisine"
              },
              minLength: {
                value: 3,
                message: "atleast 3 Charcter"
              },
              maxLength: {
                value: 1050,
                message: "Maximum  1050 Charcter "
              }
            })}/>
              <span>{errors.cuisine && errors.cuisine.message}</span>
              <label>cuisine</label>
            </div>
      
            <div className="input-box">
              <input type="text" required  {...register('cookingTime', {
              required: {
                value: true,
                message: "Enter Your cookingTime"
              },
              minLength: {
                value: 3,
                message: "atleast 3 Charcter"
              },
              maxLength: {
                value: 50,
                message: "Maximum  10 Charcter "
              }
            })}/>
            <span>{errors.cookingTime && errors.cookingTime.message}</span>
              <label>cookingTime</label>
            </div>

            <div className="input-box">
              <input type="text" required  {...register('Img_url', {
              required: {
                value: true,
                message: "Enter Your Img_url"
              },
              minLength: {
                value: 3,
                message: "atleast 3 Charcter"
              },
              maxLength: {
                value: 800,
                message: "Maximum  800 Charcter "
              }
            })}/>
            <span>{errors.Img_url && errors.Img_url.message}</span>
              <label>Img_url</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox"/> Remember me</label>
            </div>
    
            <button type="submit">Submit</button> 
             {/* <button classNameName="View" type="button" onClick={handleDataClick}  >View</button> */}
          </form>
        </div>
      
      </div>


      
    </>
  );
}

export default Form;





