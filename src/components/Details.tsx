import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function Details({ description, id }) {
  return (
    <Box width="100%" position="absolute" pt={3}>
      <Text fontSize="sm">{description}</Text>
    </Box>
  );
}
