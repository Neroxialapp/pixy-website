import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
// Buradaki standart import kalsın ama Vite config ile bunu JS içine gömeceğiz
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
