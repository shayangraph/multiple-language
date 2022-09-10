import React from "react";
import Navbar from "./Navbar";
import {LanguageProvider} from "./context";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}
