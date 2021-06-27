import { Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Stack
    bg="gray.50"
    as="main"
    spacing="1.5rem"
    width="100%"
    borderRadius="3xl"
    overflow="hidden"
    flex="2"
    maxWidth="48rem"
    {...props}
  />
);
