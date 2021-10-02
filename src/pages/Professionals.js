import React, { useEffect } from "react";
import { useAuth } from "src/authentication/AuthContext";
import {
  addOneInterviewSignUp,
  addOneLinkedinSignUp,
  addOneResumeSignUp,
} from "src/mysql_db_api/members";
import { ProfessionalsTab } from "src/components/_dashboard/professionals";
import { Container, Grid } from "@material-ui/core";
import handshakeIcon from "@iconify/icons-fa-regular/handshake";
import documentSentiment from "@iconify/icons-carbon/document-sentiment";
import linkedinOutlined from "@iconify/icons-ant-design/linkedin-outlined";

export default function Professionals() {
  const { userProfile, isResume } = useAuth();
  const psid = userProfile.psid;
  console.log("linkedin", userProfile.linkedin_link);
  const canSignupLinkedinReview =
    userProfile.linkedin_link.includes("linkedin.com");
  const canSignupResumeReview = isResume;
  const professionals_tab_info = [
    {
      name: "Mock Interview",
      func: async () => await addOneInterviewSignUp(psid),
      icon: handshakeIcon,
      color: 0, // color code
      canSignup: true,
    },
    {
      name: "Resume Review",
      func: async () => await addOneResumeSignUp(psid),
      icon: documentSentiment,
      color: 2, // color code
      canSignup: canSignupResumeReview,
    },
    {
      name: "Linkedin Review",
      func: async () => await addOneLinkedinSignUp(psid),
      icon: linkedinOutlined,
      color: 1, // color code
      canSignup: canSignupLinkedinReview,
    },
  ];
  return (
    <Container>
      <Grid container spacing={3}>
        {professionals_tab_info.map((item) => {
          return (
            <Grid key={item.name} item xs={12} sm={6} md={4}>
              <ProfessionalsTab
                name={item.name}
                signUpFunc={item.func}
                color={item.color}
                icon={item.icon}
                canSignup={item.canSignup}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
