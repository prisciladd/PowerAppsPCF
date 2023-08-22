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

/***/ "./ReactFacePile/components/Facepile.tsx":
/*!***********************************************!*\
  !*** ./ReactFacePile/components/Facepile.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.FacepileBasicExample = void 0;\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_1 = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\nvar FacepileExampleData_1 = __webpack_require__(/*! ./FacepileExampleData */ \"./ReactFacePile/components/FacepileExampleData.ts\");\n(0, react_1.setIconOptions)({\n  disableWarnings: true\n});\nvar FacepileBasicExample = /** @class */function (_super) {\n  __extends(FacepileBasicExample, _super);\n  function FacepileBasicExample(props) {\n    var _this = _super.call(this, props) || this;\n    _this.onChangeFadeIn = function (ev, checked) {\n      _this.setState(function (prevState) {\n        prevState.imagesFadeIn = !!checked;\n        return prevState;\n      });\n    };\n    _this.onChangePersonaNumber = function (value) {\n      _this.setState(function (prevState) {\n        prevState.numberOfFaces = value;\n        return prevState;\n      });\n      if (_this.props.numberFacesChanged) {\n        _this.props.numberFacesChanged(value);\n      }\n    };\n    _this.onChangePersonaSize = function (event, value) {\n      _this.setState(function (prevState) {\n        prevState.personaSize = value ? value.key : react_1.PersonaSize.size32;\n        return prevState;\n      });\n    };\n    _this.state = {\n      numberOfFaces: props.numberOfFaces || 3,\n      imagesFadeIn: true,\n      personaSize: react_1.PersonaSize.size32\n    };\n    return _this;\n  }\n  FacepileBasicExample.prototype.render = function () {\n    var _this = this;\n    var _a = this.state,\n      numberOfFaces = _a.numberOfFaces,\n      personaSize = _a.personaSize;\n    var facepileProps = {\n      personaSize: personaSize,\n      personas: FacepileExampleData_1.facepilePersonas,\n      overflowButtonType: react_1.OverflowButtonType.descriptive,\n      maxDisplayablePersonas: this.state.numberOfFaces,\n      getPersonaProps: function getPersonaProps(persona) {\n        return {\n          imageShouldFadeIn: _this.state.imagesFadeIn\n        };\n      },\n      ariaDescription: \"To move through the items use left and right arrow keys.\"\n    };\n    return React.createElement(\"div\", {\n      className: \"msFacepileExample\"\n    }, React.createElement(react_1.Facepile, __assign({}, facepileProps)), React.createElement(\"div\", {\n      className: \"control\"\n    }, React.createElement(react_1.Slider, {\n      label: \"Number of Personas:\",\n      min: 1,\n      max: 5,\n      step: 1,\n      showValue: true,\n      value: numberOfFaces,\n      onChange: this.onChangePersonaNumber\n    }), React.createElement(react_1.Dropdown, {\n      label: \"Persona Size:\",\n      selectedKey: this.state.personaSize,\n      options: [{\n        key: react_1.PersonaSize.size16,\n        text: \"16px\"\n      }, {\n        key: react_1.PersonaSize.size24,\n        text: \"24px\"\n      }, {\n        key: react_1.PersonaSize.size28,\n        text: \"28px\"\n      }, {\n        key: react_1.PersonaSize.size32,\n        text: \"32px\"\n      }, {\n        key: react_1.PersonaSize.size40,\n        text: \"40px\"\n      }],\n      onChange: this.onChangePersonaSize\n    }), React.createElement(react_1.Checkbox, {\n      className: \"exampleCheckbox\",\n      label: \"Fade In\",\n      checked: this.state.imagesFadeIn,\n      onChange: this.onChangeFadeIn\n    })));\n  };\n  return FacepileBasicExample;\n}(React.Component);\nexports.FacepileBasicExample = FacepileBasicExample;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ReactFacePile/components/Facepile.tsx?");

