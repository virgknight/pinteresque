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

export const getUserIconLarge = (user) => {
    // VKNOTE: Uncomment after adding ability for users to add profile pic!
    // return user.photoUrl ? 
    //         (<img src={user.photoUrl} height="50" width="50"/>) :
    //         (<svg height="55" width="55">
    //             <circle cx="50%" cy="50%" r="25" fill="#efefef" />
    //             <text x="50%" y="60%" textAnchor="middle" fill="#111" fontSize="18px">{user.display_name[0].toUpperCase()}</text>
    //         </svg>);

    return (<svg height="125" width="125">
        <circle cx="50%" cy="50%" r="60" fill="#efefef" />
        <text x="50%" y="63%" textAnchor="middle" fill="#111" fontSize="40px" fontWeight="800">{user.display_name[0].toUpperCase()}</text>
    </svg>);
};

export const fetchOtherUser = (userId) => (
    $.ajax({
        url: `/api/users/other/${userId}`,
        method: "GET",
    })
);

export const updateUser = (user) => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH",
        data: { user }
    })
);

export const getUserPins = userId => (
    $.ajax({
        url:`/api/users/${userId}/pins`,
        method: "GET"
    })
)