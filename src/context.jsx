import React from "react";
import { createContext } from "react";

export const languageContext = createContext();


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
const changeLanguage = (lang) => {
  console.log(lang);
};

function LanguageProvider({ children }) {
  return (
    <languageContext.Provider value={changeLanguage}>
      {children}
    </languageContext.Provider>
  );
}

export { LanguageProvider };
