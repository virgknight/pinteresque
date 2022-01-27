import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IosShareIcon from '@mui/icons-material/IosShare';
import LinkIcon from '@mui/icons-material/Link';

import BoardSaveContainer from '../boards/board_save_container';
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
        this.props.notify("copied");
    }

    render () {
        const { pin, currentUser, getUserIcon, notify } = this.props;

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
                                    {/* <IosShareIcon fontWeight="900" /> */}
                                    <div onClick={this.handleCopy}><LinkIcon fontWeight="900" /></div>
                                </div>
                                <BoardSaveContainer pinId={pin.id} indexView={false} />
                            </div>

                            <h3>{pin.title}</h3>
                            <p>{pin.alt_text}</p>
                            <br />
                            {pinOwner ? <PinOwnerInfo getUserIcon={getUserIcon} owner={pinOwner} /> : null}
                            <br />
                            <PinShowComment currentUser={currentUser} getUserIcon={getUserIcon} notify={notify}/>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default PinShow;