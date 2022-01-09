import React from "react";

const EditProfileFooter = ({ handleSubmit, madeUpdate }) => {
    let saveButtonClass = "styled-button";
    if (madeUpdate) {saveButtonClass += " red";}

    return (
        <footer className="shadowed">
            <div className="button-flex">
                <button onClick={handleSubmit} className={saveButtonClass}>Save</button> 
            </div>
        </footer>
    );
};

export default EditProfileFooter;