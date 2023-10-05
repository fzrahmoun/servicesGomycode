import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {
  return (
    <React.Fragment>
        <div className='app'>
                     {/* Menu     */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                        <a className="navbar-brand" href="#">LOGO</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                    {/* End Menu     */}

                    <div className='container'>
                    {/* Heading     */}
                    <h1>Hello</h1>
                    <p>This is a paragraph.</p>
                    {/* End Heading     */}

                    {/* Services     */}
                    <div className='row'>
                        <div className='col-md-4'>
                            <h2>Service One</h2>
                            <p>lorem upsum lorem upsum </p>
                        </div>
                        <div className='col-md-4'>
                        <h2>Service Two</h2>
                        <p>lorem upsum lorem upsum </p>

                        </div>
                        <div className='col-md-4'>
                        <h2>Service Three</h2>
                        <p>lorem upsum lorem upsum </p>

                        </div>
                    </div>
                    {/* End services     */}
            </div>
        </div>
    </React.Fragment>
  );
}

export default App;