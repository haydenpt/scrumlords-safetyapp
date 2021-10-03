import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from 'src/components/calendar/DatePicker.js';
import '../style.css';

export default function Incident() {
  return (
  <div>

    <h1 class="heading">Incident Report</h1>
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.75 },
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
            label="Incident Location"
            style ={{width: '81%'}}
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
        <div>
          <DatePicker 
          />
        </div>
        <TextField
            required
            id="outlined-required"
            label="Attachments"
            style ={{width: '81%'}}
          />
          <span style ={{ position:'relative', top: '1.5ch'}}>
            <Button variant="text" style ={{ position:'absolute', width: '100%', left: '-18ch'}}>Browse</Button>
            <Button variant="outlined" style ={{ position:'absolute', width: '100%', left: '-10ch'}}>Upload</Button>
          </span>
          <div style ={{ position:'relative', top: '15px'}}>
            <Button variant="contained" style ={{ width: '81%', height: '4ch', fontSize: 'large'}}>Submit</Button>
          </div>

      </div>
    </Box>
  </div>
    );
}
