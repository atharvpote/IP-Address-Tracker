import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./utils";
import { Header, Map } from "./components";
import { StateContextProvider } from "./stateManagement";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <div>
      <StateContextProvider>
        <GlobalStyles />
        <main>
          <Header />
          <Map />
        </main>
      </StateContextProvider>
    </div>
  </StrictMode>,
);
