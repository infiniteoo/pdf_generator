import React from 'react';
import "./App.css";

import axois from "axios";
import { saveAs } from "file-saver";

class App extends React.Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  };

  handleChange = ({target: { value, name }}) => this.setState({[name]: value});

  createAndDownloadPdf =
   
  
 
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Receipt ID"
          name="receiptId"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 2"
          name="price2"
          onChange={this.handleChange}
        />
        <button onClick={this.createAndDownloadPdf}>Download PDF.</button>
      </div>
    );
  }
}

export default App;
