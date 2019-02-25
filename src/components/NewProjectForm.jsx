import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function NewProjectForm(props)  {
  let _names = null;
  let _description = null;
  let _link = null;

  function handleNewProjectFormSubmission(event) {
    event.preventDefault();
    props.onNewProjectCreation({ names: _names.value, description: _description.value, link: _link.value, id: v4() });
    _names.value = '';
    _description.value = '';
    _link.value = '';
  }

  return (
    <div><style jsx>{`
          .body {
            width: 800px;
            margin-left: 310px;
            padding-left: 50px;
            padding-top: 100px;
    }
        `}</style>
    <div className="body">
        <form onSubmit={handleNewProjectFormSubmission}>
        <h1>Add new Project to the list</h1>
        <hr/>
        <input
            type="text"
            id="names"
            placeholder="Project name"
            ref={input => {
            _names = input;
          }}
        />
        <hr/>
        <input
            type="text"
            id="description"
            placeholder="description"
            ref={input => {
            _description = input;
          }}
        />
        <hr/>
        <input
            id="link"
            placeholder="github link"
            ref={input => {
            _link = input;
          }}
        />
        <button type="submit">Add a project</button>
      </form><br></br><hr/>
        <Link to = '/admin'>Projects</Link>
      </div>
    </div>
  );
}


NewProjectForm.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default NewProjectForm;