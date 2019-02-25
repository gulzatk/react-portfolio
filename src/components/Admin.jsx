import React from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Admin(props) {
  return (
    <div><style jsx>{`
      .body {
            width: 30%;
            margin-left: 450px;
            padding-left: 50px;
           
      
            
    }
    `}</style>
    <h2 className="body"><Link to='/newproject'>Add new project</Link></h2>
       
    <ProjectList projectList={props.projectList} /> 
     
           
    </div>
  );
}

Admin.propTypes={
  projectList: PropTypes.array
};

export default Admin;