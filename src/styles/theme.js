// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
    subheading: "Roboto, sans-serif",
  },
  colors: {
    gunmetal: "#2d3142ff",
    silver: "#bfc0c0ff",
    white: "#ffffffff",
    coral: "#ef8354ff",
    paynesGray: "#4f5d75ff",
    lightGray: "#F4F5F0",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "8px",
      },
      variants: {
        primary: {
          bg: "coral",
          color: "white",
          _hover: {
            bg: "paynesGray",
          },
        },
        secondary: {
          bg: "transparent",
          borderColor: "coral",
          color: "coral",
          _hover: {
            bg: "coral",
            color: "white",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: "white",
          borderColor: "silver",
          _focus: {
            borderColor: "coral",
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        bg: "white",
        borderColor: "silver",
        _focus: {
          borderColor: "coral",
        },
      },
    },
  },
});

export default theme;
