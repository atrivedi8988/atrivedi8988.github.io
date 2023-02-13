import { Heading, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

const data = [
  {
    title: "COMICA DIGITAL",
    desc: `ComicaDigital is an e-commerce website where users can order
    electronics items and home appliances as well. It's a collaborative
    project built by 5 team members in 5 days.`,
    techStack: `HTML | CSS | JS | REDUX | REACT | NODE JS |
      MONGODB | EXPRESS JS | CHAKRA UI | AXIOS`,
    feature: `•Sign up, Sign In, Product Pages, Separate Cart Page & •Dynamic Product Page and Cart Page With Sorting & Filtering & •Product Checkout Page & Payment Page with Dynamic
      Calculation`,
    img: "COMICADIGITAL.png",
    clone: "https://github.com/pg570/ComicaDigital_website",
    deploy: "https://comicadigital.netlify.app/",
  },

  {
    title: "BITRIX24",
    desc: `Bitrix24 is a multi-component online collaboration, automation, and
    marketing software platform for all kinds of organizations. It's a
    collaborative project built by 5 team members in 5 days.`,
    techStack: `HTML | CSS | JS | REDUX | REACT | NODE JS |
      MONGODB | EXPRESS JS | CHAKRA UI | AXIOS`,
    feature: `Sign up, Sign In, Google authentication & Manage clients via CRM, Communicate via chats, and Project
      management tools.`,
    img: "BITRIX24.png",
    clone: "https://github.com/atrivedi8988/bitrix-24",
    deploy: "https://bitrix24in.netlify.app/",
  },

  {
    title: "IDEAKART",
    desc: "Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories.",
    techStack:
      "HTML | CSS | JS | ReactJS | ChakraUI | NPM Packages | Heroku API",
    feature:
      "Sign In, Sign Up, Product Page & Dynamic Cart Page, Single Page Website, Responsive for all devices",
    img: "IDEAKART.png",
    clone: "https://github.com/atrivedi8988/Ideakart",
    deploy: "https://ideakart-hhic5y3ev-atrivedi8988.vercel.app/",
  },
  {
    title: "NORDSTROM",
    desc: "Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids.",
    techStack: "HTML | CSS | JS | Browser Local Storage",
    feature:
      "Sign up, Sign In, Sign Out, Navbar with Drop-down Menu, Products Page, Dynamic Individual Product Page, Dynamic Cart Page, Product Checkout page and Payment Page, Responsive for all devices",
    img: "NORDSTROM.png",
    clone: "https://github.com/atrivedi8988/nordstrom",
    deploy: "https://atrivedi8988.github.io/nordstrom/",
  },
  {
    title: "BATH AND BODY",
    desc: "Bath & Body Works, LLC. is an American retail store chain that sells soaps, lotions, fragrances, and candles.",
    techStack: "HTML | CSS | JS | Browser Local Storage",
    feature:
      "Sign up, Sign In, Sign Out, Navbar with Drop-down Menu, Products Page, Dynamic Individual Product Page, Dynamic Cart Page, Product Checkout page and Payment Page",
    img: "BathAndBody.png",
    clone: "https://github.com/atrivedi8988/Bath-Body-Woks",
    deploy: "https://atrivedi8988.github.io/Bath-Body-Woks/",
  },
];

export function Project() {
  return (
    <>
      <Heading mb="50px">MY PROJECTS</Heading>
      {data.map((el, i) => {
        return <ProjectCard key={i} data={{ ...el }} />;
      })}
    </>
  );
}
