import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import satu from "../../assets/img_restaurants/1.png";
import dua from "../../assets/img_restaurants/2.png";
import tiga from "../../assets/img_restaurants/3.png";
import arrow from "../../assets/img_restaurants/arrow.png";

const data = [
  { img: satu, name: "Halal Restaurant", distance: "150m" },
  { img: dua, name: "Halal Restaurant", distance: "790m" },
  { img: tiga, name: "Halal Restaurant", distance: "1.7km" },
];

export default function SectionRestaurant() {
  return (
    <Container size={"base"} pb={10} position={"relative"}>
      <Text fontSize={"2.5rem"}>Near by Restaurant</Text>
      <Text>Melbourne, Australia</Text>
      <HStack spacing={12}>
        {data.map(({ img, name, distance }, i) => (
          <VStack
            p={3}
            key={i}
            w={"23rem"}
            h={"32rem"}
            textAlign={"left"}
            alignItems={"start"}
            spacing={"4"}
          >
            <Image key={i} src={img} w={"full"} h={"25rem"} />
            <Flex justify={"space-between"} w="full" alignItems={"center"}>
              <Box>
                <Text fontWeight={500} fontSize={"20px"}>
                  {name}
                </Text>
                <Text color={"#686767"}>{distance}</Text>
              </Box>
              {data.length - 1 !== i && (
                <svg
                  width="25"
                  height="32"
                  viewBox="0 0 32 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9516 0.277992C28.1703 0.277992 31.738 3.35616 31.738 8.71866V35.368C31.738 36.4863 31.1623 37.4928 30.1943 38.0557C29.23 38.6203 28.0676 38.6313 27.0923 38.0813L16.1656 31.9085L5.13813 38.0942C4.66147 38.3618 4.13897 38.4975 3.61463 38.4975C3.0738 38.4975 2.53297 38.3527 2.04163 38.063C1.07547 37.5002 0.499802 36.4937 0.499802 35.3772V8.38316C0.499802 3.23149 4.0693 0.277992 10.2935 0.277992H21.9516ZM21.9516 3.02799H10.2935C5.6203 3.02799 3.2498 4.82833 3.2498 8.38316V35.3772C3.2498 35.5495 3.3488 35.643 3.4313 35.6907C3.5138 35.742 3.64397 35.7787 3.7943 35.6943L15.4946 29.131C15.9126 28.8982 16.4241 28.8963 16.844 29.1328L28.4435 35.6852C28.5956 35.7732 28.7258 35.7328 28.8083 35.6833C28.8908 35.6338 28.988 35.5403 28.988 35.368L28.9873 8.50974C28.9734 6.93184 28.6681 3.02799 21.9516 3.02799ZM22.7561 12.6136C23.5151 12.6136 24.1311 13.2296 24.1311 13.9886C24.1311 14.7476 23.5151 15.3636 22.7561 15.3636H9.33977C8.58077 15.3636 7.96477 14.7476 7.96477 13.9886C7.96477 13.2296 8.58077 12.6136 9.33977 12.6136H22.7561Z"
                    fill="black"
                  />
                </svg>
              )}
            </Flex>
          </VStack>
        ))}
        <Image
          src={arrow}
          boxSize={12}
          position={"absolute"}
          right={28}
          cursor="pointer"
        />
      </HStack>
    </Container>
  );
}
