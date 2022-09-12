import React from "react";
import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = [
  {
    language: "English",
    words: {
      home: "Home",
      events: "Events",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      language: "Language",
    },
  },
  {
    language: "Persian",
    words: {
      home: "خانه",
      events: "رویداد ها",
      aboutUs: "درباره ما",
      contactUs: "تماس با ما",
      language: "زبان",
    },
  },
];

function LanguageProvider({ children }) {
  const [language, setlanguage] = useState("english");

  const changeLanguage = (lang) => {
    setlanguage(lang);
  };
  return (
    <LanguageContext.Provider value={{ changeLanguage, translations,language }}>
      {children}
    </LanguageContext.Provider>
  );
}
const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
