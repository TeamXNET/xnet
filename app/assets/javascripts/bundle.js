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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/entry.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/actions/category_actions.js":
/*!**********************************************!*\
  !*** ./frontend/actions/category_actions.js ***!
  \**********************************************/
/*! exports provided: RECEIVE_CATEGORIES, RECEIVE_CATEGORY, getCategoriesInfo, getCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CATEGORIES", function() { return RECEIVE_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CATEGORY", function() { return RECEIVE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoriesInfo", function() { return getCategoriesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./frontend/utils/utils.js");

var RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
var RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

var receiveCategoryInfo = function receiveCategoryInfo(info) {
  return {
    type: RECEIVE_CATEGORIES,
    info: info
  };
};

var receiveCategory = function receiveCategory(info) {
  return {
    type: RECEIVE_CATEGORY,
    info: info
  };
};

var getCategoriesInfo = function getCategoriesInfo(request) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fetchCategories"])(request).then(function (info) {
      return dispatch(receiveCategoryInfo(info));
    });
  };
};
var getCategory = function getCategory(title) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fetchCategory"])(title).then(function (info) {
      return dispatch(receiveCategory(info));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/follow_actions.js":
/*!********************************************!*\
  !*** ./frontend/actions/follow_actions.js ***!
  \********************************************/
/*! exports provided: RECEIVE_FOLLOW, RECEIVE_FOLLOWS, DELETE_FOLLOW, REMOVE_FOLLOWS, createFollow, showFollows, destroyFollow, clearHalfFollows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_FOLLOW", function() { return RECEIVE_FOLLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_FOLLOWS", function() { return RECEIVE_FOLLOWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FOLLOW", function() { return DELETE_FOLLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWS", function() { return REMOVE_FOLLOWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFollow", function() { return createFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFollows", function() { return showFollows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyFollow", function() { return destroyFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHalfFollows", function() { return clearHalfFollows; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./frontend/utils/utils.js");

var RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
var RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
var DELETE_FOLLOW = 'DELETE_FOLLOW';
var REMOVE_FOLLOWS = 'REMOVE_FOLLOWS';

var receiveFollow = function receiveFollow(follow) {
  return {
    type: RECEIVE_FOLLOW,
    follow: follow
  };
};

var receiveFollows = function receiveFollows(follows) {
  return {
    type: RECEIVE_FOLLOWS,
    follows: follows
  };
};

var removeFollow = function removeFollow(follow) {
  return {
    type: DELETE_FOLLOW,
    follow: follow
  };
};

var removeSomeFollows = function removeSomeFollows(status) {
  return {
    type: REMOVE_FOLLOWS,
    status: status
  };
};

var createFollow = function createFollow(follow) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["postFollow"])(follow).then(function (follow) {
      return dispatch(receiveFollow(follow));
    });
  };
};
var showFollows = function showFollows(user) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getFollows"])(user).then(function (follows) {
      return dispatch(receiveFollows(follows));
    });
  };
};
var destroyFollow = function destroyFollow(follow) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["deleteFollow"])(follow).then(function (follow) {
      return dispatch(removeFollow(follow));
    });
  };
};
var clearHalfFollows = function clearHalfFollows(status) {
  return function (dispatch) {
    dispatch(removeSomeFollows(status));
  };
};

/***/ }),

/***/ "./frontend/actions/ui_actions.js":
/*!****************************************!*\
  !*** ./frontend/actions/ui_actions.js ***!
  \****************************************/
/*! exports provided: TOGGLE_LOGIN_MODAL, TOGGLE_USER_DROPDOWN, RECEIVE_CHANNEL, toggleLoginModal, toggleUserDrop, receiveChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_LOGIN_MODAL", function() { return TOGGLE_LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_USER_DROPDOWN", function() { return TOGGLE_USER_DROPDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CHANNEL", function() { return RECEIVE_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLoginModal", function() { return toggleLoginModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleUserDrop", function() { return toggleUserDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveChannel", function() { return receiveChannel; });
var TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
var TOGGLE_USER_DROPDOWN = 'TOGGLE_USER_DROPDOWN';
var RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
var toggleLoginModal = function toggleLoginModal(status, formType) {
  return {
    type: TOGGLE_LOGIN_MODAL,
    status: status,
    formType: formType
  };
};
var toggleUserDrop = function toggleUserDrop(status) {
  return {
    type: TOGGLE_USER_DROPDOWN,
    status: status
  };
};
var receiveChannel = function receiveChannel(id) {
  return {
    type: RECEIVE_CHANNEL,
    id: id
  };
};

/***/ }),

/***/ "./frontend/actions/user_actions.js":
/*!******************************************!*\
  !*** ./frontend/actions/user_actions.js ***!
  \******************************************/
/*! exports provided: RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS, RECEIVE_NO_USER_ERRORS, CLEAR_ERRORS, RECEIVE_USER, RECEIVE_USERS, createNewUser, login, logout, getUserByName, getUserById, getUsers, resetErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_USER", function() { return RECEIVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_CURRENT_USER", function() { return LOGOUT_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ERRORS", function() { return RECEIVE_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_NO_USER_ERRORS", function() { return RECEIVE_NO_USER_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER", function() { return RECEIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USERS", function() { return RECEIVE_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewUser", function() { return createNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByName", function() { return getUserByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserById", function() { return getUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetErrors", function() { return resetErrors; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./frontend/utils/utils.js");

var RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
var LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
var RECEIVE_ERRORS = 'RECEIVE_ERRORS';
var RECEIVE_NO_USER_ERRORS = 'RECEIVE_NO_USER_ERRORS';
var CLEAR_ERRORS = 'CLEAR_ERRORS';
var RECEIVE_USER = 'RECEIVE_USER';
var RECEIVE_USERS = 'RECEIVE_USERS';

var receiveCurrentUser = function receiveCurrentUser(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

var logoutCurrentUser = function logoutCurrentUser() {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

var receiveErrors = function receiveErrors(errorsArr) {
  return {
    type: RECEIVE_ERRORS,
    errorsArr: errorsArr
  };
};

var clearErrors = function clearErrors() {
  return {
    type: CLEAR_ERRORS
  };
};

var receiveUser = function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user: user
  };
};

var receiveNoUserErrors = function receiveNoUserErrors(errorData) {
  return {
    type: RECEIVE_NO_USER_ERRORS,
    errorData: errorData
  };
};

var receiveUsers = function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users
  };
};

var createNewUser = function createNewUser(formUser) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["postUser"])(formUser).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }).fail(function (data) {
      return dispatch(receiveErrors(data));
    });
  };
};
var login = function login(formUser) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["postSession"])(formUser).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }).fail(function (data) {
      return dispatch(receiveErrors(data));
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["deleteSession"])().then(function () {
      return dispatch(logoutCurrentUser());
    }).fail(function (data) {
      return dispatch(receiveErrors(data));
    });
  };
};
var getUserByName = function getUserByName(username) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fetchUserByName"])(username).then(function (user) {
      return dispatch(receiveUser(user));
    }).fail(function (data) {
      return dispatch(receiveNoUserErrors(data));
    });
  };
};
var getUserById = function getUserById(id) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fetchUserById"])(id).then(function (user) {
      return dispatch(receiveUser(user));
    }).fail(function (data) {
      return dispatch(receiveNoUserErrors(data));
    });
  };
};
var getUsers = function getUsers(request) {
  return function (dispatch) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fetchUsers"])(request).then(function (users) {
      return dispatch(receiveUsers(users));
    }).fail(function (data) {
      return dispatch(receiveNoUserErrors(data));
    });
  };
};
var resetErrors = function resetErrors() {
  return function (dispatch) {
    return dispatch(clearErrors());
  };
};

/***/ }),

/***/ "./frontend/components/App/AppComponent.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/App/AppComponent.jsx ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/route_util */ "./frontend/components/util/route_util.jsx");
/* harmony import */ var _LoginModal_LoginModalContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoginModal/LoginModalContainer */ "./frontend/components/LoginModal/LoginModalContainer.jsx");
/* harmony import */ var _NavBar_NavBarContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NavBar/NavBarContainer */ "./frontend/components/NavBar/NavBarContainer.jsx");
/* harmony import */ var _SideBar_SideBarContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SideBar/SideBarContainer */ "./frontend/components/SideBar/SideBarContainer.jsx");
/* harmony import */ var _MainBar_MainBarContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MainBar/MainBarContainer */ "./frontend/components/MainBar/MainBarContainer.jsx");
/* harmony import */ var _UserDropDown_UserDropDownContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UserDropDown/UserDropDownContainer */ "./frontend/components/UserDropDown/UserDropDownContainer.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import { GreetingContainer } from '../Greeting/GreetingContainer';

 // import { LoginFormContainer } from '../Session/LoginFormContainer';
// import { SignupFormContainer } from '../Session/SignupFormContainer';








var AppComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent(props) {
    var _this;

    _classCallCheck(this, AppComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppComponent).call(this, props));
    _this.timeout = null;
    _this.toggleUserDrop = _this.toggleUserDrop.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AppComponent, [{
    key: "toggleUserDrop",
    value: function toggleUserDrop(e) {
      if (this.props.userDropDownStatus === false || this.props.modalStatus === true) return;
      this.props.toggleUserDrop(!this.props.userDropDownStatus);
    }
  }, {
    key: "render",
    value: function render() {
      var base = {
        color: 'rgb(218, 216, 222)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: "#0f0e11",
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        overflowX: 'hidden' // overflowY: 'hidden'

      };
      var MainDiv = {
        // width: '100vw',
        // height: '100vh',
        display: 'relative'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: base,
        onClick: this.toggleUserDrop,
        id: "base"
      }, this.props.modalStatus && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginModal_LoginModalContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null), this.props.userDropDownStatus && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDropDown_UserDropDownContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar_NavBarContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: MainDiv,
        id: "mainAppComp"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideBar_SideBarContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainBar_MainBarContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
    }
  }]);

  return AppComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
;

/***/ }),

/***/ "./frontend/components/App/AppContainer.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/App/AppContainer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppComponent */ "./frontend/components/App/AppComponent.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./frontend/actions/ui_actions.js");





var msp = function msp(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    userDropDownStatus: state.ui.userDropDown.status
  };
};

var mdp = function mdp(dispatch) {
  return {
    toggleUserDrop: function toggleUserDrop(status) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__["toggleUserDrop"])(status));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_AppComponent__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]));

/***/ }),

/***/ "./frontend/components/Category/CategoryComponent.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/Category/CategoryComponent.jsx ***!
  \************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// export class CategoryComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     }
//     // this.resize = this.resize.bind(this);
//     // this.navigateUserClick = this.navigateUserClick.bind(this);
//   }
//   componentDidMount() {
//
//   }
//   shuffle(array) {
//     var currentIndex = array.length;
//     var temporaryValue, randomIndex;
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
//     return array;
//   };

var CategoryComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CategoryComponent, _React$Component);

  function CategoryComponent(props) {
    var _this;

    _classCallCheck(this, CategoryComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CategoryComponent).call(this, props));
    _this.state = {
      users: []
    };
    _this.resize = _this.resize.bind(_assertThisInitialized(_this));
    _this.navigateUserClick = _this.navigateUserClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CategoryComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
      this.props.getCategoriesInfo();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "navigateUserClick",
    value: function navigateUserClick(destination) {
      var _this2 = this;

      return function () {
        _this2.props.history.push("/".concat(destination));
      };
    }
  }, {
    key: "resize",
    value: function resize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
    }
  }, {
    key: "render",
    value: function render() {
      var flexContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap' // justifyContent: 'space-around'

      };
      var flexItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '33vw',
        maxHeight: '400px',
        width: '20vw',
        maxWidth: '242px',
        minHeight: '200px',
        minWidth: '121px',
        margin: '0px 5px',
        boxSizing: 'border-box',
        backgroundColor: '#0f0e11',
        cursor: 'pointer' // position: 'relative',
        // border: 'solid 1px white',

      };
      var flexPictureStyle = {
        height: '80%',
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: '4px'
      };
      var flexDescriptionStyle = {
        height: '20%',
        width: '100%',
        boxSizing: 'border-box',
        // border: 'solid 1px black',
        fontWeight: 'bold',
        marginTop: '4px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
      };
      var viewerShipStyle = {
        marginTop: '2px',
        fontWeight: '300',
        fontSize: '13px'
      };
      var listStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '20px'
      };
      var recommendedStyle = {
        color: '#dad8de',
        fontSize: '16px',
        marginBottom: '15px',
        marginLeft: '5px'
      };
      var elementStyle = {
        display: 'flex',
        flexGrow: '1',
        flexDirection: 'column',
        height: '40vw',
        maxHeight: '300px',
        margin: '0px 10px',
        boxSizing: 'border-box',
        backgroundColor: '#0f0e11',
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '4px'
      };
      var streamUsername = {
        minWidth: '0px',
        color: '#b8b5c0',
        fontSize: '11px',
        marginBottom: '4px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'absolute',
        fontWeight: 'Bold' // top: '80%',
        // left: '50%',
        // transform: 'translateX(-50%)'

      };
      var regularIcon = {
        // borderRadius: '1000px',
        width: '90px',
        height: '90px',
        margin: '15px auto'
      };
      var miniIcon = {
        borderRadius: '1000px',
        width: '40px',
        height: '40px'
      };
      var changeValue;
      var displayCategoriesKeys = [];

      if (this.props.categories) {
        displayCategoriesKeys = Array.from(Object.keys(this.props.categories));
      }

      var categoryItems = [];

      for (var category in this.props.categories) {
        var catObj = this.props.categories[category];
        var newStyle = Object.assign({}, flexPictureStyle); // newStyle['border'] = 'solid 1px white'

        newStyle['backgroundImage'] = "url(".concat(catObj.picture, ")");
        newStyle['backgroundSize'] = 'contain';
        newStyle['backgroundPosition'] = 'top center';
        newStyle['backgroundRepeat'] = 'no-repeat';
        categoryItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: category,
          style: flexItemStyle
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: newStyle,
          onClick: this.navigateUserClick(category)
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: flexDescriptionStyle
        }, category, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: viewerShipStyle
        }, "".concat(Math.floor(Math.random() * 10), "k viewers")))));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: flexContainerStyle
      }, categoryItems));
    }
  }]);

  return CategoryComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./frontend/components/Category/CategoryContainer.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/Category/CategoryContainer.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_category_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/category_actions */ "./frontend/actions/category_actions.js");
/* harmony import */ var _CategoryComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CategoryComponent */ "./frontend/components/Category/CategoryComponent.jsx");







var msp = function msp(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    categories: state.entities.categories
  };
};

var mdp = function mdp(dispatch) {
  return {
    getUsers: function getUsers(request) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["getUsers"])(request));
    },
    getCategoriesInfo: function getCategoriesInfo(request) {
      return dispatch(Object(_actions_category_actions__WEBPACK_IMPORTED_MODULE_4__["getCategoriesInfo"])(request));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_CategoryComponent__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"])));

/***/ }),

/***/ "./frontend/components/Channel/ChannelComponent.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/Channel/ChannelComponent.jsx ***!
  \**********************************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects.css */ "./frontend/components/Channel/effects.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_effects_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ChannelComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChannelComponent, _React$Component);

  function ChannelComponent(props) {
    var _this;

    _classCallCheck(this, ChannelComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChannelComponent).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.followClick = _this.followClick.bind(_assertThisInitialized(_this));
    _this.user = {};
    return _this;
  }

  _createClass(ChannelComponent, [{
    key: "handleClick",
    value: function handleClick(destination) {
      var _this2 = this;

      return function () {
        // if (this.props.location.pathname === `/${destination}`) return;
        if (_this2.props.location.pathname === "/users/".concat(_this2.props.match.params.username, "/").concat(destination)) return;

        _this2.props.history.push("/users/".concat(_this2.props.match.params.username, "/").concat(destination));
      };
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (nextProps.match.params.username !== this.props.match.params.username) {
        this.props.getUserByName(nextProps.match.params.username).then(function (action) {
          _this3.sendObj = Object.assign({}, action.user);
          _this3.sendObj.follow = 'followee';

          _this3.props.showFollows(_this3.sendObj);

          _this3.props.receiveChannel(action.user.id);
        }).fail(function () {
          _this3.props.history.push("/");
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      this.props.getUserByName(this.props.match.params.username).then(function (action) {
        _this4.sendObj = Object.assign({}, action.user);
        _this4.sendObj.follow = 'followee';

        _this4.props.showFollows(_this4.sendObj);

        _this4.props.receiveChannel(action.user.id);
      }).fail(function () {
        _this4.props.history.push("/");
      });
    }
  }, {
    key: "toggleModal",
    value: function toggleModal(formType) {
      var _this5 = this;

      return function () {
        _this5.props.loginModal(!_this5.props.modalStatus, formType);
      };
    }
  }, {
    key: "followClick",
    value: function followClick(e) {
      var followee_id = null;
      var follower_id = null;

      if (this.props.currentUser) {
        followee_id = this.props.channelUser.id;
        follower_id = this.props.currentUser.id;
      }

      if (followee_id === follower_id && followee_id && follower_id) {
        return;
      }

      if (this.props.currentUser && !this.props.follows.currentChannel[this.props.currentUser.id]) {
        this.props.createFollow({
          followee_id: followee_id,
          follower_id: follower_id
        });
      } else if (this.props.currentUser && this.props.follows.currentChannel[this.props.currentUser.id]) {
        this.props.destroyFollow({
          followee_id: followee_id,
          follower_id: follower_id
        });
      } else {
        this.toggleModal('login')();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var topBarStyle = {
        height: '37px',
        width: '100vw',
        backgroundColor: '#19171c',
        borderBottom: 'solid 1px #252328',
        // borderLeft: 'solid 1px #252328',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '20px',
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: '13px',
        color: '#b19dd8',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        top: '49px',
        zIndex: '1'
      };
      var listContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        lineHeight: '38px'
      };
      var userContainer = {
        cursor: 'pointer'
      };
      var imageContainer = {
        borderBottom: 'solid 4px #6441a4',
        height: '37px',
        width: '40px'
      };
      var imageElement = {
        borderRadius: '20px',
        height: '33px',
        width: '33px',
        marginLeft: '2px',
        marginTop: '2px',
        // border: 'solid 1px grey',
        overflow: 'hidden'
      };
      var usernameElement = {
        color: '#dad8de',
        height: '37px',
        marginLeft: '7px',
        paddingRight: '20px',
        borderRight: 'solid 1px #252328',
        cursor: 'pointer'
      };
      var followerElement = {
        height: '37px',
        display: 'flex',
        flexDirection: 'row',
        padding: '0px 15px',
        borderRight: 'solid 1px #252328'
      };
      var followingElement = {
        height: '37px',
        display: 'flex',
        flexDirection: 'row',
        padding: '0px 15px'
      };
      var followText = {
        margin: '0px 5px',
        fontSize: '14px'
      };
      var numberText = {
        paddingRight: '4px',
        color: '#868092',
        fontSize: '14px'
      };
      var followButton = {
        width: '82px',
        height: '30px',
        padding: '5px 10px',
        borderRadius: '5px',
        marginRight: '100px',
        boxSizing: 'border-box',
        marginTop: '3px'
      };
      var heartIconContainer = {
        // borderRadius: '20px',
        height: '18px',
        width: '18px',
        "float": 'left',
        marginTop: '1px',
        marginRight: '6px',
        marginLeft: '2px'
      };
      var heartIcon = {
        display: 'inline',
        margin: '0 auto',
        // marginLeft: '-25%',
        height: '100%',
        width: 'auto'
      };
      var FollowText = {
        fontSize: '11px',
        fontWeight: '500',
        color: 'white',
        lineHeight: '20px'
      };
      var profilePictureStyle = {
        display: 'inline',
        margin: '0 auto',
        // marginLeft: '-25%',
        height: '100%',
        width: 'auto',
        marginBottom: '10px'
      };
      var followButtonId = 'followButton';
      var displayFollowButtonText = true;

      if (this.props.currentUser && this.props.follows.currentChannel[this.props.currentUser.id]) {
        displayFollowButtonText = false;
        followButtonId = 'followButtonSmall';
        followButton['width'] = '43px';
        heartIcon['marginLeft'] = '0px'; // followButton[]
      }

      var displayPicture = false;

      if (this.props.channelUser && this.props.channelUser.picture) {
        displayPicture = true;
        imageElement['border'] = '';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: topBarStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleClick(''),
        style: userContainer
      }, this.props.channelUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: imageElement
      }, this.props.channelUser.picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: profilePictureStyle,
        src: this.props.channelUser.picture
      }), !this.props.channelUser.picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "svgProfileChannel",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleClick(''),
        style: usernameElement
      }, this.props.match.params.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleClick('followers'),
        className: "followHover",
        style: followerElement
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: followText
      }, "Followers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: numberText
      }, this.props.channelFollowers.length || 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleClick('following'),
        className: "followHover",
        style: followingElement
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: followText
      }, "Following"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: numberText
      }, this.props.channelFollowings.length || 0)))), (this.props.channelUser && this.props.currentUser && this.props.currentUser.id !== this.props.channelUser.id || !this.props.currentUser) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: followButtonId,
        style: followButton,
        className: "buttonClass",
        onClick: this.followClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: heartIconContainer
      }, displayFollowButtonText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "followSvg",
        style: heartIcon,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"
      })), !displayFollowButtonText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "followSvg",
        style: heartIcon,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M15.582 19.485c-1.141 1.119-2.345 2.287-3.582 3.515-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.577-.649 3.168-1.742 4.828l-1.447-1.447c.75-1.211 1.189-2.341 1.189-3.381 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.168-2.121 1.414 1.414zm7.418-5.485h-8v2h8v-2z"
      }))), displayFollowButtonText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: FollowText
      }, "Follow")));
    }
  }]);

  return ChannelComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./frontend/components/Channel/ChannelContainer.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/Channel/ChannelContainer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _ChannelComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChannelComponent */ "./frontend/components/Channel/ChannelComponent.jsx");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/ui_actions */ "./frontend/actions/ui_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/follow_actions */ "./frontend/actions/follow_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");








var msp = function msp(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    modalStatus: state.ui.modal,
    follows: state.follows,
    channelUser: state.entities.users[state.ui.channelId],
    channelFollowers: Object.values(state.follows.currentChannel),
    channelFollowings: Object.values(state.follows.currentChannelFollowings)
  };
};

var mdp = function mdp(dispatch) {
  return {
    getUserByName: function getUserByName(username) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__["getUserByName"])(username));
    },
    loginModal: function loginModal(status, formType) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__["toggleLoginModal"])(status, formType));
    },
    createFollow: function createFollow(follow) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_5__["createFollow"])(follow));
    },
    showFollows: function showFollows(user) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_5__["showFollows"])(user));
    },
    destroyFollow: function destroyFollow(follow) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_5__["destroyFollow"])(follow));
    },
    receiveChannel: function receiveChannel(id) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__["receiveChannel"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_ChannelComponent__WEBPACK_IMPORTED_MODULE_3__["ChannelComponent"])));

/***/ }),

/***/ "./frontend/components/Channel/effects.css":
/*!*************************************************!*\
  !*** ./frontend/components/Channel/effects.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/Channel/effects.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/Followings/FolloweesContainer.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/Followings/FolloweesContainer.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _FollowingsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FollowingsComponent */ "./frontend/components/Followings/FollowingsComponent.jsx");





var msp = function msp(state, ownProps) {
  return {
    type: "Followees",
    currentUser: state.entities.users[state.session.id],
    channelUser: state.entities.users[state.ui.channelId],
    users: Object.values(state.follows.currentChannelFollowings)
  };
};

var mdp = function mdp(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(msp, mdp)(_FollowingsComponent__WEBPACK_IMPORTED_MODULE_3__["FollowingsComponent"])));

/***/ }),

/***/ "./frontend/components/Followings/FollowersContainer.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/Followings/FollowersContainer.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _FollowingsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FollowingsComponent */ "./frontend/components/Followings/FollowingsComponent.jsx");





var msp = function msp(state, ownProps) {
  return {
    type: "Followers",
    currentUser: state.entities.users[state.session.id],
    channelUser: state.entities.users[state.ui.channelId],
    users: Object.values(state.follows.currentChannel)
  };
};

var mdp = function mdp(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(msp, mdp)(_FollowingsComponent__WEBPACK_IMPORTED_MODULE_3__["FollowingsComponent"])));

