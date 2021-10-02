import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  Dialog,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Input,
} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import MaskedInput from "react-text-mask";

import DialogTitle from "@material-ui/core/DialogTitle";
import { useAuth } from "src/authentication/AuthContext";
import { addOneMember, getAllMembers } from "src/mysql_db_api/members.js";

import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@material-ui/lab";
import { createFb_user } from "src/mysql_db_api/fb_user";
export default function NewMemberModal({ open, setOpen, setMembers }) {
  const { setLoading, displayErrMess } = useAuth();

  const handleClose = () => {
    setOpen(false);
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    cougarEmail: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    first: Yup.string().required("First Name is required"),
    last: Yup.string().required("Last Name is required"),
    psid: Yup.string().required("PSID is required"),
    memberStatus: Yup.string(),
    graduation_sem: Yup.string(),
    graduation_year: Yup.string(),
    classification: Yup.string(),
    expiretime: Yup.string().required(),
    age: Yup.number(),
    phoneNumber: Yup.string(),
    ethnicity: Yup.string(),
    payment_type: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      psid: "",
      memberStatus: "",
      email: "",
      cougarEmail: "",
      graduation_sem: "",
      graduation_year: "",
      classification: "Junior",
      age: parseInt(20),
      expiretime: "",
      point: parseInt(0),
      ethnicity: "",
      payment_type: "PayPal",
    },
    validationSchema: formSchema,
    onSubmit: async (new_member) => {
      console.log("new member", new_member);
      setLoading(true);
      const new_user = {
        email: new_member.email,
        emailVerified: false,
        password: new_member.psid,
        displayName: new_member.first + " " + new_member.last,
        photoURL: new_member.psid,
        disabled: false,
      };
      const promise = addOneMember(new_member);
      const promise1 = createFb_user(new_user);
      const [res, res1] = await Promise.all([promise, promise1]);
      if (res.data && res1.data) {
        displayErrMess("Added one new member to the list!", "success");
        const members_ = await getAllMembers();
        setMembers(members_.data);
        setOpen(false);
      } else {
        displayErrMess(res.message.message, "error");
      }
      setLoading(false);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Member Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter all the information below :)
          </DialogContentText>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Grid spacing={1} container>
                <Grid item xs={6}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="name"
                    label="First"
                    type="email"
                    fullWidth
                    size="small"
                    {...getFieldProps("first")}
                    error={Boolean(touched.first && errors.first)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="last"
                    label="Last"
                    type="text"
                    fullWidth
                    size="small"
                    {...getFieldProps("last")}
                    error={Boolean(touched.last && errors.last)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="PSID"
                    label="PSID"
                    type="text"
                    fullWidth
                    size="small"
                    {...getFieldProps("psid")}
                    error={Boolean(touched.psid && errors.psid)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Member status
                    </InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select memberstatus"
                      {...getFieldProps("memberStatus")}
                      input={<Input />}
                      style={{ paddingLeft: 13 }}
                    >
                      <MenuItem value={"new"}>New</MenuItem>
                      <MenuItem value={"returning"}>Returning</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="filled-number cougar_email"
                    label="Email"
                    type="text"
                    fullWidth
                    defaultValue="0"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="filled-number"
                    label="Cougar Email"
                    type="text"
                    fullWidth
                    defaultValue="0"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    {...getFieldProps("cougarEmail")}
                    error={Boolean(touched.cougarEmail && errors.cougarEmail)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Graduation semester
                    </InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      // value={gradation_sem}
                      {...getFieldProps("graduation_sem")}
                      input={<Input />}
                      style={{ paddingLeft: 13 }}
                    >
                      <MenuItem value={"Spring"}>Spring</MenuItem>
                      <MenuItem value={"Fall"}>Fall</MenuItem>
                      <MenuItem value={"Summer"}>Summer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Graduation year
                    </InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      {...getFieldProps("graduation_year")}
                      input={<Input />}
                      style={{ paddingLeft: 13 }}
                    >
                      <MenuItem value={"2021"}>2021</MenuItem>
                      <MenuItem value={"2022"}>2022</MenuItem>
                      <MenuItem value={"2023"}>2023</MenuItem>
                      <MenuItem value={"2024"}>2024</MenuItem>
                      <MenuItem value={"2025"}>2025</MenuItem>
                      <MenuItem value={"2026"}>2026</MenuItem>
                      <MenuItem value={"2027"}>2027</MenuItem>
                      <MenuItem value={"2028"}>2028</MenuItem>
                      <MenuItem value={"2029"}>2029</MenuItem>
                      <MenuItem value={"2030"}>2030</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Classification
                    </InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      {...getFieldProps("classification")}
                      input={<Input />}
                      style={{ paddingLeft: 13 }}
                    >
                      <MenuItem value={"Freshman"}>Fresh</MenuItem>
                      <MenuItem value={"Sophomore"}>Sophomore</MenuItem>
                      <MenuItem value={"Junior"}>Junior</MenuItem>
                      <MenuItem value={"Senior"}>Senior</MenuItem>
                      <MenuItem value={"Master"}>Master</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Ethnicity
                    </InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      {...getFieldProps("ethnicity")}
                      input={<Input />}
                      style={{ paddingLeft: 13 }}
                    >
                      <MenuItem value={"Asian"}>Asian</MenuItem>
                      <MenuItem value={"Black or African Amercian"}>
                        Black or African Amercian
                      </MenuItem>
                      <MenuItem value={"white"}>White</MenuItem>
                      <MenuItem value={"Latino"}>Latino</MenuItem>
                      <MenuItem value={"Native Hawaiian or Pasific Islander"}>
                        Native Hawaiian or Pasific Islander
                      </MenuItem>
                      <MenuItem value={"From Multiple Races"}>
                        From Multiple Races
                      </MenuItem>
                      <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="filled-number"
                    label="Age"
                    type="number"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    {...getFieldProps("age")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Account Expire Time
                    </InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      {...getFieldProps("expiretime")}
                      error={Boolean(touched.expiretime && errors.expiretime)}
                      input={<Input />}
                      style={{ paddingLeft: 13 }}
                    >
                      <MenuItem value={"Fall 2021"}>Fall 2021</MenuItem>
                      <MenuItem value={"Spring 2022"}>Spring 2022</MenuItem>
                      <MenuItem value={"Fall 2022"}>Fall 2022</MenuItem>
                      <MenuItem value={"Spring 2023"}>Spring 2023</MenuItem>
                      <MenuItem value={"Fall 2024"}>Fall 2024</MenuItem>
                      <MenuItem value={"Spring 2024"}>Spring 2024</MenuItem>
                      <MenuItem value={"Fall 2025"}>Fall 2025</MenuItem>
                      <MenuItem value={"Spring 2025"}>Spring 2025</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="filled-number"
                    label="POINT"
                    type="number"
                    fullWidth
                    defaultValue="0"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    {...getFieldProps("point")}
                  />
                </Grid>
                {/* <Grid item xs={6}>
                  <FormControl>
                    <InputLabel htmlFor="formatted-text-mask-input">
                      Phone Number
                    </InputLabel>
                    <Input
                      style={{ paddingLeft: 13 }}
                      name="phoneNumber"
                      id="formatted-text-mask-input"
                      inputComponent={TextMaskCustom}
                      {...getFieldProps("phoneNumber")}
                    />
                  </FormControl>
                </Grid> */}
                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Payment Type
                    </InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      {...getFieldProps("payment_type")}
                      input={<Input />}
                      style={{ paddingLeft: 13 }}
                    >
                      <MenuItem value={"PayPal"}>PayPal</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <LoadingButton
            loading={isSubmitting}
            onClick={handleSubmit}
            color="primary"
          >
            Add
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

// For Phone number
// function TextMaskCustom(props) {
//   const { ...other } = props;
//   return (
//     <MaskedInput
//       {...other}
//       mask={[
//         "(",
//         /[1-9]/,
//         /\d/,
//         /\d/,
//         ")",
//         " ",
//         /\d/,
//         /\d/,
//         /\d/,
//         "-",
//         /\d/,
//         /\d/,
//         /\d/,
//         /\d/,
//       ]}
//       placeholderChar={"\u2000"}
//       showMask
//     />
//   );
// }
