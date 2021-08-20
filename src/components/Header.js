
import  './css/Styles.css';
import React from 'react';
import Search from './Search';

function Header(){
    return (
        <section className="Header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-header">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="#">Poke App</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                        <Search/>
                    </div>
                </div>
            </nav>
        </section>  
   );
}
export default Header;
