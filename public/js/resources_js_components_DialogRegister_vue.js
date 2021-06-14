(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_DialogRegister_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogRegister.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogRegister.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: "",
      email: "",
      showPassword: false,
      password1: "",
      password2: "",
      apiDomain: "http://localhost:8000"
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    setAlert: "alert/set"
  })), {}, {
    close: function close() {
      this.$emit("closed", false);
    },
    register: function register() {
      var _this = this;

      //   let formData = new FormData();
      //   formData.append("name", this.name);
      //   formData.append("email", this.email);
      //   formData.append("password", this.password1);
      //   formData.append("password_confirmation", this.password2);
      var config = {
        method: "post",
        url: "http://localhost:8000/api/auth/register",
        data: {
          name: this.name,
          email: this.email,
          password: this.password1,
          password_confirmation: this.password2
        }
      };
      this.axios(config).then(function (response) {
        console.log(response.data);

        _this.setAlert({
          status: true,
          color: "success",
          text: "Register Berhasil"
        });

        _this.close();
      })["catch"](function (response) {
        console.log(response);

        _this.setAlert({
          status: true,
          color: "error",
          text: "Login Gagal"
        });
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/components/DialogRegister.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/DialogRegister.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogRegister_vue_vue_type_template_id_1ffb9494___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogRegister.vue?vue&type=template&id=1ffb9494& */ "./resources/js/components/DialogRegister.vue?vue&type=template&id=1ffb9494&");
/* harmony import */ var _DialogRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogRegister.vue?vue&type=script&lang=js& */ "./resources/js/components/DialogRegister.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DialogRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DialogRegister_vue_vue_type_template_id_1ffb9494___WEBPACK_IMPORTED_MODULE_0__.render,
  _DialogRegister_vue_vue_type_template_id_1ffb9494___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DialogRegister.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DialogRegister.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/DialogRegister.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogRegister.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/DialogRegister.vue?vue&type=template&id=1ffb9494&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/DialogRegister.vue?vue&type=template&id=1ffb9494& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogRegister_vue_vue_type_template_id_1ffb9494___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogRegister_vue_vue_type_template_id_1ffb9494___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogRegister_vue_vue_type_template_id_1ffb9494___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogRegister.vue?vue&type=template&id=1ffb9494& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogRegister.vue?vue&type=template&id=1ffb9494&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogRegister.vue?vue&type=template&id=1ffb9494&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogRegister.vue?vue&type=template&id=1ffb9494& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-toolbar",
        { attrs: { dark: "", color: "success" } },
        [
          _c(
            "v-btn",
            {
              attrs: { icon: "", dark: "" },
              nativeOn: {
                click: function($event) {
                  return _vm.close.apply(null, arguments)
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-close")])],
            1
          ),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("Register")])
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-form",
            { ref: "form" },
            [
              _c("v-text-field", {
                attrs: {
                  label: "Name",
                  required: "",
                  "append-icon": "mdi-account"
                },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "Email",
                  required: "",
                  "append-icon": "mdi-email"
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
                  type: _vm.showPassword ? "text" : "password",
                  label: "Password",
                  counter: ""
                },
                on: {
                  "click:append": function($event) {
                    _vm.showPassword = !_vm.showPassword
                  }
                },
                model: {
                  value: _vm.password1,
                  callback: function($$v) {
                    _vm.password1 = $$v
                  },
                  expression: "password1"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
                  type: _vm.showPassword ? "text" : "password",
                  label: "Confirm Password",
                  counter: ""
                },
                on: {
                  "click:append": function($event) {
                    _vm.showPassword = !_vm.showPassword
                  }
                },
                model: {
                  value: _vm.password2,
                  callback: function($$v) {
                    _vm.password2 = $$v
                  },
                  expression: "password2"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-xs-center" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "success lighten-1" },
                      on: { click: _vm.register }
                    },
                    [
                      _vm._v("\n          Register\n          "),
                      _c("v-icon", { attrs: { right: "", dark: "" } }, [
                        _vm._v("mdi-lock-open")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);