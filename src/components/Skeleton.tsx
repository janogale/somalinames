import React from "react";
import { Skeleton, Stack, SkeletonCircle, Box } from "@chakra-ui/react";

export default function SkeletonContainer() {
  return (
    <Box px={12}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <Stack
          key={n}
          mb={3}
          direction="row"
          width="100%"
          justify="flex-start"
          align="center"
        >
          <SkeletonCircle size="8" />
          <Skeleton height="20px" width="60%" />
        </Stack>
      ))}
    </Box>
  );
}
