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

// takes in an object containing pin objects (ex. those pulled from state)
// returns an array of shuffled pin objects
export const shufflePinObject = pinObj => (
    Object.values(pinObj).map((pin) => ({ pin, sort: Math.random() }))
        .sort((a, b) => (a.sort - b.sort))
        .map(({ pin }) => pin)
);