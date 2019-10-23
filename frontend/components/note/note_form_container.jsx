import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './note_form';
import { withRouter } from 'react-router-dom';
import { updateNote, getNote } from '../../actions/note_actions';
import AuthNavContainer from '../../components/navigation/auth_nav_container';

const mapStateToProps = (state, ownProps) => {
    const defaultNote = { body: '' };    
    const note = state.entities.notes.body || defaultNote;
    const formType = 'Edit Note';
    // let note; 
    // if (state.notes){
    //     note = state.entities.notes.body
    // } else {
    //     note = defaultNote
    // }
    let userId = state.session.currentUserId
    return {
        note,
        formType,
        userId 
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
        this.props.getNote(this.props.match.params.noteId)
    }

render(){
    const { action, formType, note } = this.props;
    return(
        <>
            <AuthNavContainer />
            <NoteForm
                action={action}
                formType={formType}
                note={note} 
            />
        </>
    )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditNoteForm));