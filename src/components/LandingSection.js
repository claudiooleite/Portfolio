import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from '../images/claudio-linkedin.jpg'

const greeting = "Nice to meet you! I'm Claudio Leite.";
const bio =
  "A passionate front-end developer with a knack for creating dynamic and user-friendly web applications. ";

const LandingSection = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <FullScreenSection
      justifyContent="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={4}>
        <VStack textAlign="center">
          <Avatar
            size="2xl"
            name="Claudio"
            src={image}
            alt="Profile Picture"
          />
          <Heading as="h1" size="3xl">
            {greeting}
          </Heading>
        </VStack>
        <VStack spacing={6} textAlign="center">
          <Heading as="h4" size="md">
            {bio}
          </Heading>
        </VStack>
        <VStack>
          <Text as="u" fontSize="2xl">
            <a href="/#contact-me" onClick={handleClick("contactme")}>
              <span>Contact Me</span>
            </a>
          </Text>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
