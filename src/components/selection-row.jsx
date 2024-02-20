import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContent as selectContentAction } from '../redux/slice';

const SelectionRow = () => {
  const dispatch = useDispatch();
  const selectedContent = useSelector((state) => state.main.selectedContent);

  const handleSelectContent = (content) => {
    dispatch(selectContentAction(content));
  };

  return (
    <Flex justifyContent="center" alignItems="center" width="full" mt="4" mb="4">
      <Flex justifyContent="space-around" width="lg" maxWidth="100%">
        <Button
          colorScheme="blue"
          variant={selectedContent === 'scenarios' ? 'solid' : 'outline'}
          onClick={() => handleSelectContent('scenarios')}
        >
          Scenarios
        </Button>
        <Button
          colorScheme="blue"
          variant={selectedContent === 'layers' ? 'solid' : 'outline'}
          onClick={() => handleSelectContent('layers')}
        >
          Layers
        </Button>
        <Button
          colorScheme="blue"
          variant={selectedContent === 'worldview' ? 'solid' : 'outline'}
          onClick={() => handleSelectContent('worldview')}
        >
          Worldview
        </Button>
      </Flex>
    </Flex>
  );
};

export default SelectionRow;
