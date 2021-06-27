import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/Container";
import AppHeader from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import ActionsBanner from "./../components/ActionsBanner";
import ListNames from "./../components/ListNames";

const Index = () => (
  <Container height="100vh" className="container">
    <AppHeader />
    <Main>
      <ActionsBanner />
      <ListNames />
    </Main>

    <Footer>
      <Text fontWeight="thin" fontSize="xs">
        Developed by{" "}
        <ChakraLink href="https://bigiltech.com/">
          Bigil Technologies
        </ChakraLink>{" "}
        using 🥛 of 🐪, 💻 &amp; ☕
      </Text>
    </Footer>
  </Container>
);

export default Index;
