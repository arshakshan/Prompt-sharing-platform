"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose?ada6":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_arshak_Documents_WEB_DEV_NextJs_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/arshak/Documents/WEB DEV/NextJs/promptopia/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_arshak_Documents_WEB_DEV_NextJs_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFyc2hhayUyRkRvY3VtZW50cyUyRldFQiUyMERFViUyRk5leHRKcyUyRnByb21wdG9waWElMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYXJzaGFrJTJGRG9jdW1lbnRzJTJGV0VCJTIwREVWJTJGTmV4dEpzJTJGcHJvbXB0b3BpYSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUM7QUFDbEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLz80MGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hcnNoYWsvRG9jdW1lbnRzL1dFQiBERVYvTmV4dEpzL3Byb21wdG9waWEvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2Fyc2hhay9Eb2N1bWVudHMvV0VCIERFVi9OZXh0SnMvcHJvbXB0b3BpYS9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/../../../../node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/../../../../node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n\n\n\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session }) {\n            const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                email: session.user.email\n            });\n            session.user.id = sessionUser._id.toString();\n            return session;\n        },\n        async signIn ({ profile }) {\n            try {\n                // serverless route -> Lambda -> dynamoDb\n                await (0,_utils_database__WEBPACK_IMPORTED_MODULE_4__.connectToDb)();\n                // check if a user already exists in the database\n                const userExists = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: profile.email\n                });\n                // if not create a new user and save it to the database\n                if (!userExists) {\n                    await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                        email: profile.email,\n                        username: profile.name.replace(\" \", \"\").toLowerCase(),\n                        image: profile.image\n                    });\n                }\n                return true;\n            } catch (error) {\n                console.log(\"Error signing in\", error);\n                return false;\n            }\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNLO0FBQ2tCO0FBRXhCO0FBQ2M7QUFFOUMsTUFBTUssVUFBVUosMERBQVFBLENBQUM7SUFDckJLLFdBQVc7UUFDUEosc0VBQWNBLENBQUM7WUFDWEssVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNsRDtLQUNIO0lBQ0RDLFdBQVc7UUFFUCxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRTtZQUNyQixNQUFNQyxjQUFjLE1BQU1aLG9EQUFJQSxDQUFDYSxPQUFPLENBQUM7Z0JBQUVDLE9BQU9ILFFBQVFJLElBQUksQ0FBQ0QsS0FBSztZQUFDO1lBRW5FSCxRQUFRSSxJQUFJLENBQUNDLEVBQUUsR0FBR0osWUFBWUssR0FBRyxDQUFDQyxRQUFRO1lBQzFDLE9BQU9QO1FBQ1g7UUFDQSxNQUFNUSxRQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNwQixJQUFJO2dCQUNBLHlDQUF5QztnQkFDekMsTUFBTW5CLDREQUFXQTtnQkFFakIsaURBQWlEO2dCQUNqRCxNQUFNb0IsYUFBYSxNQUFNckIsb0RBQUlBLENBQUNhLE9BQU8sQ0FBQztvQkFBRUMsT0FBT00sUUFBUU4sS0FBSztnQkFBQztnQkFFN0QsdURBQXVEO2dCQUN2RCxJQUFJLENBQUNPLFlBQVk7b0JBQ2IsTUFBTXJCLG9EQUFJQSxDQUFDc0IsTUFBTSxDQUFDO3dCQUNkUixPQUFPTSxRQUFRTixLQUFLO3dCQUNwQlMsVUFBVUgsUUFBUUksSUFBSSxDQUFDQyxPQUFPLENBQUMsS0FBSyxJQUFJQyxXQUFXO3dCQUNuREMsT0FBT1AsUUFBUU8sS0FBSztvQkFDeEI7Z0JBQ0o7Z0JBR0EsT0FBTztZQUNYLEVBQUUsT0FBT0MsT0FBTztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkY7Z0JBQ2hDLE9BQU87WUFDWDtRQUNKO0lBQ0o7QUFDSjtBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb21wdG9waWEvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz9kYTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmltcG9ydCBVc2VyIGZyb20gXCJAbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RiIH0gZnJvbSBcIkB1dGlscy9kYXRhYmFzZVwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxuICAgICAgICB9KVxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG5cbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvblVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0pO1xuXG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSBzZXNzaW9uVXNlci5faWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNpZ25Jbih7IHByb2ZpbGUgfSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBzZXJ2ZXJsZXNzIHJvdXRlIC0+IExhbWJkYSAtPiBkeW5hbW9EYlxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbm5lY3RUb0RiKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBhIHVzZXIgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBwcm9maWxlLmVtYWlsIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBpZiBub3QgY3JlYXRlIGEgbmV3IHVzZXIgYW5kIHNhdmUgaXQgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUubmFtZS5yZXBsYWNlKFwiIFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHByb2ZpbGUuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNpZ25pbmcgaW5cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTsiXSwibmFtZXMiOlsibmV4dEF1dGgiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiVXNlciIsImNvbm5lY3RUb0RiIiwiaGFuZGxlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInNlc3Npb25Vc2VyIiwiZmluZE9uZSIsImVtYWlsIiwidXNlciIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJzaWduSW4iLCJwcm9maWxlIiwidXNlckV4aXN0cyIsImNyZWF0ZSIsInVzZXJuYW1lIiwibmFtZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImltYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose?ada6\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exists!\"\n        ],\n        requires: [\n            true,\n            \"Email is required!\"\n        ]\n    },\n    username: {\n        type: String,\n        requires: [\n            true,\n            \"Username is required!\"\n        ],\n        match: [\n            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,\n            \"Username invalid, it should contain 8-20 alphanumeric letters and be unique!\"\n        ]\n    },\n    image: {\n        type: String\n    }\n});\n// additional check as it is possible that the model is already defined\n// this route is called multiple times\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUMxQkksT0FBTztRQUNIQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF3QjtRQUN2Q0MsVUFBVTtZQUFDO1lBQU07U0FBcUI7SUFDMUM7SUFDQUMsVUFBVTtRQUNOSixNQUFNQztRQUNORSxVQUFVO1lBQUM7WUFBTTtTQUF3QjtRQUN6Q0UsT0FBTztZQUFDO1lBQThEO1NBQStFO0lBQ3pKO0lBQ0FDLE9BQU87UUFDSE4sTUFBTUM7SUFDVjtBQUNKO0FBRUEsdUVBQXVFO0FBQ3ZFLHNDQUFzQztBQUN0QyxNQUFNTSxPQUFPViw0Q0FBTUEsQ0FBQ1UsSUFBSSxJQUFJWCwrQ0FBS0EsQ0FBQyxRQUFRRTtBQUUxQyxpRUFBZVMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb21wdG9waWEvLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIkVtYWlsIGFscmVhZHkgZXhpc3RzIVwiXSxcbiAgICAgICAgcmVxdWlyZXM6IFt0cnVlLCBcIkVtYWlsIGlzIHJlcXVpcmVkIVwiXSxcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZXM6IFt0cnVlLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkIVwiXSxcbiAgICAgICAgbWF0Y2g6IFsvXig/PS57OCwyMH0kKSg/IVtfLl0pKD8hLipbXy5dezJ9KVthLXpBLVowLTkuX10rKD88IVtfLl0pJC8sIFwiVXNlcm5hbWUgaW52YWxpZCwgaXQgc2hvdWxkIGNvbnRhaW4gOC0yMCBhbHBoYW51bWVyaWMgbGV0dGVycyBhbmQgYmUgdW5pcXVlIVwiXVxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxufSlcblxuLy8gYWRkaXRpb25hbCBjaGVjayBhcyBpdCBpcyBwb3NzaWJsZSB0aGF0IHRoZSBtb2RlbCBpcyBhbHJlYWR5IGRlZmluZWRcbi8vIHRoaXMgcm91dGUgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzXG5jb25zdCBVc2VyID0gbW9kZWxzLlVzZXIgfHwgbW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlcyIsInVzZXJuYW1lIiwibWF0Y2giLCJpbWFnZSIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDb: () => (/* binding */ connectToDb)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose?ada6\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // track db connection status\nconst connectToDb = async ()=>{\n    (mongoose__WEBPACK_IMPORTED_MODULE_0___default().set)[\"strictQuery\", true];\n    if (isConnected) {\n        console.log(\"MongoDb is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"share_prompt\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"MongoDb is connected\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB\", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYyxPQUFPLDZCQUE2QjtBQUUvQyxNQUFNQyxjQUFjO0lBQ3ZCRixxREFBWSxDQUFDLGVBQWUsS0FBSztJQUVqQyxJQUFJQyxhQUFhO1FBQ2JHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxJQUFJO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1lBQzVDQyxRQUFRO1lBQ1JDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3hCO1FBRUFYLGNBQWM7UUFDZEcsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQUUsT0FBT1EsT0FBTztRQUNaVCxRQUFRUyxLQUFLLENBQUMsK0JBQStCQTtJQUNqRDtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLy4vdXRpbHMvZGF0YWJhc2UuanM/MmI5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTsgLy8gdHJhY2sgZGIgY29ubmVjdGlvbiBzdGF0dXNcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RiID0gYXN5bmMgKCkgPT4ge1xuICAgIG1vbmdvb3NlLnNldFsnc3RyaWN0UXVlcnknLCB0cnVlXTtcblxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvRGIgaXMgYWxyZWFkeSBjb25uZWN0ZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XG4gICAgICAgICAgICBkYk5hbWU6IFwic2hhcmVfcHJvbXB0XCIsXG4gICAgICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICAgIH0pXG5cbiAgICAgICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvRGIgaXMgY29ubmVjdGVkXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREJcIiwgZXJyb3IpO1xuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0VG9EYiIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Farshak%2FDocuments%2FWEB%20DEV%2FNextJs%2Fpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();