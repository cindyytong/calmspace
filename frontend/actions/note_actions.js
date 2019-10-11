import * as NoteAPIUtil from '../util/note_util';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
// export const RECEIVE_NOTES = 'RECEIVE_NOTES';

const receiveNote = note => {
    return {
        type: RECEIVE_NOTE,
        note 
    }
}

// const receiveNotes = notes => {
//     return {
//         type: RECEIVE_NOTES,
//         note 
//     }
// }

export const getNote = (noteId) => dispatch => {
    return NoteAPIUtil.getNote(noteId)
        .then(note => dispatch(receiveNote(note)))
};

export const createNote = (note) => dispatch => {
    return NoteAPIUtil.createNote(note)
        .then(note => dispatch(receiveNote(note)))
};

export const updateNote = (noteId, note) => dispatch => {
    return NoteAPIUtil.updateNote(noteId, note)
        .then(note => dispatch(receiveNote(note)))
};



