export const getNote = (noteId) => {
    return $.ajax({
        method: 'GET',
        url: `api/notes/${noteId}`
    })
};

export const createNote = (note) => {
    return $.ajax({
        method: 'POST',
        url: 'api/notes',
        data: {
            note
        }
    })
}

export const updateNote = (noteId, note) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/notes/${noteId}`,
        data: {
            note
        }
    })
};
