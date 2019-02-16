import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
    return (
        <div>
            <style jsx>{`
            p{
                font-size: 18px;
            }

        
            `}
           
            </style>
            <div class="body">
<h2>{props.name}</h2>
<p>{props.description}</p>
 <a href={props.link}>Project github link</a>
        </div>
        </div>

    )
}

export default Project;

Project.propTypes = {
    projectName: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}