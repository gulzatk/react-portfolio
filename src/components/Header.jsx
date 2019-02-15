import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
          h2 {
              margin-top: 30%;
              text-align: center;
              color: red
              
          }

          .link {
               padding: 10px 8px 6px 16px;
                text-decoration: none;
                font-size: 25px;
                color: #2196F3;
                display: block;
                text-align:center;
          }
        
          }
          .sidebar {
               width: 300px;
               height: 100%;
                position: fixed;
                z-index: 1;
                top: 20px;
                left: 10px;
                background: #eee;
                overflow-x: hidden;
                padding: 8px 0;

          }
          .sidebar .link:hover {
  color: #064579;
}
          `}
      </style>
      <div className="sidebar">
        <h2>Gulzat Karimova</h2>
        <br/> 
        <br />
        <div className="link">
        <Link to="/">Home</Link><br/><br />
                  <Link to="/">About</Link><br /><br />
                  <Link to="/">Projects</Link><br /><br />
                  <Link to="/">Experience</Link><br /><br />
                  <Link to="/">Interests</Link><br /><br />
                  <Link to="/">Contact</Link><br /><br />
              </div>
      </div>
    </div>
  );
}

export default Header;