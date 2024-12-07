import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Data = () => {
    const { id } = useParams();  // Get the 'id' from the URL
    const [menuData, setMenuData] = useState(null);  // State to hold fetched data
    const [loading, setLoading] = useState(true);  // Loading state

    useEffect(() => {
        console.log("Fetching data for ID:", id);  // Add this to see if ID is being logged
        
        fetch(`http://localhost:3000/menu/${id}`)  // Adjust this URL to match your API or JSON-server
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);  // Check if the data is fetched correctly
                setMenuData(data);  // Set the fetched data to state
                setLoading(false);  // Stop loading
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);  // Stop loading even on error
            });
    }, [id]);

    // If loading, show a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no data is found, show a message
    if (!menuData) {
        return <div>No data found for ID: {id}</div>;
    }

    return (
        <div className="container mt-5">
            <h1>{menuData.title}</h1>
            <img src={menuData.Img_url} alt={menuData.title} className="img-fluid" />
            <div className="mt-4">
                <h4>Cuisine: {menuData.cuisine}</h4>
                <p><strong>Ingredients:</strong> {menuData.ingredients}</p>
                <p><strong>Instructions:</strong> {menuData.instructions}</p>
                <p><strong>Cuisine:</strong> {menuData.cuisine}   |  <strong>CookingTime:</strong> {menuData.cookingTime}</p>
               
            </div>
        </div>
    );
};

export default Data;
