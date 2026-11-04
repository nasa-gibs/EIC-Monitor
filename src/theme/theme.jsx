import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    globalCss: {
      body: {
        bg: '#242424',
        color: 'white',
      },
    },
  },
});

export default createSystem(defaultConfig, config);
