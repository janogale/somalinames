import React from "react";

import { HStack, Button } from "@chakra-ui/react";
import { AddIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

const ActionsBanner = () => {
  return (
    <HStack
      as="section"
      alignItems="center"
      justifyContent="flex-end"
      pr={8}
      pt={6}
      pb={3}
      width="100%"
    >
      <Button onClick={() => console.log("plus")}>
        <AddIcon size="sm" mr={6} />
      </Button>
      <Button onClick={() => console.log("search")}>
        <SearchIcon size="sm" />
      </Button>
    </HStack>
  );
};

export default ActionsBanner;
