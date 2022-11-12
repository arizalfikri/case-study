import {
  Box,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { gapi } from "gapi-script";
import axios from "axios";

import "./login.css";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:4000/";
const initialData = [
  { label: "Email", placeholder: "Enter email", name: "email", type: "mail" },
  {
    label: "Password",
    placeholder: "Enter password",
    name: "password",
    type: "password",
  },
];

export default function Login() {
  const [newData, setNewData] = useState({
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [signIn, setSignIn] = useState(true);
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();

  const handleChangeData = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn
      ? axios
          .post(baseUrl + "sign-in", newData)
          .then((res) => navigate("/"))
          .catch((err) => console.log(err, "error"))
      : axios
          .post(baseUrl + "sign-up", newData)
          .then((res) => setSignIn(true))
          .catch((err) => console.log(err, "error"));
  };

  const responseFacebook = (response) => {
    axios
      .post(baseUrl + "social-media-sign", {
        email: response?.email,
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err, "error"));
  };

  const responseGoogle = (response) => {
    axios
      .post(baseUrl + "social-media-sign", {
        email: response?.profileObj?.email,
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err, "error"));
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "442774119992-kg79chlb8t6827cbdrpdugt0i8ti3kq5.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <Box
      w="full"
      minH="100vh"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      fontFamily={"roboto"}
    >
      <VStack w="25rem">
        <Text fontSize={"40px"} mb={10}>
          User {signIn ? "Sign In" : "Sign Up"}
        </Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack
            w={"full"}
            spacing={8}
            position="relative"
            alignItems="left"
            pb={12}
          >
            {data.map(({ label, placeholder, name, type }, i) => (
              <FormControl w="full" key={i}>
                <FormLabel fontSize="14px">{label}</FormLabel>
                <InputGroup display={"flex"} alignItems="center">
                  <Input
                    name={name}
                    type={type}
                    onChange={handleChangeData}
                    value={newData[name]}
                    size="sm"
                    px={4}
                    py={2}
                    placeholder={placeholder}
                    bg={"#F2F2F6"}
                    variant="unstyled"
                    border={"1px solid #C2C2C2"}
                    rounded="4px"
                    _placeholder={{
                      color: "#A3A3A3",
                    }}
                  />
                  {(name === "password" || name === "confirmPassword") && (
                    <InputRightElement
                      cursor={"pointer"}
                      onClick={() =>
                        setData((prev) =>
                          prev.map((el) =>
                            el.name === name
                              ? el.name === name && el.type === "password"
                                ? { ...el, type: "text" }
                                : { ...el, type: "password" }
                              : el
                          )
                        )
                      }
                      children={
                        type === "password" ? (
                          <AiOutlineEye size={22} />
                        ) : (
                          <AiOutlineEyeInvisible size={22} />
                        )
                      }
                    />
                  )}
                </InputGroup>
              </FormControl>
            ))}
            <Button
              variant={"primary"}
              fontSize="16px"
              fontFamily={"roboto"}
              type="submit"
              rounded="4px"
            >
              Sign&nbsp;in
            </Button>
            <Box borderBottom={"1px solid #D9D9D9"} zIndex={-2}></Box>
            <Box
              position={"absolute"}
              inset={0}
              zIndex={-1}
              display={"flex"}
              justifyContent="center"
              alignItems={"end"}
            >
              <Box
                bg={"primary"}
                boxSize={10}
                rounded="full"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                color="white"
                marginBottom={7}
              >
                OR
              </Box>
            </Box>
          </VStack>
        </form>
        <VStack pt={0} spacing={3} fontFamily="roboto">
          <FacebookLogin
            appId="524009209586237"
            autoLoad={false}
            callback={responseFacebook}
            textButton="Continue with Facebook"
            fields="name,email,picture"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="1" fill="#1877F2" />
                <g clipPath="url(#clip0_118_440)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 20.0707C32 13.4042 26.6274 8 20 8C13.3726 8 8 13.4042 8 20.0707C8 26.0956 12.3882 31.0893 18.125 31.9948V23.5599H15.0781V20.0707H18.125V17.4114C18.125 14.3862 19.9165 12.7151 22.6576 12.7151C23.9705 12.7151 25.3438 12.9509 25.3438 12.9509V15.9214H23.8306C22.3399 15.9214 21.875 16.8519 21.875 17.8065V20.0707H25.2031L24.6711 23.5599H21.875V31.9948C27.6118 31.0893 32 26.0956 32 20.0707Z"
                    fill="#FFFFFE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_118_440">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(8 8)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            cssClass="btnFb"
          />
          <GoogleLogin
            clientId="442774119992-kg79chlb8t6827cbdrpdugt0i8ti3kq5.apps.googleusercontent.com"
            buttonText="Continue with Google"
            autoLoad={false}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                leftIcon={
                  <svg
                    width="39"
                    height="38"
                    viewBox="0 0 39 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" width="38" height="38" rx="1" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.708 19.1943C27.708 18.5881 27.6536 18.0051 27.5525 17.4455H19.5V20.7528H24.1015C23.9032 21.8215 23.3009 22.727 22.3953 23.3333V25.4786H25.1585C26.7753 23.9901 27.708 21.7982 27.708 19.1943Z"
                      fill="#4285F4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.5 27.55C21.8085 27.55 23.7439 26.7844 25.1585 25.4786L22.3953 23.3333C21.6297 23.8463 20.6503 24.1494 19.5 24.1494C17.2731 24.1494 15.3882 22.6454 14.7159 20.6245H11.8594V22.8397C13.2662 25.634 16.1577 27.55 19.5 27.55Z"
                      fill="#34A853"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7158 20.6245C14.5448 20.1115 14.4477 19.5635 14.4477 19C14.4477 18.4365 14.5448 17.8885 14.7158 17.3755V15.1603H11.8594C11.2803 16.3145 10.95 17.6203 10.95 19C10.95 20.3797 11.2803 21.6855 11.8594 22.8397L14.7158 20.6245Z"
                      fill="#FBBC05"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.5 13.8506C20.7553 13.8506 21.8823 14.282 22.7684 15.1292L25.2207 12.6769C23.74 11.2972 21.8046 10.45 19.5 10.45C16.1577 10.45 13.2662 12.366 11.8594 15.1603L14.7159 17.3755C15.3882 15.3546 17.2731 13.8506 19.5 13.8506Z"
                      fill="#EA4335"
                    />
                  </svg>
                }
                bg="white"
                color={"#757575"}
                fontWeight="normal"
                border={"1px solid #C2C2C2"}
                boxShadow={
                  "0px 0px 1px rgba(0, 0, 0, 0.084), 0px 1px 1px rgba(0, 0, 0, 0.168)"
                }
                width="15rem"
                rounded="4px"
              >
                Continue with Google
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </VStack>
        {signIn ? (
          <Text mt={12}>
            Don’t have an account?
            <a
              href=""
              style={{ color: "#1877F2" }}
              onClick={(e) => (
                e.preventDefault(),
                setSignIn(false),
                setData([
                  {
                    label: "Email",
                    placeholder: "Enter email",
                    name: "email",
                    type: "mail",
                  },
                  {
                    label: "Password",
                    placeholder: "Enter password",
                    name: "password",
                    type: "password",
                  },
                  {
                    label: "Confirm Password",
                    placeholder: "Enter password",
                    name: "confirmPassword",
                    type: "password",
                  },
                ])
              )}
            >
              &nbsp;Sign Up
            </a>
          </Text>
        ) : (
          <Text mt={12}>
            Have an account?
            <a
              href=""
              style={{ color: "#1877F2" }}
              onClick={(e) => (
                e.preventDefault(),
                setSignIn(true),
                setData([
                  {
                    label: "Email",
                    placeholder: "Enter email",
                    name: "email",
                    type: "mail",
                  },
                  {
                    label: "Password",
                    placeholder: "Enter password",
                    name: "password",
                    type: "password",
                  },
                ])
              )}
            >
              &nbsp;Sign In
            </a>
          </Text>
        )}
      </VStack>
    </Box>
  );
}
