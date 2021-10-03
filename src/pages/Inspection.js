import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function InspectionPage() {
  return (
    <div>
      <h1> Inspection Page </h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Inspection Date"
            id="filled-required"
            placeholder="When was the Inspection?"
            InputProps={{
              startAdornment: (
                <outline-required position="center"></outline-required>
              ),
            }}
          />

          <TextField
            inspector
            id="outlined-required"
            label="Inspector"
            placeholder="Who?"
            InputProps={{
              startAdornment: (
                <outline-required position="center"></outline-required>
              ),
            }}
          />
        </div>

        <div>
          <TextField
            complete
            date
            id="outlined-required"
            label="Complete Date"
            placeholder="When was it complete?"
            InputProps={{
              startAdornment: (
                <outline-required position="center"></outline-required>
              ),
            }}
          />

          <TextField
            current
            job
            id="outlined-required"
            label="Job"
            placeholder="Current Job"
            InputProps={{
              startAdornment: (
                <outline-required position="center"></outline-required>
              ),
            }}
          />
        </div>

        <div>
          <TextField
            Inspection
            Note
            id="outlined-required"
            label="Inspection Note:"
            placeholder="Description"
            variant="standard"
            InputProps={{
              startAdornment: (
                <outline-required position="center"></outline-required>
              ),
            }}
            size="large"
          />
        </div>

        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              //value={age}
              //onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <TextField
            Inspection
            Checklist
            id="outlined-required"
            label="Inspection Checklist"
            variant="standard"
            InputProps={{
              startAdornment: (
                <outline-required position="center"></outline-required>
              ),
            }}
            size="large"
          />
        </div>

        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
        </div>
      </Box>
    </div>
  );
}

