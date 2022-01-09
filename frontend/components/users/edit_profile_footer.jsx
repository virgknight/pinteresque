import React from "react";

const EditProfileFooter = ({ handleSubmit, madeUpdate }) => {
    let saveButtonClass = "styled-button edit-button";
    if (madeUpdate) {saveButtonClass += " red";}

    return (
        <footer className="shadowed">
            <button onClick={handleSubmit} className={saveButtonClass}>Save</button> 
        </footer>
    );
};

export default EditProfileFooter;