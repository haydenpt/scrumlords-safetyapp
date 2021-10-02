import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";
// material
import { Grid, Button, Container, Stack, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";

//
import { useAuth } from "src/authentication/AuthContext";
import {
  getTodayEvent,
  getThisWeekEvent,
  getThisWeekEvent_type,
} from "src/mysql_db_api/events.js";
import { EventPostCard } from "src/components/_dashboard/events";
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];
import { useState, useEffect } from "react";
// ----------------------------------------------------------------------

export default function Events() {
  const { setLoading, displayErrMess } = useAuth();
  const [todayEvents, setTodayEvents] = useState([]);
  const [thisweekEvents_edu, setThisWeekEvents_edu] = useState([]);
  const [thisweekEvents_PM, setThisWeekEvents_PM] = useState([]);
  const [thisweekEvents_spe, setThisWeekEvents_spe] = useState([]);
  useEffect(async () => {
    setLoading(true);
    const promise1 = getTodayEvent();
    const promise2 = getThisWeekEvent_type("edu");
    const promise3 = getThisWeekEvent_type("PM");
    const promise4 = getThisWeekEvent_type("spe");
    const [res1, res2, res3, res4] = await Promise.all([
      promise1,
      promise2,
      promise3,
      promise4,
    ]);
    if (res1.data && res2.data && res3.data && res4.data) {
      setTodayEvents(res1.data);
      setThisWeekEvents_edu(res2.data);
      setThisWeekEvents_PM(res3.data);
      setThisWeekEvents_spe(res4.data);
    } else {
      displayErrMess("Fail to load events!", "error");
    }
    setLoading(false);
  }, []);
  return (
    <Page title="Dashboard | Events">
      <Container>
        <div style={{ paddingBottom: "25px" }}>
          <h3 style={{ paddingBottom: "17px" }}>
            Today Events: {todayEvents.length}
          </h3>
          {todayEvents && todayEvents.length > 0 && (
            <Grid container spacing={3}>
              {todayEvents.map((event, index) => (
                <EventPostCard
                  key={event.id}
                  post={event}
                  index={index}
                  latestPost={false}
                  latestPostLarge={true}
                />
              ))}
            </Grid>
          )}
        </div>
        <div style={{ paddingBottom: "25px" }}>
          <h3 style={{ paddingBottom: "17px" }}>
            Special's This Week Events : {thisweekEvents_spe.length}
          </h3>
          {thisweekEvents_spe && thisweekEvents_spe.length > 0 && (
            <Grid container spacing={3}>
              {thisweekEvents_spe.map((event, index) => (
                <EventPostCard
                  key={event.id}
                  post={event}
                  index={index}
                  latestPost={true}
                  latestPostLarge={false}
                />
              ))}
            </Grid>
          )}
        </div>
        <div style={{ paddingBottom: "25px" }}>
          <h3 style={{ paddingBottom: "17px" }}>
            PM's This Week Events : {thisweekEvents_PM.length}
          </h3>
          {thisweekEvents_PM && thisweekEvents_PM.length > 0 && (
            <Grid container spacing={3}>
              {thisweekEvents_PM.map((event, index) => (
                <EventPostCard
                  key={event.id}
                  post={event}
                  index={index}
                  latestPost={true}
                  latestPostLarge={false}
                />
              ))}
            </Grid>
          )}
        </div>

        <div>
          <h3 style={{ paddingBottom: "17px" }}>
            Edu's This Week Events : {thisweekEvents_edu.length}
          </h3>
          {thisweekEvents_edu && thisweekEvents_edu.length > 0 && (
            <Grid container spacing={3}>
              {thisweekEvents_edu.map((event, index) => (
                <EventPostCard
                  key={event.id}
                  post={event}
                  index={index}
                  latestPost={true}
                  latestPostLarge={false}
                />
              ))}
            </Grid>
          )}
        </div>
      </Container>
    </Page>
  );
}
