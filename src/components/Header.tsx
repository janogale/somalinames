import React from "react";
import useSWR from "swr";
import { Center, Heading, VStack, Text, Spacer } from "@chakra-ui/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Header() {
  const { data, error } = useSWR("/api/names", fetcher);

  return (
    <Center w="100%" py={10} bg="gray.200">
      <VStack>
        <Heading bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
          Somali Names
        </Heading>

        <Text fontSize="sm"> {data?.length || 0} magac iyo sharaxadoodi</Text>
      </VStack>
    </Center>
  );
}
