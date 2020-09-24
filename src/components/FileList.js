import React, { Component } from 'react';

class FileList extends Component {
    state = {
        fileList: []
    };

    async componentDidMount () {
        try {
            // fetch the data from the api
            const res = await fetch('https://tutorial-backend2.herokuapp.com/')
            const fileList = await res.json();
            this.setState({
                fileList
            });
       } catch (e) {
           console.log(e);
       }
    }

    render () {
        return (
            <div>
                {this.state.fileList.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                        <p><a href={item.file} download>file</a></p>
                    </div>
                ))}
            </div> 
        );
    }
}


export default FileList;