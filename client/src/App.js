import React from "react";
import "./App.css";
import { PhotoCamera } from "@material-ui/icons";

import axios from "axios";
import { saveAs } from "file-saver";

import {
  Typography,
  AppBar,
  TextField,
  CssBaseline,
  Grid,
  Toolbar,
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
        <AppBar position="relative" style={{marginBottom: "100px", padding: "10px"}}>
          <Typography variant="h6">PDF Generator w/ React</Typography>
        </AppBar>
        <div className="App">
          <form /* className={classes.root} */ noValidate autoComplete="off">
            <Grid container spacing={1} justify="center">
              <Grid item md={1}sm={4} xl={12}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item md={1} sm={4} xl={12}>
                <TextField
                  name="receiptId"
                  label="Receipt ID"
                  variant="outlined"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item md={1}sm={4} xl={12}>
                <TextField
                  name="price1"
                  label="Price 1"
                  variant="outlined"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item md={1}sm={4} xl={12}>
                <TextField
                  name="price2"
                  label="Price 2"
                  variant="outlined"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item md={1}sm={4} xl={12}>
                <Button onClick={this.createAndDownloadPdf}>
                  Download PDF{" "}
                </Button>
              </Grid>
            </Grid>
          </form>

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
