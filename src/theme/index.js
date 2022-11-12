import { extendTheme } from "@chakra-ui/react";

import { fontSizes, fontWeights, fonts } from "./foundations/fonts";
import { Container } from "./components/Container";
import { colors } from "./foundations/colors";
import { shadows } from "./foundations/shadows";
import { Button } from "./components/Buttons";

const ovverides = {
  fontSizes,
  fontWeights,
  fonts,
  colors,
  shadows,
  components: {
    Container,
    Button,
  },
};

export default extendTheme(ovverides);
