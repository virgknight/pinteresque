import React from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

class PinShortcutButtons extends React.Component {
    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.goToCreatePin = this.goToCreatePin.bind(this);
    }

    expand (cname) {
        return (e) => {
            const target = document.getElementById(cname);
            target.classList.toggle("hidden");
        };
    }

    goToCreatePin (e) {
        e.preventDefault;
        this.expand("add-link-modal")();
        this.props.history.push("/pin-builder");
    }

    render () {
        const { currentUser } = this.props;
        return (
            currentUser ?
                <aside id="omnipresent-buttons">

                    <div className="omni-display">
                        <div id="add-link-modal" className="hidden shadowed" onClick={this.goToCreatePin}>
                            <div style={ {display: "flex", alignItems: "center",}}>
                                <AddIcon sx={{ fontSize: 26 }}/> 
                                <p>Create a pin</p>
                            </div>
                        </div>
                        <button className="shadowed" onClick={this.expand("add-link-modal")}>
                            <AddIcon sx={{ fontSize: 36 }}/>
                        </button>
                    </div>

                    <div className="omni-display">
                        <div id="help-modal" className="hidden shadowed">
                            <p>Need some help? <span style={{fontWeight: "lighter"}}>Ask David!</span></p>
                        </div>
                        <button className="shadowed question-button" onClick={this.expand("help-modal")}>
                            <QuestionMarkIcon sx={{ fontSize: 32 }} />
                        </button>
                    </div>

                </aside>
                :
                null
        );
    }
}

export default PinShortcutButtons;