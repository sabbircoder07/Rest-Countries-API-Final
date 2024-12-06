import { API_URL, COUNTRY_PER_PAGE } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  currentMode: "",
  regions: [],
  countriesName: [],
  countyList: {
    query: "",
    results: [],
    resultsPerPage: COUNTRY_PER_PAGE,
    page: 1,
  },
  countryDetails: {
    query: "",
    name: "",
    nativeName: "",
    population: "",
    populationOnWord: "",
    region: "",
    subregion: "",
    capital: "",
    topLevelDomain: "",
    currencies: [],
    languages: [],
    borders: [],
    flag: "",
  },
};

export const getCurrentMode = function (currentMode) {
  try {
    localStorage.setItem("currentMode", currentMode);
    const currentStMode = localStorage.getItem("currentMode");
    if (currentStMode) state.currentMode = currentStMode;
  } catch (err) {
    throw err;
  } finally {
  }
};

export const loadCurrentMode = function (currentMode) {
  try {
    const currentModeByStorage = localStorage.getItem("currentMode");
    if (currentModeByStorage) {
      state.currentMode = currentModeByStorage;
    } else {
      state.currentMode = currentMode;
    }
  } catch (err) {
    throw err;
  } finally {
  }
};

/**
 * Fetches and stores a sorted list of all countries from the Rest Countries API.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * Retrieves all countries from the Rest Countries API, sorts them by name,
 * and updates the application state.
 */
