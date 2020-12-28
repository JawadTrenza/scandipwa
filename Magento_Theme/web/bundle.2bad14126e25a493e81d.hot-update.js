webpackHotUpdate("bundle",{

/***/ "./src/app/component/CookiePopup/CookiePopup.component.js":
/*!****************************************************************!*\
  !*** ./src/app/component/CookiePopup/CookiePopup.component.js ***!
  \****************************************************************/
/*! exports provided: _CookiePopup, CookiePopup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CookiePopup", function() { return _CookiePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiePopup", function() { return CookiePopup; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContentWrapper */ "./src/app/component/ContentWrapper/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Link */ "./src/app/component/Link/index.js");
/* harmony import */ var _Html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Html */ "./src/app/component/Html/index.js");
/* harmony import */ var _util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/BrowserDatabase */ "./src/app/util/BrowserDatabase/index.js");
/* harmony import */ var _util_Request_QueryDispatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/Request/QueryDispatcher */ "./src/app/util/Request/QueryDispatcher.js");
/* harmony import */ var _CookiePopup_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CookiePopup.config */ "./src/app/component/CookiePopup/CookiePopup.config.js");
/* harmony import */ var _CookiePopup_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CookiePopup.style */ "./src/app/component/CookiePopup/CookiePopup.style.scss");
/* harmony import */ var _CookiePopup_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CookiePopup_style__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */










/** @namespace Component/CookiePopup/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CookiePopup =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CookiePopup, _Extensible);

  function _CookiePopup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CookiePopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CookiePopup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isAccepted: _this.getAcceptCookieValue()
    });

    _defineProperty(_assertThisInitialized(_this), "acceptCookies", function () {
      var code = _this.props.code;
      var param = "".concat(_CookiePopup_config__WEBPACK_IMPORTED_MODULE_8__["COOKIE_POPUP"], "_").concat(code);
      _util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_6__["default"].setItem(true, param, _util_Request_QueryDispatcher__WEBPACK_IMPORTED_MODULE_7__["ONE_MONTH_IN_SECONDS"]);

      _this.setState({
        isAccepted: true
      });
    });

    return _this;
  }

  _createClass(_CookiePopup, [{
    key: "getAcceptCookieValue",
    value: function getAcceptCookieValue() {
      var code = this.props.code;
      var param = "".concat(_CookiePopup_config__WEBPACK_IMPORTED_MODULE_8__["COOKIE_POPUP"], "_").concat(code);
      return !!_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(param);
    }
  }, {
    key: "renderCookieLink",
    value: function renderCookieLink() {
      var cookieLink = this.props.cookieLink;

      if (!cookieLink) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
          block: "CookiePopup",
          elem: "Link",
          to: cookieLink
        }, __('Read more'))
      );
    }
  }, {
    key: "renderCookieText",
    value: function renderCookieText() {
      var cookieText = this.props.cookieText;
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "CookiePopup",
          elem: "Content"
        }, cookieText, this.renderCookieLink())
      );
    }
  }, {
    key: "renderCTA",
    value: function renderCTA() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CookiePopup",
          elem: "CTA"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Button",
          onClick: this.acceptCookies
        }, __('Accept')))
      );
    }
  }, {
    key: "renderDefaultPopup",
    value: function renderDefaultPopup() {
      var cookieText = this.props.cookieText;
      var isAccepted = this.state.isAccepted;

      if (!cookieText || isAccepted) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CookiePopup"
        },
        /*#__PURE__*/
        _checkBEM(React, _ContentWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Cookie popup",
          mix: {
            block: 'CookiePopup',
            elem: 'Wrapper'
          },
          wrapperMix: {
            block: 'CookiePopup',
            elem: 'ContentWrapper'
          }
        }, this.renderCookieText(), this.renderCTA()))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var cookieScript = this.props.cookieScript;
      console.log(_typeof(cookieScript));

      if (cookieScript !== '') {
        return (
          /*#__PURE__*/
          Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(
          /*#__PURE__*/
          _checkBEM(React, _Html__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: cookieScript
          }), document.body)
        );
      }

      return this.renderDefaultPopup();
    }
  }]);

  return _CookiePopup;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CookiePopup, 'name', {
  value: 'CookiePopup'
});

var CookiePopup = middleware(_CookiePopup, "Component/CookiePopup/Component");

_defineProperty(CookiePopup, "propTypes", {
  cookieText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  cookieLink: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  cookieScript: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(CookiePopup, "defaultProps", {
  cookieText: '',
  cookieLink: '',
  cookieScript: '<script type="text/javascript" async="" id="consent-file" src="https://policy.app.cookieinformation.com/80af9b/dk.sofacompany.com/da.js" charSet="UTF-8" />',
  code: ''
});

/* harmony default export */ __webpack_exports__["default"] = (CookiePopup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=bundle.2bad14126e25a493e81d.hot-update.js.map