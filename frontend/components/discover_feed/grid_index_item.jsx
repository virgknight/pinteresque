import React from "react";
import { Link } from "react-router-dom";

const GridIndexItem = ({pin}) => {
    return (
        <Link to={`/pins/${pin.id}`}>
            <div className="pin-index-item">
                    <img key={`img-$`} src={pin.photoUrl} />
                    <div className="pin-desc-text">
                        <h6 className="pin-name">{pin.title}</h6>
                        <p className="pin-alt">{pin.alt_text}</p>
                    </div>
            </div>
        </Link>
    );
};

export default GridIndexItem;