import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";

export default function Incident() {
  return (
  <div>
    <h1>Incident Report Overview</h1>
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Locations</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
      ]}
      options={{
        title: 'My Daily Activities',
        // Just add this option
        is3D: true,
      }}
      rootProps={{ 'data-testid': '2' }}
    />

    <Chart
      width={'100px'}
      height={'100px'}
      chartType="Bar"
      loader={<div> Chart</div>}
      data={[
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350],
      ]}
      options={{
        // Material design options
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '2' }}
    />


    <Chart
      width={1000}
      height={350}
      chartType="Calendar"
      loader={<div>Loading Chart</div>}
      data={[
        [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
        [new Date(2012, 3, 13), 37032],
        [new Date(2012, 3, 14), 38024],
        [new Date(2012, 3, 15), 38024],
        [new Date(2012, 3, 16), 38108],
        [new Date(2012, 3, 17), 38229],
        [new Date(2013, 1, 4), 38177],
        [new Date(2013, 1, 5), 38705],
        [new Date(2013, 1, 12), 38210],
        [new Date(2013, 1, 13), 38029],
        [new Date(2013, 1, 19), 38823],
        [new Date(2013, 1, 23), 38345],
        [new Date(2013, 1, 24), 38436],
        [new Date(2013, 2, 10), 38447],
      ]}
      options={{
        title: 'Red Sox Attendance',
      }}
      rootProps={{ 'data-testid': '1' }}
    />





    <h1>Incident Report Submission</h1>
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
    
    <h1>Incident Report Records</h1>



  </div>
    );
}
