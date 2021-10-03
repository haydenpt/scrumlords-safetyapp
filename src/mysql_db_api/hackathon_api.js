const url = "https://localhost:5000";

//incidents

export const getAllIncidents = async () => {
  const res = await fetch(`${url}/incidents/allincidents`);
  return res.json();
};

export const getOneIncident = async (id) => {
  const res = await fetch(`${url}/incidents/one/${id}`);
  return res.json();
};

export const addNewIncident = async (new_ifnormation) => {
  const res = await fetch(`${url}/inspection/allincidents`, {
    method: "POST",
    body: JSON.stringify(new_ifnormation),
  });
  return res.json();
};

//inspection
export const getAllInpection = async () => {
  const res = await fetch(`${url}/inspection/getall`);
  return res.json();
};

export const getOneInspection = async (id) => {
  const res = await fetch(`${url}/inspection/one/${id}`);
  return res.json();
};

export const addNewInspection = async (new_ifnormation) => {
  const res = await fetch(`${url}/inspection/add`, {
    method: "POST",
    body: JSON.stringify(new_ifnormation),
  });
  return res.json();
};
//users

export const getAllUsers = async () => {
  const res = await fetch(`${url}/inspection/getall`);
  return res.json();
};

export const getOneUsers = async (id) => {
  const res = await fetch(`${url}/inspection/one/${id}`);
  return res.json();
};

export const addnewusers = async (new_ifnormation) => {
  const res = await fetch(`${url}/inspection/add`, {
    method: "POST",
    body: JSON.stringify(new_ifnormation),
  });
  return res.json();
};
