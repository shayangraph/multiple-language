import React from "react";
import { createContext,useState } from "react";

const languageContext = createContext();

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
  console.log(translations.language.words);
  const [language, setlanguage] = useState("English")
  
  const changeLanguage=()=>{

  }
  return <languageContext.Provider value={{changeLanguage,language}}>{children}</languageContext.Provider>;
}
const useLanguage=()=>{

  return{ changeLanguage,words}
}
export { LanguageProvider,useLanguage };
