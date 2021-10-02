import { Box, Grid, Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  AppTasks,
  Java,
  AppBugReports,
  TransactionProcessing,
  AppNewsUpdate,
  Database,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
} from "../components/_dashboard/app";
import VideosPlaylist from "src/components/_dashboard/educations/VideosPlaylist";
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | MISSO">
      <Container maxWidth="xl">
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Database />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Java />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TransactionProcessing />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
        <VideosPlaylist />
      </Container>
    </Page>
  );
}
