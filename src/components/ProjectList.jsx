import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import bg from '../images/bg.png';


function ProjectList(props) {
  var projectStyle = {
    backgroundImage: 'url(' + bg + ')',
    height: 700,
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  };
  return (
    <div style={projectStyle}>
      <style jsx>
        {`
          .grid-container {
              grid-template-columns: auto auto;
              display: grid;
              margin-left: 320px;
              margin-top: 30px;
          }

          .grid-item{
            border: 2px solid rgba(0, 0, 0, 0.8);
            // background-color: #BFE5F1;
            color:  purple;
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 10px;
            text-align: center;
            width: 80%;
            margin-top: 10px;
          }
          h1 {
               margin-left: 820px;
            font-family: poppins,Arial,sans-serif;
          }
      
          `}</style>
      <h1>Projects</h1>
      <div className="grid-container">
        {props.projectList.map((proj) => 
          <div className="grid-item">
            <Project projectName = {proj.projectName}
              description = {proj.description}
              link = {proj.link}
              id = {proj.key}
            />
          </div>
        )}
           
      </div>
    </div>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.array
};

export default ProjectList;

  