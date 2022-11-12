import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import icon_search from "../../assets/icon/icon_search.svg";
import chat from "../../assets/icon/Chat.svg";
import user from "../../assets/icon/user.svg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box w={"full"} position={"sticky"} top={0} bg={"white"} zIndex={99}>
      <Container size={"navbar"} w={"full"} py={6} position={"relative"}>
        <Flex w={"full"} spacing={4} justifyContent={"space-between"}>
          <HStack spacing={12}>
            <Text>Features</Text>
            <Text>Prayer&nbsp;Times</Text>
          </HStack>
          <HStack spacing={12}>
            <InputGroup position={"relative"} w={"21.875rem"}>
              <Image
                src={icon_search}
                position={"absolute"}
                zIndex={10}
                top={3}
                left={3}
                boxSize={5}
              />
              <Input
                _placeholder={{
                  color: "#9E9EA7",
                  fontStyle: "italic",
                }}
                placeholder="Search..."
                pl={10}
                py={2}
                fontSize={"base"}
                boxShadow={"input"}
                bg={"gray"}
                variant="unstyled"
              />
            </InputGroup>
            <Image src={user} boxSize={8} />
            <Image src={chat} boxSize={8} />
          </HStack>
        </Flex>
        <Button
          variant={"primary"}
          position={"absolute"}
          right={-36}
          top={7}
          fontSize="base"
          fontFamily={"inter"}
          onClick={() => navigate("/login")}
        >
          Sign&nbsp;in
        </Button>
      </Container>
    </Box>
  );
}
