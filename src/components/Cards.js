import "bootstrap/dist/css/bootstrap.css";
import  './css/Styles.css';
import React from 'react';

function Cards(){
    return (
        <section className="Cards-App">
            <div className="Fist__cont-card">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-4">
                            <div className="card card__A">
                                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Pikachu</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card card__A">
                                <img src="https://static.pokemonpets.com/images/monsters-images-300-300/2181-Shiny-Ampharos.webp" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Ampharos</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card card__A">
                                <img src="https://static.pokemonpets.com/images/monsters-images-800-800/135-Jolteon.webp" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Jolteon</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </section>
    );
}

export default Cards;