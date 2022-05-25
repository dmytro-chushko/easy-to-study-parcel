import onClickMenuButton from "./js/sidebar";
import * as selectLang from "./js/select-lang";

// ------------------ SIDEBAR ------------------

onClickMenuButton();

// ------------------ SELECT LANG ------------------

const {
  openOrCloseMenu,
  rendersSelectLanguageMarkup,
  onSelectLanguage, titleLang,
  titleLangMobile,
  lang,
  langMobile,
  langArr,
  contentLang,
  contentLangMobile
} = selectLang;

// Desktop/Tab select language

openOrCloseMenu(titleLang, lang);
rendersSelectLanguageMarkup(langArr, contentLang, titleLang);
onSelectLanguage(titleLang, contentLang, lang);

// Mobile select language

openOrCloseMenu(titleLangMobile, langMobile);
rendersSelectLanguageMarkup(langArr, contentLangMobile, titleLangMobile);
onSelectLanguage(titleLangMobile, contentLangMobile, langMobile);