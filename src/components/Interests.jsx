import React from 'react';

function Interests() {
    return (
        <div>
            <style jsx > {`
             .body {
            width: 800px;
            margin-left: 310px;
            padding-left: 50px;
            padding-top: 20px;
    }

  li {
        font-family: montserrat, Arial, sans-serif;
      font-size: 1.2rem;
     
    }
    p{
        font-size: 16px;
    }
            `}</style>
            <div className='body'>
        <h2>Personal Interests</h2>
        <ol>
            <li>Sport</li>
            <p>(Yoga, Horse riding, swimming, hiking)</p>
            <li>Travel</li>
            <p>I like to travel differend places and countries. Ecpecially I like to learn different culturies and people all arounfd the world.</p>
            <li>Sewing </li>
            <p>I like create new styles and make clothes. This is my hobby. After working I enjoy to sew dresses to my daughter.</p>
            <li>Hair Styling</li>
            <p>One of my favorite thing to do is hair styling and cuting. </p>
        </ol>

        <h2>Technical Interests</h2>
        <ol>
            <li>Programming</li>
            <ul>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
            </ul>
            <li>Web Design</li>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>UI</li>
            </ul>
            <li>Advertising</li>
            <li>Public Relations</li>
        </ol>
        </div>
        </div>
    )
}
export default Interests;