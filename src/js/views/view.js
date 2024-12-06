export class View {
  _parentElementSpinner = document.querySelector(".countries");
  _errorMessage = "We could not find a country with that name.";

  renderSpinner = function () {
    let markup = `<div class="loader-container">
    <div class="loader"></div>
    <div class="loader-text">Loading...</div>
    </div>`;
    this._parentElementSpinner.innerHTML = "";
    this._parentElementSpinner.insertAdjacentHTML("beforeend", markup);
  };

  /**
   * Renders an error message with a close button to the DOM
   * @param {string} [message=this._errorMessage] - The error message to be displayed
   * @description
   * Renders an error message to the DOM with a close button.
   * If the message parameter is not provided, it defaults to _errorMessage.
   */
  renderError(message = this._errorMessage) {
    const errorMarkup = `
    <div class="message msg-danger">
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
    </div>
  `;
    this._parentElementSpinner.innerHTML = "";
    this._parentElementSpinner.insertAdjacentHTML("beforeend", errorMarkup);
  }
}

export default new View();
