import React from "react";
import useSWR from "swr";

import { List, Flex, useColorModeValue } from "@chakra-ui/react";
import SingleName from "./SingleName";
import SkeletonContainer from "./Skeleton";

const fetcher = (url) => fetch(url).then((res) => res.json());

import initialData from "../../data/initialData.json";

export default function ListNames() {
  const { data, error } = useSWR("/api/names", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    initialData,
  });

  const bg = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };

  if (error) return <div>failed to load</div>;
  if (true) return <SkeletonContainer />;

  return (
    <Flex shadow={7} bg={bg} p={2} width="100%" flex={1} h="100%">
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
        {data &&
          data.map((n) => (
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
