const data = (isSuperAdmin) => {
  return [
    {
      id: "pages-plants",
     
      label: "Home",
      to: "/app/dashboards/home",
      subs: [],
    },
    {
      id: "pages-profiling",
     
      label: "Services",

      to: "/app/dashboards/identify",
      subs: [],
    },


    {
      id: "pages-Contact",
      label: "Contact",

      to: "/app/dashboards/contact",
      subs: [],
    },

  ];
};
export default data;
