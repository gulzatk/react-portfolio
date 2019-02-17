import React from 'react';
import resume from '../images/resume.png';


function Contact() {
    return (
        <div>
            <style jsx> {`
        .body {
            width: 800px;
            margin-left: 310px;
            padding-left: 50px;
            padding-top: 100px;
    }

    p {
      
      font-family: montserrat, Arial, sans-serif;
      font-size: 1.2rem;
    }

    #resume {
        width:500px;
        height: 600px;
        border: solid black 1px;
    }

        `}</style>

            <div className="body">
                <h2>Contacts</h2>
                <hr />
                <p>Email: gulzat.karimova@gmail.com</p>
                <p><a href='https://github.com/gulzatk'>Github</a></p>
                <p><a href='https://www.linkedin.com/in/gulzat-karimova/'>LinkedIn</a></p>
                <h4>Resume:</h4>
                <img id='resume' src={resume} />
            
            </div>
        </div>
    );
}

export default Contact;