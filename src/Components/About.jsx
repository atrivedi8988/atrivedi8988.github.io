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
            <Td>Aman Trivedi</Td>
          </Tr>
          <Tr>
            <Th>Date of birth</Th>
            <Td>4 July, 2000</Td>
          </Tr>
          <Tr>
            <Th>Higher Education</Th>
            <Td>B.Tech (Mechanical Engineering)</Td>
          </Tr>
          <Tr>
            <Th>Address</Th>
            <Td>
              131, Patel Nagar, Behind Velocity Talkies, <br /> Indore, M.P.
              India.
            </Td>
          </Tr>
          <Tr>
            <Th>Pincode</Th>
            <Td>452010</Td>
          </Tr>
          <Tr>
            <Th>Contact NO.</Th>
            <Td>9630348988</Td>
          </Tr>
          <Tr>
            <Th>Email ID</Th>
            <Td>atrivedi8988@gmail.com</Td>
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
            Hello, I am Aman Trivedi from Indore. I graduated in B.Tech
            Mechanical Engineering in 2022 from Prestige College, RGPV
            University. During my engineering, I was part of a team that was
            building a platform for placement services. This exposure excited me
            and I was keen to build a career in coding. But I didn't have
            relevant skills. So, I joined Masai school, which offers a 30-week
            of full-time course on a full-stack web development program. At
            Masai school, we get hands-on experience to learn front-end and
            back-end technologies. And also works 600 hours of coding and 60
            hours of building logical abilities and builds a minimum of 5-6
            collaborative projects. About my family, my father is a serviceman
            in a chocolate factory and mother is a teacher and my younger
            brother is a student. My hobbies and leisure interests include
            playing chess. I have been a winner in my college. And have a keen
            interest in watching documentary movies.
          </Container>
        </Box>
      </Flex>
    </>
  );
}
