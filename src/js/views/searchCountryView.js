class SearCountryView {
  _parentElementSearch = document.querySelector(".cta__country-form");

  getCountyQuery(countryName) {
    console.log(countryName);
    if (!countryName) {
      return this._parentElementSearch.querySelector(".input__country-name")
        .value;
    } else {
      return countryName;
    }
  }

  clearInput() {
    this._parentElementSearch.querySelector(".input__country-name").value = "";
  }

  getRegionQuery() {
    return this._parentElementSearch.querySelector(".region-list").value;
  }

  addHandlerSearchCountry(handler) {
    this._parentElementSearch.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerSearchCountryByRegion(handler) {
    this._parentElementSearch
      .querySelector(".region-list")
      .addEventListener("change", function (e) {
        e.preventDefault();
        handler();
      });
  }
}

export default new SearCountryView();
