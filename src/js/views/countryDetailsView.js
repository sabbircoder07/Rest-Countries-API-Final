export class CountryDetailsView {
  _parentElement = document.querySelector(".country-details");
  _data;
  _errorMessage = "We could not find a country with that name.";
  render(data) {
    this._data = data;
    let markup = "";
    markup = this._generateMarkup();
    this._clearMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  getCountyName() {
    const queryString = decodeURIComponent(
      window.location.search.split("=")[1]
    );
    return queryString;
  }

  addHandlerLoadCountry(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  addHandlerRender(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  renderSpinner = function () {
    let markup = `<div class="loader-container">
    <div class="loader"></div>
    <div class="loader-text">Loading...</div>
    </div>`;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `<div class="message msg-danger">
    <div class="message-icon">
      <i class="ion-close-round">
      <img src="images/error_icon.svg" alt="error" />
      </i>
    </div>
    <div class="message-content">
      <p>${message}</p>
    </div>
    <a href="_" class="message-close">
      <img class="close-icon" src="images/cross-icon.svg" alt="close" />
    </a>  
  </div>`;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clearMarkup() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    let html = "";
    if (this._data.length === 0) return;

    html += `<article class="country-details__info">
    <img class="country-details__img" alt="${this._data.name}" src="${
      this._data.flag
    }" />
    <div class="country-details__data">
      <h1 class="heading-primary-large country-details__name">${
        this._data.name
      }</h1>
      <div class="country-details__basic-details-info">
      <p class="country-details__row"><span>Native Name: </span>
      ${!this._data.nativeName ? "Not Found" : this._data.nativeName}
      </p>
      <p class="country-details__row"><span>Top Level Domain:</span>${
        !this._data.topLevelDomain ? "Not Found" : this._data.topLevelDomain
      } </p>
      <p class="country-details__row"><span>Population: </span>${this._data.population.toLocaleString()}</p>
       <p class="country-details__row"><span>Currencies: </span>
      ${
        typeof this._data.currencies === "object"
          ? this._data.currencies[Object.keys(this._data.currencies)[0]].name
          : ""
      }
      </p>

      <p class="country-details__row">
      <span>Region:</span>${this._data.region}
      </p>
    
      <p class="country-details__row"><span>Languages: </span>
      ${Object.entries(this._data.languages).map(([key, value]) => value)}
      </p>
      <p class="country-details__row"><span>Sub Region: </span>${
        this._data.subregion
      }
        </p>
      <p class="country-details__row"><span>Capital: </span>${
        this._data.capital
      }</p>
      </div>
      <div class="country-details__border-info">
        <p class="country-details__row"><span>Border Countries: </span></p>
        <div class="country-details__border-container">
        ${
          this._data.borders
            ? this._data.borders
                .map(
                  (border) =>
                    `<a href="countryDetails.html?name=${border}" class="country-details__border" >${border}</a>`
                )
                .join("")
            : "Not Found"
        }
        </div>
      </div>
    </div>  
  </article>`;

    return html;
  }
}

export default new CountryDetailsView();
