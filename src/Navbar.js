import React from 'react'
import bkm from'./images/logo-Rbookmark.svg'
const Navbar = () => {
  return (
    <div>

<nav id='NavBar' class="navbar navbar-expand-lg navbar-light bg-light text-light">
  <div class="container">
    <a id='NvbSvg' class="navbar-brand navbarSvg" href="#"><img src={bkm} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul id='navbarUl' class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-4">
          <a class="nav-link active" aria-current="page" href="#">FEATURE</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link" href="#">PRICING</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <button className='navButton'><a class="nav-link nav-btn" href="#">LOGIN</a></button> 
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar