import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <GlobalStyles />
    <h1>Hello World</h1>
  </div>
);
