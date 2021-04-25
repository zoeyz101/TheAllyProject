import React from "react";
import { Home } from "../Pages/home";
import Logo from "../Images/Logo.png"
import Styles from "../Styles/navbar.css"

export const Navbar = () => {
    return(
        <body>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>

        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FFE174">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                 <title1> The Ally Project </title1>
                </a>
            </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav flex-row-reverse">
      <li class="nav-item active">
        <a class="nav-link navbar-text-a" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-text-a" href="#">Resources</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-text-a" href="#">Take the Quiz</a>
      </li>
    </ul>
  </div>
</nav>
</body>
    )
}