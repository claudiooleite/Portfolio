import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="gunmetal">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
          fontSize={{ base: "16px", md: "24px", lg: "28px" }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Claudio    •    ©    2024
          </p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
