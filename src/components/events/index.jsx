import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import one from "../../assets/img_events/1.png";
import two from "../../assets/img_events/2.png";
import three from "../../assets/img_events/3.png";

const data = [{ img: one }, { img: two }, { img: three }];

export default function SectionEvent() {
  return (
    <Box bg={"#F7F7F7"} w={"full"} h={"fit-content"}>
      <Box
        w={"full"}
        h={"50rem"}
        bg={"white"}
        shadow={"md-3"}
        roundedBottomLeft={"150px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Container size={"base"} position="relative">
          <Box
            position={"absolute"}
            left={-80}
            top={-40}
            w={"28rem"}
            bg={"base"}
            color={"white"}
            display={"flex"}
            justifyContent={"end"}
            py={3}
            px={5}
            fontSize={"2rem"}
            roundedRight={"10px"}
          >
            <Text>Upcoming Event</Text>
          </Box>
          <HStack spacing={10}>
            {data.map(({ img }, i) => (
              <VStack
                key={i}
                p={3}
                w={"23rem"}
                h={"28rem"}
                shadow={"md-1"}
                textAlign={"left"}
                alignItems={"start"}
                fontFamily={"roboto"}
                rounded={"10px"}
              >
                <Image src={img} />
                <Text fontSize={"30px"} fontWeight={500}>
                  Prophet's birthday
                </Text>
                <HStack cursor={"pointer"}>
                  <Text as={"u"} fontSize={"14px"} color={"base"}>
                    Read the details
                  </Text>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_105_298)">
                      <path
                        d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0V0ZM4.5 7.5C4.36739 7.5 4.24021 7.55268 4.14645 7.64645C4.05268 7.74021 4 7.86739 4 8C4 8.13261 4.05268 8.25979 4.14645 8.35355C4.24021 8.44732 4.36739 8.5 4.5 8.5H10.293L8.146 10.646C8.09951 10.6925 8.06264 10.7477 8.03748 10.8084C8.01232 10.8692 7.99937 10.9343 7.99937 11C7.99937 11.0657 8.01232 11.1308 8.03748 11.1916C8.06264 11.2523 8.09951 11.3075 8.146 11.354C8.19249 11.4005 8.24768 11.4374 8.30842 11.4625C8.36916 11.4877 8.43426 11.5006 8.5 11.5006C8.56574 11.5006 8.63084 11.4877 8.69158 11.4625C8.75232 11.4374 8.80751 11.4005 8.854 11.354L11.854 8.354C11.9006 8.30755 11.9375 8.25238 11.9627 8.19163C11.9879 8.13089 12.0009 8.06577 12.0009 8C12.0009 7.93423 11.9879 7.86911 11.9627 7.80837C11.9375 7.74762 11.9006 7.69245 11.854 7.646L8.854 4.646C8.80751 4.59951 8.75232 4.56264 8.69158 4.53748C8.63084 4.51232 8.56574 4.49937 8.5 4.49937C8.43426 4.49937 8.36916 4.51232 8.30842 4.53748C8.24768 4.56264 8.19249 4.59951 8.146 4.646C8.09951 4.69249 8.06264 4.74768 8.03748 4.80842C8.01232 4.86916 7.99937 4.93426 7.99937 5C7.99937 5.06574 8.01232 5.13084 8.03748 5.19158C8.06264 5.25232 8.09951 5.30751 8.146 5.354L10.293 7.5H4.5Z"
                        fill="#9C7092"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_105_298">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </HStack>
              </VStack>
            ))}
          </HStack>
        </Container>
        <Button></Button>
      </Box>
    </Box>
  );
}
