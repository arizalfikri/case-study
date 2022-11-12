import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import map from "../../assets/img/map.png";
import download from "../../assets/download.png";

const data = "1501";

export default function SectionMap() {
  return (
    <>
      <Container borderBottom={"1px solid gray"} size={"base"} />
      <Flex
        w={"full"}
        gap={12}
        alignItems={"center"}
        fontFamily={"inter"}
        bg={"white"}
        justify={"center"}
      >
        <Image src={map} w={800} h={450} />
        <VStack>
          <Text>Available on Google Apps and Apps Store</Text>
          <Image src={download} boxSize={"25rem"} objectFit={"contain"} />
          <HStack>
            {data.split("").map((el, i) => (
              <Box
                key={i}
                py={1}
                px={4}
                bg={"#7167AD"}
                rounded={"12px"}
                boxShadow={"0px 4px 8px 0px #0E1F3529"}
                color={"white"}
              >
                {el}
              </Box>
            ))}
          </HStack>
          <Text mt={"10"}>App has been downloaded</Text>
        </VStack>
      </Flex>
      <Container borderBottom={"1px solid gray"} size={"base"} />
    </>
  );
}
