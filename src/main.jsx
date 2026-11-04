import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import system from './theme/theme.jsx';
import store from './redux/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
