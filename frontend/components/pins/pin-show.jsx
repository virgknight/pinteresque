import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IosShareIcon from '@mui/icons-material/IosShare';
import LinkIcon from '@mui/icons-material/Link';

import PinShowMore from "./pin_show_more";
import PinOwnerInfo from "./pin_owner_info";
import PinShowComment from "./pin-show-comment";

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }

    componentDidMount () {
        this.props.requestPin(this.props.match.params.pinId)
            .then(({pin}) => this.props.requestOtherUser(pin.owner_id));
    }

    handleCopy (e) {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href);
        this.props.notify();
    }

    render () {
        const { pin, currentUser, getUserIcon } = this.props;

        if (!pin) return null;
        const pinOwner = this.props.users[pin.owner_id];

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
                            {pinOwner ? <PinOwnerInfo getUserIcon={getUserIcon} owner={pinOwner} /> : null}
                            <br />
                            <PinShowComment currentUser={currentUser} getUserIcon={getUserIcon}/>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default PinShow;