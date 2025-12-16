// observablehq.config.js
export default {
  title: "Rami Dear | Marketing Strategy & Analytics",
  
  head: () => `
    <meta name="title" content="Rami Dear | Marketing Strategy & Analytics">
    <meta name="description" content="Portfolio of Rami Dear, MBA Candidate at Willamette University.">
    <meta name="author" content="Rami Dear">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Rami Dear | Marketing Portfolio">
  `,

  pages: [
    {
      name: "Portfolio",
      pages: [
        {name: "Marion Berries Baseball Club", path: "/marketing/"}, {name: "Los Lobos Track Club", path: "/marketing/"}, {name: "WOU Center for Professional Pathways", path: "/marketing/"},
      ]
    },
    {
      name: "About",
      path: "/about"
    }
  ],

  footer: "Western Oregon University BS '24 | Willamette University MBA '26",
  toc: true 
};