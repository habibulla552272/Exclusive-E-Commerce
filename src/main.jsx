import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextApi } from "./Component/Contex/ContextApi.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firebaseConfig from "./firebase.config.js";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from "react-redux";
import store from "./store/Store.js";

// import firebaseConfig from "./firebase.config.js";

const queryClient =new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>

    <ContextApi>
      <App />
    </ContextApi>

      </Provider>

    </QueryClientProvider>
  </StrictMode>
);
