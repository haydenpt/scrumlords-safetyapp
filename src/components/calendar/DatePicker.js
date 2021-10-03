import React, { useState } from "react";

import DateTimePicker from "@material-ui/lab/DateTimePicker";
import DateFNSUtils from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { TextField } from "@material-ui/core";

export default function DatePicker() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="DatePicker">
      <LocalizationProvider dateAdapter={DateFNSUtils}>
        <DateTimePicker
          value={value}
          onChange={(newValue) => {
            console.log(newValue.toUTCString());
            setValue(newValue);
          }}
          renderInput={(startProps) => (
            <React.Fragment>
            <div>
            <p>
                <h4>Incident Date</h4>
            </p>
              <TextField  {...startProps} 
                style ={{width: '80%'}}
                required
                id="outlined-required"/>
            <p>
                <h4>Date Reported</h4>
            </p>
              <TextField  {...startProps} 
                style ={{width: '80%'}}
                required
                id="outlined-required"
                label="Incident Date"/>
            </div>
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
