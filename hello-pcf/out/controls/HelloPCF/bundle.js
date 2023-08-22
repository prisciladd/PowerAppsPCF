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

/***/ "./HelloPCF/index.ts":
/*!***************************!*\
  !*** ./HelloPCF/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HelloPCF = void 0;\nvar HelloPCF = /** @class */function () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function HelloPCF() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  HelloPCF.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // Track all the things\n    var _this = this;\n    this.context = context;\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.container = container;\n    this.isEditMode = false;\n    //Create the span element to hold the hello message\n    var message = document.createElement(\"span\");\n    message.innerText = \"Hello \".concat(this.isEditMode ? \"\" : context.parameters.Name.raw);\n    // Create the textbox to edit the name\n    var textbox = document.createElement(\"input\");\n    textbox.type = \"text\";\n    textbox.style.display = this.isEditMode ? \"block\" : \"none\";\n    if (context.parameters.Name.raw) {\n      textbox.value = context.parameters.Name.raw;\n      // Wrap the two above elements in a div to box out the content\n      var messageContainer = document.createElement(\"div\");\n      messageContainer.appendChild(message);\n      messageContainer.appendChild(textbox);\n      // Create the button element to switch between edit and read modes\n      var button = document.createElement(\"button\");\n      button.textContent = this.isEditMode ? \"Save\" : \"Edit\";\n      button.addEventListener(\"click\", function () {\n        _this.buttonClick();\n      });\n      // Add the message container and button to the overall control container\n      this.container.appendChild(messageContainer);\n      this.container.appendChild(button);\n    }\n  };\n  HelloPCF.prototype.buttonClick = function () {\n    // Get our controls via DOM queries\n    var _a, _b;\n    var textbox = this.container.querySelector(\"input\");\n    var message = this.container.querySelector(\"span\");\n    var button = this.container.querySelector(\"button\");\n    // If not in edit mode, copy the current name value to the textbox\n    if (!this.isEditMode) {\n      textbox.value = (_a = this.name) !== null && _a !== void 0 ? _a : \"\";\n    } else if (textbox.value != this.name) {\n      // if in edit mode, copy the textbox value to name and call the notify callback\n      this.name = textbox.value;\n      this.notifyOutputChanged();\n    }\n    // flip the mode flag\n    this.isEditMode = !this.isEditMode;\n    // Set up the new output based on changes\n    message.innerText = \"Hello \".concat(this.isEditMode ? \"\" : this.name);\n    textbox.style.display = this.isEditMode ? \"inline\" : \"none\";\n    textbox.value = (_b = this.name) !== null && _b !== void 0 ? _b : \"\";\n    button.textContent = this.isEditMode ? \"Save\" : \"Edit\";\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  HelloPCF.prototype.updateView = function (context) {\n    // Checks for updates coming in from outside\n    this.name = context.parameters.Name.raw;\n    var message = this.container.querySelector(\"span\");\n    message.innerText = \"Hello \".concat(this.name);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  HelloPCF.prototype.getOutputs = function () {\n    var _a;\n    return {\n      // If our name variable is null, return undefined instead\n      Name: (_a = this.name) !== null && _a !== void 0 ? _a : undefined\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  HelloPCF.prototype.destroy = function () {\n    // Remove the event listener we created in init\n    this.container.querySelector(\"button\").removeEventListener(\"click\", this.buttonClick);\n  };\n  return HelloPCF;\n}();\nexports.HelloPCF = HelloPCF;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./HelloPCF/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./HelloPCF/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('SampleNamespace.HelloPCF', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.HelloPCF);
} else {
	var SampleNamespace = SampleNamespace || {};
	SampleNamespace.HelloPCF = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.HelloPCF;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}