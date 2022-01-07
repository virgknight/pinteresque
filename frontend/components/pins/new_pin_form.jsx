import React from "react";

class NewPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner_id: this.props.currentUser.id,
            title: "",
            alt_text: ""
        };
    }

    render () {
        return (
            <h1>NEW PIN FORM?!?</h1>
        );
    }
}

export default NewPinForm;