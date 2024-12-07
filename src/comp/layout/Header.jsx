import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
<center>
    <nav className="navbar navbar-expand-lg text-black" align="center">
  <div className="container mt-2 mb-3">
  <img src="src/assets/img/logo.png" alt="" className=' logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
          

        </li>
        <li className="nav-item dropdown ">
              <Link className="nav-link  dropbtn" to="/ViewUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          View
              </Link>
            </li>
     
            <li className="nav-item dropdown ">
              <Link className="nav-link  dropbtn" to="/Menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
              </Link>
            </li>
            
        <li className="nav-item ">
          <Link className="nav-link  "  to='/Contact'>Contact</Link>
        </li>
      </ul>
    </div>
    </div>
    
</nav></center>


  )
}

export default Header


