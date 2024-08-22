import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from "../images/claudio-linkedin.jpg";
import { useEffect, useRef } from "react";

const greeting = "Nice to meet you!";
const bio =
  " I'm Claudio Leite. A dedicated front-end developer with a passion for crafting dynamic and user-friendly web applications.";

const LandingSection = () => {
  const avatarRef = useRef(null);

  useEffect(() => {
    const avatarElement = avatarRef.current;

    const animation = () => {
      avatarElement.style.animation = "waveBorder 2s infinite";
    };

    const animationEnd = () => {
      avatarElement.style.animation = ""; // Clear animation to prevent memory leak
    };

    avatarElement.addEventListener("mouseenter", animation);
    avatarElement.addEventListener("animationend", animationEnd);

    return () => {
      avatarElement.removeEventListener("mouseenter", animation);
      avatarElement.removeEventListener("animationend", animationEnd);
    };
  }, []);
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
      backgroundColor="lightGray">
      <VStack spacing={4}>
        <VStack textAlign="center">
          <a href="/#about-me" onClick={handleClick("aboutme")}>
            <Avatar
              size="2xl"
              name="Claudio"
              src={image}
              alt="Profile Picture"
              ref={avatarRef}
              style={{
                border: "2px solid transparent", // Initial transparent border
                borderRadius: "50%", // Make it circular
              }}
            />
          </a>
          <Heading as="h1" size="3xl" color="gunmetal">
            {greeting}
          </Heading>
        </VStack>
        <VStack spacing={6} textAlign="center" color="gunmetal">
          <Heading as="h4" size="md">
            {bio}
          </Heading>
        </VStack>
        <VStack>
          <Text as="u" fontSize="2xl" color="gunmetal">
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
