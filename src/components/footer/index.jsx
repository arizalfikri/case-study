import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import fb from "../../assets/img_footer/fb.svg";
import yt from "../../assets/img_footer/yt.svg";
import tw from "../../assets/img_footer/tw.svg";
import ig from "../../assets/img_footer/ig.svg";
import location from "../../assets/img_footer/location.png";
import telp from "../../assets/img_footer/telp.png";
import mail from "../../assets/img_footer/mail.png";

const data = [ig, yt, tw, fb];

export default function Footer() {
  return (
    <Box w={"full"} bg={"#F7F7F7"} fontFamily="inter" fontSize={"16px"}>
      <Container
        size={"base"}
        display="flex"
        justifyContent={"space-between"}
        pt={40}
        pb={10}
      >
        <Box
          w="33.3%"
          h={"12rem"}
          display="flex"
          flexDir={"column"}
          justifyContent={"end"}
          position="relative"
        >
          <HStack>
            {data.map((el, i) => (
              <Image key={i} src={el} alt={"icon_sosmed"} />
            ))}
          </HStack>
          <Text position={"absolute"} bottom={-16} fontSize="11px">
            © Copyrights 2022
          </Text>
        </Box>
        <Box w="33.3%">
          <Flex gap={12}>
            <VStack spacing={4} alignItems="start">
              <Text fontWeight={500} fontSize="20px">
                Service
              </Text>
              <Text>Prayer Time</Text>
              <Text>Hadith</Text>
              <Text>Event</Text>
              <Text>Blog</Text>
            </VStack>
            <VStack spacing={4} alignItems="start">
              <Text fontWeight={500} fontSize="20px">
                Support
              </Text>
              <Text>Help Center</Text>
              <Text>Privacy Policy</Text>
            </VStack>
          </Flex>
        </Box>
        <Box w="33.3%" h>
          <Text fontWeight={500} fontSize="20px">
            Contact Us
          </Text>
          <VStack alignItems={"start"} spacing={1} my={4}>
            <HStack>
              <Image src={location} boxSize={4} objectFit={"contain"} />
              <Text>Melbourne, Australia</Text>
            </HStack>
            <HStack>
              <Image src={telp} boxSize={4} objectFit={"contain"} />
              <Text>+ 00 0123456789</Text>
            </HStack>
            <HStack>
              <Image src={mail} boxSize={4} objectFit={"contain"} />
              <Text>justacafe@gmail.com</Text>
            </HStack>
          </VStack>
          <VStack spacing={3}>
            <Input
              fontSize={"11px"}
              w="full"
              variant={"unstyled"}
              shadow="sm-4"
              placeholder="Your email address"
              px={4}
              py={3}
              bg="white"
              _placeholder={{
                color: "#716969",
              }}
            />
            <Button
              w="full"
              fontSize={"12px"}
              fontWeight={700}
              bg="#FDCD00"
              rounded="10px"
              shadow="sm-4"
            >
              Subscribe the email
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