/***/ }),

/***/ "./frontend/components/Followings/FollowingsComponent.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/Followings/FollowingsComponent.jsx ***!
  \****************************************************************/
/*! exports provided: FollowingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingsComponent", function() { return FollowingsComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import 
// import image from '../../../app/assets/images/Combo_Purple_RGB.png';

var FollowingsComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowingsComponent, _React$Component);

  function FollowingsComponent(props) {
    var _this;

    _classCallCheck(this, FollowingsComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FollowingsComponent).call(this, props));
    _this.state = {
      users: []
    };
    _this.resize = _this.resize.bind(_assertThisInitialized(_this));
    _this.navigateUserClick = _this.navigateUserClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FollowingsComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "navigateUserClick",
    value: function navigateUserClick(username) {
      var _this2 = this;

      return function () {
        _this2.props.history.push("/users/".concat(username));
      };
    }
  }, {
    key: "resize",
    value: function resize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
    }
  }, {
    key: "render",
    value: function render() {
      var listStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '20px'
      };
      var recommendedStyle = {
        color: '#dad8de',
        fontSize: '16px',
        marginBottom: '15px',
        marginLeft: '5px'
      };
      var elementStyle = {
        display: 'flex',
        flexGrow: '1',
        flexDirection: 'column',
        height: '160px',
        margin: '0px 5px',
        boxSizing: 'border-box',
        backgroundColor: '#19171c',
        cursor: 'pointer',
        position: 'relative'
      };
      var streamUsername = {
        minWidth: '0px',
        color: '#b8b5c0',
        fontSize: '11px',
        marginBottom: '4px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'absolute',
        fontWeight: 'Bold',
        top: '80%',
        left: '50%',
        transform: 'translateX(-50%)' // left: '38%',
        // margin: '0 auto',

      };
      var regularIcon = {
        borderRadius: '1000px',
        width: '90px',
        height: '90px',
        margin: '15px auto' // position: 'relative'

      };
      var miniIcon = {
        borderRadius: '1000px',
        width: '40px',
        height: '40px'
      };
      var userDivs1 = [];
      var userDivs2 = [];
      var userDivs3 = [];
      var userDivs4 = [];
      var divCounter = 1;

      if (window.innerWidth > 1900) {
        divCounter = 7;
      } else if (window.innerWidth > 1600) {
        divCounter = 6;
      } else if (window.innerWidth > 1300) {
        divCounter = 5;
      } else if (window.innerWidth > 1000) {
        divCounter = 4;
      } else if (window.innerWidth > 600) {
        divCounter = 3;
      } else if (window.innerWidth > 300) {
        divCounter = 2;
      }

      var displayUsers = Array.from(this.props.users);
      var length = displayUsers.length;

      if (displayUsers.length > 1) {
        for (var i = 0; i < divCounter && displayUsers.length > 0; ++i) {
          var user = displayUsers.pop();
          userDivs1.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: user.username,
            style: elementStyle,
            onClick: this.navigateUserClick(user.username)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: user.picture
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamUsername
          }, user.username)));
        }

        for (var _i = 0; _i < divCounter && displayUsers.length > 0; ++_i) {
          var _user = displayUsers.pop();

          userDivs2.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: _user.username,
            style: elementStyle,
            onClick: this.navigateUserClick(_user.username)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: _user.picture
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamUsername
          }, _user.username)));
        }

        for (var _i2 = 0; _i2 < divCounter && displayUsers.length > 0; ++_i2) {
          var _user2 = displayUsers.pop();

          userDivs3.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: _user2.username,
            style: elementStyle,
            onClick: this.navigateUserClick(_user2.username)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: _user2.picture
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamUsername
          }, _user2.username)));
        }

        while (displayUsers.length > 0) {
          var _user3 = displayUsers.pop();

          userDivs4.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: _user3.username,
            style: elementStyle,
            onClick: this.navigateUserClick(_user3.username)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: _user3.picture
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamUsername
          }, _user3.username)));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: recommendedStyle
      }, this.props.type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listStyle
      }, userDivs1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listStyle
      }, userDivs2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listStyle
      }, userDivs3), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listStyle
      }, userDivs4)));
    }
  }]);

  return FollowingsComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./frontend/components/Index/IndexComponent.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/Index/IndexComponent.jsx ***!
  \******************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import
// import image from '../../../app/assets/images/Combo_Purple_RGB.png';

var IndexComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexComponent, _React$Component);

  function IndexComponent(props) {
    var _this;

    _classCallCheck(this, IndexComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndexComponent).call(this, props));
    _this.state = {
      users: []
    };
    _this.resize = _this.resize.bind(_assertThisInitialized(_this));
    _this.navigateUserClick = _this.navigateUserClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IndexComponent, [{
    key: "shuffle",
    value: function shuffle(array) {
      var currentIndex = array.length;
      var temporaryValue, randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = {
        all: true
      };
      this.props.getUsers(request).then(function (action) {
        var users = Object.values(action.users);

        _this2.shuffle(users);

        _this2.setState({
          users: users
        });
      });
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "navigateUserClick",
    value: function navigateUserClick(username) {
      var _this3 = this;

      return function () {
        _this3.props.history.push("/users/".concat(username));
      };
    }
  }, {
    key: "resize",
    value: function resize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var listStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '20px'
      };
      var recommendedStyle = {
        color: '#dad8de',
        fontSize: '16px',
        marginBottom: '15px',
        marginLeft: '5px'
      };
      var elementStyle = {
        display: 'flex',
        flexGrow: '1',
        flexDirection: 'column',
        height: '205px',
        margin: '0px 5px',
        boxSizing: 'border-box',
        backgroundColor: '#19171c',
        cursor: 'pointer'
      };
      var bottomStyle = {
        height: '60px',
        width: '100%',
        marginTop: '25px',
        boxSizing: 'border-box',
        backgroundColor: '#0f0e11',
        paddingTop: '10px',
        display: 'flex',
        flexDirection: 'flex-start',
        cursor: 'default'
      };
      var infoStyle = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '13px',
        overflow: 'hidden',
        marginLeft: '10px',
        width: '100%',
        position: 'relative'
      };
      var streamTitle = {
        minWidth: '0px',
        fontWeight: 'bold',
        marginBottom: '7px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'absolute',
        width: '85%'
      };
      var streamUsername = {
        minWidth: '0px',
        color: '#b8b5c0',
        fontSize: '11px',
        marginBottom: '4px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'absolute',
        top: '20px',
        width: '85%'
      };
      var streamCategory = {
        minWidth: '0px',
        color: '#b8b5c0',
        fontSize: '11px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'absolute',
        top: '35px',
        width: '85%'
      };
      var regularIcon = {
        borderRadius: '1000px',
        width: '90px',
        height: '90px',
        margin: '15px auto'
      };
      var miniIcon = {
        borderRadius: '1000px',
        width: '40px',
        height: '40px'
      };
      var userDivs1 = [];
      var userDivs2 = [];
      var userDivs3 = [];
      var divCounter = 1;

      if (window.innerWidth > 1900) {
        divCounter = 7;
      } else if (window.innerWidth > 1600) {
        divCounter = 6;
      } else if (window.innerWidth > 1300) {
        divCounter = 5;
      } else if (window.innerWidth > 1000) {
        divCounter = 4;
      } else if (window.innerWidth > 600) {
        divCounter = 3;
      } else if (window.innerWidth > 300) {
        divCounter = 2;
      }

      var path = this.props.location.pathname.substring(1);
      var allTags = ['Comp', 'Happy', 'Fun', 'Messing Around', 'Family Friendly', 'Joy Joy', 'Flavor'];
      var displayUsers;
      var IndexTitle = '';

      if (path === '') {
        IndexTitle = 'Just Some Random Channels';
        displayUsers = Array.from(this.state.users);
      } else if (!allTags.includes(path)) {
        IndexTitle = "All channels under Category: ".concat(path);
        var users = this.state.users.filter(function (user) {
          return _this4.props.location.pathname.includes(user.stream_category);
        });
        displayUsers = Array.from(users);
      } else {
        IndexTitle = "All channels with Tag: ".concat(path);

        var _users = this.state.users.filter(function (user) {
          return user.tags.includes(path);
        });

        displayUsers = Array.from(_users);
      }

      if (displayUsers.length >= 1) {
        for (var i = 0; i < divCounter && displayUsers.length > 0; ++i) {
          var user = displayUsers.pop();
          userDivs1.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: user.username,
            style: elementStyle,
            onClick: this.navigateUserClick(user.username)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "backgroundImageForIndex"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: user.picture
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: bottomStyle
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: miniIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: miniIcon,
            src: user.picture
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: infoStyle
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamTitle
          }, user.stream_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamUsername
          }, user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamCategory
          }, user.stream_category)))));
        }

        for (var _i = 0; _i < divCounter && displayUsers.length > 0; ++_i) {
          var _user = displayUsers.pop();

          userDivs2.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: _user.username,
            style: elementStyle,
            onClick: this.navigateUserClick(_user.username)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "backgroundImageForIndex"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: _user.picture
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: bottomStyle
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: miniIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: miniIcon,
            src: _user.picture
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: infoStyle
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamTitle
          }, _user.stream_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamUsername
          }, _user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamCategory
          }, _user.stream_category)))));
        }

        for (var _i2 = 0; _i2 < divCounter && displayUsers.length > 0; ++_i2) {
          var _user2 = displayUsers.pop();

          userDivs3.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: _user2.username,
            style: elementStyle,
            onClick: this.navigateUserClick(_user2.username)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "backgroundImageForIndex"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: _user2.picture
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: bottomStyle
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: miniIcon
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: miniIcon,
            src: _user2.picture
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: infoStyle
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamTitle
          }, _user2.stream_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamUsername
          }, _user2.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: streamCategory
          }, _user2.stream_category)))));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: recommendedStyle
      }, IndexTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listStyle
      }, userDivs1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listStyle
      }, userDivs2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listStyle
      }, userDivs3)));
    }
  }]);

  return IndexComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./frontend/components/Index/IndexContainer.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/Index/IndexContainer.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _IndexComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexComponent */ "./frontend/components/Index/IndexComponent.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");






var msp = function msp(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

var mdp = function mdp(dispatch) {
  return {
    getUsers: function getUsers(request) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["getUsers"])(request));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_IndexComponent__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"])));

/***/ }),

/***/ "./frontend/components/LoginModal/LoginModalComponent.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/LoginModal/LoginModalComponent.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Session_LoginFormContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Session/LoginFormContainer */ "./frontend/components/Session/LoginFormContainer.jsx");
/* harmony import */ var _Session_SignupFormContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Session/SignupFormContainer */ "./frontend/components/Session/SignupFormContainer.jsx");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects.css */ "./frontend/components/LoginModal/effects.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_effects_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var LoginModalComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginModalComponent, _React$Component);

  function LoginModalComponent(props) {
    var _this;

    _classCallCheck(this, LoginModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginModalComponent).call(this, props));
    _this.state = {
      username: "".concat(props.username),
      password: "".concat(props.password)
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.clearModal = _this.clearModal.bind(_assertThisInitialized(_this));
    _this.tabClick = _this.tabClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginModalComponent, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.props.resetErrors();
      if (this.props.formType === 'login') this.props.loginModal(!this.props.modalStatus, 'signup');else this.props.loginModal(!this.props.modalStatus, 'login');
    }
  }, {
    key: "clearModal",
    value: function clearModal(e) {
      if (e.target.id === 'overlay') {
        this.props.resetErrors();
        this.props.loginModal(false, 'login');
      }
    }
  }, {
    key: "tabClick",
    value: function tabClick(e) {
      if (e.target.id === 'loginTab') this.props.loginModal(this.props.modalStatus, 'login');else this.props.loginModal(this.props.modalStatus, 'signup'); // this.setState({
      //   tab: e.target.id
      // })

      this.props.resetErrors();
    }
  }, {
    key: "render",
    value: function render() {
      var leftContainer = (window.innerWidth - 430) / 2;
      var overlay = {
        background: 'rgba(10, 10, 10, 0.6)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '99',
        top: '0'
      };
      var totalBox = {
        // '380 + 20 + 30 + 5'
        width: '460px',
        height: '450px',
        position: 'absolute',
        zIndex: '100',
        top: '25%',
        left: "".concat(leftContainer, "px")
      };
      var formBox = {
        backgroundColor: '#232127',
        zIndex: '99',
        width: '380px',
        height: '420px',
        padding: '30px 20px',
        borderRadius: '4px',
        "float": 'left'
      };
      var xBox = {
        backgroundColor: 'rbga(0, 0, 0, 0.8)',
        width: '30px',
        height: '30px',
        marginLeft: '5px',
        // border: 'solid 1px white',
        "float": 'left',
        cursor: 'pointer'
      };

      if (this.props.modalTab === 'signup') {
        totalBox['height'] = '589px';
        formBox['height'] = '550px';
        totalBox['top'] = '15%';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: overlay,
        id: "overlay",
        onClick: this.clearModal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: totalBox
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: formBox
      }, this.props.modalTab === 'login' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Session_LoginFormContainer__WEBPACK_IMPORTED_MODULE_1__["LoginFormContainer"], {
        tabClick: this.tabClick
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Session_SignupFormContainer__WEBPACK_IMPORTED_MODULE_2__["SignupFormContainer"], {
        tabClick: this.tabClick
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: xBox,
        onClick: this.toggleModal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "svgX",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 -2 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
      })))));
    }
  }]);

  return LoginModalComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginModalComponent);

