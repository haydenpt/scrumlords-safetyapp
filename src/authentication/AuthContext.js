import React, { useContext, useState, useEffect } from "react";
import firebase from "./firebase";
import Loading from "src/components/@material-extend/Loading";
import Alert from "src/components/@material-extend/Alert";
// import UserProfile from "src/pages/UserProfile.js";
import { getOneMemberByMail } from "src/mysql_db_api/members";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [waitUser, setWaitUser] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const [mess, setMess] = useState("");
  const [isMess, setIsMess] = useState(false);
  const [messType, setMessType] = useState("");
  // const [isResume, setIsResume] = useState(false);

  function user_login(email, pass) {
    return firebase.auth().signInWithEmailAndPassword(email, pass);
  }
  function user_logout() {
    return firebase.auth().signOut();
  }
  function update_email(email) {
    return firebase.auth().currentUser.updateEmail(email);
  }
  function update_password(password) {
    return firebase.auth().currentUser.updatePassword(password);
  }
  function resetPass(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  function update_user(new_name, psid) {
    return firebase.auth().currentUser.updateProfile({
      displayName: new_name,
      photoURL: "http://" + psid.toString(),
    });
  }
  function isAdmin() {
    return (
      (!waitUser &&
        userProfile &&
        userProfile.email &&
        userProfile.email.includes("uh.misso")) ||
      (userProfile && userProfile.is_admin === 1)
    );
  }
  async function updateUserProfileInFrontend(user) {
    const res = await getOneMemberByMail(user.email);
    console.log("adhfkjdhkjhfkjdn", res.data);
    if (res.data) {
      setUserProfile({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,

        first_name: res.data.first,
        last_name: res.data.last,
        // point: res.data.point,
        // classification: res.data.classification,
        // account_expiretime: res.data.account_expiretime,
        updated_time: res.data.updated_time,
        created_time: res.data.created_time,
        // isResume: res.data.isResume,
        // linkedin_link: res.data.linkedin_link,
        // groupme_name: res.data.groupme_name,
        is_admin: res.data.is_admin,
        // committees: res.data.committees,
      });
      // setIsResume(res.data.isResume);
    }
  }
  function displayErrMess(mess, messType) {
    setIsMess(true);
    setMess(mess);
    setMessType(messType);
    setTimeout(() => {
      setIsMess(false);
      setMess("");
      setMessType("");
    }, 3000);
  }
  useEffect(() => {
    const unsubcribe = firebase.auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        setLoading(true);
        await updateUserProfileInFrontend(user);
      }
      setLoading(false);
      setWaitUser(false);
    });
    return unsubcribe;
  }, []);

  const value = {
    user_login,
    user_logout,
    update_email,
    update_password,
    resetPass,
    update_user,
    currentUser,

    isAdmin,
    setUserProfile,
    userProfile,
    updateUserProfileInFrontend,

    setLoading,
    displayErrMess,
    waitUser,
    // isResume,
    // setIsResume,
  };

  return (
    <AuthContext.Provider value={value}>
      <Loading loading={loading} />
      {isMess ? (
        <Alert message={mess} type={messType} setOpen={setIsMess} />
      ) : null}
      {!waitUser && children}
    </AuthContext.Provider>
  );
}

// user account:
// uid
// displayName
// email
// phonenumber: will be your psid
// photourl

// mess type:
// warning, error, info, success
