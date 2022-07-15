import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./utils";
import { Header } from "./components/header";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <GlobalStyles />
    <main>
      <Header />
    </main>
  </div>
);
