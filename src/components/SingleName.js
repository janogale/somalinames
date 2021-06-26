import React from 'react';
import {List, Avatar, Box} from 'native-base';

import Details from './Details';

export default function SingleName({name, description}) {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <Box borderBottomWidth={0.2} borderColor="gray.600" pb={2}>
      <List.Item
        onPress={() => setShowDetails(!showDetails)}
        _text={{
          fontSize: '2xl',
        }}>
        <Avatar
          size="sm"
          mr={2}
          source={{
            uri: 'https://bit.ly/broken-link',
          }}>
          {getFirstLetter(name)}
        </Avatar>
        {capitalize(name)}
      </List.Item>
      {showDetails && <Details description={description} />}
    </Box>
  );
}

// utils

function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }
  if (!str) {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getFirstLetter(str) {
  if (typeof str !== 'string') {
    return '';
  }
  if (!str) {
    return '';
  }

  return str[0].toUpperCase();
}
