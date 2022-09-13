import styles from "../cssFolder/navbar.module.css";

import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavDrawer } from "../DrawerNavbar/NavDrawer";

const links = [
  {
    to: "/",
    page: "Home",
  },
  {
    to: "/about",
    page: "About",
  },
  {
    to: "/skill",
    page: "Skill",
  },
  {
    to: "/project",
    page: "Project",
  },
  {
    to: "/contact",
    page: "Contact",
  },
];
const activeStyle = {
  backgroundColor: "RGBA(0, 0, 0, 0.24)",
  padding: "5px 12px 5px 12px",
  borderRadius: "5px",
};
export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const NavBgColor = useColorModeValue("gray.50", "gray.900");
  return (
    <>
    
      <Box bgColor={NavBgColor} >
        <HStack justifyContent="space-between" paddingLeft={"30px"} paddingRight="3rem" height="5rem">
          <Box>
            <Image
              src={require("../files/logo2.png")}
              height="50px"
              width="120px"
            />
          </Box>
          <Box display={{ base: "none", sm: "none", md: "inline-flex" }}>
            <HStack className={styles.linksHstack} height="5rem">
              {links.map((el, i) => (
                <NavLink
                  key={i}
                  to={el.to}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {el.page}
                </NavLink>
              ))}
              <Button
                borderRadius={"50%"}
                width="42px"
                onClick={toggleColorMode}
              >
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </HStack>
          </Box>
          {/* ----------tablet and mobile hubergicon------------ */}
          <Box display={{ base: "inline-flex", sm: "inline-flex", md: "none" }}>
            <HStack gap={"20px"} >
            <Button borderRadius={"50%"} width="42px" onClick={toggleColorMode}>
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Box>
              <NavDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              
            </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
