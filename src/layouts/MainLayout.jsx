import React from "react";

import { Box } from "@chakra-ui/react";

export default function MainLayout({ children }) {
  return (
    <Box fontFamily={"base"} fontWeight={"base"} fontSize={"base"}>
      {children}
    </Box>
  );
}
