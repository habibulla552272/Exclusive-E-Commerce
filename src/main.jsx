import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient =new QueryClient();
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

    <App />

    </QueryClientProvider>
  </StrictMode>,
)
