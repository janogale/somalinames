import React from "react";
import { ListItem, Avatar, Flex } from "@chakra-ui/react";

import Details from "./Details";

export default function SingleName({ name, description, id }) {
  const [showDetails, setShowDetails] = React.useState(false);

  const displayName = capitalize(name);
  return (
    <Flex mb={3} w="100%">
      <Avatar size="sm" mr={3} name={displayName} />
      <ListItem
        flex={1}
        position="relative"
        onClick={() => setShowDetails(!showDetails)}
        borderBottomWidth="0.02em"
        pb={showDetails ? "8" : "1"}
        borderColor="gray.300"
        fontSize="2xl"
        _hover={{
          cursor: "pointer",
        }}
      >
        {displayName}
        {showDetails && <Details description={description} id={id} />}
      </ListItem>
    </Flex>
  );
}

// utils

function capitalize(str) {
  if (typeof str !== "string") {
    return "";
  }
  if (!str) {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
