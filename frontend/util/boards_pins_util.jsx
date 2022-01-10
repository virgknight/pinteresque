export const fetchAllSaves = () => (
    $.ajax({
        url: "/api/boards_pins",
        method: "GET"
    })
);

export const createSave = boardspin => (
    $.ajax({
        url: "/api/boards_pins",
        method: "POST",
        data: {boardspin}
    })
)

export const deleteSave = saveId => (
    $.ajax({
        url: `/api/boards_pins/${saveId}`,
        method: "DELETE"
    })
);