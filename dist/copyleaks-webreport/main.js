(self["webpackChunkcopyleaks_webreport"] = self["webpackChunkcopyleaks_webreport"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_cabox_workspace_copyleaks_webreport_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _copyleaks_plagiarism_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @copyleaks/plagiarism-report */ 4414);
/* harmony import */ var src_app_scan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/scan.service */ 450);




class AppComponent {
  constructor(reportService, scanService //private activatedRoute: ActivatedRoute
  ) {
    this.reportService = reportService;
    this.scanService = scanService;
    this.scanId = window["pxq_pgck_scan_id"]; //'coimk6ykypk7naam';

    this.userId = window["pxq_pgck_user_id"];
    this.url = window["pxq_pgck_report_url"];
    this.config = {
      download: true
    };
  }

  ngOnInit() {
    //const scanId = this.activatedRoute.snapshot.params["scanId"];
    this._buildCopyleaksReportAsync(this.scanId, this.userId);
  }

  onDownloadBtnClick(e) {
    const pdfUrl = this.url + `/${this.userId}/${this.scanId}/pdf-report.pdf?download`;
    window.open(pdfUrl, '_blank');
  }

  _buildCopyleaksReportAsync(scanId, userId) {
    var _this = this;

    return (0,_home_cabox_workspace_copyleaks_webreport_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        /** crawled version handling */
        const source = yield _this.scanService.getCrawledVersionAsync(scanId, userId);

        _this.reportService.pushDownloadedSource(source);
        /** complete result handling */


        const complete = yield _this.scanService.getCompleteResultAsync(scanId, userId);

        _this.reportService.pushCompletedResult(complete);
        /**
         * Scan results handling
         *
         * for more informations about completeResult.results please see
         * https://api.copyleaks.com/documentation/v3/webhooks/completed
         */


        const allResultsIds = [...complete?.results?.internet?.map(r => r.id) //...complete?.results?.database.map((r) => r.id),
        //...complete?.results?.batch.map((r) => r.id),
        //...complete?.results?.repositories.map((r) => r.id)
        ];
        yield Promise.all(allResultsIds.map( /*#__PURE__*/function () {
          var _ref = (0,_home_cabox_workspace_copyleaks_webreport_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {
            const result = yield _this.scanService.getResultByIdAsync(scanId, id, userId);

            _this.reportService.pushScanResult({
              id,
              result
            });
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()));
      } catch (error) {
        /** Handle error */
        console.error(error);
      }
    })();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_copyleaks_plagiarism_report__WEBPACK_IMPORTED_MODULE_3__.CopyleaksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_scan_service__WEBPACK_IMPORTED_MODULE_1__.ScanService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 1,
  consts: [[3, "config", "download"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cr-copyleaks-report", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("download", function AppComponent_Template_cr_copyleaks_report_download_0_listener($event) {
        return ctx.onDownloadBtnClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    }
  },
  dependencies: [_copyleaks_plagiarism_report__WEBPACK_IMPORTED_MODULE_3__.CopyleaksReportComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _copyleaks_plagiarism_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @copyleaks/plagiarism-report */ 4414);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _copyleaks_plagiarism_report__WEBPACK_IMPORTED_MODULE_4__.CopyleaksReportModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _copyleaks_plagiarism_report__WEBPACK_IMPORTED_MODULE_4__.CopyleaksReportModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] }); })();


/***/ }),

/***/ 450:
/*!*********************************!*\
  !*** ./src/app/scan.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanService": () => (/* binding */ ScanService)
/* harmony export */ });
/* harmony import */ var _home_cabox_workspace_copyleaks_webreport_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




const REQUEST_DELAY = 3000; // 3 sec

class ScanService {
  constructor(_httpClient) {
    this._httpClient = _httpClient; //url = "https://www.goodcopy.xyz/_pxq_pgck_/report";

    this.url = window["pxq_pgck_report_url"];
  }

  getCrawledVersionAsync(scanId, userId) {
    var _this = this;

    return (0,_home_cabox_workspace_copyleaks_webreport_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(_this._httpClient.get(_this.url + `/${userId}/${scanId}/crawled-version.json`) //.pipe(delay(REQUEST_DELAY))
      //.toPromise();
      );
    })();
  }

  getCompleteResultAsync(scanId, userId) {
    var _this2 = this;

    return (0,_home_cabox_workspace_copyleaks_webreport_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(_this2._httpClient.get(_this2.url + `/${userId}/${scanId}/completed.json`) //.pipe(delay(REQUEST_DELAY))
      //.toPromise();
      );
    })();
  }

  getResultByIdAsync(scanId, resultId, userId) {
    var _this3 = this;

    return (0,_home_cabox_workspace_copyleaks_webreport_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(_this3._httpClient.get(_this3.url + `/${userId}/${scanId}/${resultId}.json`) //.pipe(delay(REQUEST_DELAY))
      // .toPromise();
      );
    })();
  }

}

ScanService.ɵfac = function ScanService_Factory(t) {
  return new (t || ScanService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

ScanService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ScanService,
  factory: ScanService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 5820:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5820);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6553:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map