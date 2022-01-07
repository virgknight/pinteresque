import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IosShareIcon from '@mui/icons-material/IosShare';
import LinkIcon from '@mui/icons-material/Link';

import PinShowMore from "./pin_show_more";
import PinShowComment from "./pin-show-comment";

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }

    componentDidMount () {
        this.props.requestPin(this.props.match.params.pinId);
    }

    handleCopy (e) {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href);
    }

    render () {
        const { pin, currentUser } = this.props;

        if (!pin) return null;

        return (
            <main>
                <button className="back-button" onClick={() => this.props.history.goBack()}><KeyboardBackspaceIcon /></button>
                
                <div id="pin-show-container">
                    <section id="pin-show">

                        <img src={pin.photoUrl}/>

                        <div className="pin-show-desc">
                            <div className="pin-show-nav">
                                <div className="ps-nav-icons">
                                    <PinShowMore pin={pin} currentUser={currentUser} />
                                    <IosShareIcon fontWeight="900" />
                                    <div onClick={this.handleCopy}><LinkIcon fontWeight="900" /></div>
                                </div>
                                {/* VKNOTE: Add save-to-board dropdown after boards have been created!!! */}
                                <div className="board-save">(BoardSave component will go here)</div>
                            </div>

                            <h3>{pin.title}</h3>
                            <p>{pin.alt_text}</p>
                            <br />
                            <PinShowComment currentUser={currentUser}/>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default PinShow;