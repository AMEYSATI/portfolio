import React from "react";
import '../styling/Projects.css';
import gimage from '../images/image.png';
import travel from '../images/image2.png';
import blog from '../images/image3.png';
import plane from '../images/image4.png';

function Projects() {
    return (
        <div id='projects' className="oldest">
            <h1 className="title">Projects</h1>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="overlay-image" style={{ backgroundImage: `url(${gimage})` }}></div>
                        <div className="container">
                            <h1>GImage</h1>
                            <p>
                            Transforming concepts into captivating visual masterpieces, adept at merging creativity with technical
                            expertise. Proficient in graphic design, digital art, and AI-generated imagery.
                            </p>
                            <a href="https://github.com/AMEYSATI/GImage" className="btn btn-lg btn-primary" target="_blank" rel="noopener noreferrer">
                                GitHub Link
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay-image" style={{ backgroundImage: `url(${travel})` }}></div>
                        <div className="container">
                            <h1>Travel Companion</h1>
                            <p>
                            Developed a cutting-edge Travel Advisor App equipped with sophisticated search capabilities, robust data
                            filtering options, and an intuitive interface, enabling users to effortlessly explore a diverse range of hotels, restaurants,
                            and attractions at various destinations.
                            </p>
                            <a href="https://github.com/AMEYSATI/travel_companion" className="btn btn-lg btn-primary" target="_blank" rel="noopener noreferrer">
                                GitHub Link
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay-image" style={{ backgroundImage: `url(${blog})` }}></div>
                        <div className="container">
                            <h1>Blog Website</h1>
                            <p>
                            Created a modern blog website featuring a user-friendly interface, dynamic content management with community sharing.
                            </p>
                            <a href="https://github.com/AMEYSATI/Blog" className="btn btn-lg btn-primary" target="_blank" rel="noopener noreferrer">
                                GitHub Link
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay-image" style={{ backgroundImage: `url(${plane})` }}></div>
                        <div className="container">
                            <h1>The Last Tree</h1>
                            <p>
                            Save humanity from aliens using dodging and shooting mechanics in a chaotic experience.
                            </p>
                            <a href="https://github.com/AMEYSATI/Last-Tree" className="btn btn-lg btn-primary" target="_blank" rel="noopener noreferrer">
                                GitHub Link
                            </a>
                        </div>
                    </div>
                </div>
                <a href="#myCarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a href="#myCarousel" className="carousel-control-next" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Projects;
