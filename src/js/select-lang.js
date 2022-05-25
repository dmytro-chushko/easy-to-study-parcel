const langArr = ['ru', 'ua', 'en', 'pl'];

// desktop/tab var
const lang = document.querySelector('.lang');
const titleLang = document.querySelector('.lang__title');
const contentLang = document.querySelector('.lang__content');

// mmobile var
const langMobile = document.querySelector('.lang--mobile');
const titleLangMobile = document.querySelector('.lang__title--mobile');
const contentLangMobile = document.querySelector('.lang__content--mobile');

// functions

function rendersSelectLanguageMarkup(contentBox, title) {
  contentBox.innerHTML = langArr.map(item => {
    return `<input
              id="selectRU"
              type="radio"
              class="lang__input"
              name="selectLang"
              value="ru"
              ${item === title.dataset.lang ? ' checked' : ''} />
    <lable for="selectRU" class="lang__lable${item === title.dataset.lang ? ' lang__lable--hidden' : ''}">${item.toUpperCase()}</lable>`
  }).join('');  
};

function onSelectLanguage(title, contentBox, lang) {
  contentBox.addEventListener('click', (e) => {
    title.textContent = e.target.textContent;
    title.dataset.lang = e.target.textContent.toLocaleLowerCase();
    lang.dataset.state = '';
    setTimeout(rendersSelectLanguageMarkup, 600, contentBox, title);
  });
};

function openOrCloseMenu(title, lang) {
  title.addEventListener('click', () =>
    lang.dataset.state === '' ? lang.dataset.state = 'active' : lang.dataset.state = '');
};

export {
  openOrCloseMenu,
  rendersSelectLanguageMarkup,
  onSelectLanguage,
  titleLang,
  titleLangMobile,
  lang,
  langMobile,
  langArr,
  contentLang,
  contentLangMobile
};