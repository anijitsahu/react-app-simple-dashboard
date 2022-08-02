// import the render
import { createRoot } from "react-dom/client";

import "./icons/favicon.ico";

// the actual App component
import App from "./App";

createRoot(document.getElementById("app")).render(<App />);
