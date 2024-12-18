// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ik2hV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aenu9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchResultCountryAutocomplete", ()=>searchResultCountryAutocomplete);
var _modelJs = require("./model.js");
var _allCountryListViewJs = require("./views/allCountryListView.js");
var _allCountryListViewJsDefault = parcelHelpers.interopDefault(_allCountryListViewJs);
var _regionListViewJs = require("./views/regionListView.js");
var _regionListViewJsDefault = parcelHelpers.interopDefault(_regionListViewJs);
var _viewJs = require("./views/view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _searchCountryViewJs = require("./views/searchCountryView.js");
var _searchCountryViewJsDefault = parcelHelpers.interopDefault(_searchCountryViewJs);
var _modeSwitcherViewJs = require("./views/modeSwitcherView.js");
var _modeSwitcherViewJsDefault = parcelHelpers.interopDefault(_modeSwitcherViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _configJs = require("./config.js");
var _autocompleteViewJs = require("./views/autocompleteView.js");
var _autocompleteViewJsDefault = parcelHelpers.interopDefault(_autocompleteViewJs);
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
 */ const controlAllCountryInformation = async function() {
    try {
        // Display a loading spinner while fetching data
        (0, _viewJsDefault.default).renderSpinner();
        // Fetch all countries from the API and store them in the application state
        await _modelJs.getAllCountries();
        // Delay the rendering to simulate loading time, then render the countries and pagination
        setTimeout(function() {
            // Retrieve a slice of countries for the current page
            const data = _modelJs.getCountriesByPage();
            // Render the list of countries on the page
            (0, _allCountryListViewJsDefault.default).render(data);
            // Render the pagination controls
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Handle any errors that occur during the execution of the function
        (0, _viewJsDefault.default).renderError(err);
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
 */ const controlRegionList = async function() {
    try {
        // Display a loading spinner while fetching data
        (0, _viewJsDefault.default).renderSpinner();
        // Fetch all regions from the API and store them in the application state
        await _modelJs.getAllRegions();
        // Delay the rendering to simulate loading time, then render the regions
        setTimeout(function() {
            // Retrieve the list of regions from the application state
            const data = _modelJs.state.regions;
            // Render the list of regions on the page
            (0, _regionListViewJsDefault.default).render(data);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Handle any errors that occur during the execution of the function
        (0, _viewJsDefault.default).renderError(err);
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
 */ const controlLoadSearchResultByCountry = async function() {
    try {
        // Get the country query from the search input
        const country = (0, _searchCountryViewJsDefault.default).getCountyQuery();
        // If no country is provided, exit the function
        if (!country) return;
        // Render a loading spinner while fetching data
        (0, _viewJsDefault.default).renderSpinner();
        // Load the search result for the given country from the API
        await _modelJs.loadSearchResultByCountry(country);
        // Delay the rendering to simulate loading time, then render the countries and pagination
        setTimeout(function() {
            // Retrieve a slice of countries for the current page
            const data = _modelJs.getCountriesByPage();
            // Render the list of countries on the page
            (0, _allCountryListViewJsDefault.default).render(data);
            // Render the pagination controls
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Display an error message to the user if an error occurs
        (0, _viewJsDefault.default).renderError(err);
    }
};
const searchResultCountryAutocomplete = async function(country) {
    try {
        // If no country name is provided, exit the function
        if (!country) return;
        // Display a loading spinner while fetching data
        (0, _viewJsDefault.default).renderSpinner();
        // Load the search result for the given country from the API
        await _modelJs.loadSearchResultByCountry(country);
        // Delay the rendering to simulate loading time, then render the countries and pagination
        setTimeout(function() {
            // Retrieve a slice of countries for the current page
            const data = _modelJs.getCountriesByPage();
            // Render the list of countries on the page
            (0, _allCountryListViewJsDefault.default).render(data);
            // Render the pagination controls
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
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
 */ const controlLoadCountryByRegion = async function() {
    try {
        // Get the region query from the search input
        const region = (0, _searchCountryViewJsDefault.default).getRegionQuery();
        // If no region is provided, exit the function
        if (!region) return;
        // Display a loading spinner while fetching data
        (0, _viewJsDefault.default).renderSpinner();
        // Load the countries by region from the API
        await _modelJs.loadCountryByRegion(region);
        // Delay the rendering to simulate loading time, then render the countries and pagination
        setTimeout(function() {
            // Retrieve a slice of countries for the current page
            const data = _modelJs.getCountriesByPage();
            // Render the list of countries on the page
            (0, _allCountryListViewJsDefault.default).render(data);
            // Clear the search input
            (0, _searchCountryViewJsDefault.default).clearInput();
            // Render the pagination controls
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
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
 */ const controlModeSwitcher = function() {
    try {
        // Get the current mode from the state
        const currentMode = (0, _modeSwitcherViewJsDefault.default).getCountyQuery(_modelJs.state.currentMode);
        // If the current mode is not available, exit the function
        if (!currentMode) return;
        // Update the state with the new mode
        _modelJs.getCurrentMode(currentMode);
        // Render the new mode on the page
        const data = _modelJs.state.currentMode;
        (0, _modeSwitcherViewJsDefault.default).render(data);
    } catch (err) {
        // Display an error message to the user if an error occurs
        (0, _viewJsDefault.default).renderError(err);
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
 */ const controlModeSwitcherPageLoad = function() {
    try {
        // Load the current mode from localStorage or set to default "Light Mode"
        _modelJs.loadCurrentMode("Light Mode");
        // Retrieve the current mode from the application's state
        const data = _modelJs.state.currentMode;
        // Render the current mode on the page using modeSwitcherView
        (0, _modeSwitcherViewJsDefault.default).render(data);
    } catch (err) {
        // Display an error message if an error occurs
        (0, _viewJsDefault.default).renderError(err);
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
 */ const controlPagination = function(goToPage) {
    try {
        // Retrieve a slice of countries for the specified page
        const data = _modelJs.getCountriesByPage(goToPage);
        // Render the list of countries on the page
        (0, _allCountryListViewJsDefault.default).render(data);
        // Render the pagination controls on the page
        (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
    } catch (err) {
        // Display an error message to the user if an error occurs
        (0, _viewJsDefault.default).renderError(err);
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
 */ const controlAutoCompleteCountryName = async function() {
    try {
        // Fetch the list of country names from the model
        await _modelJs.fetchCountryNames();
        // Retrieve the fetched country names from the application state
        const data = _modelJs.state.countriesName;
        // Render the autocomplete view with the retrieved data
        (0, _autocompleteViewJsDefault.default).render(data);
    } catch (err) {
        // Log any errors to the console for debugging
        console.log(err);
        // Display an error message to the user
        (0, _viewJsDefault.default).renderError(err);
    } finally{
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
 */ const init = function() {
    // Add event handler for mode switcher
    (0, _modeSwitcherViewJsDefault.default).addHandlerLoad(controlModeSwitcherPageLoad);
    (0, _modeSwitcherViewJsDefault.default).addHandlerClick(controlModeSwitcher);
    // Add event handler for region list
    (0, _regionListViewJsDefault.default).addHandlerRender(controlRegionList);
    // Add event handler for country list
    (0, _allCountryListViewJsDefault.default).addHandlerRender(controlAllCountryInformation);
    // Add event handlers for search input
    (0, _searchCountryViewJsDefault.default).addHandlerSearchCountry(controlLoadSearchResultByCountry);
    (0, _searchCountryViewJsDefault.default).addHandlerSearchCountryByRegion(controlLoadCountryByRegion);
    // Add event handler for pagination controls
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    // Trigger autocomplete for country names
    controlAutoCompleteCountryName();
};
init();

},{"./model.js":"Y4A21","./views/allCountryListView.js":"husJL","./views/regionListView.js":"bLzL2","./views/view.js":"bWlJ9","./views/searchCountryView.js":"bLeJT","./views/modeSwitcherView.js":"fca7U","./views/paginationView.js":"6z7bi","./config.js":"k5Hzs","./views/autocompleteView.js":"25rWQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getCurrentMode", ()=>getCurrentMode);
parcelHelpers.export(exports, "loadCurrentMode", ()=>loadCurrentMode);
parcelHelpers.export(exports, "getAllCountries", ()=>getAllCountries);
parcelHelpers.export(exports, "fetchCountryNames", ()=>fetchCountryNames);
parcelHelpers.export(exports, "getAllRegions", ()=>getAllRegions);
parcelHelpers.export(exports, "loadSearchResultByCountry", ()=>loadSearchResultByCountry);
parcelHelpers.export(exports, "loadCountryByRegion", ()=>loadCountryByRegion);
parcelHelpers.export(exports, "loadCountryDetails", ()=>loadCountryDetails);
parcelHelpers.export(exports, "getCountriesByPage", ()=>getCountriesByPage);
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
const state = {
    currentMode: "",
    regions: [],
    countriesName: [],
    countyList: {
        query: "",
        results: [],
        resultsPerPage: (0, _configJs.COUNTRY_PER_PAGE),
        page: 1
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
        flag: ""
    }
};
const getCurrentMode = function(currentMode) {
    try {
        localStorage.setItem("currentMode", currentMode);
        const currentStMode = localStorage.getItem("currentMode");
        if (currentStMode) state.currentMode = currentStMode;
    } catch (err) {
        throw err;
    } finally{}
};
const loadCurrentMode = function(currentMode) {
    try {
        const currentModeByStorage = localStorage.getItem("currentMode");
        if (currentModeByStorage) state.currentMode = currentModeByStorage;
        else state.currentMode = currentMode;
    } catch (err) {
        throw err;
    } finally{}
};
const getAllCountries = async function() {
    try {
        const countriesData = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}all`);
        state.countyList.results = countriesData.sort((countryA, countryB)=>countryA.name.common.localeCompare(countryB.name.common));
    } catch (error) {
        throw error;
    }
};
const fetchCountryNames = async function() {
    try {
        // Make a GET request to the Rest Countries API to retrieve a list of all countries
        const allCountries = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}all`);
        // Extract the common name of each country from the list of countries
        const countryNames = allCountries.map((country)=>country.name.common);
        // Remove duplicates from the list of country names
        state.countriesName = [
            ...new Set(countryNames)
        ];
    } catch (error) {
        // Handle any errors that occur during the execution of the function
        throw error;
    }
};
const getAllRegions = async function() {
    try {
        // Make a GET request to the Rest Countries API to retrieve a list of all countries
        const countries = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}all`);
        // Extract the region from each country in the list of countries
        const regions = countries.map((country)=>country.region);
        // Remove duplicates from the list of regions and store the result in the application state
        state.regions = [
            ...new Set(regions)
        ];
    } catch (err) {
        // Handle any errors that occur during the execution of the function
        throw err;
    }
};
const loadSearchResultByCountry = async function(countryName) {
    try {
        // Trim the country name to remove any leading or trailing whitespace
        state.countyList.query = countryName.trim();
        // Make a GET request to the Rest Countries API to retrieve a list of countries that match the given country name
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}name/${countryName.trim()}?fullText=true`);
        // Store the list of countries in the application state
        state.countyList.results = data;
    } catch (error) {
        // Handle any errors that occur during the execution of the function
        throw error;
    } finally{
    // Clean up any resources used by the function
    }
};
const loadCountryByRegion = async function(regionName) {
    try {
        // Trim the region name to remove any leading or trailing whitespace
        const trimmedRegionName = regionName.trim();
        // Update the query in the application state
        state.countyList.query = trimmedRegionName;
        // Make a GET request to the Rest Countries API to retrieve countries in the specified region
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}region/${trimmedRegionName}`);
        // Store the retrieved list of countries in the application state
        state.countyList.results = data;
    } catch (error) {
        // Handle any errors that occur during the execution of the function
        throw error;
    } finally{
    // Optionally, you can include any cleanup code here
    }
};
const loadCountryDetails = async function(countryName) {
    try {
        // Fetch country details from the API using the full-text search
        const countryData = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}name/${countryName.trim()}?fullText=true`);
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
            const allCountriesData = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}all`);
            state.countryDetails.borders = allCountriesData.filter((country)=>countryData[0].borders.includes(country.cca3)).map((country)=>country.name.common);
        }
    } catch (err) {
        // Handle any errors that occur during the execution of the function
        throw err;
    }
};
const getCountriesByPage = function(page = state.countyList.page) {
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

},{"./config.js":"k5Hzs","./helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "COUNTRY_PER_PAGE", ()=>COUNTRY_PER_PAGE);
parcelHelpers.export(exports, "SHOW_COUNTRIES_SEC", ()=>SHOW_COUNTRIES_SEC);
const API_URL = "https://restcountries.com/v3.1/";
const TIMEOUT_SEC = 20;
const COUNTRY_PER_PAGE = 20;
const SHOW_COUNTRIES_SEC = 1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _configJs = require("./config.js");
/**
 * Returns a Promise that rejects with an error after a specified number of seconds.
 *
 * @param {number} seconds - The number of seconds to wait before rejecting the promise.
 * @returns {Promise<never>} A Promise that rejects with an error indicating the request took too long.
 *
 * @description
 * This function takes a number of seconds as an argument and returns a Promise that
 * automatically rejects after the specified number of seconds. The Promise is
 * rejected with an Error object that contains a message that describes the timeout.
 */ const timeout = function(seconds) {
    return new Promise(function(_, reject) {
        setTimeout(()=>{
            reject(new Error(`Request took too long! Timeout after ${seconds} second`));
        }, seconds * 1000);
    });
};
const getJSON = async function(url) {
    try {
        console.log(url);
        // Fetch the data from the given URL, and set a timeout of 5 seconds
        const response = await Promise.race([
            fetch(url),
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        // If the request was not successful, reject the Promise with an error
        if (!response.ok) {
            const error = new Error(`${response.statusText} ${response.status}`);
            throw error;
        }
        // If the request was successful, parse the response data as JSON
        const jsonData = await response.json();
        // Return the parsed JSON data
        return jsonData;
    } catch (error) {
        // If there was an error, rethrow it to the caller
        console.log(error);
        throw error;
    }
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"husJL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CountriesView", ()=>CountriesView);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class CountriesView {
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
    renderSpinner = function() {
        let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    };
    addHandlerRender(render) {
        [
            "load"
        ].forEach((ev)=>window.addEventListener(ev, render));
    }
    _generateMarkup() {
        let html = "";
        if (this._data.length === 0) return;
        else {
            this._numberOfCountries.innerHTML = `${this._data.length} Countries Found`;
            this._data.forEach((data, index)=>{
                html += `
        <a class="countries__link" href="countryDetails.html?name=${data.name.common}">
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
exports.default = new CountriesView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View);
class View {
    _parentElementSpinner = document.querySelector(".countries");
    _errorMessage = "We could not find a country with that name.";
    renderSpinner = function() {
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
   */ renderError(message = this._errorMessage) {
        const errorMarkup = `
    <div class="message msg-danger">
      <div class="message-icon">
        <i class="ion-close-round">
          <img src="/src/images/error_icon.svg" alt="error" />
        </i>
      </div>
      <div class="message-content">
        <p>${message}</p>
      </div>
      <a href="_" class="message-close">
        <img class="close-icon" src="/src/images/cross-icon.svg" alt="close" />
      </a>
    </div>
  `;
        this._parentElementSpinner.innerHTML = "";
        this._parentElementSpinner.insertAdjacentHTML("beforeend", errorMarkup);
    }
}
exports.default = new View();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLzL2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegionsView", ()=>RegionsView);
class RegionsView {
    _parentElement = document.querySelector(".region-list");
    _parentElementSpinner = document.querySelector(".countries");
    _data;
    /*************  ✨ Codeium Command ⭐  *************/ /**
 * Renders the list of regions by generating markup and inserting it
 * into the parent element.
 * @param {Array} data - An array of regions to be displayed.
 * @description
 * This function updates the internal data state, generates the necessary HTML
 * markup for the regions, clears any existing markup, and appends the newly
  /******  1cd4bfc5-2312-4013-bc64-e1c0bc80469c  *******/ render(data) {
        this._data = data;
        let markup = "";
        markup = this._generateMarkup();
        this._clearMarkup();
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }
    _clearMarkup() {
        this._parentElement.innerHTML = "<option selected disabled>Filter by Region</option>";
    }
    renderSpinner = function() {
        let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
        this._parentElementSpinner.innerHTML = "";
        this._parentElementSpinner.insertAdjacentHTML("beforeend", markup);
    };
    addHandlerRender(render) {
        [
            "load"
        ].forEach((ev)=>window.addEventListener(ev, render));
    }
    _generateMarkup() {
        let html = "";
        if (this._data.length === 0) return;
        this._data.forEach((region)=>{
            html += `
      <option class="region-list" value="${region}">${region}</option>    
      `;
        });
        return html;
    }
}
exports.default = new RegionsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLeJT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearCountryView {
    _parentElementSearch = document.querySelector(".cta__country-form");
    getCountyQuery(countryName) {
        console.log(countryName);
        if (!countryName) return this._parentElementSearch.querySelector(".input__country-name").value;
        else return countryName;
    }
    clearInput() {
        this._parentElementSearch.querySelector(".input__country-name").value = "";
    }
    getRegionQuery() {
        return this._parentElementSearch.querySelector(".region-list").value;
    }
    addHandlerSearchCountry(handler) {
        this._parentElementSearch.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
    addHandlerSearchCountryByRegion(handler) {
        this._parentElementSearch.querySelector(".region-list").addEventListener("change", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearCountryView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fca7U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModeSwitcherView", ()=>ModeSwitcherView);
class ModeSwitcherView {
    _modeSwitcher = document.querySelector(".header__mode-switcher");
    _switcherText = document.querySelector(".header__mode-switcher__text-box");
    _modeSwitcherIcon = document.querySelector(".header__mode-switcher__icon");
    _data;
    render(data) {
        this._data = data;
        this._renderModeSwitcher();
    }
    getCountyQuery(currentMode) {
        if (!currentMode) return this._switcherText.textContent;
        else {
            if (currentMode == "Dark Mode") this._data = "Light Mode";
            else if (currentMode == "Light Mode") this._data = "Dark Mode";
            return this._data;
        }
    }
    addHandlerLoad(render) {
        window.addEventListener("load", render);
    }
    addHandlerClick(render) {
        this._modeSwitcher.addEventListener("click", render);
    }
    _renderModeSwitcher() {
        let root = document.querySelector(":root");
        if (this._data == "Dark Mode") {
            root.style.setProperty("--color-Very-Light-Gray-Light-Mode-Background", "hsl(207, 26%, 17%)");
            root.style.setProperty("--color-White-Dark-Mode-Text-and-Light-Mode-Elements", "hsl(209, 23%, 22%)");
            root.style.setProperty("--color-Very-Dark-Blue-Light-Mode-Text", "hsl(0, 0%, 100%)");
            root.style.setProperty("--color-Dark-Gray-Light-Mode-Input", "hsl(0, 0%, 100%)");
            this._modeSwitcherIcon.src = "https://shivanarrthine.com/public/images/icons/sun.svg";
        } else {
            root.style.setProperty("--color-Very-Light-Gray-Light-Mode-Background", "hsl(0, 0%, 98%)");
            root.style.setProperty("--color-White-Dark-Mode-Text-and-Light-Mode-Elements", "hsl(0, 0%, 100%)");
            root.style.setProperty("--color-Very-Dark-Blue-Light-Mode-Text", "hsl(200, 15%, 8%)");
            root.style.setProperty("--color-Dark-Gray-Light-Mode-Input", "hsl(0, 0%, 52%)");
            this._modeSwitcherIcon.src = "https://shivanarrthine.com/public/images/icons/moon.svg";
        }
        this._switcherText.textContent = this._data === "Light Mode" ? "Dark Mode" : "Light Mode";
    }
}
exports.default = new ModeSwitcherView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PaginationView {
    _parentElement = document.querySelector(".pagination");
    _numberOfCountries = document.querySelector(".header__numberOf-countries");
    _data;
    render(data) {
        this._data = data;
        let markup = "";
        markup = this._generateMarkup();
        this._clearMarkup();
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".pagination__btn-view-all");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        if (this._data.results.length === 0) return;
        const numOfPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        this._numberOfCountries.innerHTML = "";
        this._numberOfCountries.innerHTML = `Showing <span>${this._data.page != numOfPages ? this._data.resultsPerPage * this._data.page : this._data.results.length} </span> out of <span>${this._data.results.length}</span> Countries`;
        if (this._data.page === 1 && numOfPages > 1) return `<button data-goto="${numOfPages}" class="pagination__btn pagination__btn-view-all">Show All ${this._data.results.length} Countries \u{2192}</button>`;
        return "";
    }
    _clearMarkup() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = new PaginationView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25rWQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AutocompleteView", ()=>AutocompleteView);
var _controllerJs = require("../controller.js");
class AutocompleteView {
    _parentElement = document.querySelector("#countryName");
    _parentElementSearch = document.querySelector(".cta__country-form");
    _autocompleteItem = document.querySelector(".autocompleteItem");
    _data;
    countryName;
    render(data) {
        this._data = data;
        this.autocomplete(this._parentElement, this._data);
    }
    autocomplete = function(inputElement, dataArray) {
        let currentFocus = -1;
        inputElement.addEventListener("input", function(e) {
            let i, val = this.value;
            closeAllLists();
            if (!val) return false;
            currentFocus = -1;
            let autocompleteContainer = document.createElement("div");
            autocompleteContainer.setAttribute("id", this.id + "autocomplete-list");
            autocompleteContainer.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(autocompleteContainer);
            for(i = 0; i < dataArray.length; i++)if (dataArray[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                let autocompleteItem = document.createElement("div");
                autocompleteItem.innerHTML = "<strong>" + dataArray[i].substr(0, val.length) + "</strong>";
                autocompleteItem.innerHTML += dataArray[i].substr(val.length);
                let hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.value = dataArray[i];
                autocompleteItem.appendChild(hiddenInput);
                autocompleteContainer.appendChild(autocompleteItem);
                autocompleteItem.addEventListener("click", function(e) {
                    e.preventDefault();
                    inputElement.value = this.getElementsByTagName("input")[0].value;
                    this.countryName = this.getElementsByTagName("input")[0].value;
                    _controllerJs.searchResultCountryAutocomplete(this.countryName);
                    closeAllLists();
                });
            }
        });
        inputElement.addEventListener("keydown", function(e) {
            let listItems = document.getElementById(this.id + "autocomplete-list").getElementsByTagName("div");
            if (e.keyCode === 40) {
                currentFocus++;
                addActive(listItems);
            } else if (e.keyCode === 38) {
                currentFocus--;
                addActive(listItems);
            } else if (e.keyCode === 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (listItems) listItems[currentFocus].click();
                }
            }
        });
        function addActive(listItems) {
            removeActive(listItems);
            if (currentFocus >= listItems.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = listItems.length - 1;
            listItems[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(listItems) {
            for(let i = 0; i < listItems.length; i++)listItems[i].classList.remove("autocomplete-active");
        }
        function closeAllLists(element) {
            let listItems = document.getElementsByClassName("autocomplete-items");
            for(let i = 0; i < listItems.length; i++)if (element !== listItems[i] && element !== inputElement) listItems[i].parentNode.removeChild(listItems[i]);
        }
        document.addEventListener("click", function(e) {
            closeAllLists(e.target);
        });
    };
}
exports.default = new AutocompleteView();

},{"../controller.js":"aenu9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ik2hV","aenu9"], "aenu9", "parcelRequire94c2")

//# sourceMappingURL=index.e37f48ea.js.map
