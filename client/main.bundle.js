webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<h1>\n  Welcome to {{title}}!\n\n</h1>\n<nav>\n  <a routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n  <a routerLink=\"/addItem\" routerLinkActive=\"active\">Add Item</a>\n</nav>\n\n<router-outlet></router-outlet>\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CPS Pro';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_item_add_item_component__ = __webpack_require__("../../../../../src/app/components/add-item/add-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cps_service__ = __webpack_require__("../../../../../src/app/services/cps.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'addItem', component: __WEBPACK_IMPORTED_MODULE_4__components_add_item_add_item_component__["a" /* AddItemComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_add_item_add_item_component__["a" /* AddItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_cps_service__["a" /* CpsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Add Item Compenent\n</h3>\n\n<form [formGroup]=\"addItemForm\" (ngSubmit)=\"onSubmit()\">\n  <div>\n\n    <!-- itemCategory -->\n    <div>\n      <md-input-container>\n        <input mdInput placeholder=\"Category\" formControlName=\"itemCategory\">\n      </md-input-container>\n    </div>\n\n    <!-- itemSubCategory -->\n    <div>\n      <md-input-container>\n        <input mdInput placeholder=\"Sub-Category\" formControlName=\"itemSubCategory\">\n      </md-input-container>\n    </div>\n\n    <!-- itemName -->\n    <div>\n      <md-input-container>\n        <input mdInput placeholder=\"Name\" formControlName=\"itemName\">\n      </md-input-container>\n    </div>\n\n    <!-- itemDescription -->\n    <div>\n      <md-input-container>\n        <textarea mdInput placeholder=\"Description\" formControlName=\"itemDescription\"></textarea>\n      </md-input-container>\n    </div>\n\n\n\n    <!-- itemVariables -->\n    <span formArrayName=\"itemVariables\">\n      <span *ngFor=\"let itemVariables of addItemForm.controls['itemVariables'].controls; let i = index\">\n        <md-input-container>\n        <input mdInput placeholder=\"variable name\" type=\"text\" formControlName=\"{{i}}\">\n        </md-input-container>\n      </span>\n    </span>\n\n\n    <!-- itemVariables -->\n    <span formArrayName=\"itemVariablesValues\">\n      <span *ngFor=\"let itemVariablesValues of addItemForm.controls['itemVariablesValues'].controls; let i = index\">        \n        <md-input-container>\n        <input mdInput placeholder=\"variable value\" type=\"text\" formControlName=\"{{i}}\">\n        </md-input-container>\n        <button md-raised-button color=\"accent\" type=\"button\" (click)=\"removeVariable(i)\">Remove</button>      \n      </span>\n    </span>\n\n\n  </div>\n  <button md-raised-button color=\"primary\" type=\"button\" (click)=\"addVariable()\">Add Variable</button>\n  <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!addItemForm.valid\">Submit</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cps_service__ = __webpack_require__("../../../../../src/app/services/cps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddItemComponent = (function () {
    function AddItemComponent(formBuilder, cpsService, router) {
        this.formBuilder = formBuilder;
        this.cpsService = cpsService;
        this.router = router;
        this.addItemForm = formBuilder.group({
            'itemCategory': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            'itemSubCategory': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            'itemName': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            'itemDescription': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            'itemVariables': formBuilder.array([['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]]),
            'itemVariablesValues': formBuilder.array([['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]])
        });
    }
    AddItemComponent.prototype.removeVariable = function (index) {
        this.addItemForm.controls['itemVariables'].removeAt(index);
        this.addItemForm.controls['itemVariablesValues'].removeAt(index);
    };
    AddItemComponent.prototype.addVariable = function () {
        this.addItemForm.controls['itemVariables'].push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
        this.addItemForm.controls['itemVariablesValues'].push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
    };
    AddItemComponent.prototype.onSubmit = function () {
        var _this = this;
        //format the data to db model
        var newItemData = this.addItemForm.value;
        //form variable array object
        if (newItemData.itemVariables.length) {
            var variableObjectArray = [];
            for (var i = 0; i < newItemData.itemVariables.length; i++) {
                variableObjectArray.push({ "variableName": newItemData.itemVariables[i], "variableValues": newItemData.itemVariablesValues[0].split(',') });
            }
            newItemData.variables = variableObjectArray;
        }
        delete newItemData.itemVariables;
        delete newItemData.itemVariablesValues;
        //temporary item ID, server will replace this with proper ID
        newItemData.itemId = "temp";
        console.log(newItemData);
        //post the data to the server
        this.cpsService.saveItem(newItemData).subscribe(function (response) {
            console.log("response: " + JSON.stringify(response));
            _this.router.navigateByUrl('/');
        });
    };
    return AddItemComponent;
}());
AddItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-add-item',
        template: __webpack_require__("../../../../../src/app/components/add-item/add-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-item/add-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cps_service__["a" /* CpsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cps_service__["a" /* CpsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddItemComponent);

var _a, _b, _c;
//# sourceMappingURL=add-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/cps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CpsService = (function () {
    function CpsService(http) {
        this.http = http;
        //this.cpsServerUrl= "http://127.0.0.1:3000/";
        this.cpsServerUrl = "https://cpspro.herokuapp.com/";
        this.saveItemService = "item/save";
    }
    CpsService.prototype.saveItem = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        console.log(this.cpsServerUrl + this.saveItemService);
        return this.http.post(this.cpsServerUrl + this.saveItemService, body, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    return CpsService;
}());
CpsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CpsService);

var _a;
//# sourceMappingURL=cps.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map