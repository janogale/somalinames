import React from 'react';
import {Text, Box} from 'native-base';

export default function Details({description, id}) {
  return (
    <Box width="100%" pl={10}>
      <Text fontSize="sm">{description}</Text>
    </Box>
  );
}
