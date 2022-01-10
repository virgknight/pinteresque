import React from "react";

export const getUserIconMini = (user) => {
    return user.photoUrl ?
        (<img src={user.photoUrl} height="30" width="30" style={{ borderRadius: "50%" }} />) :
        (<svg height="30" width="30">
            <circle cx="50%" cy="50%" r="13" fill="#efefef" />
            <text x="50%" y="66%" textAnchor="middle" fill="#111" fontSize="12px">{user.display_name[0].toUpperCase()}</text>
        </svg>);

};

export const getUserIcon = (user) => {
    return user.photoUrl ? 
        (<img src={user.photoUrl} height="50" width="50" style={{ borderRadius: "50%" }}/>) :
            (<svg height="55" width="55">
                <circle cx="50%" cy="50%" r="25" fill="#efefef" />
                <text x="50%" y="60%" textAnchor="middle" fill="#111" fontSize="18px">{user.display_name[0].toUpperCase()}</text>
            </svg>);
    
};

export const getUserIconLarge = (user) => {
    return user.photoUrl ? 
        (<img src={user.photoUrl} height="120" width="120" style={{ borderRadius: "50%"  }}/>) :
        (<svg height="125" width="125">
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
        data: user,
        contentType: false,
        processData: false
    })
);

export const deleteUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: "DELETE"
    })
)

export const getUserPins = userId => (
    $.ajax({
        url:`/api/users/${userId}/pins`,
        method: "GET"
    })
)

export const getUserBoards = userId => (
    $.ajax({
        url: `/api/users/${userId}/boards`,
        method: "GET"
    })
)