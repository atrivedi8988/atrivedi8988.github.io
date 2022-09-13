import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Project } from "./Components/Project";
import { Skill } from "./Components/Skill";

function App() {
  const BodyBgColor = useColorModeValue("gray.100", "gray.800");
  const { colorMode } = useColorMode();

  return (
    <div className="App">
      <Box bgColor={BodyBgColor} width={"100vw"}>
        <Navbar />
        <Box id="home">
          <Home />
        </Box>
        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        <Box id="about">
          <About />
        </Box>
        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        <Box id="skill">
          <Skill />
        </Box>
        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        <Box id="project">
          <Project />
        </Box>

        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </div>
  );
}

export default App;
