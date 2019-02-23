import React from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Admin(props) {
    return (
    <div><style jsx>{`
      .body {
            width: 800px;
            margin-left: 450px;
            padding-left: 50px;
         background-color: #BFE5F1;
            
    }
    `}</style>
       
            <ProjectList projectList = {props.projectList} /><br></br>
     
       <button className='body'><Link to='/newproject'>Add new project</Link></button><br/><br></br><hr/><br/>
        </div>
    );
}

Admin.propTypes={
    projectList: PropTypes.array
}

export default Admin;