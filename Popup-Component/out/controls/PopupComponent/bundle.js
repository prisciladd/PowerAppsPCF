/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./PopupComponent/index.ts":
/*!*********************************!*\
  !*** ./PopupComponent/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PopupComponent = void 0;\nvar PopupComponent = /** @class */function () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function PopupComponent() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  PopupComponent.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._container = document.createElement('div');\n    //============ content of our popup =============\n    var popUpContent = document.createElement('div');\n    popUpContent.setAttribute(\"class\", \"loader\");\n    //============ our Popup object =============\n    var popUpOptions = {\n      closeOnOutsideClick: true,\n      content: popUpContent,\n      name: 'loaderPopup',\n      type: 1,\n      popupStyle: {\n        \"width\": \"100%\",\n        \"height\": \"100%\",\n        \"overflow\": \"hidden\",\n        \"backgroundColor\": \"transparent\",\n        \"display\": \"flex\",\n        \"flexDirection\": \"column\",\n        \"position\": \"absolute\",\n        \"margin-top\": 28 + \"px\"\n      },\n      shadowStyle: {\n        position: \"absolute\",\n        width: \"100%\",\n        height: \"100%\"\n      }\n    };\n    this._popUpService = context.factory.getPopupService();\n    this._popUpService.createPopup(popUpOptions);\n    container.appendChild(this._container);\n    this._popUpService.openPopup('loaderPopup');\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  PopupComponent.prototype.updateView = function (context) {\n    // Add code to update control view\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  PopupComponent.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  PopupComponent.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return PopupComponent;\n}();\nexports.PopupComponent = PopupComponent;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PopupComponent/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./PopupComponent/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('SampleNamespace.PopupComponent', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PopupComponent);
} else {
	var SampleNamespace = SampleNamespace || {};
	SampleNamespace.PopupComponent = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PopupComponent;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}