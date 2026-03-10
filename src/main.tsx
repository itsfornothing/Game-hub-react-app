import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider"; 
import "./index.css";
import App from "./App";
// Remove import theme from "./theme";  ← not needed here anymore

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>           {/* ← remove theme={theme} */}
      <App />
    </Provider>
  </StrictMode>
);