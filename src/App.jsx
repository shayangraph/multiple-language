import React from "react";
import { LanguageProvider } from "./context";
import Navbar from "./Navbar";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}