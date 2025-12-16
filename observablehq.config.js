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
        {name: "Marion Berries Analytics", path: "/marketing/"},
      ]
    },
    {
      name: "About",
      path: "/about"
    }
  ],

  footer: "Built with Observable Framework & Cloudflare Pages",
  toc: true 
};