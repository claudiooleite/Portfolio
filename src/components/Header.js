import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack, useMediaQuery, Link} from "@chakra-ui/react";

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
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/23282484/claudio-leite",
  },
];

const Header = ({ socials }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        headerRef.current.style.transform = "translateY(0)";
      } else {
        // Scrolling down
        headerRef.current.style.transform = "translateY(-200px)";
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      ref={headerRef}
      zIndex="1000"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor={"gunmetal"}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          spacing={4}
          px={16}
          py={4}
          justifyContent={isLargerThan768 ? "space-between" : "center"}
          alignItems="center"
          flexDirection={isLargerThan768 ? "row" : "column"}
        >
          <nav>
            <HStack spacing={16}>
              <Link
                href="/#about-me"
                onClick={handleClick("aboutme")}
                fontSize={{ base: "16px", md: "24px", lg: "28px" }}
                color="white"
                fontFamily="'Poppins', sans-serif"
              >
                claudioleite
              </Link>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    size={isLargerThan768 ? "xl" : "md"}
                    key={url}
                  />
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
