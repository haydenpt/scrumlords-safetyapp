import React, { useEffect, useState } from "react";
import { getAllIncidents } from "src/mysql_db_api/hackathon_api";
import Table from "src/components/Table";

export default function IncidentHome() {
  const TABLE_HEAD = [
    { id: "current_job", label: "current_job", alignRight: false },
    { id: "manager", label: "phone_number", alignRight: false },
    { id: "email", label: "email", alignRight: false },
    { id: "witness", label: "witness", alignRight: false },
    {
      id: "phone_number_witness",
      label: "phone_number_witness",
      alignRight: false,
    },
    { id: "incident_date", label: "Incident Date", alignRight: false },
    { id: "incident_date", label: "report_date", alignRight: false },
    // { id: "report_date", label: "report_date", alignRight: false },
    { id: "" },
  ];
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await getAllIncidents();
    console.log(res);
    setData(res);
  }, []);

  return (
    <>
      <Table files={data} TABLE_HEAD={TABLE_HEAD} />
    </>
  );
}
