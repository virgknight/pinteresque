import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

class PinShow extends React.Component {
    componentDidMount () {
        this.props.requestPin(this.props.match.params.pinId);
    }

    render () {
        const { pin } = this.props;

        if (!pin) return null;

        return (
            <main>
                <button className="back-button" onClick={() => this.props.history.goBack()}><KeyboardBackspaceIcon /></button>
                
                <div id="pin-show-container">
                    <section id="pin-show">
                        <img src={pin.photoUrl}/>
                        <div className="pin-show-desc">
                            <h3>{pin.title}</h3>
                            <p>{pin.alt_text}</p>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default PinShow;