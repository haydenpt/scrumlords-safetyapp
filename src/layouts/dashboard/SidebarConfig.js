import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-fill";
import calendar2EventFill from "@iconify/icons-bi/calendar2-event-fill";
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

export const sidebarConfig = [
  {
    title: "Inspections Report",
    path: "/dashboard/app",
    icon: getIcon(calendar2EventFill),
    isAdmin: false,
  },
  // {
  //   title: "Incident Report",
  //   path: "/dashboard/incident",
  //   icon: getIcon(pieChart2Fill),
  //   isAdmin: false,
  // },

  {
    title: "Incident",
    path: "/dashboard/incident",
    isAdmin: false,
    icon: getIcon(calendar2EventFill),
  },

  {
    title: "Incident Dashboard",
    path: "/dashboard/incident_home",
    isAdmin: false,
    icon: getIcon(pieChart2Fill),
  },


  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: getIcon(alertTriangleFill),
  // },
  // {
  //   title: "register",
  //   path: "/dashboard",
  //   icon: getIcon(personAddFill),
  // },
];

export const adminConfig = [
  // {
  //   title: "admin members",
  //   path: "/dashboard/members",
  //   icon: getIcon(lockFill),
  //   isAdmin: true,
  // },
  // {
  //   title: "Admin Professionals",
  //   path: "/dashboard/admin_professionals",
  //   icon: getIcon(lockFill),
  //   isAdmin: true,
  // },
  // {
  //   title: "Admin Events",
  //   path: "/dashboard/admin_events",
  //   icon: getIcon(lockFill),
  //   isAdmin: true,
  // },
];
