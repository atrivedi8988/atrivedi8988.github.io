import { Image } from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPostman,
  SiGit,
  SiHeroku,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

import { SiMui } from "react-icons/si";

const skillList = [
  {
    hover: {
      color: "#E44D26",
    },
    skill: "HTML",
    icon: <SiHtml5 className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#264DE4",
    },
    skill: "CSS",
    icon: <SiCss3 className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#F7DF1E",
    },
    skill: "JavaScript",
    icon: <SiJavascript className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#53C1DE",
    },
    skill: "React",
    icon: <SiReact className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#764ABC",
    },
    skill: "Redux",
    icon: <SiRedux className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#007fff",
    },
    skill: "Material UI",
    icon: (
      <Image
        className="dev"
        width={"64px"}
        src={require("../assets/images/mui.png")}
        alt=""
      />
    ),
  },
  {
    hover: {
      color: "#38bdf8",
    },
    skill: "Tailwind CSS",
    icon: <SiTailwindcss className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#7b11f8",
    },
    skill: "Bootstrap",
    icon: <SiBootstrap className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#732FF9",
    },
    skill: "Express JS",
    icon: <SiExpress className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "black",
    },
    skill: "Mongo DB",
    icon: <SiMongodb className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#99424F",
    },
    skill: "Node JS",
    icon: <SiNodedotjs className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#DE4C36",
    },
    skill: "Postman",
    icon: <SiPostman className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#DE4C36",
    },
    skill: "Git",
    icon: <SiGit className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#DE4C36",
    },
    skill: "Npm",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="4rem"
        width="4rem"
        className="dev"
      >
        <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"></path>
      </svg>
    ),
  },
  {
    hover: {
      color: "#430098",
    },
    skill: "Heroku",
    icon: <SiHeroku className="dev" fontSize="4rem" />,
  },
];

export default skillList;
