import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex
      bgColor={"#242424"}
      color="white"
      justifyContent="space-between"
      alignItems="center"
      p={4}
      borderBottom="1px solid #FFFFFF"
    >
      <Flex alignItems="center">
        <Image
          src="/logo.png" 
          alt="Logo"
          mr={2} 
          height="50px"
        />
        <Text fontSize="3xl">
          EIC Monitor
        </Text>
      </Flex>
    </Flex>
  );
};

export default NavBar;

