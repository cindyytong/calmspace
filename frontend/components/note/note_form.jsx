import React from 'react';
import ReactQuill from 'react-quill'; 

class NoteForm extends React.Component {

    constructor(props){
        super(props),
        this.state = { body: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
      }

    render(){
        return (
            <>
            <h5>New Note</h5>
            <ReactQuill value={this.state.body}
                  onChange={this.handleChange} />
            </>
        )
    }
}

export default NoteForm;