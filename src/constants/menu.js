const data = (isSuperAdmin) => {
  return [
    {
      id: "pages-plants",
     
      label: "dashboards.home",
      to: "/app/dashboards/home",
      subs: [],
    },
    {
      id: "pages-profiling",
     
      label: "dashboards.services",

      to: "/app/dashboards/identify",
      subs: [],
    },


    {
      id: "pages-Contact",
      label: "dashboards.contact",

      to: "/app/dashboards/contact",
      subs: [],
    },

  ];
};
export default data;
