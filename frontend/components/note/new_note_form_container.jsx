import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
    const note = { body: '' };
    const formType = 'Create Note';
    debugger
    return {
        note,
        formType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: note => dispatch(createNote(note))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteForm));