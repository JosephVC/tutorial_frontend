import React, {Component} from 'react';

import UploadForm from './components/UploadForm';
import FileList from './components/FileList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <UploadForm />
        <FileList />
      </div>
    )
  }
}

export default App;
