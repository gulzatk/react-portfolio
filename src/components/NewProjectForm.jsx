import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewProjectForm(props) {
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
        <div>
            <form onSubmit={handleNewProjectFormSubmission}>
                <input
                    type="text"
                    id="names"
                    placeholder="Project name"
                    ref={input => {
                        _names = input;
                    }}
                />
                <input
                    type="text"
                    id="description"
                    placeholder="description"
                    ref={input => {
                        _description = input;
                    }}
                />
                <textarea
                    id="link"
                    placeholder="github link"
                    ref={textarea => {
                        _link = textarea;
                    }}
                />
                <button type="submit">Add a project</button>
            </form>
        </div>
    );
}


NewProjectForm.propTypes = {
    onNewProjectCreation: PropTypes.func
};

export default NewProjectForm;