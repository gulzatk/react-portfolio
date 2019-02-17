import React from 'react';
import { Link } from 'react-router-dom';
import kg from '../images/kg.jpg';
import homebg from '../images/homebg.jpg';


function Home(){
  // let background = {
  //   backgroundImage: 'url(' + home + ')',
  // }
  return (
    
    <div>
      <style  jsx> {`
    h1 {
      text-align:center;
      line-height: 1.5;
      font-family: poppins,Arial,sans-serif;
      font-size: 2.2rem;
    }
    h2 {

      text-align:center;
      margin-bottom: .5rem;
      
    }
    p {
      
      font-family: montserrat, Arial, sans-serif;
      font-size: 1.2rem;
    }

    .body {
      width: 500px;
      border: light-grey;
     margin-left: 310px;
    //  text-align:center;
    padding-left: 350px;
    padding-top: 100px;
    }

    #homeImg {
      height:180px;
      width:180px;
      border-radius: 50%;
      padding-left: 150px;
      padding-right: 150px;

    }
    `}
      </style>
      <div className="body">
        <img id="homeImg" src={kg}/>
        <h2>Hello I'm</h2>
        <h1>Gulzat Karimova</h1>
        <p>I am a student at Epicodus Coding bootcamp and junior Web Developer. I changed my carrer yeah ago and I am happy to choose programming. I love coding! </p>
        <Link to="/about">More About Me ></Link>
      </div>
    </div>
  );
}

export default Home;
