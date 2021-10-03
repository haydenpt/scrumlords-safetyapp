import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
// import IconButton from "@material-ui/core/IconButton";
import {
  Input,
  // Typography,
  Grid,
  Select,
  MenuItem,
  Container,
  // Divider,
  // Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { useAuth } from "src/authentication/AuthContext";
import { LoadingButton } from "@material-ui/lab";
import { fDateTime } from "src/utils/formatTime";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { updateProfile } from "src/mysql_db_api/members";
import { editFb_user } from "src/mysql_db_api/fb_user";
import { Attended_events, Resume } from "src/components/_dashboard/profile";
import Label from "src/components/Label";
import {
  addnewusers,
  getAllInpection,
} from "src/mysql_db_api/hackathon_api.js";
const useStyles = makeStyles(() => ({
  root: {
    flexWrap: "wrap",
    padding: 0,
    marginLeft: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    margin: "10px 0px",
    marginRight: "10px !important",
  },
  withoutLabel: {
    marginTop: "10px",
  },
  textField: {
    width: "40ch",
  },
  personal_textfield: {
    width: "20ch",
  },
  dropdown: {
    width: "18ch",
  },
}));
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

export default function InputAdornments() {
  const classes = useStyles();
  const {
    setLoading,
    displayErrMess,
    userProfile,
    currentUser,
    updateUserProfileInFrontend,
  } = useAuth();
  console.log("viet", userProfile);
  const [selected, setSelected] = useState(
    userProfile.committees ? userProfile.committees.split(", ") : []
  );
  const [inspetion, setInpsection] = useState([]);
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    cougarEmail: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    displayName: Yup.string().required("First Name is required"),
    first: Yup.string().required("First Name is required"),
    last: Yup.string().required("Last Name is required"),
    // psid: Yup.string().required("PSID is required"),
    // graduation_sem: Yup.string(),
    // graduation_year: Yup.string(),
    // classification: Yup.string(),
    // point: Yup.string(),
    // account_expiretime: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      first: userProfile.first_name,
      last: userProfile.last_name,
      psid: userProfile.psid,
      email: userProfile.email,
      age: parseInt(userProfile.age),
      displayName: userProfile.displayName,
    },
    validationSchema: formSchema,
    onSubmit: async (member) => {
      console.log("member", member);
      setLoading(true);
      const user = {
        uid: currentUser.uid,
        displayName: member.displayName,
        email: member.email,
        disabled: false,
      };
      const promise1 = updateProfile(member, userProfile.psid); // for mysql
      const promise2 = editFb_user(user, userProfile.uid); // firebase
      const [res1, res2] = await Promise.all([promise1, promise2]);
      const promise3 = await updateUserProfileInFrontend(user);
      if (res1.data && res2.data) {
        displayErrMess("Update successfully", "success");
      } else {
        displayErrMess("Fail to save the data", "error");
      }
      setLoading(false);
    },
  });
  const onclickButtonSub = async () => {
    const res = await getAllInpection();
    setInpsection(res);
  };

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  return (
    <Container>
      <FormikProvider value={formik}>
        <Form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            Your profile
          </h3>

          <Grid cointainer spacing={3}>
            <Grid container item>
              <TextField
                required
                label="Account Display Name"
                autoFocus
                id="filled-start-adornment a"
                className={clsx(classes.margin, classes.textField)}
                {...getFieldProps("displayName")}
                error={Boolean(touched.displayName && errors.displayName)}
                variant="outlined"
              />
            </Grid>
            <Grid container item>
              <TextField
                required
                autoFocus
                margin="dense"
                id="filled-number cougar_email"
                label="Account Login Email"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                {...getFieldProps("email")}
                className={clsx(classes.margin, classes.textField)}
                error={Boolean(touched.email && errors.email)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="First Name"
                id="filled-start-adornment d"
                autoFocus
                required
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                {...getFieldProps("first")}
                error={Boolean(touched.first && errors.first)}
              />

              <TextField
                autoFocus
                required
                label="Last Name"
                id="filled-start-adornment f"
                className={clsx(classes.margin, classes.textField)}
                {...getFieldProps("last")}
                error={Boolean(touched.last && errors.last)}
                variant="outlined"
              />
            </Grid>

            {/* <Resume /> */}
          </Grid>

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            update profile
          </LoadingButton>
        </Form>
      </FormikProvider>
    </Container>
  );
}
