import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "10px",
  },
  variants: {
    primary: {
      bg: "#6D9853",
      color: "#FFFFFF",
      py: 2,
      px: 4,
    },
  },
});
