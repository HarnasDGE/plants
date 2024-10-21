"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

export const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [languageConfig, setLanguageConfig] = useState(null);

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (window.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setCookie(null, COOKIE_NAME, `/auto/${selectedLanguage}`);
    window.location.reload();
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleChangeLanguage}
      className="border-none bg-transparent text-textLight cursor-pointer pr-2 hover:text-textMedium"
    >
      {languageConfig.languages.map((lang) => (
        <option
          key={lang.name}
          value={lang.name}
          className="appearance-none border border-solid border-inputBorder bg-backgroundSecond text-textDark cursor-pointer"
        >
          {lang.title}
        </option>
      ))}
    </select>
  );
};
