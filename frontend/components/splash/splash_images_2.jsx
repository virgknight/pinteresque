import React from "react";

const SplashImages2 = ({ pins }) => {
    if (Object.keys(pins).length === 0) return null;

    return (<div className="image-grid">
        <div className="splash-img img1"><img src={pins[8].photoUrl} /></div>
        <div className="splash-img img2"><img src={pins[9].photoUrl} /></div>
        <div className="splash-img img3"><img src={pins[10].photoUrl} /></div>
        <div className="splash-img img4"><img src={pins[11].photoUrl} /></div>
        <div className="splash-img img5"><img src={pins[14].photoUrl} /></div>
        <div className="splash-img img6"><img src={pins[13].photoUrl} /></div>
        <div className="splash-img img7"><img src={pins[9].photoUrl} /></div>
        <div className="splash-img img8"><img src={pins[13].photoUrl} /></div>
        <div className="splash-img img9"><img src={pins[12].photoUrl} /></div>
        <div className="splash-img img10"><img src={pins[12].photoUrl} /></div>
        <div className="splash-img img11"><img src={pins[13].photoUrl} /></div>
    </div>);
};

export default SplashImages2;