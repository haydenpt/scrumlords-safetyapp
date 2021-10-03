import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Incident() {
  return (
  <div>

    <h1>Incident Report</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.75, },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <h3>Contact Info</h3>
        <p>
          <TextField
            required
            id="outlined-required"
            label="Name"
            style ={{width: '40%'}}
          />
          <TextField
            required
            id="outlined-required"
            label="Job Position"
            style ={{width: '40%'}}
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Phone number"
            style ={{width: '40%'}}
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Email Address"
            style ={{width: '40%'}}
          />
        </p>
      <h3>Incident Details</h3>
        <p>
          <TextField
            required
            id="outlined-required"
            label="Incident Name"
            style ={{width: '81%'}}
          />
        </p>
        <p>
          <TextField
            required
            id="outlined-required"
            label="Incident Date"
            style ={{width: '40%'}}
          />
          <TextField
            required
            id="outlined-required"
            label="Date Reported"
            style ={{width: '40%'}}
          />
        </p>
        <p>
          <TextField
            multiline
            required
            id="outlined-required"
            rows={3}
            rowsMax={100}
            style ={{width: '81%'}}
            label="Incident Description"
          />
        </p>
        <TextField
            required
            id="outlined-required"
            label="Attachments"
            style ={{width: '40%'}}
          />
          <p>
            <Button variant="text">Browse File</Button>
            <Button variant="contained">Upload</Button>
          </p>

      </div>
    </Box>
  </div>
    );
}