/***/ }),

/***/ "./ReactFacePile/components/FacepileExampleData.ts":
/*!*********************************************************!*\
  !*** ./ReactFacePile/components/FacepileExampleData.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.facepilePersonas = void 0;\nvar react_1 = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\nvar baseProductionCdnUrl = \"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/\";\nvar TestImages = {\n  choiceGroupBarUnselected: \"\".concat(baseProductionCdnUrl, \"choicegroup-bar-unselected.png\"),\n  choiceGroupBarSelected: \"\".concat(baseProductionCdnUrl, \"choicegroup-bar-selected.png\"),\n  choiceGroupPieUnselected: \"\".concat(baseProductionCdnUrl, \"choicegroup-pie-unselected.png\"),\n  choiceGroupPieSelected: \"\".concat(baseProductionCdnUrl, \"choicegroup-pie-selected.png\"),\n  documentPreview: \"\".concat(baseProductionCdnUrl, \"document-preview.png\"),\n  documentPreviewTwo: \"\".concat(baseProductionCdnUrl, \"document-preview2.png\"),\n  documentPreviewThree: \"\".concat(baseProductionCdnUrl, \"document-preview3.png\"),\n  iconOne: \"\".concat(baseProductionCdnUrl, \"icon-one.png\"),\n  iconPpt: \"\".concat(baseProductionCdnUrl, \"icon-ppt.png\"),\n  personaFemale: \"\".concat(baseProductionCdnUrl, \"persona-female.png\"),\n  personaMale: \"\".concat(baseProductionCdnUrl, \"persona-male.png\")\n};\nexports.facepilePersonas = [{\n  imageUrl: TestImages.personaFemale,\n  personaName: \"Annie Lindqvist\",\n  data: \"50%\"\n}, {\n  imageUrl: TestImages.personaMale,\n  personaName: \"Aaron Reid\",\n  data: \"$1,000\"\n}, {\n  personaName: \"Alex Lundberg\",\n  data: \"75%\",\n  onClick: function onClick(ev, persona) {\n    if (persona) alert(\"You clicked on \".concat(persona.personaName, \". Extra data: \").concat(persona.data));\n  }\n}, {\n  personaName: \"Roko Kolar\",\n  data: \"4 hrs\"\n}, {\n  imageInitials: \"CB\",\n  personaName: \"Christian Bergqvist\",\n  initialsColor: react_1.PersonaInitialsColor.green,\n  data: \"25%\"\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"VL\",\n  personaName: \"Valentina Lovric\",\n  initialsColor: react_1.PersonaInitialsColor.lightBlue,\n  data: \"Emp1234\",\n  onClick: function onClick(ev, persona) {\n    if (persona) alert(\"You clicked on \".concat(persona.personaName, \". Extra data: \").concat(persona.data));\n  }\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"MS\",\n  personaName: \"Maor Sharett\",\n  initialsColor: react_1.PersonaInitialsColor.lightGreen\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"PV\",\n  personaName: \"Annie Lindqvist2\",\n  initialsColor: react_1.PersonaInitialsColor.lightPink\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"AR\",\n  personaName: \"Aaron Reid2\",\n  initialsColor: react_1.PersonaInitialsColor.magenta,\n  data: \"Emp1234\",\n  onClick: function onClick(ev, persona) {\n    persona && alert(\"You clicked on \".concat(persona.personaName, \". Extra data: \").concat(persona.data));\n  }\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"AL\",\n  personaName: \"Alex Lundberg2\",\n  initialsColor: react_1.PersonaInitialsColor.orange\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"RK\",\n  personaName: \"Roko Kolar2\",\n  initialsColor: react_1.PersonaInitialsColor.pink\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"CB\",\n  personaName: \"Christian Bergqvist2\",\n  initialsColor: react_1.PersonaInitialsColor.purple\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"VL\",\n  personaName: \"Valentina Lovric2\",\n  initialsColor: react_1.PersonaInitialsColor.red\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"MS\",\n  personaName: \"Maor Sharett2\",\n  initialsColor: react_1.PersonaInitialsColor.teal\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"VL\",\n  personaName: \"Another A Name\",\n  initialsColor: react_1.PersonaInitialsColor.blue\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"MS\",\n  personaName: \"Another A Name (So Many A names!)\",\n  initialsColor: react_1.PersonaInitialsColor.darkBlue\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"VL\",\n  personaName: \"Another Anecdotal A Name\",\n  initialsColor: react_1.PersonaInitialsColor.darkGreen\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"MS\",\n  personaName: \"Anerobic A Name\",\n  initialsColor: react_1.PersonaInitialsColor.darkRed\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"VL\",\n  personaName: \"Aerobic A Name\",\n  initialsColor: react_1.PersonaInitialsColor.green\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"MS\",\n  personaName: \"Maor Sharett2\",\n  initialsColor: react_1.PersonaInitialsColor.lightBlue\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"VL\",\n  personaName: \"Valentina Lovric2\",\n  initialsColor: react_1.PersonaInitialsColor.lightGreen\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"MS\",\n  personaName: \"Maor Sharett2\",\n  initialsColor: react_1.PersonaInitialsColor.lightPink\n}, {\n  imageUrl: TestImages.personaFemale,\n  imageInitials: \"VL\",\n  personaName: \"Valentina Lovric2\",\n  initialsColor: react_1.PersonaInitialsColor.magenta\n}, {\n  imageUrl: TestImages.personaMale,\n  imageInitials: \"MS\",\n  personaName: \"Maor Sharett2\",\n  initialsColor: react_1.PersonaInitialsColor.orange\n}];\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ReactFacePile/components/FacepileExampleData.ts?");

/***/ }),

