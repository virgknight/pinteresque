import React from "react";

const SplashImages0 = ({pins}) => {

    if (Object.keys(pins).length === 0) {
        return null;
    }

    return (<div className="image-grid">
        <div className="splash-img img1"><img src={pins[1].photoUrl}/></div>
        <div className="splash-img img2"><img src={pins[2].photoUrl} /></div>
        <div className="splash-img img3"><img src={pins[3].photoUrl} /></div>
        <div className="splash-img img4"><img src={pins[4].photoUrl} /></div>
        <div className="splash-img img5"><img src={pins[5].photoUrl} /></div>
        <div className="splash-img img6"><img src={pins[6].photoUrl} /></div>
        <div className="splash-img img7"><img src={pins[7].photoUrl} /></div>
        <div className="splash-img img8"><img src={pins[6].photoUrl} /></div>
        <div className="splash-img img9"><img src={pins[5].photoUrl} /></div>
        <div className="splash-img img10"><img src={pins[3].photoUrl} /></div>
        <div className="splash-img img11"><img src={pins[2].photoUrl} /></div>
    </div>);
};

export default SplashImages0;