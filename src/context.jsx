import React from "react";
import { createContext,useState } from "react";

const languageContext = createContext();

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
<<<<<<< HEAD
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
=======
  return (
    <languageContext.Provider value={changeLanguage}>
      {children}
    </languageContext.Provider>
  );
}

export { LanguageProvider };
>>>>>>> 4509b234c4853fd3359ee8582e476de1d1370b51
