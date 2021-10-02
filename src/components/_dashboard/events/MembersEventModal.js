import React, { useState, useEffect } from "react";
import { useAuth } from "src/authentication/AuthContext";
import { checkinEvent, checkEventExist } from "src/mysql_db_api/events";
import GeneralTable from "src/components/GeneralTable";
import peopleFill from "@iconify/icons-eva/people-fill";
import { Icon } from "@iconify/react";
import {
  Stack,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { getMembersForEvent } from "src/mysql_db_api/events.js";
// import Files from "../educations/Files";
export default function MemberModal({ open, setOpen, event }) {
  const { displayErrMess, setLoading } = useAuth();
  const TABLE_HEAD = [
    { id: "first_name", label: "First", alignRight: false },
    { id: "last_name", label: "Last", alignRight: false },
    { id: "email", label: "Email", alignRight: false },
    { id: "psid", label: "Psid", alignRight: false },
    { id: "point", label: "Point", alignRight: false },
    { id: "updated_time", label: "Register Time", alignRight: false },
  ];
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await getMembersForEvent(event.id);
    if (res.data) {
      setData(res.data);
    } else {
      displayErrMess("Fail to fetch members data from db!", "error");
    }
  }, []);
  return (
    <>
      <Dialog
        open={open}
        fullWidth
        maxWidth
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{
            paddingTop: 10,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Button startIcon={<Icon icon={peopleFill} />} variant="contained">
            Member count: {data.length}
          </Button>
          <div>
            <Button
              variant="contained"
              style={{ marginLeft: "5px" }}
              onClick={() => setOpen(false)}
            >
              x
            </Button>
          </div>
        </Stack>
        <DialogContent>
          {/* <DialogContentText>Enter your code to check in</DialogContentText> */}
          <GeneralTable files={data} TABLE_HEAD={TABLE_HEAD} />
        </DialogContent>
      </Dialog>
    </>
  );
}
