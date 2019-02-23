import React from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';

function Admin(props) {
    return (
        <div>
            <h2>ProJects </h2>
            <ProjectList projectList = {props.projectList} />
        </div>
    );
}

Admin.propTypes={
    projectList: PropTypes.array
}

export default Admin;