/***/ }),

/***/ "./frontend/components/LoginModal/LoginModalContainer.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/LoginModal/LoginModalContainer.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoginModalComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginModalComponent */ "./frontend/components/LoginModal/LoginModalComponent.jsx");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./frontend/actions/ui_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");






var msp = function msp(state, ownProps) {
  return {
    user: {
      username: "",
      password: ""
    },
    modalStatus: state.ui.modal,
    modalTab: state.ui.formType
  };
};

var mdp = function mdp(dispatch) {
  return {
    loginModal: function loginModal(status, formType) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__["toggleLoginModal"])(status, formType));
    },
    resetErrors: function resetErrors() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["resetErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_LoginModalComponent__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/LoginModal/effects.css":
/*!****************************************************!*\
  !*** ./frontend/components/LoginModal/effects.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/LoginModal/effects.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/MainBar/MainBarComponent.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/MainBar/MainBarComponent.jsx ***!
  \**********************************************************/
/*! exports provided: MainBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBarComponent", function() { return MainBarComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Video_VideoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video/VideoContainer */ "./frontend/components/Video/VideoContainer.jsx");
/* harmony import */ var _Channel_ChannelContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Channel/ChannelContainer */ "./frontend/components/Channel/ChannelContainer.jsx");
/* harmony import */ var _Index_IndexContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Index/IndexContainer */ "./frontend/components/Index/IndexContainer.jsx");
/* harmony import */ var _Followings_FollowersContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Followings/FollowersContainer */ "./frontend/components/Followings/FollowersContainer.jsx");
/* harmony import */ var _Followings_FolloweesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Followings/FolloweesContainer */ "./frontend/components/Followings/FolloweesContainer.jsx");
/* harmony import */ var _Category_CategoryContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Category/CategoryContainer */ "./frontend/components/Category/CategoryContainer.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import VideoContainer from '../../Video/VideoContainer';
// import VideoContainer from '../../components/Video/Video'








var MainBarComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainBarComponent, _React$Component);

  function MainBarComponent(props) {
    _classCallCheck(this, MainBarComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainBarComponent).call(this, props));
  }

  _createClass(MainBarComponent, [{
    key: "render",
    value: function render() {
      var mainStyle = {
        // float: 'left',
        width: 'calc(100% - 5px)',
        position: 'relative',
        backgroundColor: '#0f0e11',
        boxSizing: 'border-box',
        borderLeft: 'solid 1px #252328',
        overflowY: 'scroll',
        margin: '49px' // overflow: 'hidden'

      };
      var mainContainer = {
        paddingLeft: '20px',
        paddingTop: '20px',
        paddingRight: '49px',
        overflowX: 'hidden'
      };

      if (this.props.location.pathname.includes("/users/")) {
        mainStyle['padding'] = '49px 0px';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: mainStyle,
        id: "mainBarComp"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/users/:username",
        component: _Channel_ChannelContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: mainContainer,
        id: "mainContainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/users/:username",
        component: _Video_VideoContainer__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/users/:username/following",
        component: _Followings_FolloweesContainer__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/users/:username/followers",
        component: _Followings_FollowersContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/directory/",
        component: _Category_CategoryContainer__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        component: _Index_IndexContainer__WEBPACK_IMPORTED_MODULE_4__["default"]
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
    }
  }]);

  return MainBarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
{
  /* <GreetingContainer /> */
}
{
  /* <AuthRoute path="/signup" component={SignupFormContainer} /> */
}
{
  /* <AuthRoute path="/login" component={LoginFormContainer} /> */
}

/***/ }),

/***/ "./frontend/components/MainBar/MainBarContainer.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/MainBar/MainBarContainer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MainBarComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainBarComponent */ "./frontend/components/MainBar/MainBarComponent.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");





var msp = function msp(state, ownProps) {
  var streamKey = null;

  if (state.session.id != null) {
    streamKey = state.entities.users[state.session.id]['stream_key'];
  }

  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    streamKey: streamKey
  };
};

var mdp = function mdp(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_MainBarComponent__WEBPACK_IMPORTED_MODULE_2__["MainBarComponent"])));

/***/ }),

/***/ "./frontend/components/NavBar/NavBarComponent.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/NavBar/NavBarComponent.jsx ***!
  \********************************************************/
/*! exports provided: NavBarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects.css */ "./frontend/components/NavBar/effects.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_effects_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NavBarComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBarComponent, _React$Component);

  function NavBarComponent(props) {
    var _this;

    _classCallCheck(this, NavBarComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavBarComponent).call(this, props));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.logoutCheck = _this.logoutCheck.bind(_assertThisInitialized(_this));
    _this.routeChange = _this.routeChange.bind(_assertThisInitialized(_this));
    _this.resize = _this.resize.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.toggleUserDrop = _this.toggleUserDrop.bind(_assertThisInitialized(_this));
    _this.timeout = null;
    _this.state = {
      searchBar: ''
    };
    return _this;
  }

  _createClass(NavBarComponent, [{
    key: "toggleModal",
    value: function toggleModal(formType) {
      var _this2 = this;

      return function () {
        if (_this2.props.currentUser) return;

        _this2.props.loginModal(!_this2.props.modalStatus, formType);
      };
    }
  }, {
    key: "handleChange",
    value: function handleChange(field) {
      var _this3 = this;

      return function (e) {
        return _this3.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "routeChange",
    value: function routeChange(destination) {
      var _this4 = this;

      return function () {
        if (_this4.props.location.pathname === "/".concat(destination)) return;

        _this4.props.history.push("/".concat(destination));
      };
    }
  }, {
    key: "logoutCheck",
    value: function logoutCheck() {
      if (this.props.currentUser) {
        this.props.logout();
        this.props.clearHalfFollows('logout');
      }
    }
  }, {
    key: "toggleUserDrop",
    value: function toggleUserDrop() {
      this.props.toggleUserDrop(!this.props.userDropDownStatus);
    }
  }, {
    key: "resize",
    value: function resize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "render",
    value: function render() {
      var _visualBoxLeft;

      var navBarStyle = {
        marginTop: '0px',
        marginLeft: '0px',
        backgroundColor: '#4b367c',
        width: '100vw',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1'
      };
      var leftBarStyle = {
        display: 'flex',
        justifyContent: 'flex-start'
      };
      var rightBarStyle = {
        display: 'flex',
        justifyContent: 'flex-end'
      };
      var visualBoxLeft = (_visualBoxLeft = {
        height: '100%',
        lineHeight: '50px',
        fontFamily: 'sans-serif',
        paddingLeft: '5px',
        paddingRight: '6px',
        textAlign: 'center',
        margin: 'auto',
        fontSize: '16px'
      }, _defineProperty(_visualBoxLeft, "height", '48px'), _defineProperty(_visualBoxLeft, "padding", '0px 10px'), _defineProperty(_visualBoxLeft, "borderRadius", '1px'), _visualBoxLeft);
      var visualBoxRight = {
        // height: '100%',
        lineHeight: '50px',
        fontFamily: 'sans-serif',
        paddingLeft: '5px',
        paddingRight: '6px',
        textAlign: 'center',
        margin: 'auto',
        fontSize: '14px',
        color: '#ffffff',
        height: '48px'
      };
      var twitchIconNav = {
        width: '49px',
        height: '100%',
        textAlign: 'center',
        lineHeight: '50px',
        fontFamily: 'sans-serif',
        color: 'white'
      };
      var searchInput = {
        color: '#faf9fa',
        backgroundColor: '#0f0e11',
        borderRadius: '4px',
        paddingLeft: '30px',
        paddingTop: '3px',
        paddingBottom: '3px',
        // margin: 'auto',
        // marginLeft: '50px',
        marginTop: '10px',
        fontSize: '12px',
        height: '22px',
        width: '33%',
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
      };
      var searchIcon = {
        position: 'absolute',
        borderRadius: '20px',
        border: 'solid 1px white',
        height: '10px',
        width: '10px',
        top: '19px',
        left: '250px'
      };
      var twitchPictureStyle = {
        display: 'inline',
        margin: '0 auto',
        // marginLeft: '-25%',
        height: '50%',
        width: '50%' // width: 'auto'

      }; // color: 'rgb(218, 216, 222)',

      {
        /* Add picture-icon here */
      }
      var DiscoverStyle = Object.assign({}, visualBoxLeft);
      var BrowseStyle = Object.assign({}, visualBoxLeft);
      var HowToStyle = Object.assign({}, visualBoxLeft);

      if (this.props.location.pathname === '/') {
        DiscoverStyle['color'] = 'white';
        DiscoverStyle['borderBottom'] = 'solid 1.5px white';
        DiscoverStyle['lineHeight'] = '53.5px';
      } else if (this.props.location.pathname === '/directory') {
        BrowseStyle['color'] = 'white';
        BrowseStyle['borderBottom'] = 'solid 1.5px white';
        BrowseStyle['lineHeight'] = '53.5px';
      } else if (this.props.currentUser && this.props.location.pathname === "/users/".concat(this.props.currentUser.username, "/HowTo")) {
        HowToStyle['color'] = 'white';
        HowToStyle['borderBottom'] = 'solid 1.5px white';
        HowToStyle['lineHeight'] = '53.5px';
      }

      var searchClass = 'regularFocus';
      var barWidth = window.innerWidth;
      var showSearchBar = barWidth <= 835 ? false : true;
      var profilePictureStyle = {
        display: 'inline',
        margin: '0 auto',
        height: '50%',
        width: 'auto',
        borderRadius: '20px',
        marginBottom: '8px'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: navBarStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        style: leftBarStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.routeChange(''),
        className: "buttonClass",
        style: twitchIconNav
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: twitchPictureStyle,
        src: "https://twitch-name-dev.s3-us-west-1.amazonaws.com/GlitchIcon_White_128px.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.routeChange(''),
        className: "buttonClass",
        style: DiscoverStyle
      }, "Discover"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.routeChange('directory'),
        className: "buttonClass",
        style: BrowseStyle
      }, "Browse"), this.props.currentUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.routeChange("users/".concat(this.props.currentUser.username)),
        className: "buttonClass",
        style: HowToStyle
      }, "How To Stream")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        style: rightBarStyle
      }, !this.props.currentUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: visualBoxRight,
        className: "buttonClass",
        onClick: this.toggleModal('login')
      }, "Log In"), !this.props.currentUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: visualBoxRight,
        className: "buttonClass",
        onClick: this.toggleModal('signup')
      }, "Sign Up"), this.props.currentUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: visualBoxRight,
        className: "buttonClass",
        onClick: this.toggleUserDrop
      }, this.props.currentUser.picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: profilePictureStyle,
        src: this.props.currentUser.picture
      }), !this.props.currentUser.picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "svgProfile",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"
      })))));
    }
  }]);

  return NavBarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (NavBarComponent);

/***/ }),

/***/ "./frontend/components/NavBar/NavBarContainer.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/NavBar/NavBarContainer.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/ui_actions */ "./frontend/actions/ui_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/follow_actions */ "./frontend/actions/follow_actions.js");
/* harmony import */ var _NavBarComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBarComponent */ "./frontend/components/NavBar/NavBarComponent.jsx");







