import * as model from "./model.js";
import countriesView from "./views/allCountryListView.js";
import regionsView from "./views/regionListView.js";
import view from "./views/view.js";
import searchCountryView from "./views/searchCountryView.js";
import modeSwitcherView from "./views/modeSwitcherView.js";
import paginationView from "./views/paginationView.js";
import * as config from "./config.js";
import autocompleteView from "./views/autocompleteView.js";

/**
 * Fetches the information of all countries from the Rest Countries API
 * and renders them onto the page with pagination.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * This function retrieves all countries from the API and displays them
 * on the page. It also includes pagination functionality to manage the
 * display of countries across different pages. A loading spinner is shown
 * while the data is being fetched. In case of an error, an error message
 * is displayed to the user.
 */
const controlAllCountryInformation = async function () {
  try {
    // Display a loading spinner while fetching data
    view.renderSpinner();

    // Fetch all countries from the API and store them in the application state
    await model.getAllCountries();

    // Delay the rendering to simulate loading time, then render the countries and pagination
    setTimeout(function () {
      // Retrieve a slice of countries for the current page
      const data = model.getCountriesByPage();

      // Render the list of countries on the page
      countriesView.render(data);

      // Render the pagination controls
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Handle any errors that occur during the execution of the function
    view.renderError(err);
  }
};

/**
 * Fetches the list of regions from the Rest Countries API and renders them onto the page.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * This function retrieves all regions from the API and displays them on the page.
 * A loading spinner is shown while the data is being fetched. In case of an error,
 * an error message is displayed to the user.
 */
const controlRegionList = async function () {
  try {
    // Display a loading spinner while fetching data
    view.renderSpinner();

    // Fetch all regions from the API and store them in the application state
    await model.getAllRegions();

    // Delay the rendering to simulate loading time, then render the regions
    setTimeout(function () {
      // Retrieve the list of regions from the application state
      const data = model.state.regions;

      // Render the list of regions on the page
      regionsView.render(data);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Handle any errors that occur during the execution of the function
    view.renderError(err);
  }
};

/**
 * Retrieves a list of countries from the Rest Countries API that match the given country name,
 * and displays them on the page. The list of countries is paginated and a loading spinner is
 * shown while the data is being fetched. In case of an error, an error message is displayed
 * to the user.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * This function retrieves a list of countries from the API that match the given country name,
 * and displays them on the page. The list of countries is paginated across different pages,
 * and a loading spinner is shown while the data is being fetched. In case of an error, an
 * error message is displayed to the user.
 */
const controlLoadSearchResultByCountry = async function () {
  try {
    // Get the country query from the search input
    const country = searchCountryView.getCountyQuery();

    // If no country is provided, exit the function
    if (!country) return;

    // Render a loading spinner while fetching data
    view.renderSpinner();

    // Load the search result for the given country from the API
    await model.loadSearchResultByCountry(country);

    // Delay the rendering to simulate loading time, then render the countries and pagination
    setTimeout(function () {
      // Retrieve a slice of countries for the current page
      const data = model.getCountriesByPage();

      // Render the list of countries on the page
      countriesView.render(data);

      // Render the pagination controls
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Display an error message to the user if an error occurs
    view.renderError(err);
  }
};

/**
 * Retrieves a list of countries from the API that match the given country name,
 * and displays them on the page. The list of countries is paginated across different pages,
 * and a loading spinner is shown while the data is being fetched. In case of an error, an
 * error message is displayed to the user.
 * @async
 * @function
 * @param {string} country - The country name to search for.
 * @returns {Promise<void>}
 * @description
 * This function retrieves a list of countries from the API that match the given country name,
 * and displays them on the page. The list of countries is paginated across different pages,
 * and a loading spinner is shown while the data is being fetched. In case of an error, an
 * error message is displayed to the user.
 */
export const searchResultCountryAutocomplete = async function (country) {
  try {
    // If no country name is provided, exit the function
    if (!country) return;
    // Display a loading spinner while fetching data
    view.renderSpinner();
    // Load the search result for the given country from the API
    await model.loadSearchResultByCountry(country);

    // Delay the rendering to simulate loading time, then render the countries and pagination
    setTimeout(function () {
      // Retrieve a slice of countries for the current page
      const data = model.getCountriesByPage();

      // Render the list of countries on the page
      countriesView.render(data);

      // Render the pagination controls
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

/**
 * Loads and renders a list of countries from the API that are located in the
 * given region. A loading spinner is shown while the data is being fetched.
 * In case of an error, an error message is displayed to the user.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * This function retrieves a list of countries from the API that are located in
 * the given region, and displays them on the page. The list of countries is
 * paginated across different pages, and a loading spinner is shown while the
 * data is being fetched. In case of an error, an error message is displayed to
 * the user.
 *
 * @example
 * controlLoadCountryByRegion();
 */
const controlLoadCountryByRegion = async function () {
  try {
    // Get the region query from the search input
    const region = searchCountryView.getRegionQuery();

    // If no region is provided, exit the function
    if (!region) return;

    // Display a loading spinner while fetching data
    view.renderSpinner();

    // Load the countries by region from the API
    await model.loadCountryByRegion(region);

    // Delay the rendering to simulate loading time, then render the countries and pagination
    setTimeout(function () {
      // Retrieve a slice of countries for the current page
      const data = model.getCountriesByPage();

      // Render the list of countries on the page
      countriesView.render(data);

      // Clear the search input
      searchCountryView.clearInput();

      // Render the pagination controls
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

/**
 * Handles the mode switcher button click event and updates the application state
 * and the UI to reflect the new mode. If an error occurs during the execution
 * of the function, an error message is displayed to the user.
 * @function
 * @description
 * This function retrieves the current mode from the application state, and
 * updates the state with the new mode when the user clicks the mode switcher
 * button. The function also renders the new mode on the page, and in case of
 * an error, displays an error message to the user.
 *
 * @example
 * controlModeSwitcher();
 */
const controlModeSwitcher = function () {
  try {
    // Get the current mode from the state
    const currentMode = modeSwitcherView.getCountyQuery(
      model.state.currentMode
    );

    // If the current mode is not available, exit the function
    if (!currentMode) return;

    // Update the state with the new mode
    model.getCurrentMode(currentMode);

    // Render the new mode on the page
    const data = model.state.currentMode;
    modeSwitcherView.render(data);
  } catch (err) {
    // Display an error message to the user if an error occurs
    view.renderError(err);
  }
};

/**
 * Handles the page load event by loading the current mode from the state and
 * rendering it on the page. If an error occurs during the execution of the
 * function, an error message is displayed to the user.
 * @function
 * @description
 * This function retrieves the current mode from the application state, and
 * renders it on the page. In case of an error, an error message is displayed
 * to the user.
 *
 * @example
 * controlModeSwitcherPageLoad();
 */
const controlModeSwitcherPageLoad = function () {
  try {
    // Load the current mode from localStorage or set to default "Light Mode"
    model.loadCurrentMode("Light Mode");

    // Retrieve the current mode from the application's state
    const data = model.state.currentMode;

    // Render the current mode on the page using modeSwitcherView
    modeSwitcherView.render(data);
  } catch (err) {
    // Display an error message if an error occurs
    view.renderError(err);
  }
};

/**
 * Handles the pagination controls click event and updates the application
 * state and the UI to reflect the new page. If an error occurs during the
 * execution of the function, an error message is displayed to the user.
 * @function
 * @description
 * This function retrieves a slice of countries for the given page number
 * from the application state, and renders them on the page. The function
 * also renders the pagination controls on the page. In case of an error,
 * an error message is displayed to the user.
 *
 * @param {number} goToPage - The page number to go to.
 * @example
 * controlPagination(1);
 */
const controlPagination = function (goToPage) {
  try {
    // Retrieve a slice of countries for the specified page
    const data = model.getCountriesByPage(goToPage);

    // Render the list of countries on the page
    countriesView.render(data);

    // Render the pagination controls on the page
    paginationView.render(model.state.countyList);
  } catch (err) {
    // Display an error message to the user if an error occurs
    view.renderError(err);
  }
};

/**
 * Handles the country name autocomplete UI by fetching the list of countries
 * names from the model and rendering it on the page. If an error occurs during
 * the execution of the function, an error message is displayed to the user.
 * @function
 * @description
 * This function retrieves the list of countries names from the model and
 * renders it on the page. In case of an error, an error message is displayed
 * to the user.
 *
 * @example
 * controlAutoCompleteCountryName();
 */
const controlAutoCompleteCountryName = async function () {
  try {
    // Fetch the list of country names from the model
    await model.fetchCountryNames();

    // Retrieve the fetched country names from the application state
    const data = model.state.countriesName;

    // Render the autocomplete view with the retrieved data
    autocompleteView.render(data);
  } catch (err) {
    // Log any errors to the console for debugging
    console.log(err);

    // Display an error message to the user
    view.renderError(err);
  } finally {
    // Clean up resources or perform additional tasks if necessary
  }
};

/**
 * Initializes event handlers for various UI components in the application.
 * This function sets up event handlers for UI components such as the mode
 * switcher, region list, country list, search input, and pagination controls.
 * It also triggers the autocomplete functionality for country names. This
 * setup ensures that the application responds to user interactions and
 * updates the UI accordingly.
 *
 * @function
 * @description
 * Sets up event handlers for the following UI components:
 *  - Mode switcher
 *  - Region list
 *  - Country list
 *  - Search input
 *  - Pagination controls
 * Also triggers the autocomplete functionality for country names.
 */
const init = function () {
  // Add event handler for mode switcher
  modeSwitcherView.addHandlerLoad(controlModeSwitcherPageLoad);
  modeSwitcherView.addHandlerClick(controlModeSwitcher);

  // Add event handler for region list
  regionsView.addHandlerRender(controlRegionList);

  // Add event handler for country list
  countriesView.addHandlerRender(controlAllCountryInformation);

  // Add event handlers for search input
  searchCountryView.addHandlerSearchCountry(controlLoadSearchResultByCountry);
  searchCountryView.addHandlerSearchCountryByRegion(controlLoadCountryByRegion);

  // Add event handler for pagination controls
  paginationView.addHandlerClick(controlPagination);

  // Trigger autocomplete for country names
  controlAutoCompleteCountryName();
};

init();
