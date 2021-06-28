import React from "react";
import useSWR from "swr";
import ListNames from "./ListNames";
import ActionsBanner from "./ActionsBanner";
import SkeletonContainer from "./Skeleton";

import { Box } from "@chakra-ui/react";
const fetcher = (url) => fetch(url).then((res) => res.json());

import initialData from "../../data/initialData.json";

export default function ListActionContainer() {
  const { data, error } = useSWR("/api/namess", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    initialData,
  });

  const [names, setNames] = React.useState(data || []);
  const [found, setFound] = React.useState(0);

  if (error) return <div>failed to load</div>;
  if (!data) return <SkeletonContainer />;

  function searchName(str) {
    if (!str) {
      setNames(data);
      setFound(0);
      return null;
    }
    if (!Array.isArray(data)) return null;

    const filteredData = data.filter((n) =>
      n?.name?.toLowerCase().includes(str.toLowerCase())
    );

    setFound(filteredData?.length || 0);

    setNames(filteredData);
  }

  return (
    <Box h="100%">
      <ActionsBanner onSearch={searchName} found={found} />
      <ListNames names={names} />
    </Box>
  );
}