var msp = function msp(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    state: state,
    userDropDownStatus: state.ui.userDropDown.status
  };
};

var mdp = function mdp(dispatch) {
  return {
    loginModal: function loginModal(status, formType) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_2__["toggleLoginModal"])(status, formType));
    },
    logout: function logout() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["logout"])());
    },
    toggleUserDrop: function toggleUserDrop(status) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_2__["toggleUserDrop"])(status));
    },
    clearHalfFollows: function clearHalfFollows(status) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["clearHalfFollows"])(status));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(msp, mdp)(_NavBarComponent__WEBPACK_IMPORTED_MODULE_5__["default"])));

/***/ }),

/***/ "./frontend/components/NavBar/effects.css":
/*!************************************************!*\
  !*** ./frontend/components/NavBar/effects.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/NavBar/effects.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/Session/LoginFormContainer.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/Session/LoginFormContainer.jsx ***!
  \************************************************************/
/*! exports provided: LoginFormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormContainer", function() { return LoginFormContainer; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SessionForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionForm */ "./frontend/components/Session/SessionForm.jsx");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./frontend/actions/ui_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/follow_actions */ "./frontend/actions/follow_actions.js");







var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    errors: state.errors,
    formType: 'login',
    loggedIn: state.session.id !== null ? true : false
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    processForm: function processForm(formUser) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["login"])(formUser));
    },
    loginModal: function loginModal(status, formType) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__["toggleLoginModal"])(status, formType));
    },
    resetErrors: function resetErrors() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["resetErrors"])());
    },
    showFollows: function showFollows(user) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["showFollows"])(user));
    },
    getUserById: function getUserById(id) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["getUserById"])(id));
    }
  };
};

var LoginFormContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_SessionForm__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./frontend/components/Session/SessionForm.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/Session/SessionForm.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects.css */ "./frontend/components/Session/effects.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_effects_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var SessionForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SessionForm, _React$Component);

  function SessionForm(props) {
    var _this;

    _classCallCheck(this, SessionForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SessionForm).call(this, props));
    _this.state = {
      username: "",
      password: "",
      day: "",
      month: "January",
      year: "",
      email: ""
    };
    _this.props.formType === 'signup' ? _this.buttonText = "Sign Up" : _this.buttonText = "Log In";
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.demoLogin = _this.demoLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SessionForm, [{
    key: "demoLogin",
    value: function demoLogin() {
      this.setState({
        username: "TestUser",
        password: "123456"
      }, this.handleSubmit);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      if (this.props.errors.session) this.props.resetErrors();

      if (e.target.name === 'day') {
        var dayValue = parseInt(e.target.value, 10);

        if (dayValue === NaN || dayValue > 32 || dayValue < 1) {
          return;
        }
      }

      if (e.target.name === 'year') {
        var yearValue = parseInt(e.target.value, 10);

        if (yearValue === NaN) {
          return;
        }
      }

      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      if (e) e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.resetErrors();
      this.props.processForm(user).then(function (action) {
        _this2.props.loginModal(false, 'login');

        if (_this2.props.formType !== 'signup') {
          _this2.sendObj = Object.assign({}, action.user);
          _this2.sendObj.follow = 'follower';

          _this2.props.showFollows(_this2.sendObj);
        }
      }).fail(function () {// console.log(this.props.errors);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _dobDayStyle;

      var containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        color: 'white'
      };
      var headerStyle = {
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        height: '30px',
        lineHeight: '35px',
        fontWeight: 'bold',
        color: '#dad8de'
      };
      var iconStyle = {
        height: '100%',
        width: '30px',
        marginRight: '8px' // border: 'solid 1px white',

      };
      var errorStyle = {
        backgroundColor: '#322f37',
        height: '42px',
        borderRadius: '8px',
        borderTop: 'solid red 1px',
        borderRight: 'solid red 1px',
        borderBottom: 'solid red 1px',
        borderLeft: 'solid red 5px',
        padding: '5px',
        marginTop: '12px',
        marginBottom: '2px'
      };
      var errorIconStyle = {
        borderRadius: '20px',
        // border: 'solid 1px red',
        height: '22px',
        marginTop: '7px',
        marginLeft: '10px',
        marginRight: '7px',
        width: '22px',
        "float": 'left'
      };
      var errorTextStyle = {
        fontFamily: 'sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#dad8de',
        marginTop: '7px'
      };
      var errorSuggestionStyle = {
        fontFamily: 'sans-serif',
        fontSize: '12px',
        color: '#898395',
        marginTop: '4px'
      };
      var tabsStyle = {
        width: '100%',
        borderBottom: '1px solid hsla(0,0%,100%,.05)',
        height: '30px',
        marginTop: '20px',
        marginBottom: '8px'
      };
      var activeTab = {
        "float": 'left',
        height: '100%',
        borderBottom: 'solid 2px #6441a4',
        width: '60px',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight: '30px',
        fontFamily: 'sans-serif',
        color: '#b19dd8',
        cursor: 'pointer'
      };
      var inActiveTab = {
        "float": 'left',
        height: '100%',
        width: '60px',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight: '30px',
        fontFamily: 'sans-serif',
        color: '#6e6779',
        cursor: 'pointer'
      };
      var usernameLabel = {
        marginTop: '16px',
        marginLeft: '3px',
        display: 'flex',
        justifyContent: 'space-between'
      };
      var passwordLabel = {
        marginTop: '16px',
        marginLeft: '3px',
        display: 'flex',
        justifyContent: 'space-between'
      };
      var labelText = {
        fontFamily: 'sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '20px'
      };
      var usernameInput = {
        color: 'white',
        backgroundColor: '#19171c',
        borderRadius: '4px',
        height: '15px',
        padding: '8px',
        margin: '5px 0px',
        fontSize: '12px'
      };
      var passwordInput = {
        color: 'white',
        backgroundColor: '#19171c',
        borderRadius: '4px',
        height: '15px',
        padding: '8px',
        margin: '4px 0px',
        fontSize: '12px'
      };
      var errorFormIcon = {
        borderRadius: '20px',
        // border: 'solid 1px red',
        height: '10px',
        marginTop: '7px',
        marginLeft: '10px',
        marginRight: '7px',
        width: '10px',
        "float": 'left'
      };
      var buttonStyle = {
        backgroundColor: '#6441a4',
        border: '0px',
        color: 'white',
        height: '30px',
        textAlign: 'center',
        lineHeight: '10px',
        marginTop: '20px',
        borderRadius: '4px',
        fontSize: '13px',
        width: '100%'
      };
      var dobContainer = {
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column'
      };
      var dobTop = {
        display: 'flex',
        justifyContent: 'space-between'
      };
      var dobLabel = {
        marginTop: '16px',
        marginLeft: '3px',
        display: 'flex',
        justifyContent: 'space-between'
      };
      var dobBottom = {
        display: 'flex',
        justifyContent: 'space-between'
      };

      var dobMonthStyle = _defineProperty({
        color: 'white',
        backgroundColor: '#19171c',
        borderRadius: '4px',
        height: '15px',
        padding: '8px',
        margin: '4px 0px',
        fontSize: '12px',
        width: '55%'
      }, "height", '100%');

      var dobDayStyle = (_dobDayStyle = {
        color: 'white',
        backgroundColor: '#19171c',
        borderRadius: '4px',
        height: '15px',
        padding: '8px',
        marginTop: '4px',
        marginBottom: '4px',
        fontSize: '12px',
        width: '17.5%'
      }, _defineProperty(_dobDayStyle, "height", '100%'), _defineProperty(_dobDayStyle, "marginLeft", '10px'), _defineProperty(_dobDayStyle, "marginRight", '10px'), _dobDayStyle);

      var dobYearStyle = _defineProperty({
        color: 'white',
        backgroundColor: '#19171c',
        borderRadius: '4px',
        height: '15px',
        padding: '8px',
        margin: '4px 0px',
        fontSize: '12px',
        width: '17.5%'
      }, "height", '100%');

      var emailLabel = {
        marginTop: '16px',
        marginLeft: '3px',
        display: 'flex',
        justifyContent: 'space-between'
      };
      var emailInput = {
        color: 'white',
        backgroundColor: '#19171c',
        borderRadius: '4px',
        height: '15px',
        padding: '8px',
        margin: '5px 0px',
        fontSize: '12px'
      };
      var pClass = {
        marginTop: '15px',
        color: "#898395",
        fontSize: '11px',
        fontFamily: 'sans-serif',
        textAlign: 'center'
      };
      var errorSVG = {
        fill: '#e21212',
        overflow: 'visible' // console.log(this.props);
        // Object.values(this.props.session).map((array) => {
        //   errors.concat(array);
        // });

      };
      var usernameClass = 'regularFocus';
      var passwordClass = 'regularFocus';
      var emailClass = 'regularFocus';
      var dobMonthFocus = 'regularFocus';
      var dobDayFocus = 'regularFocus';
      var dobYearFocus = 'regularFocus';
      var errors = this.props.errors.session;
      var errorsDiv = null;

      if (errors && errors.length > 0) {
        errorsDiv = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: errors
        }, errors);

        if (errors.includes('Username')) {
          usernameClass = 'redFocus';
        } else if (errors.includes('Password')) {
          passwordClass = 'redFocus';
        } else if (errors.includes('Email')) {
          emailClass = 'redFocus';
        } else if (errors.includes('birthday')) {
          dobDayFocus = 'redFocus';
          dobMonthFocus = 'redFocus';
          dobYearFocus = 'redFocus';
        }
      } // <img style={twitchPictureStyle} src="https://twitch-name-dev.s3-us-west-1.amazonaws.com/GlitchIcon_White_128px.png"></img>


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        style: containerStyle,
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: headerStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: iconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: iconStyle,
        src: "https://twitch-name-dev.s3-us-west-1.amazonaws.com/GlitchIcon_White_128px.png"
      })), this.props.formType === 'login' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Log in to Twitch") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Join Twitch today")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: tabsStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.props.formType === 'login' ? activeTab : inActiveTab,
        onClick: this.props.tabClick,
        id: "loginTab"
      }, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.props.formType === 'signup' ? activeTab : inActiveTab,
        onClick: this.props.tabClick,
        id: "signupTab"
      }, "Sign Up")), errors !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: errorSVG,
        width: "50px",
        height: "50px",
        viewBox: "3 3 35 35"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z",
        fillRule: "evenodd"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorTextStyle
      }, errorsDiv), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorSuggestionStyle
      }, "Try not being wrong?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: usernameLabel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: labelText
      }, "Username"), errors && errors.includes("Username") && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorFormIcon
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: errorSVG,
        width: "50px",
        height: "50px",
        viewBox: "17 22 75 57"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z",
        fillRule: "evenodd"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "username",
        style: usernameInput,
        type: "text",
        name: "username",
        onChange: this.handleChange,
        value: this.state.username,
        className: usernameClass
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: passwordLabel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: labelText
      }, "Password"), errors && errors.includes('Password') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorFormIcon
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: errorSVG,
        width: "50px",
        height: "50px",
        viewBox: "17 22 75 57"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z",
        fillRule: "evenodd"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "password",
        style: passwordInput,
        type: "password",
        name: "password",
        onChange: this.handleChange,
        value: this.state.password,
        className: passwordClass
      }), this.props.formType === 'signup' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: dobContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: dobTop
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: labelText
      }, "Date of Birth"), this.props.errors.session == "Signup was incorrect." && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorFormIcon
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: errorSVG,
        width: "50px",
        height: "50px",
        viewBox: "17 22 75 57"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z",
        fillRule: "evenodd"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: dobBottom,
        id: "dobId"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        id: "selectOverride",
        name: "month",
        style: dobMonthStyle,
        className: dobMonthFocus,
        placeholder: "Month",
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Month"
      }, "Month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "January"
      }, "January"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "February"
      }, "February"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "March"
      }, "March"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "April"
      }, "April"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "May"
      }, "May"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "June"
      }, "June"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "July"
      }, "July"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "August"
      }, "August"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "September"
      }, "September"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "October"
      }, "October"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "November"
      }, "November"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "December"
      }, "December")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.day,
        onChange: this.handleChange,
        style: dobDayStyle,
        className: dobDayFocus,
        name: "day",
        placeholder: "Day"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.year,
        onChange: this.handleChange,
        style: dobYearStyle,
        className: dobYearFocus,
        name: "year",
        placeholder: "Year"
      }))), this.props.formType === 'signup' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: emailLabel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: labelText
      }, "Email"), errors && errors.includes('Email') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorFormIcon
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: errorIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: errorSVG,
        width: "50px",
        height: "50px",
        viewBox: "17 22 75 57"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z",
        fillRule: "evenodd"
      }))))), this.props.formType === 'signup' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "emailId",
        style: emailInput,
        type: "email",
        name: "email",
        onChange: this.handleChange,
        value: this.state.email,
        className: emailClass
      }), this.props.formType === 'signup' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: pClass
      }, "By clicking Sign Up, you are indicating that you have read and agree to the Terms of Service and Privacy Policy."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: buttonStyle
      }, " ", this.buttonText, " ")), this.props.formType === 'login' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: buttonStyle,
        onClick: this.demoLogin
      }, " Demo Login "));
    }
  }]);

  return SessionForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SessionForm = Object(radium__WEBPACK_IMPORTED_MODULE_1__["default"])(SessionForm));

