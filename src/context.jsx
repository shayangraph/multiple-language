import React from "react";
import { createContext, useState, useContext } from "react";

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
  const [language, setlanguage] = useState(translations[].language);
  console.log(language);

  const changeLanguage = (lang) => {
    setlanguage(lang);
  };
  return (
    <LanguageContext.Provider value={{ changeLanguage, language, words }}>
      {children}
    </LanguageContext.Provider>
  );
}
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