export const getAllCountries = async function () {
  try {
    const countriesData = await getJSON(`${API_URL}all`);
    state.countyList.results = countriesData.sort((countryA, countryB) =>
      countryA.name.common.localeCompare(countryB.name.common)
    );
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves all countries from the Rest Countries API, extracts their common names,
 * removes duplicates, and updates the application state with the list of unique country names.
 * The list of country names is used to populate the autocomplete input field.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * Makes a GET request to the Rest Countries API and retrieves a list of
 * all countries. The list is then processed to extract the common name of
 * each country, and the results are stored in the application state. The
 * list of country names is used to populate the autocomplete input field.
 */
export const fetchCountryNames = async function () {
  try {
    // Make a GET request to the Rest Countries API to retrieve a list of all countries
    const allCountries = await getJSON(`${API_URL}all`);

    // Extract the common name of each country from the list of countries
    const countryNames = allCountries.map((country) => country.name.common);

    // Remove duplicates from the list of country names
    state.countriesName = [...new Set(countryNames)];
  } catch (error) {
    // Handle any errors that occur during the execution of the function
    throw error;
  }
};
/******  93714125-661a-43ef-908d-0bf8d66b61e7  *******/

/**
 * Retrieves a list of all regions from the Rest Countries API and updates the application state with it.
 * The list of regions is used to populate the select input field.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * Makes a GET request to the Rest Countries API and retrieves a list of all countries.
 * The list of countries is processed to extract the regions from each country, and the results are stored
 * in the application state. The list of regions is used to populate the select input field.
 *
 * @example
 * import { getAllRegions } from "./model.js";
 * getAllRegions();
 */
export const getAllRegions = async function () {
  try {
    // Make a GET request to the Rest Countries API to retrieve a list of all countries
    const countries = await getJSON(`${API_URL}all`);

    // Extract the region from each country in the list of countries
    const regions = countries.map((country) => country.region);

    // Remove duplicates from the list of regions and store the result in the application state
    state.regions = [...new Set(regions)];
  } catch (err) {
    // Handle any errors that occur during the execution of the function
    throw err;
  }
};

/**
 * Retrieves a list of countries from the Rest Countries API that match the given country name, and updates the application state with the result.
 * @async
 * @function
 * @param {string} countryName - The country name to search for. The country name is trimmed to remove any leading or trailing whitespace.
 * @returns {Promise<void>}
 * @description
 * Makes a GET request to the Rest Countries API and retrieves a list of countries that match the given country name.
 * The list of countries is stored in the application state. The `fullText=true` parameter is used to search for countries using the full-text search.
 * The list of countries is stored in the application state.
 *
 * @example
 * import { loadSearchResultByCountry } from "./model.js";
 * loadSearchResultByCountry("Nigeria");
 */
export const loadSearchResultByCountry = async function (countryName) {
  try {
    // Trim the country name to remove any leading or trailing whitespace
    state.countyList.query = countryName.trim();

    // Make a GET request to the Rest Countries API to retrieve a list of countries that match the given country name
    const data = await getJSON(
      `${API_URL}name/${countryName.trim()}?fullText=true`
    );

    // Store the list of countries in the application state
    state.countyList.results = data;
  } catch (error) {
    // Handle any errors that occur during the execution of the function
    throw error;
  } finally {
    // Clean up any resources used by the function
  }
};

/**
 * Retrieves a list of countries from the Rest Countries API that are located in the given region,
 * and updates the application state with the result.
 * @async
 * @function
 * @param {string} regionName - The region to search for. The region name is trimmed to remove any leading or trailing whitespace.
 * @returns {Promise<void>}
 * @description
 * Makes a GET request to the Rest Countries API and retrieves a list of countries that are located in the given region.
 * The list of countries is stored in the application state.
 *
 * @example
 * import { loadCountryByRegion } from "./model.js";
 * loadCountryByRegion("Africa");
 */
export const loadCountryByRegion = async function (regionName) {
  try {
    // Trim the region name to remove any leading or trailing whitespace
    const trimmedRegionName = regionName.trim();

    // Update the query in the application state
    state.countyList.query = trimmedRegionName;

    // Make a GET request to the Rest Countries API to retrieve countries in the specified region
    const data = await getJSON(`${API_URL}region/${trimmedRegionName}`);

    // Store the retrieved list of countries in the application state
    state.countyList.results = data;
  } catch (error) {
    // Handle any errors that occur during the execution of the function
    throw error;
  } finally {
    // Optionally, you can include any cleanup code here
  }
};

/**
 * Retrieves the details of a given country from the Rest Countries API and updates the application state with the result.
 * @async
 * @function
 * @param {string} countryName - The name of the country to retrieve details about.
 * @returns {Promise<void>}
 * @description
 * Makes a GET request to the Rest Countries API and retrieves the details of the given country.
 * The retrieved data is then stored in the application state.
 * The `fullText=true` parameter is used to search for countries using the full-text search.
 *
 * @example
 * import { loadCountryDetails } from "./model.js";
 * loadCountryDetails("Nigeria");
 */
export const loadCountryDetails = async function (countryName) {
  try {
    // Fetch country details from the API using the full-text search
    const countryData = await getJSON(
      `${API_URL}name/${countryName.trim()}?fullText=true`
    );

    // Update the application state with the retrieved country details
    state.countryDetails.name = countryData[0].name.common;
    state.countryDetails.nativeName = countryData[0].nativeName;
    state.countryDetails.population = countryData[0].population;
    state.countryDetails.region = countryData[0].region;
    state.countryDetails.subregion = countryData[0].subregion;
    state.countryDetails.capital = countryData[0].capital;
    state.countryDetails.topLevelDomain = countryData[0].topLevelDomain;
    state.countryDetails.currencies = countryData[0].currencies;
    state.countryDetails.languages = countryData[0].languages;
    state.countryDetails.flag = countryData[0].flags.png;

    // If the country has borders, fetch all countries and filter by borders
    if (countryData[0].borders) {
      const allCountriesData = await getJSON(`${API_URL}all`);
      state.countryDetails.borders = allCountriesData
        .filter((country) => countryData[0].borders.includes(country.cca3))
        .map((country) => country.name.common);
    }
  } catch (err) {
    // Handle any errors that occur during the execution of the function
    throw err;
  }
};

/**
 * Retrieves a slice of the list of countries in the application state, where the
 * slice is determined by the given page number.
 *
 * @param {number} [page=state.countyList.page] - The page number to retrieve.
 * @returns {Country[]} - A slice of the list of countries.
 * @description
 * This function retrieves a subset of the list of countries in the application
 * state, where the subset is determined by the given page number. The subset is
 * retrieved by slicing the list of countries starting from the first element
 * up to the element at the given page number multiplied by the number of
 * countries to display per page.
 *
 * @example
 * import { getCountriesByPage } from "./model.js";
 * const countries = getCountriesByPage(1);
 * console.log(countries);
 */
export const getCountriesByPage = function (page = state.countyList.page) {
  try {
    // Set the current page number in the application state
    state.countyList.page = page;

    // Calculate the start and end indices of the slice of countries to retrieve
    const start = 0;
    const end = page * state.countyList.resultsPerPage;

    // Retrieve the slice of countries from the application state
    return state.countyList.results.slice(start, end);
  } catch (err) {
    // Handle any errors that occur during the execution of the function
    throw err;
  }
};
