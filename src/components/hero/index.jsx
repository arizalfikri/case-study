import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import hero from "../../assets/img/hero.png";
import appStore from "../../assets/icon/app_store.png";
import googleStore from "../../assets/icon/google_store.png";

export default function SectionHero() {
  return (
    <Container size={"base"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Box
            fontFamily={"heading"}
            fontSize={"5rem"}
            color={"primary"}
            w={"full"}
          >
            <Text color={"base"}>Connecting</Text>
            <Text>Muslim</Text>
            <Text>Life</Text>
          </Box>
          <Text>Everything you need as a Muslim just in one App.</Text>
          <HStack spacing={8} mt={8}>
            <Button size={"lg"} maxW={"fit-content"} p={0}>
              <Image src={googleStore} boxSize={"full"} />
            </Button>
            <Button size={"lg"} maxW={"fit-content"} p={0}>
              <Image src={appStore} boxSize={"full"} />
            </Button>
          </HStack>
        </Box>
        <Image boxSize={500} src={hero} />
      </Flex>
    </Container>
  );
}
