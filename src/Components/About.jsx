import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import "aos/dist/aos.css";
import personalInfo from "../data/personalnfo";


export function About() {
    
  return (
    <>
      <Heading textAlign={"center"}mb={"25px"}  >
        ABOUT ME
      </Heading>
      <Flex
        justifyContent={["center", "center", "space-evenly"]}
        alignItems="center"
        direction={["column", "column", "row"]}
        gap="50px"
        // border={"1px solid green"}
      >
        <Box>
        <Table
          variant="simple"
          size={"md"}
          width={["12rem", "32rem", "32rem"]}
          className="aboutTable"
          margin="auto"
          data-aos="zoom-in-right"
          fontWeight={"500"}
        >
          <Tr>
            <Th>Name</Th>
            <Td>{personalInfo?.fullName}</Td>
          </Tr>
          <Tr>
            <Th>Date of birth</Th>
            <Td>{personalInfo?.dob}</Td>
          </Tr>
          <Tr>
            <Th>Higher Education</Th>
            <Td>{personalInfo?.higherEducation}</Td>
          </Tr>
          <Tr>
            <Th>Address</Th>
            <Td>
              {personalInfo?.address}
            </Td>
          </Tr>
          <Tr>
            <Th>Pincode</Th>
            <Td>{personalInfo?.pincode}</Td>
          </Tr>
          <Tr>
            <Th>Contact NO.</Th>
            <Td>{personalInfo?.contactNo}</Td>
          </Tr>
          <Tr>
            <Th>Email ID</Th>
            <Td>{personalInfo?.emailID}</Td>
          </Tr>
        </Table>
        </Box>
        <Box>
          <Container
            textAlign={"justify"}
            maxHeight={["20rem", "20rem", "33rem"]}
            overflowY={["scroll", "scroll", "hidden"]}
            p={"0px 20px 0px 20px"}
            data-aos="zoom-in-left"
            fontWeight={"500"}
          >
            {personalInfo?.aboutMe}
          </Container>
        </Box>
      </Flex>
    </>
  );
}
