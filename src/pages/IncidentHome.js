import React, { useEffect, useState } from "react";
import { getAllIncidents } from "src/mysql_db_api/hackathon_api";
import Table from "src/components/Table";
import { Chart } from "react-google-charts";

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
    <div>
    <h1>Incident Report Overview</h1>
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Locations</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
      ]}
      options={{
        title: 'My Daily Activities',
        // Just add this option
        is3D: true,
      }}
      rootProps={{ 'data-testid': '2' }}
    />

    <Chart
      width={'100px'}
      height={'100px'}
      chartType="Bar"
      loader={<div> Chart</div>}
      data={[
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350],
      ]}
      options={{
        // Material design options
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '2' }}
    />


    <Chart
      width={1000}
      height={350}
      chartType="Calendar"
      loader={<div>Loading Chart</div>}
      data={[
        [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
        [new Date(2012, 3, 13), 37032],
        [new Date(2012, 3, 14), 38024],
        [new Date(2012, 3, 15), 38024],
        [new Date(2012, 3, 16), 38108],
        [new Date(2012, 3, 17), 38229],
        [new Date(2013, 1, 4), 38177],
        [new Date(2013, 1, 5), 38705],
        [new Date(2013, 1, 12), 38210],
        [new Date(2013, 1, 13), 38029],
        [new Date(2013, 1, 19), 38823],
        [new Date(2013, 1, 23), 38345],
        [new Date(2013, 1, 24), 38436],
        [new Date(2013, 2, 10), 38447],
      ]}
      options={{
        title: 'Red Sox Attendance',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    </div>

      <Table files={data} TABLE_HEAD={TABLE_HEAD} />
    </>
  );
}
