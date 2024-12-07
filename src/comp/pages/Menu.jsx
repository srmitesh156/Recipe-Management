import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct hook

const Menu = () => {
    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();  // Get the navigate function

    useEffect(() => {
        fetch('http://localhost:3000/menu')  // Adjust URL if necessary
            .then((response) => response.json())
            .then((data) => setMenus(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Correct the onClick handler to use the navigate function properly
    const handleDataClick = (menuId) => {
        navigate(`/Data/${menuId}`);  // Use navigate to go to the new route
    };

    return (
        <>
            <div className="container mt-5">
                <h1>Food Menu..*</h1>
                <div className="row mt-5">
                    {menus.map((menu) => (
                        <div 
                            className="col-md-4" 
                            key={menu.id} 
                            onClick={() => handleDataClick(menu.id)}  // Pass the function correctly
                        >
                            <div className="card">
                                <img src={menu.Img_url} className="card-img-top" alt={menu.title} />
                            </div>
                            <div className="card-body m-2">
                                <h5 className="card-title mt-2">
                                    <span className='text-muted font-weight-bold'>Title: </span> 
                                    {menu.title}
                                </h5>
                                <p className="card-text">
                                    <span className='text-muted font-weight-bold'>Cuisine:</span>  
                                    {menu.cuisine}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;
