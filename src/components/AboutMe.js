import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Text, Badge, Flex, Box } from "@chakra-ui/react";

function AboutMe() {
  return (
    <FullScreenSection>
      <Heading as="h2" size="xl" mb={4} id="aboutme-section">
        Hello! 👋
      </Heading>
      <Text>
        I'm Cláudio Leite, a passionate front-end developer with a knack for
        creating dynamic and user-friendly web applications.
      </Text>

      <Heading as="h3" size="lg" mt={8} mb={4}>
        My Journey 🚀
      </Heading>
      <Text>
        I began my coding journey seven months ago, diving into the Odin
        Project's Foundations course. This rigorous program gave me a solid
        grounding in HTML, CSS, and JavaScript through hands-on projects and an
        incredibly supportive community.
      </Text>

      <Text mt={4}>
        To further hone my skills, I pursued the{" "}
        <Badge colorScheme="blue">
          Meta Front-End Professional Certification
        </Badge>
        . This comprehensive course advanced my knowledge, covering modern
        frameworks and advanced topics. I became proficient in React, state
        management, and responsive design. One highlight was building the Little
        Lemon Restaurant Web App, a project that tested and showcased my skills
        comprehensively. You can explore this and other projects on my profile.
      </Text>

      <Heading as="h3" size="lg" mt={8} mb={4}>
        What's Next? 🌟
      </Heading>
      <Text>
        I am eager to embrace new challenges and opportunities that leverage my
        front-end development skills. I'm particularly interested in roles
        involving:
      </Text>
      <Flex as="ul" mt={2} direction="column">
        <Box as="li">
          <Text>Intuitive and accessible user interfaces</Text>
        </Box>
        <Box as="li">
          <Text>Team collaboration</Text>
        </Box>
        <Box as="li">
          <Text>Impactful projects</Text>
        </Box>
      </Flex>

      <Text mt={4}>
        I am always open to connecting with like-minded professionals and
        exploring opportunities for collaboration. Feel free to check out my
        projects on my profile and reach out to discuss web development, coding,
        or potential collaborations.
      </Text>
    </FullScreenSection>
  );
}

export default AboutMe;
