import React from 'react';
import '../styling/Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBuilding, faUserGraduate } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons

function Education() {
    return (
        <div id="education" className="parent-education">
            <div className="education">
                <h1 className="education-heading">
                    <FontAwesomeIcon icon={faSchool} /> Education
                </h1>
            </div>
            <div className="education-status">
                <ul className="education-list">
                    <li className="education-list-child">
                        <FontAwesomeIcon icon={faUserGraduate}/> Vit Bhopal (Btech in computer science engineering)
                    </li>
                    <li className="education-list-child">
                        <FontAwesomeIcon icon={faBuilding} /> Doon Blossoms School (10th ICSE)
                    </li>
                    <li className="education-list-child"> <FontAwesomeIcon icon={faBuilding}/> Doon Blossoms School (12th ICSE)</li>
                </ul>
            </div>
        </div>
    );
}

export default Education;
