import View from "./view.js";

export class CountriesView {
  _parentElement = document.querySelector(".countries");
  _numberOfCountries = document.querySelector(".header__numberOf-countries");
  _data;
  render(data) {
    this._data = data;
    let markup = "";
    markup = this._generateMarkup();
    this._clearMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clearMarkup() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner = function () {
    let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  };

  addHandlerRender(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  _generateMarkup() {
    let html = "";
    if (this._data.length === 0) return;
    else {
      this._numberOfCountries.innerHTML = `${this._data.length} Countries Found`;
      this._data.forEach((data, index) => {
        html += `
        <a class="countries__link" href="countryDetails.html?name=${
          data.name.common
        }">
        <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__number"><span>${index + 1}</span></div>
    <div class="country__data">
      <div class="country__heading-box">
      <h2 class="heading-secondary country__heading">${data.name.common}</h2>
      </div>
      <div class="country__info-box">
      <p class="country__row"><span>Population: </span>${data.population.toLocaleString()}</p>
      <p class="country__row"><span>Region: </span>${data.region}</p>
      <p class="country__row"><span>Capital: </span>${data.capital}</p>
      </div>
    </div>
  </article>
  </a>`;
      });
    }
    return html;
  }
}

export default new CountriesView();
