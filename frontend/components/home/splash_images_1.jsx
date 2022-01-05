import React from "react";

const SplashImages1 = ({ pins }) => {
    if (Object.keys(pins).length === 0) return null;

    return (<div className="image-grid">
        <div className="splash-img img1"><img src={pins[16].photoUrl} /></div>
        <div className="splash-img img2"><img src={pins[18].photoUrl} /></div>
        <div className="splash-img img3"><img src={pins[15].photoUrl} /></div>
        <div className="splash-img img4"><img src={pins[17].photoUrl} /></div>
        <div className="splash-img img5"><img src={pins[20].photoUrl} /></div>
        <div className="splash-img img6"><img src={pins[16].photoUrl} /></div>
        <div className="splash-img img7"><img src={pins[21].photoUrl} /></div>
        <div className="splash-img img8"><img src={pins[21].photoUrl} /></div>
        <div className="splash-img img9"><img src={pins[19].photoUrl} /></div>
        <div className="splash-img img10"><img src={pins[19].photoUrl} /></div>
        <div className="splash-img img11"><img src={pins[15].photoUrl} /></div>
    </div>);
};

export default SplashImages1;