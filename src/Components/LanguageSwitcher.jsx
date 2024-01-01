import React from "react";
import { useTranslation } from "react-i18next";


function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select className="select-lang" onChange={changeLanguage} defaultValue={i18n.language}>
      <option value="en">
        English</option>
      <option value="tr">Türkçe</option>
      <option value="ar">Arabic</option>
    </select>
  );
}

export default LanguageSwitcher;