/***/ }),

/***/ "./frontend/components/Session/SignupFormContainer.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/Session/SignupFormContainer.jsx ***!
  \*************************************************************/
/*! exports provided: SignupFormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormContainer", function() { return SignupFormContainer; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SessionForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionForm */ "./frontend/components/Session/SessionForm.jsx");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./frontend/actions/ui_actions.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    errors: state.errors,
    formType: 'signup',
    loggedIn: state.session.id !== null ? true : false
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    processForm: function processForm(formUser) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["createNewUser"])(formUser));
    },
    loginModal: function loginModal(status, formType) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__["toggleLoginModal"])(status, formType));
    },
    resetErrors: function resetErrors() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["resetErrors"])());
    }
  };
};

var SignupFormContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_SessionForm__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./frontend/components/Session/effects.css":
/*!*************************************************!*\
  !*** ./frontend/components/Session/effects.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/Session/effects.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/SideBar/SideBarComponent.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/SideBar/SideBarComponent.jsx ***!
  \**********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects.css */ "./frontend/components/SideBar/effects.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_effects_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SideBarComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBarComponent, _React$Component);

  function SideBarComponent(props) {
    var _this;

    _classCallCheck(this, SideBarComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideBarComponent).call(this, props));
    _this.handleFollowClick = _this.handleFollowClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideBarComponent, [{
    key: "handleFollowClick",
    value: function handleFollowClick(followee_name) {
      var _this2 = this;

      return function () {
        // if (this.props.location.pathname === `/${destination}`) return;
        if (_this2.props.location.pathname === "/users/".concat(followee_name, "/")) return;

        _this2.props.history.push("/users/".concat(followee_name, "/"));
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sendObj = Object.assign({}, this.props.currentUser);
      this.sendObj.follow = 'follower';
      this.props.showFollows(this.sendObj);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var sideBarContainer = {
        backgroundColor: '#19171c',
        width: '49px',
        height: '100%',
        "float": 'left',
        borderRight: 'solid 1px #252328',
        position: 'fixed',
        top: '49px',
        left: '0px',
        zIndex: '1'
      };
      var UsersSection = {
        display: 'flex',
        flexDirection: 'column'
      };
      var section = {
        width: '100%',
        borderBottom: 'solid 1px #252328',
        height: '50px'
      };
      var recommendedIcon = {
        // border: 'solid 1px white',
        width: '20px',
        height: '20px',
        margin: '15px 13px' // paddingLeft: '25px'

      };
      var regularIcon = {
        borderRadius: '20px',
        // border: 'solid 1px grey',
        width: '30px',
        height: '30px',
        margin: '10px 5px',
        cursor: 'pointer'
      };
      var svgStyle = {
        margin: '0px 5px',
        marginTop: '7px' // const 

      };
      var followings = [];

      if (this.props.currentUser) {
        followings = this.props.currentUserFollows.map(function (user) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: regularIcon,
            key: user.username,
            onClick: _this3.handleFollowClick(user.username)
          }, user.picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: regularIcon,
            src: user.picture
          }), !user.picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            style: svgStyle,
            id: "svgProfileChannel",
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 24 24"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"
          })));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: sideBarContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: UsersSection
      }, this.props.currentUser && followings.length >= 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: section
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: recommendedIcon
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "svgHeart",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
      })))), this.props.currentUser && followings.length >= 1 && followings, (!this.props.currentUser || followings.length < 1) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: UsersSection
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: section
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: recommendedIcon
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: regularIcon
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: regularIcon
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: regularIcon
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: regularIcon
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: regularIcon
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: regularIcon
      }))));
    }
  }]);

  return SideBarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./frontend/components/SideBar/SideBarContainer.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/SideBar/SideBarContainer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _SideBarComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBarComponent */ "./frontend/components/SideBar/SideBarComponent.jsx");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/follow_actions */ "./frontend/actions/follow_actions.js");






var msp = function msp(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserFollows: Object.values(state.follows.currentUser),
    users: state.entities.users[state.session.id]
  };
};

var mdp = function mdp(dispatch) {
  return {
    showFollows: function showFollows(user) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["showFollows"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_SideBarComponent__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"])));

/***/ }),

/***/ "./frontend/components/SideBar/effects.css":
/*!*************************************************!*\
  !*** ./frontend/components/SideBar/effects.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/SideBar/effects.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/UserDropDown/UserDropDownComponent.jsx":
/*!********************************************************************!*\
  !*** ./frontend/components/UserDropDown/UserDropDownComponent.jsx ***!
  \********************************************************************/
/*! exports provided: UserDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropDownComponent", function() { return UserDropDownComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects.css */ "./frontend/components/UserDropDown/effects.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_effects_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UserDropDownComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserDropDownComponent, _React$Component);

  function UserDropDownComponent(props) {
    var _this;

    _classCallCheck(this, UserDropDownComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserDropDownComponent).call(this, props));
    var status = false;

    if (_this.props.currentUser) {
      status = true;
    }

    _this.state = {
      onlineStatus: status
    };
    _this.timeout = null;
    _this.preventDrop = _this.preventDrop.bind(_assertThisInitialized(_this));
    _this.handleSwitch = _this.handleSwitch.bind(_assertThisInitialized(_this));
    _this.handleLogOut = _this.handleLogOut.bind(_assertThisInitialized(_this));
    _this.handleProfileSwitch = _this.handleProfileSwitch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserDropDownComponent, [{
    key: "preventDrop",
    value: function preventDrop(e) {
      e.stopPropagation();
    }
  }, {
    key: "handleSwitch",
    value: function handleSwitch() {
      var _this2 = this;

      if (this.timeout !== null) return;
      this.timeout = setTimeout(function () {
        _this2.setState({
          onlineStatus: !_this2.state.onlineStatus
        });

        _this2.timeout = null;
      }, 0);
    }
  }, {
    key: "handleLogOut",
    value: function handleLogOut() {
      this.props.toggleUserDrop(!this.props.userDropDownStatus);
      this.props.logout();
    }
  }, {
    key: "handleProfileSwitch",
    value: function handleProfileSwitch() {
      this.props.toggleUserDrop(!this.props.userDropDownStatus);
      if (this.props.location.pathname === "/users/".concat(this.props.currentUser.username, "/")) return;
      this.props.history.push("/users/".concat(this.props.currentUser.username, "/"));
    }
  }, {
    key: "render",
    value: function render() {
      var leftContainer = window.innerWidth - 218;
      var listContainer = {
        height: '170px',
        width: '178px',
        backgroundColor: '#19171c',
        position: 'absolute',
        left: "".concat(leftContainer, "px"),
        top: '48px',
        borderRadius: '4px',
        boxShadow: '0px 0px 1px black',
        border: 'solid 1px #252328',
        fontFamily: 'sans-serif',
        fontSize: '12px',
        color: '#dad8de',
        paddingTop: '10px',
        paddingRight: '10px',
        paddingLeft: '10px',
        zIndex: '98'
      };
      var headerStyle = {
        // padding: '10px',
        marginLeft: '0px',
        height: '50px'
      };
      var imageStyle = {
        borderRadius: '20px',
        // border: '1px solid grey',
        width: '35px',
        height: '35px',
        "float": 'left'
      };
      var userStyle = {
        "float": 'left'
      };
      var usernameStyle = {
        marginTop: '5px',
        marginLeft: '7px',
        fontWeight: 'bold'
      };
      var statusContainer = {
        marginLeft: '7px',
        marginTop: '5px'
      };
      var colorBox = {
        backgroundColor: '#898395',
        width: '6px',
        height: '6px',
        "float": 'left',
        marginTop: '5px'
      };
      var statusText = {
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        color: '#898395',
        fontSize: '12px',
        marginLeft: '10px',
        paddingTop: '1px'
      };
      var onlineContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0px 5px'
      };
      var labelClassStyle = {
        marginRight: '5px'
      };
      var OnlineStyle = {
        marginTop: '4px'
      };
      var channelStyle = {
        marginTop: '14px',
        borderTop: 'solid 1px #252328',
        borderBottom: 'solid 1px #252328',
        width: '178px'
      };
      var channelIconStyle = {
        borderRadius: '10px',
        // border: '1px solid grey',
        "float": 'left',
        marginRight: '5px',
        width: '10px',
        height: '10px'
      };
      var listRowTop = {
        marginTop: '8px',
        marginBottom: '5px',
        padding: '7px 4px'
      };
      var listRow = {
        marginBottom: '8px',
        padding: '7px 4px'
      };
      var LogOutContainerStyle = {
        marginTop: '5px',
        width: '178px'
      };
      var regularIcon = {
        borderRadius: '20px',
        // border: 'solid 1px grey',
        width: '30px',
        height: '30px',
        margin: '10px 5px'
      };
      var channelIconDrop = {
        // marginBottom: ''
        // marginBottom: '200px'
        display: 'block',
        margin: '0 auto'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: listContainer,
        onClick: this.preventDrop
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: headerStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: imageStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: imageStyle,
        src: this.props.currentUser.picture
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: userStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: usernameStyle
      }, this.props.currentUser.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: statusContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: colorBox
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: statusText
      }, this.state.onlineStatus ? 'Online' : 'Offline')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: onlineContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: OnlineStyle
      }, "Show Offline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: labelClassStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "switch",
        onClick: this.handleSwitch
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "slider round"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: channelStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleProfileSwitch,
        className: "ListElement",
        style: listRowTop
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: channelIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        overflow: "visible",
        className: "svgReverse",
        width: "24",
        height: "24",
        viewBox: "5 0 48 48",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Channel"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: LogOutContainerStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleLogOut,
        className: "ListElement",
        style: listRowTop
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: channelIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        overflow: "visible",
        className: "svgReverse",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "5 0 48 48"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M15 16v5l9-10.062-9-9.938v5c-14.069 1.711-19.348 15.107-10.606 16.981-3.804-2.936 3.251-7.441 10.606-6.981z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Log Out")))));
    }
  }]);

  return UserDropDownComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./frontend/components/UserDropDown/UserDropDownContainer.jsx":
/*!********************************************************************!*\
  !*** ./frontend/components/UserDropDown/UserDropDownContainer.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDropDownComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDropDownComponent */ "./frontend/components/UserDropDown/UserDropDownComponent.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./frontend/actions/ui_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");






var msp = function msp(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    userDropDownStatus: state.ui.userDropDown.status
  };
};

var mdp = function mdp(dispatch) {
  return {
    toggleUserDrop: function toggleUserDrop(status) {
      return dispatch(Object(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__["toggleUserDrop"])(status));
    },
    logout: function logout() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["logout"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_UserDropDownComponent__WEBPACK_IMPORTED_MODULE_0__["UserDropDownComponent"])));

/***/ }),

