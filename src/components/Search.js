import TextField from "@mui/material/TextField";
import "../App.css";
import Button from "@mui/material/Button";
import React from "react";
import FlightTakeoffSharpIcon from "@mui/icons-material/FlightTakeoffSharp";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import FormHelperText from "@mui/material/FormHelperText";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";

const Search = () => {
  const [val, setVal] = React.useState("");
  const [flight, setFlight] = React.useState("");
  const [select, setSelect] = React.useState("");

  return (
    <div className="search">
      <Paper
        className="query"
        elevation={3}
        style={{
          borderRadius: "30px",
          backgroundColor: "rgb(249, 249, 249)",
          marginBottom: "1rem",
        }}
      >
        <form className="wrap">
          <TextField
            required
            style={{ width: "20rem" }}
            id="standard"
            inputProps={{
              min: 0,
              style: {
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
              },
            }}
            label={
              <Typography>
                <h4>Airport</h4>
              </Typography>
            }
            variant="standard"
            helperText={
              <Typography>
                <p1>Arrival Airport (3 letters)</p1>
              </Typography>
            }
            value={val}
            onChange={(e) => setVal(e.target.value.toUpperCase())}
          />
          <FormControl
            className="select"
            style={{ width: "20rem", overflowY: "visible" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              <h4>Airlines</h4>
            </InputLabel>
            <Select
              required
              variant="standard"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              SelectDisplayProps={{ min: 0, style: { textAlign: "center" } }}
              value={select}
              onChange={async (e) => {
                const value = e.target.value;
                setSelect(value);
                console.log(select);
              }}
              label="Airlines"
            >
              <MenuItem value={"American Airlines"}>
                <p1>American Airlines</p1>
              </MenuItem>
              <MenuItem value={20}>
                <p1>Delta</p1>
              </MenuItem>
              <MenuItem value={30}>
                <p1>United Airlines</p1>
              </MenuItem>
            </Select>
            <FormHelperText>
              <Typography>
                <p1>Airline Comapany</p1>
              </Typography>
            </FormHelperText>
          </FormControl>
          <TextField
            required
            style={{ width: "20rem" }}
            id="standard-basic"
            inputProps={{
              min: 0,
              style: {
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
              },
            }}
            label={
              <Typography>
                <h4 style={{ display: "flex" }}>Flight No.</h4>
              </Typography>
            }
            variant="standard"
            helperText={
              <Typography>
                <p1>4 Digit Number</p1>
              </Typography>
            }
            value={flight}
            onChange={(e) => setFlight(e.target.value.toUpperCase())}
          />

          <Button
            type="submit"
            variant="contained"
            style={{ width: "20rem", height: "3rem" }}
          >
            <FlightTakeoffSharpIcon
              style={{ width: "2.7rem", height: "2.7rem" }}
            ></FlightTakeoffSharpIcon>
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Search;
