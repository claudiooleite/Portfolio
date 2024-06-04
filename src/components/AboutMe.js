import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Text, Badge, Flex, Box } from "@chakra-ui/react";

function AboutMe() {
  return (
    <FullScreenSection>
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4} id="aboutme-section">
          Hello! 👋
        </Heading>
        <Text>
          I'm Cláudio Leite, a front-end developer who loves creating dynamic
          and user-friendly web applications. I started my coding journey seven
          months ago with the Odin Project's Foundations course. This hands-on
          program taught me the basics of HTML, CSS, and JavaScript, supported
          by a great community.
        </Text>

        <Text mt={4}>
          To improve my skills even further, I completed the{" "}
          <Badge colorScheme="blue">
            Meta Front-End Professional Certification
          </Badge>
          . This course helped me learn modern frameworks and advanced topics. I
          became proficient in React, state management, and responsive design.
          One of my favourite projects was building the Little Lemon Restaurant
          Web App, which tested and showcased my abilities. You can see this and
          other projects on my profile.
        </Text>

        <Heading as="h3" size="lg" mt={8} mb={4}>
          After working in sports and fitness for ten years, I'm excited to
          bring my skills to front-end development:
        </Heading>
        <Flex as="ul" mt={2} direction="column">
          <Box >
            <Text>
              <strong>Analytical Thinking:</strong> Creating and analyzing
              training programs is similar to debugging and improving code.
            </Text>
          </Box>
          <Box >
            <Text>
              <strong>Attention to Detail:</strong> Making precise training
              plans helps me write clean and accurate code.
            </Text>
          </Box>
          <Box>
            <Text>
              <strong>Problem-Solving:</strong> Finding solutions to athletic
              challenges is like troubleshooting coding issues.
            </Text>
          </Box>
          <Box >
            <Text>
              <strong>Effective Communication:</strong> Explaining complex
              training concepts is similar to working with team members and
              clients in tech projects.
            </Text>
          </Box>
          <Box >
            <Text>
              <strong>Team Collaboration:</strong> Leading and working with
              sports teams helps me collaborate effectively with development
              teams.
            </Text>
          </Box>
          <Box >
            <Text>
              <strong>Time Management:</strong> Managing training schedules and
              deadlines helps me handle project timelines efficiently.
            </Text>
          </Box>
        </Flex>

        <Heading as="h3" size="lg" mt={8} mb={4}>
          What's Next? 🌟
        </Heading>
        <Text>
          I'm excited to take on new challenges and opportunities that use my
          front-end development skills. I'm especially interested in roles where
          I can create intuitive and accessible user interfaces, work closely
          with a team, and contribute to meaningful projects.
        </Text>

        <Text mt={4}>
          I'm always open to connecting with like-minded professionals and
          exploring opportunities for collaboration. Feel free to check out my
          projects on my profile and reach out to discuss web development,
          coding, or potential collaborations.
        </Text>
      </Box>
    </FullScreenSection>
  );
}

export default AboutMe;
