import React from "react";
import { Link } from "react-router-dom";

const PinOwnerInfo = ({ owner, getUserIcon }) => (
    <Link to={`/users/${owner.id}`}>
        <section className="uploader-info">
                <div>{getUserIcon(owner)}</div>
                <h4>{owner.display_name}</h4>
        </section>
    </Link >
);

export default PinOwnerInfo;