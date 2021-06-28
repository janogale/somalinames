import React from "react";

import {
  HStack,
  Box,
  Button,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

function ActionsBanner({ onSearch, found }) {
  const [toggle, setToggle] = React.useState(true);
  const [value, setValue] = React.useState("");

  function handleSearch(e) {
    onSearch(e.target.value);
  }

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
      <Box flex={1} px={[3, 6, 12]}>
        {toggle && (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyUp={handleSearch}
              placeholder="Search Name"
            />
          </InputGroup>
        )}
        {!!found && (
          <Text mt={1} fontSize="sm" fontWeight="thin">
            {found} names found
          </Text>
        )}
      </Box>
      <Button
        onClick={() => {
          setToggle(!toggle);
          setValue("");
        }}
        bg="transparent"
      >
        <SearchIcon size="sm" />
      </Button>
      <Button onClick={() => console.log("plus")} bg="transparent">
        <AddIcon size="sm" mr={6} />
      </Button>
    </HStack>
  );
}

export default ActionsBanner;
