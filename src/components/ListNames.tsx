import React from "react";
import useSWR from "swr";

import { List, Flex, useColorModeValue } from "@chakra-ui/react";
import SingleName from "./SingleName";

export default function ListNames({ names }) {
  return (
    <Flex shadow={7} p={2} width="100%" flex={1} h="100%">
      <List
        mb={12}
        px={2}
        border="none"
        width="100%"
        lineHeight="1"
        h="100%"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "1px",
          },
          "&::-webkit-scrollbar-track": {
            width: "1px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "tomato",
            borderRadius: "24px",
          },
        }}
      >
        {names &&
          names.map((n) => (
            <React.Fragment key={n.id}>
              <SingleName
                name={n.name}
                id={n?._id || n.id}
                description={n.description}
              />
            </React.Fragment>
          ))}
      </List>
    </Flex>
  );
}
