import React from 'react';
import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <a className="navbar-brand" href="#">EHPAD Senonches</a>
                    <a className="navbar-brand" href="#">RESIDENCE PERIER</a>



                    <div className="collapse navbar-collapse row justify-content-end " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item row nav-space">
                                <img className="greenCircle" src="./greenCircle.png" alt="circle" ></img>
                            </li>
                            <li class="nav-item row nav-space nav-text">
                                <a class="nav-link" href="#">Votre Admission</a>
                            </li>
                            <li className="nav-item row  nav-space ">
                                <img className="greenCircle" src="./pinkCircle.png" alt="circle" ></img>
                            </li>
                            <li class="nav-item row nav-space nav-text">
                                <a class="nav-link" href="#">Votre Séjour</a>
                            </li>
                            <li className="nav-item row nav-space">
                                <img className="greenCircle" src="./blueCircle.png" alt="circle" ></img>
                            </li>
                            <li class="nav-item row nav-space nav-text">
                                <a class="nav-link" href="#">Vos Droits</a>
                            </li>
                            <div className="col-1"></div>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;