import React from "react";
import { Center, Heading, VStack, Text, Spacer } from "@chakra-ui/react";

export default function Header() {
  const [count, setCount] = React.useState(250);

  return (
    <Center w="100%" py={10} bg='gainsboro'>
      <VStack>
        <Heading>Somali Names</Heading>
        <Spacer py={2} />
        <Text fontSize="sm"> {count} magac iyo sharaxadoodi</Text>
      </VStack>
    </Center>
  );
}
