import React from 'react'
import '../styling/Home.css'
import dsc from '../images/DSC_6656.jpg'

function Home(){
    return(
        <div id='about-me' className='parent_about_me'>
            <div className='about_me'>
                <img src={dsc} alt="My_photo" className='profile-picture'></img>
                <div className='content'>
                    <h1 className='about-me-heading'>About me</h1>
                    <p className='about-me-para'>
                    Hello, my name is Amey Sati, and I am currently pursuing a Bachelor's in Computer Science Engineering at VIT bhopal University. I completed my secondary and higher secondary education under the ICSE Board, graduating in 2020 and 2018, respectively. I was born and brought up in Dehradun, Uttarakhand, and did my schooling from there. 
My academic focus and practical skills revolve around Full Stack Web Development and game development, which I've had the opportunity to apply and enhance through the successful completion of projects.
I look forward to taking on new challenges and growing both professionally and personally. I am excited about the opportunity to work in a dynamic and innovative environment that encourages learning and development.


                    </p>
                </div>
                
                
            </div>
        </div>
    )
};

export default Home;