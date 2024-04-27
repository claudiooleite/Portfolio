import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";





const greeting = "Hello, I am Claudio!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => {
  

  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <VStack>
        <Avatar size="2xl" name='Claudio' src={require("../images/pic.jpg")} alt="Profile Picture"/>
        <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="3xl" noOfLines={1}>{bio1}</Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
)};

export default LandingSection;
