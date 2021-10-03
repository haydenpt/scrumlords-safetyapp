import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function InspectionPage() {
  return (
    <div>
      <h1> Inspection Page </h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.75, },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h3>Details</h3>
        <p>
        <TextField
          label="Inspection Date" 
          id="filled-required"
          style ={{width: '40%'}}
          /*placeholder="When was the Inspection?"
          InputProps={{
            startAdornment: <outline-required position="center"></outline-required>,
          }}*/
        />

         <TextField
          inspector
          id="outlined-required"
          label="Inspector"
          style ={{width: '40%'}}
          /*placeholder="Who?"
          InputProps={{
            startAdornment: <outline-required position="center"></outline-required>,
          }}*/
        />
        </p>
      </div>

      <div>
        <TextField
          complete date
          id="outlined-required"
          label="Complete Date"
          style ={{width: '40%'}}
          /*placeholder="When was it complete?"
          InputProps={{
            startAdornment: <outline-required position="center"></outline-required>,
          }}*/
        />

         <TextField
          current job
          id="outlined-required"
          label="Job"
          style ={{width: '40%'}}
          /*placeholder="Current Job"
          InputProps={{
            startAdornment: <outline-required position="center"></outline-required>,
          }}*/
        />
      </div>

      <div>
        <h3>Inspection Note: </h3>
       <TextField
          Inspection Note
          id="outlined-required"
          style ={{width: '81%'}}
          placeholder="Description"
          /*label="Inspection Note:"
          variant="standard"
          InputProps={{
            startAdornment: <outline-required position="center"></outline-required>,
          }}*/
          size="large"
        />
      </div>
    </Box>

      <div>
        <h3>Inspection Checklist: </h3>
        <h5>Select: Pass or Fail 
          Inspection Items</h5>
        <Checkbox />
        <ListItem>
        <ListItemText primary="First-Aid Kits are accessible and stocked for workers" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Supervisory Safety Manual is on site along with accident report forms" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Chemicals and containers are labelled according to Government Regulations" />
        </ListItem>
      </div>

    </div>
  );
}

