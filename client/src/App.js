import React from "react";
import "./App.css";
import { PhotoCamera } from "@material-ui/icons";

import axios from "axios";
import { saveAs } from "file-saver";

import {
  Typography,
  AppBar,
  Card,
  TextField,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";

class App extends React.Component {
  state = {
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  render() {
    return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Typography variant="h6">PDF Generator w/ React</Typography>
        </AppBar>
        <div className="App">
        <Container maxWidth="sm">
        <form /* className={classes.root} */ noValidate autoComplete="off">
         
          <TextField name="name" label="Name" variant="outlined" onChange={this.handleChange}/>
          <TextField name="receiptId" label="Receipt ID" variant="outlined" onChange={this.handleChange}/>
          <TextField name="price1" label="Price 1" variant="outlined" onChange={this.handleChange}/>
          <TextField id="price2" label="Price 2" variant="outlined" onChange={this.handleChange}/>
          <Button onClick={this.createAndDownloadPdf}>Download PDF </Button>
        </form>
        </Container>

        
          {/* <input
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
          /> */}
          
        </div>
      </>
    );
  }
}

export default App;
