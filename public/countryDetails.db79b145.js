function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var t=globalThis,r={},a={},o=t.parcelRequire94c2;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequire94c2=o);var n=o.register;n("1is5Y",function(t,r){e(t.exports,"state",()=>s),e(t.exports,"getCurrentMode",()=>i),e(t.exports,"loadCurrentMode",()=>c),e(t.exports,"getAllCountries",()=>l),e(t.exports,"fetchCountryNames",()=>d),e(t.exports,"getAllRegions",()=>u),e(t.exports,"loadSearchResultByCountry",()=>h),e(t.exports,"loadCountryByRegion",()=>p),e(t.exports,"loadCountryDetails",()=>y),e(t.exports,"getCountriesByPage",()=>_);var a=o("fZ5A9"),n=o("i9R9q");let s={currentMode:"",regions:[],countriesName:[],countyList:{query:"",results:[],resultsPerPage:a.COUNTRY_PER_PAGE,page:1},countryDetails:{query:"",name:"",nativeName:"",population:"",populationOnWord:"",region:"",subregion:"",capital:"",topLevelDomain:"",currencies:[],languages:[],borders:[],flag:""}},i=function(e){try{localStorage.setItem("currentMode",e);let t=localStorage.getItem("currentMode");t&&(s.currentMode=t)}catch(e){throw e}finally{}},c=function(e){try{let t=localStorage.getItem("currentMode");t?s.currentMode=t:s.currentMode=e}catch(e){throw e}finally{}},l=async function(){try{let e=await (0,n.getJSON)(`${a.API_URL}all`);s.countyList.results=e.sort((e,t)=>e.name.common.localeCompare(t.name.common))}catch(e){throw e}},d=async function(){try{let e=(await (0,n.getJSON)(`${a.API_URL}all`)).map(e=>e.name.common);s.countriesName=[...new Set(e)]}catch(e){throw e}},u=async function(){try{let e=(await (0,n.getJSON)(`${a.API_URL}all`)).map(e=>e.region);s.regions=[...new Set(e)]}catch(e){throw e}},h=async function(e){try{s.countyList.query=e.trim();let t=await (0,n.getJSON)(`${a.API_URL}name/${e.trim()}?fullText=true`);s.countyList.results=t}catch(e){throw e}finally{}},p=async function(e){try{let t=e.trim();s.countyList.query=t;let r=await (0,n.getJSON)(`${a.API_URL}region/${t}`);s.countyList.results=r}catch(e){throw e}finally{}},y=async function(e){try{let t=await (0,n.getJSON)(`${a.API_URL}name/${e.trim()}?fullText=true`);if(s.countryDetails.name=t[0].name.common,s.countryDetails.nativeName=t[0].nativeName,s.countryDetails.population=t[0].population,s.countryDetails.region=t[0].region,s.countryDetails.subregion=t[0].subregion,s.countryDetails.capital=t[0].capital,s.countryDetails.topLevelDomain=t[0].topLevelDomain,s.countryDetails.currencies=t[0].currencies,s.countryDetails.languages=t[0].languages,s.countryDetails.flag=t[0].flags.png,t[0].borders){let e=await (0,n.getJSON)(`${a.API_URL}all`);s.countryDetails.borders=e.filter(e=>t[0].borders.includes(e.cca3)).map(e=>e.name.common)}}catch(e){throw e}},_=function(e=s.countyList.page){try{s.countyList.page=e;let t=e*s.countyList.resultsPerPage;return s.countyList.results.slice(0,t)}catch(e){throw e}}}),n("fZ5A9",function(t,r){e(t.exports,"API_URL",()=>a),e(t.exports,"TIMEOUT_SEC",()=>o),e(t.exports,"COUNTRY_PER_PAGE",()=>n),e(t.exports,"SHOW_COUNTRIES_SEC",()=>s);let a="https://restcountries.com/v3.1/",o=20,n=20,s=1}),n("i9R9q",function(t,r){e(t.exports,"getJSON",()=>n);var a=o("fZ5A9");let n=async function(e){try{var t;console.log(e);let r=await Promise.race([fetch(e),(t=a.TIMEOUT_SEC,new Promise(function(e,r){setTimeout(()=>{r(Error(`Request took too long! Timeout after ${t} second`))},1e3*t)}))]);if(!r.ok)throw Error(`${r.statusText} ${r.status}`);return await r.json()}catch(e){throw console.log(e),e}}}),n("2hk5J",function(t,r){e(t.exports,"default",()=>o);class a{_modeSwitcher=document.querySelector(".header__mode-switcher");_switcherText=document.querySelector(".header__mode-switcher__text-box");_modeSwitcherIcon=document.querySelector(".header__mode-switcher__icon");_data;render(e){this._data=e,this._renderModeSwitcher()}getCountyQuery(e){return e?("Dark Mode"==e?this._data="Light Mode":"Light Mode"==e&&(this._data="Dark Mode"),this._data):this._switcherText.textContent}addHandlerLoad(e){window.addEventListener("load",e)}addHandlerClick(e){this._modeSwitcher.addEventListener("click",e)}_renderModeSwitcher(){let e=document.querySelector(":root");"Dark Mode"==this._data?(e.style.setProperty("--color-Very-Light-Gray-Light-Mode-Background","hsl(207, 26%, 17%)"),e.style.setProperty("--color-White-Dark-Mode-Text-and-Light-Mode-Elements","hsl(209, 23%, 22%)"),e.style.setProperty("--color-Very-Dark-Blue-Light-Mode-Text","hsl(0, 0%, 100%)"),e.style.setProperty("--color-Dark-Gray-Light-Mode-Input","hsl(0, 0%, 100%)"),this._modeSwitcherIcon.src="https://shivanarrthine.com/public/images/icons/sun.svg"):(e.style.setProperty("--color-Very-Light-Gray-Light-Mode-Background","hsl(0, 0%, 98%)"),e.style.setProperty("--color-White-Dark-Mode-Text-and-Light-Mode-Elements","hsl(0, 0%, 100%)"),e.style.setProperty("--color-Very-Dark-Blue-Light-Mode-Text","hsl(200, 15%, 8%)"),e.style.setProperty("--color-Dark-Gray-Light-Mode-Input","hsl(0, 0%, 52%)"),this._modeSwitcherIcon.src="https://shivanarrthine.com/public/images/icons/moon.svg"),this._switcherText.textContent="Light Mode"===this._data?"Dark Mode":"Light Mode"}}var o=new a});var s=o("1is5Y");class i{_parentElement=document.querySelector(".country-details");_data;_errorMessage="We could not find a country with that name.";render(e){this._data=e;let t="";t=this._generateMarkup(),this._clearMarkup(),this._parentElement.insertAdjacentHTML("beforeend",t)}getCountyName(){return decodeURIComponent(window.location.search.split("=")[1])}addHandlerLoadCountry(e){["load"].forEach(t=>window.addEventListener(t,e))}addHandlerRender(e){["load"].forEach(t=>window.addEventListener(t,e))}renderSpinner=function(){let e=`<div class="loader-container">
    <div class="loader"></div>
    <div class="loader-text">Loading...</div>
    </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("beforeend",e)};renderError(e=this._errorMessage){let t=`<div class="message msg-danger">
    <div class="message-icon">
      <i class="ion-close-round">
      <img src="images/error_icon.svg" alt="error" />
      </i>
    </div>
    <div class="message-content">
      <p>${e}</p>
    </div>
    <a href="_" class="message-close">
      <img class="close-icon" src="images/cross-icon.svg" alt="close" />
    </a>  
  </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("beforeend",t)}_clearMarkup(){this._parentElement.innerHTML=""}_generateMarkup(){if(0!==this._data.length)return`<article class="country-details__info">
    <img class="country-details__img" alt="${this._data.name}" src="${this._data.flag}" />
    <div class="country-details__data">
      <h1 class="heading-primary-large country-details__name">${this._data.name}</h1>
      <div class="country-details__basic-details-info">
      <p class="country-details__row"><span>Native Name: </span>
      ${this._data.nativeName?this._data.nativeName:"Not Found"}
      </p>
      <p class="country-details__row"><span>Top Level Domain:</span>${this._data.topLevelDomain?this._data.topLevelDomain:"Not Found"} </p>
      <p class="country-details__row"><span>Population: </span>${this._data.population.toLocaleString()}</p>
       <p class="country-details__row"><span>Currencies: </span>
      ${"object"==typeof this._data.currencies?this._data.currencies[Object.keys(this._data.currencies)[0]].name:""}
      </p>

      <p class="country-details__row">
      <span>Region:</span>${this._data.region}
      </p>
    
      <p class="country-details__row"><span>Languages: </span>
      ${Object.entries(this._data.languages).map(([e,t])=>t)}
      </p>
      <p class="country-details__row"><span>Sub Region: </span>${this._data.subregion}
        </p>
      <p class="country-details__row"><span>Capital: </span>${this._data.capital}</p>
      </div>
      <div class="country-details__border-info">
        <p class="country-details__row"><span>Border Countries: </span></p>
        <div class="country-details__border-container">
        ${this._data.borders?this._data.borders.map(e=>`<a href="countryDetails.html?name=${e}" class="country-details__border" >${e}</a>`).join(""):"Not Found"}
        </div>
      </div>
    </div>  
  </article>`}}var c=new i,l=o("2hk5J"),d=o("fZ5A9");const u=async function(){try{let e=c.getCountyName();if(!e)return;c.renderSpinner(),await s.loadCountryDetails(e),setTimeout(function(){let e=s.state.countryDetails;c.render(e)},1e3*d.SHOW_COUNTRIES_SEC)}catch(e){c.renderError(e)}};(0,l.default).addHandlerLoad(function(){try{s.loadCurrentMode("Light Mode");let e=s.state.currentMode;(0,l.default).render(e)}catch(e){c.renderError(e)}}),(0,l.default).addHandlerClick(function(){try{let e=(0,l.default).getCountyQuery(s.state.currentMode);if(!e)return;s.getCurrentMode(e);let t=s.state.currentMode;(0,l.default).render(t)}catch(e){c.renderError(e)}}),c.addHandlerRender(u);
//# sourceMappingURL=countryDetails.db79b145.js.map