/***/ "./frontend/components/UserDropDown/effects.css":
/*!******************************************************!*\
  !*** ./frontend/components/UserDropDown/effects.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/UserDropDown/effects.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/Video/VideoComponent.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/Video/VideoComponent.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mediaSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaSource */ "./frontend/components/Video/mediaSource.js");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects.css */ "./frontend/components/Video/effects.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_effects_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Video =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video(props) {
    var _this;

    _classCallCheck(this, Video);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Video).call(this, props));
    _this.timeout = null;
    _this.streamKey = null;
    _this.retry = _this.retry.bind(_assertThisInitialized(_this));
    _this.background = 'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)';
    _this.maxSize = '100%';
    return _this;
  }

  _createClass(Video, [{
    key: "routeChange",
    value: function routeChange(arg) {
      var _this2 = this;

      if (arg === 'category') {
        return function () {
          if (_this2.props.location.pathname === "/".concat(_this2.props.channelUser.stream_category)) return;

          _this2.props.history.push("/".concat(_this2.props.channelUser.stream_category));
        };
      } else {
        return function () {
          if (_this2.props.location.pathname === "/".concat(arg)) return;

          _this2.props.history.push("/".concat(arg));
        };
      }
    }
  }, {
    key: "retry",
    value: function retry(force) {
      var _this3 = this;

      return function (prevProps) {
        // debugger;
        if (force || prevProps.match.params.username !== _this3.props.match.params.username) {
          _this3.props.getUserByName(_this3.props.match.params.username).then(function (action) {
            _this3.props.getCategory(action.user.stream_category);

            _this3.streamKey = action.user.stream_key;
            _this3.streamingUsername = _this3.props.match.params.username;
            var useFake = true;

            if (_this3.props.currentUser && _this3.props.currentUser.id === _this3.props.channelUser.id) {
              useFake = false;
            }

            Object(_mediaSource__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3.props.channelUser, _this3.streamKey, function (result) {
              if (result && _this3.background != 'linear-gradient(black, black)') {
                _this3.background = 'linear-gradient(black, black)';

                _this3.forceUpdate();
              } else if (!result && _this3.background != 'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)') {
                _this3.background = 'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)';

                _this3.forceUpdate();
              }
            }, useFake); // this.timeout = setTimeout(() => {
            //   this.timeout = null;
            // }, 10000);
            // }
          });
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.maxSize = "".concat(document.getElementById('videoContainer').offsetHeight - 2, "px");
      this.retry(true)();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.maxSize = "".concat(document.getElementById('videoContainer').offsetHeight - 2, "px");
      this.retry(false)(prevProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      // const parentStyles = document.getElementById('mainContainer')//.getBoundingClientRect();
      // console.log(parentStyles);
      var maxHeight = window.innerHeight - 20 - 98 - 25;
      var videoContainer = {
        zIndex: '97',
        width: '100%',
        maxHeight: "".concat(maxHeight, "px"),
        backgroundImage: this.background,
        boxSizing: 'border-box'
      };
      var videoStyle = {
        width: '100%',
        maxHeight: "".concat(this.maxSize),
        muted: 'true',
        boxSizing: 'border-box'
      };
      var streamInfoContainer = {
        width: '100%',
        height: '117px',
        borderBottomRightRadius: '6px',
        borderBottomLeftRadius: '6px',
        backgroundColor: '#19171c',
        border: 'solid 1px #252328',
        boxSizing: 'border-box',
        paddingLeft: '10px',
        paddingBottom: '10px',
        paddingTop: '15px'
      };
      var streamInfoValues = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      };
      var streamInfoTitle = {
        fontSize: '16px',
        marginBottom: '15px'
      };
      var streamInfoCategory = {
        marginBottom: '15px',
        fontSize: '14px'
      };
      var streamInfoTagsAndViewsContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
      };
      var streamInfoViewsContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: '15px' // margin: '10px 0px'

      };
      var streamInfoViewImage = {
        marginRight: '7px'
      };
      var streamInfoViewText = {
        fontSize: '14px',
        color: '#7b7687'
      };
      var streamInfoTags = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      };
      var streamInfoImage = {
        width: '60px',
        height: '80px',
        marginRight: '10px',
        "float": 'left'
      };
      var TagStyle = {
        backgroundColor: '#232127',
        border: 'solid 1px #2e2c32',
        boxSizing: 'border-box',
        padding: '4px',
        borderRadius: '4px',
        fontSize: '10px',
        marginRight: '5px' // marginBottom: '4px'

      };
      var streamDebug = {
        marginTop: '20px'
      };
      var debugHeight = window.innerWidth > 500 ? '170px' : '200px';
      var debugInfo = {
        width: '100%',
        height: "".concat(debugHeight),
        borderBottomRightRadius: '6px',
        borderBottomLeftRadius: '6px',
        backgroundColor: '#19171c',
        border: 'solid 1px #252328',
        boxSizing: 'border-box',
        paddingLeft: '10px',
        paddingBottom: '10px',
        paddingTop: '15px'
      };
      var debugTitle = {
        fontWeight: 'bold',
        fontSize: '20px',
        marginBottom: '5px'
      }; // const

      var Tags;

      if (this.props.channelUser) {
        Tags = this.props.channelUser.tags.map(function (tag) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: TagStyle,
            onClick: _this4.routeChange(tag),
            className: "hoverButton"
          }, tag);
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "video-box",
        id: "videoContainer",
        style: videoContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        id: "videoTag",
        style: videoStyle,
        playsInline: true,
        controls: true // width="100%"
        // height="100%"
        ,
        autoPlay: true,
        muted: true // onClick={this.retry(true)}

      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoImage
      }, this.props.channelUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: streamInfoImage,
        src: this.props.categories[this.props.channelUser.stream_category] && this.props.categories[this.props.channelUser.stream_category]['picture']
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoValues
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoTitle
      }, this.props.channelUser && this.props.channelUser.stream_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoCategory,
        "class": "hoverButton",
        onClick: this.routeChange('category')
      }, "Category:", ' ', this.props.channelUser && this.props.channelUser.stream_category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoTagsAndViewsContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoTags
      }, Tags), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoViewsContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoViewImage
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "svgEye",
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamInfoViewText
      }, Math.floor(Math.random() * 10000)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: streamDebug
      }, this.props.currentUser && this.props.channelUser && this.props.currentUser.id == this.props.channelUser.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: debugInfo
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: debugTitle
      }, "How to Stream - exactly the same as twitch.tv, just replace the Stream Key and Server."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To Stream to the logged in channel, you need an application such as OBS (Open Broadcasting Software)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "OBS will take your input feed and output a data stream that can be sent over RTMP to my Centos-Linux / DigitalOcean server."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you're still following, you can use this to live stream to the logged in channel:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Server: \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 rtmp://pitchhost.me:1935/app/", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Current User's Stream Key: \xA0 \xA0 \xA0 \xA0", this.props.users[this.props.currentUser.id].stream_key))));
    }
  }]);

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./frontend/components/Video/VideoContainer.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/Video/VideoContainer.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _VideoComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoComponent */ "./frontend/components/Video/VideoComponent.jsx");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/category_actions */ "./frontend/actions/category_actions.js");







var msp = function msp(state, ownProps) {
  return {
    // currentUser: state.users[state.session.id],
    users: state.entities.users,
    channelUser: state.entities.users[state.ui.channelId],
    currentUser: state.entities.users[state.session.id],
    categories: state.entities.categories
  };
};

var mdp = function mdp(dispatch) {
  return {
    getUserByName: function getUserByName(username) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["getUserByName"])(username));
    },
    getCategory: function getCategory(info) {
      return dispatch(Object(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["getCategory"])(info));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_VideoComponent__WEBPACK_IMPORTED_MODULE_3__["default"])));

/***/ }),

/***/ "./frontend/components/Video/effects.css":
/*!***********************************************!*\
  !*** ./frontend/components/Video/effects.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/Video/effects.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/Video/mediaSource.js":
/*!**************************************************!*\
  !*** ./frontend/components/Video/mediaSource.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hls.js */ "./node_modules/hls.js/dist/hls.js");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _videoSources_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoSources.json */ "./frontend/components/Video/videoSources.json");
var _videoSources_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./videoSources.json */ "./frontend/components/Video/videoSources.json", 1);
// const videoTag = document.getElementById('videoTag');
// const mediaSource = new MediaSource();
// const url = URL.createObjectURL(mediaSource);
// videoTag.src = URL.createObjectURL(mediaSource);
// const videoSourceBuffer = myMediaSource
//   .addSourceBuffer('video/mp4; codecs="avc1.64001e"')



var startup = function startup(user, streamKey, cb, demo) {
  var attemptNum = 0;
  var timeout = null;
  var videoTag = document.getElementById('videoTag');

  if (hls_js__WEBPACK_IMPORTED_MODULE_0___default.a.isSupported()) {
    var hls = new hls_js__WEBPACK_IMPORTED_MODULE_0___default.a({
      enableWorker: false
    });
    hls.attachMedia(videoTag);
    hls.on(hls_js__WEBPACK_IMPORTED_MODULE_0___default.a.Events.MEDIA_ATTACHED, function () {
      //Add hls.loadSource her;
      var attempt = function attempt() {
        hls.loadSource("https://pitchhost.me/live/".concat(streamKey, "/index.m3u8"));
      };

      var demoAttempt = function demoAttempt(source) {
        hls.loadSource(source);
      };

      hls.on(hls_js__WEBPACK_IMPORTED_MODULE_0___default.a.Events.MANIFEST_PARSED, function (event, data) {
        if (videoTag != undefined) {
          videoTag.play();
          cb(true);
        }
      });
      hls.on(hls_js__WEBPACK_IMPORTED_MODULE_0___default.a.Events.ERROR, function (event, data) {
        if (demo && attemptNum < 2) {
          ++attemptNum;
          demoAttempt(_videoSources_json__WEBPACK_IMPORTED_MODULE_1__[user.stream_category]);
        } else if (!demo && attemptNum < 2) {
          ++attemptNum;
          demoAttempt(_videoSources_json__WEBPACK_IMPORTED_MODULE_1__['HowTo']);
        } else {
          cb(false);
          videoTag.pause();
        }
      });
      attempt();
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (startup);

/***/ }),

/***/ "./frontend/components/Video/videoSources.json":
/*!*****************************************************!*\
  !*** ./frontend/components/Video/videoSources.json ***!
  \*****************************************************/
/*! exports provided: Poker, Music, League of Legends, Chatting, NBA 2K20, Madden NFL 20, Overwatch, Fortnite, PUBG, Art, Path of Exile, Dota 2, HowTo, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Poker\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Poker/index.m3u8\",\"Music\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Music/index.m3u8\",\"League of Legends\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/League+of+Legends/index.m3u8\",\"Chatting\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Chatting/index.m3u8\",\"NBA 2K20\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/NBA+2k20/index.m3u8\",\"Madden NFL 20\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Madden+NFL+20/index.m3u8\",\"Overwatch\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Overwatch/index.m3u8\",\"Fortnite\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Fortnite/index.m3u8\",\"PUBG\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/PUBG/index.m3u8\",\"Art\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Art/output.m3u8\",\"Path of Exile\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Path+of+Exile/index.m3u8\",\"Dota 2\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/Dota+2/index.m3u8\",\"HowTo\":\"https://ryan-sabik-bucket.s3-us-west-1.amazonaws.com/index.m3u8\"}");

/***/ }),

/***/ "./frontend/components/root.css":
/*!**************************************!*\
  !*** ./frontend/components/root.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./root.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/components/root.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./frontend/components/root.jsx":
/*!**************************************!*\
  !*** ./frontend/components/root.jsx ***!
  \**************************************/
/*! exports provided: Root, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/AppContainer */ "./frontend/components/App/AppContainer.jsx");
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.css */ "./frontend/components/root.css");
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_root_css__WEBPACK_IMPORTED_MODULE_4__);





var Root = function Root(_ref) {
  var store = _ref.store;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./frontend/components/util/route_util.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/util/route_util.jsx ***!
  \*************************************************/
/*! exports provided: AuthRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var Auth = function Auth(_ref) {
  var Component = _ref.component,
      path = _ref.path,
      loggedIn = _ref.loggedIn,
      exact = _ref.exact;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: path,
    exact: exact,
    render: function render(props) {
      return !loggedIn ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/"
      });
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

var AuthRoute = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, null)(Auth));

/***/ }),

/***/ "./frontend/entry.jsx":
/*!****************************!*\
  !*** ./frontend/entry.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root */ "./frontend/components/root.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./frontend/store/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/user_actions */ "./frontend/actions/user_actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  var store;

  if (window.currentUser) {
    var preloadedState = {
      entities: {
        users: _defineProperty({}, window.currentUser.id, window.currentUser)
      },
      session: {
        id: window.currentUser.id
      }
    };
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState), delete window.currentUser;
  } else {
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } // window.login = login;
  // window.logout = logout;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;


  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store
  }), root);
});

