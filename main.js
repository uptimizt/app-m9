/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar ProductCategoryRow = /*#__PURE__*/function (_React$Component) {\n  _inherits(ProductCategoryRow, _React$Component);\n\n  var _super = _createSuper(ProductCategoryRow);\n\n  function ProductCategoryRow() {\n    _classCallCheck(this, ProductCategoryRow);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(ProductCategoryRow, [{\n    key: \"render\",\n    value: function render() {\n      var category = this.props.category;\n      return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", {\n        colSpan: \"2\"\n      }, category));\n    }\n  }]);\n\n  return ProductCategoryRow;\n}(React.Component);\n\nvar ProductRow = /*#__PURE__*/function (_React$Component2) {\n  _inherits(ProductRow, _React$Component2);\n\n  var _super2 = _createSuper(ProductRow);\n\n  function ProductRow() {\n    _classCallCheck(this, ProductRow);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(ProductRow, [{\n    key: \"render\",\n    value: function render() {\n      var product = this.props.product;\n      var name = product.stocked ? product.name : /*#__PURE__*/React.createElement(\"span\", {\n        style: {\n          color: 'red'\n        }\n      }, product.name);\n      return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, name), /*#__PURE__*/React.createElement(\"td\", null, product.price));\n    }\n  }]);\n\n  return ProductRow;\n}(React.Component);\n\nvar ProductTable = /*#__PURE__*/function (_React$Component3) {\n  _inherits(ProductTable, _React$Component3);\n\n  var _super3 = _createSuper(ProductTable);\n\n  function ProductTable() {\n    _classCallCheck(this, ProductTable);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(ProductTable, [{\n    key: \"render\",\n    value: function render() {\n      var rows = [];\n      var lastCategory = null;\n      this.props.products.forEach(function (product) {\n        if (product.category !== lastCategory) {\n          rows.push( /*#__PURE__*/React.createElement(ProductCategoryRow, {\n            category: product.category,\n            key: product.category\n          }));\n        }\n\n        rows.push( /*#__PURE__*/React.createElement(ProductRow, {\n          product: product,\n          key: product.name\n        }));\n        lastCategory = product.category;\n      });\n      return /*#__PURE__*/React.createElement(\"table\", null, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Price\"))), /*#__PURE__*/React.createElement(\"tbody\", null, rows));\n    }\n  }]);\n\n  return ProductTable;\n}(React.Component);\n\nvar SearchBar = /*#__PURE__*/function (_React$Component4) {\n  _inherits(SearchBar, _React$Component4);\n\n  var _super4 = _createSuper(SearchBar);\n\n  function SearchBar() {\n    _classCallCheck(this, SearchBar);\n\n    return _super4.apply(this, arguments);\n  }\n\n  _createClass(SearchBar, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"form\", null, /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"Search...\"\n      }), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"input\", {\n        type: \"checkbox\"\n      }), ' ', \"Only show products in stock\"));\n    }\n  }]);\n\n  return SearchBar;\n}(React.Component);\n\nvar FilterableProductTable = /*#__PURE__*/function (_React$Component5) {\n  _inherits(FilterableProductTable, _React$Component5);\n\n  var _super5 = _createSuper(FilterableProductTable);\n\n  function FilterableProductTable() {\n    _classCallCheck(this, FilterableProductTable);\n\n    return _super5.apply(this, arguments);\n  }\n\n  _createClass(FilterableProductTable, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(SearchBar, null), /*#__PURE__*/React.createElement(ProductTable, {\n        products: this.props.products\n      }));\n    }\n  }]);\n\n  return FilterableProductTable;\n}(React.Component);\n\nvar PRODUCTS = [{\n  category: 'Sporting Goods',\n  price: '$49.99',\n  stocked: true,\n  name: 'Football 2'\n}, {\n  category: 'Sporting Goods',\n  price: '$9.99',\n  stocked: true,\n  name: 'Baseball'\n}, {\n  category: 'Sporting Goods',\n  price: '$29.99',\n  stocked: false,\n  name: 'Basketball'\n}, {\n  category: 'Electronics',\n  price: '$99.99',\n  stocked: true,\n  name: 'iPod Touch'\n}, {\n  category: 'Electronics',\n  price: '$399.99',\n  stocked: false,\n  name: 'iPhone 5'\n}, {\n  category: 'Electronics',\n  price: '$199.99',\n  stocked: true,\n  name: 'Nexus 7'\n}];\nReactDOM.render( /*#__PURE__*/React.createElement(FilterableProductTable, {\n  products: PRODUCTS\n}), document.getElementById('app-fitable'));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });