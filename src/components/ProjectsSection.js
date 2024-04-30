import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "./Cards";

const projects = [
  {
    title: "React CV App",
    description:
    "I constructed a CV application using React.js, harnessing useState, useEffect, and useContext for state management. Users can input their details and instantly preview their CV in the browser. This project allowed me to refine my React skills and highlights my ability to create dynamic user experiences.",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: 'https://odincvapp.netlify.app/'
  },
  {
    title: "Portfolio Website",
    description:
    "I developed a portfolio app in React as part of the React Advanced course on Coursera, utilizing useState, useEffect, and custom hooks. This website component showcases my proficiency in React and demonstrates my ability to implement advanced concepts effectively. Click the link to explore the code on GitHub.",
    getImageSrc: () => require("../images/photo2.jpg"),
    url:'https://github.com/claudiooleite/Portfolio'
  },
  {
    title: "Etch-a-sketch",
    description:

    "In this project, I crafted a browser-based toy that combines the features of a sketchpad and an Etch-A-Sketch! This challenge was an opportunity for me to hone my skills in DOM manipulation, JavaScript methods, and CSS techniques.",
    getImageSrc: () => require("../images/pic2.JPG"),
    url:'https://claudiooleite.github.io/etch-a-sketch/'
  },
  {
    title: "Memory Gif Game",
    description:
      "The Memory Gif Game app is a simple and intuitive web application designed to showcase GIF images fetched from the GIPHY API. With this app, users can enjoy a dynamic display of GIFs, interact with them, and even shuffle the displayed images for added fun.",
    getImageSrc: () => require("../images/pic4.JPG"),
    url:'https://memory-gif-game.netlify.app'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.url}
            // url: github add url for linkiing with project
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
