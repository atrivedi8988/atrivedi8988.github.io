import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack } from "@chakra-ui/react"
import React from "react"
import { NavLink } from "react-router-dom"

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

export function NavDrawer({isOpen,onOpen,onClose}) {
    
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Select Your Tabs</DrawerHeader>
  
            <DrawerBody>
             <VStack>
             {links.map((el, i) => (
                <NavLink
                  key={i}
                  to={el.to}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {el.page}
                </NavLink>
              ))}
             </VStack>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }