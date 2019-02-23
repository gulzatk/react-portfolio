import React from 'react';


function About() {
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

    li {
        font-family: montserrat, Arial, sans-serif;
      font-size: 1.2rem;
     
    }

        `}</style>

      <div className="body">
        <h2>Who Am I?</h2>
        <p> Hello I'm <em>Gulzat Karimova.</em> I am a student at Epicodus Coding bootcamp and Junior Web Developer. My background was Public relations and Advertising. I liked it. After immigrating to the US I desided to change my carrer path and now happy to choose programming. I love coding.</p><hr/>
        <h2>My Edication</h2>
        <ul>
          <li>Epicodus Programming School (2018-2019)</li><br/>
          <li>Kal Academy(Coding Academy, Intro To Programming with Python (2018))</li><br />
          <li>Cascadia Collage (Adult Basic Education, US History (2017-2018))</li><br />
          <li>Bellevue Collage (English as a Second Language, 6+ Level (2015)></li><br />
          <li>Kyrgyz-Turkish Manas University (Public Relations and Advertising (2009-2014)) </li><br />
          <li>#1 Gymnasium High School (2003-2009)</li><br />
        </ul>
        
      </div>
    </div>
  );
}

export default About;