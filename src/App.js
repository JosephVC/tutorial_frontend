import React, {Component} from 'react';

import UploadForm from './components/UploadForm';
import FileGrid from './components/FileGrid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <UploadForm />
        <FileGrid />
      </div>
    )
  }
};

export default App;
