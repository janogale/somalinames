import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      // styles for the `body`
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "gray.50",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      },
      // styles for the `a`
      a: {
        color: "red",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
