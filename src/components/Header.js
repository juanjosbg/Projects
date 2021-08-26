
import  './css/Styles.css';
import React from 'react';
import Search from './Search';


function Header({onSearch2}){

    return (
        <section className="Header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-header">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Poke App</a>
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>

                        <Search onSearch={onSearch2} />
                    </div>
                </div>
            </nav>
        </section>  
   );
}
export default Header;
