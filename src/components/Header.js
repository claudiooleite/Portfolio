import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

export const socials = [
  {
    icon: faEnvelope,
    url: "mailto: claudio.leite@hotmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/claudiooleite",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/claudio-leite-bb2a3262/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/23282484/claudio-leite",
  },
];

const Header = ({socials}) => {
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
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
                {socials.map((social, index) => (
                  <a key={index} href={social.url} >
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contact-me" onClick={handleClick('contactme')}>
                <span>Contact Me</span>
              </a>
              <a href="/#projects"  onClick={handleClick('projects')}>
                <span>Projects</span>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
