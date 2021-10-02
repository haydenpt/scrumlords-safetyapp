import React, { useState } from "react";
import {
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import { useAuth } from "src/authentication/AuthContext";
import * as XLSX from "xlsx";
import {
  addOneMember,
  getOneMember,
  editOneMember,
  getAllMembers,
} from "src/mysql_db_api/members";
import { createFb_user } from "src/mysql_db_api/fb_user.js";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UploadFileModal({ open, setOpen, setMembers }) {
  const [file, setFile] = useState();
  const { setLoading, displayErrMess } = useAuth();
  const [newMemberData, setNewMemberData] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAndSubmit = async () => {
    setLoading(true);
    setOpen(false);
    await validating_file_then_upload();
    const res = await getAllMembers();
    setMembers(res.data);
    setLoading(false);
  };

  const handleUploadFile = (e) => {
    if (!e.target.files[0]) {
      return;
    }
    e.preventDefault();
    setLoading(true);
    var regex = new RegExp("(.*?).(csv)$");
    if (!regex.test(e.target.files[0].name.toLowerCase())) {
      displayErrMess(
        "Cannot upload file. The File does must have '.csv' extension",
        "warning"
      );
    } else {
      displayErrMess("Validing the file, please wait for a second", "info");
      var f = e.target.files[0];
      setFile(f);
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, { type: "binary" });
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];
        const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
        setNewMemberData(dataParse);
      };
      reader.readAsBinaryString(f);
    }
    setLoading(false);
  };

  async function validating_file_then_upload() {
    const data = newMemberData;
    const header = data[0];
    if (
      header.includes("Paid") &&
      header.includes("First Name") &&
      header.includes("Last Name") &&
      header.includes("PSID") &&
      header.includes("Personal Email") &&
      header.includes("Cougarnet Email") &&
      header.includes("Classification*") &&
      header.includes("Graduating Year") &&
      header.includes("Graduating Semester") &&
      header.includes("Ethnicity*") &&
      header.includes("Member Status") &&
      header.includes("Desired Duration") &&
      header.includes("payment_type")
    ) {
      // console.log("that is good dont need to do anytihng ");
      displayErrMess("The file is good! Uploading ...");
      setNewMemberData(data.shift());
      for (var row in data) {
        const member = {
          first: data[row][6],
          last: data[row][7],
          psid: data[row][9],
          memberStatus: data[row][17],
          email: data[row][10],
          cougarEmail: data[row][11],
          graduation_sem: data[row][14],
          graduation_year: data[row][15],
          classification: data[row][13],
          age: data[row][12],
          expiretime: "Fall 2021",
          point: 0,
          ethnicity: data[row][16],
          payment_type: "PayPal",
          groupme_name: data[row][22],
        };
        if (
          !(
            member.first &&
            member.last &&
            member.email &&
            member.cougarEmail &&
            member.psid
          )
        )
          continue;
        let res = await getOneMember(member.psid);
        if (res.data > 0) {
          res = await editOneMember(member, member.psid);
          if (!res.data) console.log("fail to update member", member.psid);
        } else {
          // add a brand new member
          const new_user = {
            email: member.email,
            emailVerified: false,
            password: member.psid.toString(),
            displayName: member.first + " " + member.last,
            disabled: false,
            photoURL: member.psid.toString(),
          };
          const promise1 = addOneMember(member);
          const promise2 = createFb_user(new_user);
          const [res1, res2] = await Promise.all([promise1, promise2]);
          if ((res1.data, res2.data)) {
            console.log("GOOD ADDED ANOTHER MEMBER", new_user);
          }
        }
      }
      displayErrMess("uploaded all the members", "success");
    } else {
      displayErrMess(
        "Cannot Upload File! File may miss important columns!",
        "warning"
      );
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Uploading csv file for new members?"}
        </DialogTitle>
        <Stack direction="row" spacing={2}>
          <label htmlFor="btn-upload">
            <input
              id="btn-upload"
              name="btn-upload"
              style={{ display: "none" }}
              type="file"
              accept=".csv"
              onChange={handleUploadFile}
            />
            <Button className="btn-choose" variant="outlined" component="span">
              Choose Files
            </Button>
          </label>
          <div className="file-name">{file ? file.name : null}</div>
        </Stack>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button
            onClick={handleCloseAndSubmit}
            disabled={!file}
            color="primary"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// if member exist -> edit member
// else if member does not exist -> add new member
