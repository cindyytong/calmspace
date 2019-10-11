import { RECEIVE_NOTE } from '../actions/note_actions';
import {merge} from 'lodash';

const notesReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type){
        // case RECEIVE_NOTES:
        //     const notes = {};
        //     action.notes.forEach((note) => {
        //         notes[note.id] = note;
        //     });
           
        //     return merge({}, state, notes);  
        case RECEIVE_NOTE:
            return merge({}, state, action.note);
        default:
            return state;
    }
};

export default notesReducer;