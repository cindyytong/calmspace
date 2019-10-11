import React from 'react';
import ReactQuill from 'react-quill'; 
// import './style.css';
// import css from 'file.css';


class NoteForm extends React.Component {
    constructor(props){
        debugger
        super(props);
        this.state = props.note;
        this.handleSubmit = this.handleSubmit.bind(this);
        // // react quill formatting
        // this.modules = {
        //     toolbar: [
        //       [{ 'font': [] }],
        //       [{ 'size': ['small', false, 'large', 'huge'] }],
        //       ['bold', 'italic', 'underline'],
        //       [{'list': 'ordered'}, {'list': 'bullet'}],
        //       [{ 'align': [] }],
        //       [{ 'color': [] }, { 'background': [] }],
        //       ['clean']
        //     ]
        // };

        // this.formats = [
        //     'font',
        //     'size',
        //     'bold', 'italic', 'underline',
        //     'list', 'bullet',
        //     'align',
        //     'color', 'background'
        //   ];

        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(content, delta, source, editor) {
        // editor.getHTML(); // HTML/rich text
        // editor.getText(); // plain text
        // editor.getLength(); // number of characters;
    //     this.setState({ body: e.target.value })
    // }

    handleChange() {
        return (e) => {
            this.setState({ body: e.target.value })
        }
    }

    handleSubmit() {
        e.preventDefault();
        let note = this.state;
        debugger
        if(this.props.formType === 'Edit Note'){
            let noteId = this.props.match.params.noteId;
            debugger
            this.props.action(noteId, note)
                .then(() => this.props.history.push(`/auth/therapist/note/${noteId}`))
        } else {
            debugger
            this.props.action(note)
                .then(() => this.props.history.push(`/auth/therapist/note/new`))
        }
    }

    render(){
        debugger
        return (
            <>
            <ReactQuill 
                // modules={this.modules}
                // formats={this.formats}  
                onChange={this.handleChange}
                value={this.state.body}
                theme="snow" />
            <form>
                <button type='submit' onClick={this.handleSubmit}>{this.props.formType}</button>
            </form>
            </>
        )
    }
}

export default NoteForm;