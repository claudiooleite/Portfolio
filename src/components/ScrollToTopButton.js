import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Box, useMediaQuery } from "@chakra-ui/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right={isLargerThan768 ? "50px" : "20px"}
      zIndex="1000"
      display={isVisible ? "block" : "none"}
      cursor="pointer"
    >
      <FontAwesomeIcon icon={faArrowUp} size="2x" onClick={scrollToTop} />
    </Box>
  );
};

export default ScrollToTopButton;
