import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import Scenarios from './scenarios';
import Layers from './layers';

const ContentContainer = () => {
    const selectedContent = useSelector((state) => state.main.selectedContent);

    const renderContent = () => {
        switch (selectedContent) {
            case 'scenarios':
                return <Scenarios />;
            case 'layers':
                return <Layers />;
            // case 'worldview':
            //     return <Box>Worldview</Box>;
            default:
                return <Layers />;
        }
    }

    return (
        <Flex width="80%" border="1px solid #FFFFFF" minHeight="75vh" mt="4" m="auto">
            {renderContent()}
        </Flex>
    )
}

export default ContentContainer;