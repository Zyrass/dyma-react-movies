import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">

        <NavLink to="/films" className="navbar-brand" >React Movies</NavLink>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"> 

              <NavLink 
                to="/films" 
                className="nav-link"
                activeClassName="active"
              >Accueil</NavLink>

            </li>
            <li className="nav-item">  

              <NavLink 
                to="/favoris" 
                className="nav-link"
                activeClassName="active"
              >Favoris</NavLink>
              
            </li>
          </ul>
        </div>
      </header>
    )
  }

}