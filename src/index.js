import onClickMenuButton from "./js/sidebar";
import SelectLangAPI from "./js/select-leng-api";

// ------------------ SIDEBAR ------------------

onClickMenuButton();

// ------------------ SELECT LANG ------------------

const langArr = ['ru', 'ua', 'en', 'pl'];

// desktop/tab var
const descktopVar = {
  langElement: document.querySelector('.lang'),
  langTitle: document.querySelector('.lang__title'),
  langContent: document.querySelector('.lang__content')
}

// mmobile var
const mobileVar = {
  langElement: document.querySelector('.lang--mobile'),
  langTitle: document.querySelector('.lang__title--mobile'),
  langContent: document.querySelector('.lang__content--mobile')
}


new SelectLangAPI(langArr, descktopVar);
new SelectLangAPI(langArr, mobileVar);