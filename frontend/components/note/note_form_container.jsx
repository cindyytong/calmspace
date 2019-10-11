import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './note_form';
import { withRouter } from 'react-router-dom';
import { updateNote, getNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultNote = { body: '' };
    debugger
    // const note = state.note[ownProps.match.params.noteId] || defaultNote
    const formType = 'Edit Note';
    let note; 
    if (state.notes){
        note = state.entities.notes.body
    } else {
        note = defaultNote
    }
    return {
        note,
        formType 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNote: noteId => dispatch(getNote(noteId)),
        action: (noteId, note) => dispatch(updateNote(noteId, note))
    }
}

class EditNoteForm extends React.Component {
    componentDidMount(){
        debugger
        this.props.getNote(this.props.match.params.noteId)
    }

render(){
    const { action, formType, note } = this.props;
    return(
        <NoteForm
            action={action}
            formType={formType}
            note={note} 
        />
    )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditNoteForm));