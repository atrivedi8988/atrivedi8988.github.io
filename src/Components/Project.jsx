import { Heading, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

const data = [
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
