import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeW9iw9cAfzIQuebg02JNBQpEYeF1lpxLwhwSPmFYv&s' alt=''  style={{height:"50px"}}  />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link " to="/login">Login</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
    </ul>
    
  </div>
</nav>


    </div>
  )
}

export default Navbar