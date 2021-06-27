import React from "react";
import { Center, Heading, VStack, Text, Spacer } from "@chakra-ui/react";

export default function Header() {
  const [count, setCount] = React.useState(250);

  return (
    <Center w="100%" py={10} bg="gray.200">
      <VStack>
        <Heading>Somali Names</Heading>

        <Text fontSize="sm"> {count} magac iyo sharaxadoodi</Text>
      </VStack>
    </Center>
  );
}
