import React from "react";
import Navbar from "./Navbar";
<<<<<<< HEAD
import {LanguageProvider} from "./context";
=======
import { LanguageProvider } from "./context";
>>>>>>> 4509b234c4853fd3359ee8582e476de1d1370b51

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}
