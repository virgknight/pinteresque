import React from "react";

export const getUserIcon = (user) => {
    // VKNOTE: Uncomment after adding ability for users to add profile pic!
    // return user.photoUrl ? 
    //         (<img src={user.photoUrl} height="50" width="50"/>) :
    //         (<svg height="55" width="55">
    //             <circle cx="50%" cy="50%" r="25" fill="#efefef" />
    //             <text x="50%" y="60%" textAnchor="middle" fill="#111" fontSize="18px">{user.display_name[0].toUpperCase()}</text>
    //         </svg>);
    
    return (<svg height="55" width="55">
        <circle cx="50%" cy="50%" r="25" fill="#efefef" />
        <text x="50%" y="60%" textAnchor="middle" fill="#111" fontSize="18px">{user.display_name[0].toUpperCase()}</text>
    </svg>);
};