/***/ }),

/***/ "./frontend/reducers/category_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/category_reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_category_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/category_actions */ "./frontend/actions/category_actions.js");


var categoriesReducer = function categoriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState;

  switch (action.type) {
    case _actions_category_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CATEGORIES"]:
      // newState = Object.assign({}, state);
      newState = Object.assign({}, action.info);
      return newState;

    case _actions_category_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CATEGORY"]:
      newState = Object.assign({}, state);
      var title = action.info['title'];
      delete newState[action.info['title']];
      newState[title] = action.info;
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (categoriesReducer);

/***/ }),

/***/ "./frontend/reducers/entities_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/entities_reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users_reducer */ "./frontend/reducers/users_reducer.js");
/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category_reducer */ "./frontend/reducers/category_reducer.js");



var entitiesReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  users: _users_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  categories: _category_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (entitiesReducer);

/***/ }),

/***/ "./frontend/reducers/errors_reducer.js":
/*!*********************************************!*\
  !*** ./frontend/reducers/errors_reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_errors_reducer */ "./frontend/reducers/session_errors_reducer.js");
/* harmony import */ var _missing_data_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missing_data_reducer */ "./frontend/reducers/missing_data_reducer.js");



var errorsReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  missing: _missing_data_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (errorsReducer);

/***/ }),

/***/ "./frontend/reducers/follows_reducer.js":
/*!**********************************************!*\
  !*** ./frontend/reducers/follows_reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/follow_actions */ "./frontend/actions/follow_actions.js");

var defaultState = {
  currentUser: {},
  currentChannel: {},
  currentChannelFollowings: {}
};

var followsReducer = function followsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = null;

  switch (action.type) {
    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_FOLLOW"]:
      newState = Object.assign({}, state); // debugger;

      newState['currentUser'][action.follow.followee.id] = {
        username: action.follow.followee.username,
        picture: action.follow.followee.picture
      };
      newState['currentChannel'][action.follow.follower.id] = {
        username: action.follow.follower.username,
        picture: action.follow.follower.picture
      };
      return newState;

    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_FOLLOWS"]:
      newState = Object.assign({}, state);

      if (action.follows.get_request === 'followee') {
        newState['currentChannel'] = action.follows.users_info;
        newState['currentChannelFollowings'] = action.follows.users_info_for_channel;
      } else {
        newState['currentUser'] = action.follows.users_info;
      }

      return newState;

    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_FOLLOW"]:
      newState = Object.assign({}, state);
      delete newState['currentChannel'][action.follow.follower_id];
      delete newState['currentUser'][action.follow.followee_id];
      return newState;

    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWS"]:
      newState = Object.assign({}, state);
      if (action.status === 'logout') newState['currentUser'] = {};else newState['currentChannel'] = {};
      newState['currentChannelFollowings'] = {};
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (followsReducer);

/***/ }),

/***/ "./frontend/reducers/missing_data_reducer.js":
/*!***************************************************!*\
  !*** ./frontend/reducers/missing_data_reducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user_actions */ "./frontend/actions/user_actions.js");


var missingDataReducer = function missingDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_NO_USER_ERRORS"]:
      var errors = action.errorData.responseJSON.errors;
      return errors;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]:
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (missingDataReducer);

/***/ }),

/***/ "./frontend/reducers/root_reducer.js":
/*!*******************************************!*\
  !*** ./frontend/reducers/root_reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_reducer */ "./frontend/reducers/session_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors_reducer */ "./frontend/reducers/errors_reducer.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities_reducer */ "./frontend/reducers/entities_reducer.js");
/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui_reducer */ "./frontend/reducers/ui_reducer.js");
/* harmony import */ var _follows_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follows_reducer */ "./frontend/reducers/follows_reducer.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  ui: _ui_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  follows: _follows_reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./frontend/reducers/session_errors_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/reducers/session_errors_reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user_actions */ "./frontend/actions/user_actions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var sessionErrorsReducer = function sessionErrorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return null;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ERRORS"]:
      var errors = action.errorsArr.responseJSON.errors;
      if (_typeof(errors) === 'object') errors = errors[0];
      return errors;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]:
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sessionErrorsReducer);

/***/ }),

/***/ "./frontend/reducers/session_reducer.js":
/*!**********************************************!*\
  !*** ./frontend/reducers/session_reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user_actions */ "./frontend/actions/user_actions.js");

var _nullSession = {
  id: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullSession;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      var id = action.user.id;
      return Object.assign({}, {
        id: id
      });

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CURRENT_USER"]:
      return _nullSession;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ERRORS"]:
      return state;

    default:
      return state;
  }
});

/***/ }),

/***/ "./frontend/reducers/ui_reducer.js":
/*!*****************************************!*\
  !*** ./frontend/reducers/ui_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui_actions */ "./frontend/actions/ui_actions.js");

var defaultState = {
  modal: false,
  formType: 'login',
  userDropDown: {
    status: false
  },
  channelId: null
};

var uiModalReducer = function uiModalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState;

  switch (action.type) {
    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_LOGIN_MODAL"]:
      newState = Object.assign({}, state);
      newState['modal'] = action.status;
      newState['formType'] = action.formType;
      return newState;

    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_USER_DROPDOWN"]:
      newState = Object.assign({}, state);
      newState.userDropDown.status = action.status;
      return newState;

    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CHANNEL"]:
      newState = Object.assign({}, state);
      newState.channelId = action.id;
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uiModalReducer);

/***/ }),

/***/ "./frontend/reducers/users_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/users_reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user_actions */ "./frontend/actions/user_actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return Object.assign({}, state, _defineProperty({}, action.user.id, action.user));

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_USER"]:
      return Object.assign({}, state, _defineProperty({}, action.user.id, action.user));

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_USERS"]:
      var newState = Object.assign({}, state);
      var users = Object.values(action.users);

      for (var _i = 0, _users = users; _i < _users.length; _i++) {
        var user = _users[_i];
        newState[user.id] = user;
      }

      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./frontend/store/store.js":
/*!*********************************!*\
  !*** ./frontend/store/store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/root_reducer */ "./frontend/reducers/root_reducer.js");
/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../thunk/thunk */ "./frontend/thunk/thunk.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middleware = [_thunk_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]];

  if (true) {
    middleware = [].concat(_toConsumableArray(middleware), [redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a]);
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, _toConsumableArray(middleware)));
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./frontend/thunk/thunk.js":
/*!*********************************!*\
  !*** ./frontend/thunk/thunk.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var thunk = function thunk(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./frontend/utils/utils.js":
/*!*********************************!*\
  !*** ./frontend/utils/utils.js ***!
  \*********************************/
/*! exports provided: postUser, fetchUserByName, fetchUserById, postSession, deleteSession, postFollow, getFollows, deleteFollow, fetchUsers, fetchCategories, fetchCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postUser", function() { return postUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserByName", function() { return fetchUserByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserById", function() { return fetchUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSession", function() { return postSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSession", function() { return deleteSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFollow", function() { return postFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollows", function() { return getFollows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFollow", function() { return deleteFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategories", function() { return fetchCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategory", function() { return fetchCategory; });
var token = document.getElementsByName('csrf-token')[0].content;
var postUser = function postUser(user) {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {
      user: user
    }
  });
};
var fetchUserByName = function fetchUserByName(username) {
  return $.ajax({
    url: "/api/users/".concat(username),
    method: 'GET'
  });
};
var fetchUserById = function fetchUserById(id) {
  return $.ajax({
    url: "/api/users/".concat(id),
    method: 'GET',
    data: {
      id_get: true
    }
  });
};
var postSession = function postSession(user) {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {
      user: user
    }
  });
};
var deleteSession = function deleteSession() {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
var postFollow = function postFollow(follow) {
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: {
      follow: follow
    }
  });
};
var getFollows = function getFollows(user) {
  return $.ajax({
    url: "/api/follows/".concat(user.id),
    method: 'GET',
    data: {
      user: user
    }
  });
};
var deleteFollow = function deleteFollow(follow) {
  return $.ajax({
    url: '/api/follows/0',
    method: 'DELETE',
    data: {
      follow: follow
    }
  });
};
var fetchUsers = function fetchUsers(request) {
  return $.ajax({
    url: '/api/users',
    method: 'GET',
    data: {
      request: request
    }
  });
};
var fetchCategories = function fetchCategories(request) {
  return $.ajax({
    url: '/categories/',
    method: 'GET'
  });
};
var fetchCategory = function fetchCategory(title) {
  return $.ajax({
    url: "/categories/".concat(title),
    method: 'GET'
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/Channel/effects.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/Channel/effects.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".followHover {\n  border-bottom: solid 4px rgb(100, 65, 164, 0.0);\n  transition: border-bottom .2s;\n}\n.followHover:hover {\n  border-bottom: solid 4px rgb(100, 65, 164, 0.5);\n  border-radius: 1px;\n  cursor: pointer;\n}\n\n#followButton {\n  background-color: #6441a4\n}\n\n#followButton:hover {\n  background-color: #7d5bbe\n}\n\n#followButtonSmall {\n  background-color: #322f37;\n}\n\n#followButtonSmall:hover {\n  background-color: #bd0f0f;\n}\n\n#followSvg {\n  filter: invert(100%);\n}\n\n#svgProfileChannel {\n  filter: invert(100%);\n  margin-top: 7px;\n  margin-left: 3px;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/LoginModal/effects.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/LoginModal/effects.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#svgX {\n  filter: invert(100%);\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/NavBar/effects.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/NavBar/effects.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".regularFocus {\n  border: solid 1px #392e5c;\n}\n.regularFocus:focus {\n  box-shadow: 0px 0px 6px -2px #7d5bbe;\n  border-color: #7d5bbe;\n}\n\n.buttonClass {\n  cursor: pointer;\n  color: #9480be;\n}\n.buttonClass:hover {\n  color: #ffffff;\n}\n\n.userButtons {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  height: 50%;\n  width: 100%;\n  border: solid 1px white;\n  border-radius: 4px;\n  text-align: center;\n}\n\n#svgProfile {\n  filter: invert(100%);\n  /* top: 1px; */\n  margin-top: 10px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/Session/effects.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/Session/effects.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".regularFocus {\n  border: solid 1px #392e5c;\n}\n.regularFocus:focus {\n  box-shadow: 0px 0px 6px -2px #7d5bbe;\n  border-color: #7d5bbe;\n}\n\n.redFocus {\n  border: solid 2px red;\n}\n.redFocus:focus {\n  box-shadow: 0px 0px 6px -2px #e21212;\n  border-color: #e21212;\n  /* border: solid 1px red; */\n}\n\n#selectOverride {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/SideBar/effects.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/SideBar/effects.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#svgHeart {\n  filter: invert(100%);\n  margin-top: -1px;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/UserDropDown/effects.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/UserDropDown/effects.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color:#575260;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\ninput:hover + .slider {\n  box-shadow: 0 0 1px #4b367c;\n}\ninput:hover + .slider {\n  background-color: #4b367c;\n}\n\ninput:checked + .slider {\n  background-color: #14b866;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #14b866;\n}\n\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.ListElement:hover {\n  cursor: pointer;\n  background-color: #4b367c;\n  border-radius: 6px;\n}\n\n.svgReverse {\n  filter: invert(100%);\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/Video/effects.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/Video/effects.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#svgEye {\n  filter: invert(100%);\n  /* top: 1px; */\n  margin-top: -1px;\n}\n\n.hoverButton:hover {\n  cursor: pointer;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/components/root.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/components/root.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#root {\n  width: 100vw;\n  height: 100vh;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/css-loader/dist/runtime/api.js'");

/***/ }),

/***/ "./node_modules/hls.js/dist/hls.js":
/*!*****************************************!*\
  !*** ./node_modules/hls.js/dist/hls.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/hls.js/dist/hls.js'");

/***/ }),

/***/ "./node_modules/radium/es/index.js":
/*!*****************************************!*\
  !*** ./node_modules/radium/es/index.js ***!
  \*****************************************/
/*! exports provided: default, Plugins, Style, StyleRoot, getState, keyframes */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/radium/es/index.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter, __RouterContext, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/react-router-dom/esm/react-router-dom.js'");

/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter, __RouterContext */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/react-router/esm/react-router.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/redux-logger/dist/redux-logger.js'");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/redux/es/redux.js'");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/joe/xnet/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map