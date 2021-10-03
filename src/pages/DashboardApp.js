import { Box, Grid, Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  AppTasks,
  Java,
  AppBugReports,
  TransactionProcessing,
  Database,
} from "../components/_dashboard/app";
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | MISSO">
      <Container maxWidth="xl">
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
        </Grid>
      </Container>
    </Page>
  );
}
