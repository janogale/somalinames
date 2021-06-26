import React from 'react';
// firestore
import firestore from '@react-native-firebase/firestore';
import {ScrollView} from 'react-native';
import {List, Flex, useColorModeValue} from 'native-base';

import SingleName from './SingleName';

export default function ListNames() {
  const [data, setData] = React.useState(null);
  const bg = useColorModeValue('gray.200', 'gray.800');
  React.useEffect(() => {
    (async () => {
      // Get user document with an ID of ABC
      const querySnapshot = await firestore()
        .collection('somalinames')
        .limit(300)
        .get();
      const docs = querySnapshot.docs.map(doc => ({
        _id: doc.id,
        ...doc.data(),
      }));
      setData(docs);
    })();
  }, []);

  return (
    <ScrollView
      width="100%"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Flex shadow={7} bg={bg} rounded={32} p={2} width="100%" flex={1}>
        <List mt={2} my={2} px={2} space={2} border="none">
          {data &&
            data.map(n => (
              <React.Fragment key={n._id}>
                <SingleName name={n.name} description={n.description} />
              </React.Fragment>
            ))}
        </List>
      </Flex>
    </ScrollView>
  );
}
