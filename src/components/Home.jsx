import React from 'react';
import { Link } from 'react-router-dom';
import water from '../images/tulip.jpg';


function Home(){
  return (
    <div>
      <style jsx> {`
    h1 {
      text-align:center;
      line-height: 1.5;
      font-family: poppins,Arial,sans-serif;
      font-size: 2.5rem;
    }
    h2 {

      text-align:center;
      margin-bottom: .5rem;
      
    }
    p {
      
      font-family: montserrat, Arial, sans-serif;
      font-size: 16px;
    }

    .home {
      width: 500px;
      border: light-grey;
     margin-left: 310px;
    //  text-align:center;
    padding-left: 350px;
    padding-top: 100px;
    }

    #homeImg {
      height:200px;
      width:250px;
      border-radius: 50%;
      padding-left: 130px;
      padding-right: 130px;

    }
    `}
      </style>
      <div className="home">
        <img id="homeImg" src={water}/>
        <h2>Hello I'm</h2>
        <h1>Gulzat Karimova</h1>
        <p>I am a student at Epicodus Coding bootcamp and junior Web Developer. I chaged my carrer path yeah ago and I am happy to choose programming. I love coding! </p>
        <Link to="/about">More About Me ></Link>
      </div>
    </div>
  );
}

export default Home;
