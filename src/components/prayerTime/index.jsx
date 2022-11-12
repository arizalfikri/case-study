import {
  Box,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";

import map from "../../assets/icon/map.png";
import search from "../../assets/icon/search_white.png";
import sun1 from "../../assets/img/sun1.png";
import sun2 from "../../assets/img/sun2.png";
import sun3 from "../../assets/img/sun3.png";
import sun4 from "../../assets/img/sun4.png";
import sun5 from "../../assets/img/sun5.png";
import sun6 from "../../assets/img/sun6.png";

const data = [
  { title: "Fajr", time: "06:30", img: sun1 },
  { title: "Sunrise", time: "06:30", img: sun2 },
  { title: "Dohr", time: "11:41", img: sun3 },
  { title: "Asr", time: "14:48", img: sun4 },
  { title: "Mahreb", time: "17:48", img: sun5 },
  { title: "Isha", time: "18:58", img: sun6 },
];

export default function SectionPrayerTime() {
  return (
    <Box
      bg={"body"}
      h={"31.25rem"}
      w={"full"}
      display={"flex"}
      alignItems={"center"}
    >
      <Container
        size={"base"}
        my={"auto"}
        display={"flex"}
        flexDir={"column"}
        gap={6}
      >
        <Flex justify={"space-between"} alignItems="end">
          <Text fontSize={"sm"}>Australia</Text>
          <Text>Monday, 17 October</Text>
        </Flex>
        <InputGroup color={"white"} w={"full"} position={"relative"}>
          <Image
            src={map}
            boxSize={7}
            position={"absolute"}
            left={4}
            top={7}
            zIndex={1}
          />
          <Input
            placeholder="Melbourne, Australia"
            borderRadius={"12px"}
            fontSize={"base"}
            bg="base"
            shadow={"sm-3"}
            py={7}
            px={14}
            variant="unstyled"
          />
          <Image
            src={search}
            boxSize={7}
            position={"absolute"}
            right={4}
            top={7}
            zIndex={1}
          />
        </InputGroup>
        <Flex mt={16} gap={12}>
          {data?.map(({ title, time, img }, i) => (
            <Box
              key={i}
              position={"relative"}
              borderRadius={"8px 63px 6px 6px"}
              w={120}
              h={160}
              bg={i % 3 === 0 ? "one" : i % 2 === 1 ? "two" : "three"}
              color={"white"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"end"}
              p={3}
              boxShadow={"sm"}
            >
              <Box
                position={"absolute"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                top={-8}
                left={-6}
                boxSize={"6rem"}
                bg={
                  i % 3 === 0 ? "topOne" : i % 2 === 1 ? "topTwo" : "topThree"
                }
                borderRadius={"full"}
              >
                <Image src={img} boxSize={16} />
              </Box>
              <Text>{title}</Text>
              <Text>{time}</Text>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
