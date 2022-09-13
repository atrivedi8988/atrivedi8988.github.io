import { Box, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  const BodyBgColor = useColorModeValue("gray.100","gray.800")
  return (
    <div className="App">
      <Box bgColor={BodyBgColor} height={"100vh"} width={"100vw"}>
        <Navbar/>
        <AllRoutes />
      </Box>
    </div>
  );
}

export default App;