/***/ "./ReactFacePile/index.ts":
/*!********************************!*\
  !*** ./ReactFacePile/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ReactFacePile = void 0;\nvar Facepile_1 = __webpack_require__(/*! ./components/Facepile */ \"./ReactFacePile/components/Facepile.tsx\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar DEFAULT_NUMBER_OF_FACES = 3;\nvar ReactFacePile = /** @class */function () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function ReactFacePile() {\n    this.props = {\n      numberFacesChanged: this.numberFacesChanged.bind(this)\n    };\n  }\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   */\n  ReactFacePile.prototype.init = function (context, notifyOutputChanged, state) {\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.props.numberOfFaces = context.parameters.numberOfFaces.raw || DEFAULT_NUMBER_OF_FACES;\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   * @returns ReactElement root react element for the control\r\n   */\n  ReactFacePile.prototype.updateView = function (context) {\n    if (context.updatedProperties.indexOf(\"numberOfFaces\") > -1) {\n      this.props.numberOfFaces = context.parameters.numberOfFaces.raw || DEFAULT_NUMBER_OF_FACES;\n    }\n    return React.createElement(Facepile_1.FacepileBasicExample, this.props);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  ReactFacePile.prototype.getOutputs = function () {\n    return {\n      numberOfFaces: this.props.numberOfFaces\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  ReactFacePile.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  ReactFacePile.prototype.numberFacesChanged = function (newValue) {\n    if (this.props.numberOfFaces !== newValue) {\n      this.props.numberOfFaces = newValue;\n      this.notifyOutputChanged();\n    }\n  };\n  return ReactFacePile;\n}();\nexports.ReactFacePile = ReactFacePile;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ReactFacePile/index.ts?");

/***/ }),

/***/ "@fluentui/react":
/*!*************************************!*\
  !*** external "FluentUIReactv8290" ***!
  \*************************************/
/***/ ((module) => {

module.exports = FluentUIReactv8290;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ReactFacePile/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Learn.ReactFacePile', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ReactFacePile);
} else {
	var Learn = Learn || {};
	Learn.ReactFacePile = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ReactFacePile;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}