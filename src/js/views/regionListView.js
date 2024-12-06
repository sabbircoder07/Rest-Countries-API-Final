export class RegionsView {
  _parentElement = document.querySelector(".region-list");
  _parentElementSpinner = document.querySelector(".countries");
  _data;
  /*************  ✨ Codeium Command ⭐  *************/
  /**
 * Renders the list of regions by generating markup and inserting it
 * into the parent element.
 * @param {Array} data - An array of regions to be displayed.
 * @description
 * This function updates the internal data state, generates the necessary HTML
 * markup for the regions, clears any existing markup, and appends the newly
  /******  1cd4bfc5-2312-4013-bc64-e1c0bc80469c  *******/
  render(data) {
    this._data = data;
    let markup = "";
    markup = this._generateMarkup();
    this._clearMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clearMarkup() {
    this._parentElement.innerHTML =
      "<option selected disabled>Filter by Region</option>";
  }

  renderSpinner = function () {
    let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
    this._parentElementSpinner.innerHTML = "";
    this._parentElementSpinner.insertAdjacentHTML("beforeend", markup);
  };

  addHandlerRender(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  _generateMarkup() {
    let html = "";
    if (this._data.length === 0) return;
    this._data.forEach((region) => {
      html += `
      <option class="region-list" value="${region}">${region}</option>    
      `;
    });
    return html;
  }
}

export default new RegionsView();
