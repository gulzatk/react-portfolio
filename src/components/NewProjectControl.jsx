import React from "react";
import NewProjectForm from "./NewProjectForm";
import PropTypes from "prop-types";

function NewProjectControl(props) {
    return (
        <NewProjectForm onNewProjectCreation={this.props.onNewProjectCreation} />
    )
}

NewProjectControl.propTypes = {
    onNewProjectCreation: PropTypes.func
};

export default NewProjectControl;