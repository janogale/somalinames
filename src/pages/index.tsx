import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/Container";
import AppHeader from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import ActionsBanner from "./../components/ActionsBanner";

const Index = () => (
  <Container height="100vh">
    <AppHeader />
    <Main>
      <ActionsBanner />
    </Main>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
