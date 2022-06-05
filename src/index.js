import onClickMenuButton from "./js/sidebar";
import * as selectLang from "./js/select-lang";
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
const langMobile = document.querySelector('.lang--mobile');
const titleLangMobile = document.querySelector('.lang__title--mobile');
const contentLangMobile = document.querySelector('.lang__content--mobile');

new SelectLangAPI(langArr, descktopVar);
