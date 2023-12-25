import { Heading, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";
import projectList from "../data/projectList";


export function Project() {
  return (
    <>
      <Heading mb="50px">MY PROJECTS</Heading>
      {projectList?.map((el, i) => {
        return <ProjectCard key={i} data={{ ...el }} />;
      })}
    </>
  );
}
