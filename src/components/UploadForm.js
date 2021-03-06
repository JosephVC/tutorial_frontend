import React, {Component} from 'react';
import axios from 'axios';

class UploadForm extends Component {
    state = {
      title: '',
      content: '',
      file: null
    };
  
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    };
  
    handleFileChange = (e) => {
      this.setState({
        file: e.target.files[0]
      })
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      let form_data = new FormData();
      form_data.append('file', this.state.file, this.state.file.name);
      form_data.append('title', this.state.title);
      form_data.append('content', this.state.content);
      let url = 'https://tutorial-backend2.herokuapp.com/';
      // let url = '127.0.0.1:8000';
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))
    };
  
    render() {
      return (
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <p>
              <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
            </p>
            <p>
              <input type="text" placeholder='Content' id='content' value={this.state.content} onChange={this.handleChange} required/>
  
            </p>
            <p>
              <input type="file"
                     id="image"
                     accept=".pdf, .doc, .txt "  onChange={this.handleFileChange} required/>
            </p>
            <input type="submit"/>
          </form>
        </div>
      );
    }
  }
  
  export default UploadForm;