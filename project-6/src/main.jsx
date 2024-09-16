import React  from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import "@fontsource-variable/ubuntu-sans";
import { theme } from './theme/index.js';
import "@fontsource-variable/ubuntu-sans/wght.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
)
