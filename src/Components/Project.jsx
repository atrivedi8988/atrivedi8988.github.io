import { Heading, useColorModeValue } from "@chakra-ui/react";

export function Project(){
    const color = useColorModeValue("red.500","gray.500")
    return (
        <>
        <Heading color={color} >Project Page</Heading>
        
        </>
    )
}