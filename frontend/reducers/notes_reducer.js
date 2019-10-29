import { RECEIVE_NOTE } from '../actions/note_actions';
import { RECEIVE_CURRENT_THERAPIST, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';

const _nullNote = Object.freeze({
    id: null 
});

const notesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        // case RECEIVE_NOTES:
        //     const notes = {};
        //     action.notes.forEach((note) => {
        //         notes[note.id] = note;
        //     });
           
        //     return merge({}, state, notes);  
        case RECEIVE_CURRENT_THERAPIST:
            return merge({}, state, action.notes)
        case RECEIVE_NOTE:
            return merge({}, state, action.note);
        case LOGOUT_CURRENT_USER:
            return _nullNote;
        default:
            return state;
    }
};

export default notesReducer;