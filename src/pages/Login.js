// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Card, Stack, Container, Typography } from "@material-ui/core";
// layouts
// components
import Page from "../components/Page";
import { LoginForm } from "../components/authentication/login";
import Logo from "src/components/Logo";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 500,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(10, 3),
  color: "#ffffff",
  backgroundColor: "#000000",
  opacity: "89%"
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | Scrumlords"
    style ={{ 
      backgroundImage: "url('/static/illustrations/bg.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center center",}}>
      
      <Container>
        <ContentStyle>
          <Logo class="logo" />
          <Stack sx={{ mb: 3 }} >
            <Typography variant="h4" gutterBottom>
            <br /><br /><br />
              <center>Sign in to <span style={{color: "#52D9FF"}}>Safety App</span></center>
            </Typography>
          </Stack>
          {/* <AuthSocial /> */}
          <LoginForm />

            <Typography gutterBottom>
              <br /><br />
              <center>Sponsored by</center>
            </Typography>
            <table>
              <tr>
                <center>
                <td><img src="/static/illustrations/conoco.jpg" width="90%"/></td>
                <td></td>
                <td><img src="/static/illustrations/hcss.jpg" width="90%"/></td>
                </center>
              </tr>
            </table>
            
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
