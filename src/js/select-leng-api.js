export default class SelectLangAPI {
  constructor(langArr, { langElement, langTitle, langContent }) {
    this.langArr = langArr;
    this.langElement = langElement;
    this.langTitle = langTitle;
    this.langContent = langContent;
    this.renderMarkup = this.renderMarkup.bind(this);
    this.onSelectLenguage();
    this.toggleMenu();
  };

  renderMarkup() {
    this.langContent.innerHTML = this.langArr.map(item => {
      return `<input
                id="selectRU"
                type="radio"
                class="lang__input"
                name="selectLang"
                value="ru"
                ${item === this.langTitle.dataset.lang ? ' checked' : ''} />
      <lable for="selectRU" class="lang__lable${item === this.langTitle.dataset.lang ? ' lang__lable--hidden' : ''}">${item.toUpperCase()}</lable>`
    }).join('');
  };

  onSelectLenguage() {
    this.langContent.addEventListener('click', (e) => {
      this.langTitle.textContent = e.target.textContent;
      this.langTitle.dataset.lang = e.target.textContent.toLocaleLowerCase();
      this.langElement.dataset.state = '';
      setTimeout(this.renderMarkup, 600);
    });
  }

  toggleMenu() {
    this.langTitle.addEventListener('click', () =>
    this.langElement.dataset.state === '' ? this.langElement.dataset.state = 'active' : this.langElement.dataset.state = '');
  }
}