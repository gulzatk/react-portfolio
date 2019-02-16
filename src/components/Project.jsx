import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
    return (
        <div>
            <style
<h3>{props.projectName}</h3>
<p>{props.description}</p>
<p>Project link <a href={props.link}></a></p>
        </div>

    )
}

export default Project;

Project.propTypes = {
    projectName: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}