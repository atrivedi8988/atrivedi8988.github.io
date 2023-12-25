import {
  Box,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
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
import skillList from "../data/skillList";

const SkillCard = () => {
  const { colorMode } = useColorMode();
  if (colorMode === "dark") {
    var bc = "2px solid rgb(150, 150, 226)";
    var bgColor = "#222e3d";
  }
  return (
    <Box fontWeight={"500"}>
      <SimpleGrid
        columns={[2, 3, 5]}
        m="auto"
        justifyContent={"center"}
        textAlign="center"
        w="80%"
        color="#00B9E8"
        gap={"50px"}
      >
        {skillList?.map((skill) => (
          <Box
            _hover={{ color: skill?.hover?.color }}
            boxShadow="base"
            p="6"
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
            data-aos="zoom-in-up"
          >
            <VStack alignItems={"center"}>
              {skill?.icon}
              <Text mt="15px">{skill?.skill}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillCard;
