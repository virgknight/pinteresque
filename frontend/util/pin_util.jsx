export const fetchAllPins = () => (
    $.ajax({
        url: "/api/pins",
        method: "GET"
    })
);

export const fetchPin = pinId => (
    $.ajax({
        url: `api/pins/${pinId}`,
        method: "GET"
    })
);