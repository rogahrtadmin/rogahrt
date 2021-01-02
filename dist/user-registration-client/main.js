(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/disease/disease.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/disease/disease.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n  <!-- partial:partials/_navbar.html -->\n  <nav class=\"navbar navbar-dark default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n    <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n    </div>\n    <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n      <ul class=\"navbar-nav navbar-nav-right\">\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"/prescription\">\n          <span class=\"menu-title\">e-Prescription</span>\n          <i class=\"mdi mdi-format-list-bulleted menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\"  href=\"search\"> <span class=\"menu-title\">Dashboard</span>\n            <i class=\"mdi mdi-home menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Disease details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" (click)=\"logoutNow()\">\n            <i class=\"mdi mdi-power\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-settings d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"mdi mdi-format-line-spacing\"></i>\n          </a>\n        </li>\n      </ul>\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n        <span class=\"mdi mdi-menu\"></span>\n      </button>\n    </div>\n  </nav>\n  <!-- partial -->\n  <div class=\"container-fluid page-body-wrapper\">\n    <!-- partial:partials/_sidebar.html -->\n    <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\n      <ul class=\"nav\">\n        <li class=\"nav-item nav-profile\">\n          <a href=\"#\" class=\"nav-link\">\n            <div class=\"nav-profile-text d-flex flex-column\">\n              <span class=\"font-weight-bold mb-2\">{{this.doctor}}</span>\n              <span class=\"text-secondary text-small\">Doctor</span>\n            </div>\n            <i class=\"mdi mdi-bookmark-check text-success nav-profile-badge\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"search\">\n            <span class=\"menu-title\">Dashboard</span>\n            <i class=\"mdi mdi-home menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/prescription\">\n            <span class=\"menu-title\">e-Prescription</span>\n            <i class=\"mdi mdi-format-list-bulleted menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Patient details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/disease\">\n            <span class=\"menu-title\">Disease details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- partial -->\n    <div class=\"main-panel\">\n      <div class=\"content-wrapper\">\n        <div class=\"row\" id=\"proBanner\">\n        </div>\n        <div class=\"page-header\">\n          <h3 class=\"page-title\">\n            <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n              <i class=\"mdi mdi-home\"></i>\n            </span> Disease Details </h3>\n        </div>\n\n        <div class=\"row\">\n          <div id=\"services\"  class=\"col-12 grid-margin\">\n            \n            <div class=\"box1\"> \n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"table-responsive\">\n\n                  <input type=\"text\" class=\"search-query form-control\" placeholder=\"Search With Disease name\"  name=\"diseasename\" [(ngModel)]=\"diseasename\"/>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-success\" type=\"button\" (click)=\"findDiseaseByName()\">\n                          <span class=\" glyphicon glyphicon-search\"> Search</span>\n                      </button>\n                      </span>\n                      <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th style=\"text-align:left;\">ID\n                        </th>\n                        <th style=\"text-align:left;\"> Source </th>\n                        <th style=\"text-align:left;\"> Disease </th>\n                        <th style=\"text-align:left;\"> Symptoms </th>\n                        <th style=\"text-align:left;\">href</th>\n                      </tr>\n                    </thead>\n                    <tbody >\n\n                      <tr *ngFor=\"let diseases of diseasess\">\n                        <td style=\"text-align:left;\">{{diseases.id}}</td>\n                        <td style=\"text-align:left;\">  {{diseases.source}} </td>\n          <td style=\"text-align:left;\">{{diseases.disease}}</td>\n          <td [innerHTML]=\"diseases.symptoms\" style=\"text-align:left;\"><p>{{diseases.symptoms}}</p></td>\n          <td style=\"text-align:left;\">{{diseases.href}}</td>\n          \n                      </tr>\n                      \n                    </tbody>\n                  </table>\n                </div>\n                </div>\n              </div>\n            </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n      <!-- content-wrapper ends -->\n      <!-- partial:partials/_footer.html -->\n      <footer class=\"footer\">\n        <div class=\"d-sm-flex justify-content-center justify-content-sm-between\">\n          <span class=\"text-muted text-center text-sm-left d-block d-sm-inline-block\">Copyright © 2017 <a href=\"https://www.bootstrapdash.com/\" target=\"_blank\">BootstrapDash</a>. All rights reserved.</span>\n          <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\">Hand-crafted & made with <i class=\"mdi mdi-heart text-danger\"></i></span>\n        </div>\n      </footer>\n      <!-- partial -->\n    </div>\n    <!-- main-panel ends -->\n  </div>\n  <!-- page-body-wrapper ends -->\n</div>\n<script src=\"assets/vendors/js/vendor.bundle.base.js\"></script>\n    <!-- endinject -->\n    <!-- Plugin js for this page -->\n    <script src=\"assets/vendors/chart.js/Chart.min.js\"></script>\n    <!-- End plugin js for this page -->\n    <!-- inject:js -->\n    <script src=\"assets/js/off-canvas.js\"></script>\n    <script src=\"assets/js/hoverable-collapse.js\"></script>\n    <script src=\"assets/js/misc.js\"></script>\n    <!-- endinject -->\n    <!-- Custom js for this page -->\n    <script src=\"assets/js/dashboard.js\"></script>\n    <script src=\"assets/js/todolist.js\"></script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n<nav class=\"navbar navbar-dark default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n  <div class=\"text-center navbar-dark navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n    <a class=\"navbar-brand brand-logo\" href=\"index.html\"><img src=\"assets/images/logos.svg\" alt=\"Rogahrt\" /></a>\n  </div>\n  <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n    <ul class=\"navbar-nav navbar-nav-right\">\n      <li class=\"nav-item nav-profile dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n          <div class=\"nav-profile-text\">\n            <p class=\"mb-1 text-black\">Pricing</p>\n          </div>\n        </a>\n        <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\n          <a class=\"dropdown-item\" href=\"#\"> e-Prescription </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Dashboard </a>\n        </div>\n      </li>\n      <li class=\"nav-item nav-profile dropdown\">\n        <a class=\"nav-link\"  href=\"/register\" (click)=\"register()\" aria-expanded=\"false\">\n          <div class=\"nav-profile-text\">\n            <p class=\"mb-1 text-black\">Register</p>\n          </div>\n        </a>\n      </li>\n      <li class=\"nav-item nav-profile dropdown\">\n        <a class=\"nav-link\"  href=\"/login\" (click)=\"login()\" aria-expanded=\"false\">\n          <div class=\"nav-profile-text\">\n            <p class=\"mb-1 text-black\">Login</p>\n          </div>\n        </a>\n      </li>\n\n      <li class=\"nav-item nav-profile dropdown\">\n        <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n          <div class=\"nav-profile-text\">\n            <p class=\"mb-1 text-black\">Home</p>\n          </div>\n        </a>\n      </li>\n\n      <li class=\"nav-item nav-profile dropdown\">\n        <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n          <div class=\"nav-profile-text\">\n            <p class=\"mb-1 text-black\">Contact us</p>\n          </div>\n        </a>\n      </li>\n    </ul>\n    <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n      <span class=\"mdi mdi-menu\"></span>\n    </button>\n  </div>\n</nav>\n<div class=\"container-fluid page-body-wrapper\">\n  <div class=\"content-wrapper\">\n<div class=\"row\"></div>\n<div class=\"row\"></div>\n<div class=\"row\"></div>\n<div class=\"row\"></div> \n\n<section id=\"about\">\n\n  <div class=\"container\">\n    <div class=\"row justify-content-center align-self-center\">\n\n      <div class=\"col-lg-5 col-md-6 grid-margin stretch-card intro-img order-md-first order-last\">\n        <img src=\"assets/images/wallpaper.jpeg\" alt=\"\" class=\"img-fluid\">\n      </div>\n\n      <div class=\"col-lg-7 col-md-6\">\n        <div class=\"about-content\">\n          <h2>About Us</h2>\n          <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>\n          <ul>\n            <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\n            <li><i class=\"ion-android-checkmark-circle\"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>\n            <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section><!-- #about -->\n\n<section id=\"services\" class=\"section-bg\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n    <div class=\"container\">\n\n      <header class=\"section-header\">\n        <h3>Services</h3>\n        <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\n      </header>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\n          <div class=\"box\">\n            <div class=\"icon\" style=\"background: #fceef3;\"><i class=\"ion-ios-analytics-outline\" style=\"color: #ff689b;\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Lorem Ipsum</a></h4>\n            <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\n          <div class=\"box\">\n            <div class=\"icon\" style=\"background: #fff0da;\"><i class=\"ion-ios-bookmarks-outline\" style=\"color: #e98e06;\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\n            <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n          <div class=\"box\">\n            <div class=\"icon\" style=\"background: #e6fdfc;\"><i class=\"ion-ios-paper-outline\" style=\"color: #3fcdc7;\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\n            <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n          <div class=\"box\">\n            <div class=\"icon\" style=\"background: #eafde7;\"><i class=\"ion-ios-speedometer-outline\" style=\"color:#41cf2e;\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Magni Dolores</a></h4>\n            <p class=\"description\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\n          <div class=\"box\">\n            <div class=\"icon\" style=\"background: #e1eeff;\"><i class=\"ion-ios-world-outline\" style=\"color: #2282ff;\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Nemo Enim</a></h4>\n            <p class=\"description\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\n          <div class=\"box\">\n            <div class=\"icon\" style=\"background: #ecebff;\"><i class=\"ion-ios-clock-outline\" style=\"color: #8660fe;\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Eiusmod Tempor</a></h4>\n            <p class=\"description\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n</div>\n</div>\n</section><!-- #services -->\n\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n  <nav class=\"navbar navbar-dark default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n    <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n      <a class=\"navbar-brand brand-logo\" href=\"index.html\"><img src=\"assets/images/logos.svg\" alt=\"Rogahrt\" /></a>\n    </div>\n    <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n      <ul class=\"navbar-nav navbar-nav-right\">\n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">Pricing</p>\n            </div>\n          </a>\n          <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\n            <a class=\"dropdown-item\" href=\"#\"> e-Prescription </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Dashboard </a>\n          </div>\n        </li>\n  \n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">About us</p>\n            </div>\n          </a>\n        </li>\n  \n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">Home</p>\n            </div>\n          </a>\n        </li>\n  \n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">Contact us</p>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n        <span class=\"mdi mdi-menu\"></span>\n      </button>\n    </div>\n  </nav>\n  <div class=\"container-fluid page-body-wrapper\">\n    <div class=\"content-wrapper \" >\n  <div class=\"row\"></div>\n  <div class=\"row\"></div>\n  <div class=\"row\"></div>\n  <div class=\"row\"></div> \n\n  <div class=\"row justify-content-center align-self-center\" >\n    \n    <div id=\"services\" class=\"col-md-4  grid-margin stretch-card\">\n      <div class=\"box2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Login form</h4>\n          <form class=\"forms-sample\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputUsername1\">Username</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name\" placeholder=\"Username\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" id=\"password\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-check form-check-flat form-check-primary\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\"> Remember me </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-gradient-primary mr-2\" name=\"submit_login\" value=\"Login\" (click)=\"loginNow()\">Submit</button>\n            <button class=\"btn btn-light\">Cancel</button>\n          </form>\n        </div>\n      </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-8 grid-margin stretch-card intro-img order-md-last order-first\">\n      <img src=\"assets/images/wallpaper.jpeg\" alt=\"\" class=\"img-fluid\">\n    </div>\n    \n  </div>\n\n  \n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n  <nav class=\"navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n    <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n      <a class=\"navbar-brand brand-logo\" href=\"index.html\"><img src=\"assets/images/logos.svg\" alt=\"Rogahrt\" /></a>\n    </div>\n    <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n      <ul class=\"navbar-nav navbar-nav-right\">\n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">Pricing</p>\n            </div>\n          </a>\n          <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\n            <a class=\"dropdown-item\" href=\"#\"> e-Prescription </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Dashboard </a>\n          </div>\n        </li>\n  \n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">About us</p>\n            </div>\n          </a>\n        </li>\n  \n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">Home</p>\n            </div>\n          </a>\n        </li>\n  \n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\">Contact us</p>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n        <span class=\"mdi mdi-menu\"></span>\n      </button>\n    </div>\n  </nav>\n  <div class=\"container-fluid page-body-wrapper\">\n    <div class=\"content-wrapper\">\n  <div class=\"row\"></div>\n  <div class=\"row\"></div>\n  <div class=\"row\"></div>\n  <div class=\"row\"></div> \n  \n  <div class=\"row\">\n    <div class=\"col-md-3 grid-margin stretch-card\">\n    </div>\n    <div class=\"col-md-6 grid-margin stretch-card\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Invalid Credentials</h4>\n          <p class=\"card-description\"> Login Form </p>\n          <form class=\"forms-sample\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputUsername1\">Username</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name\" placeholder=\"Username\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputConfirmPassword1\">Confirm Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputConfirmPassword1\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-check form-check-flat form-check-primary\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\"> Remember me </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-gradient-primary mr-2\" name=\"submit_login\" value=\"Login\" (click)=\"loginNow()\">Submit</button>\n            <button class=\"btn btn-light\">Cancel</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 grid-margin stretch-card\">\n    </div>\n  </div>\n  \n  \n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/prescription/prescription.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/prescription/prescription.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n  <!-- partial:partials/_navbar.html -->\n  <nav class=\"navbar navbar-dark default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n    <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n      <a class=\"navbar-brand brand-logo\" href=\"index.html\"><img src=\"assets/images/logo.jpg\" alt=\"logo\" /></a>\n    </div>\n    <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n      <ul class=\"navbar-nav navbar-nav-right\">\n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\" >Activities</p>\n            </div>\n          </a>\n          <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"mdi mdi-cached mr-2 text-success\"></i> Activity Log </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"/logout\" >\n              <i class=\"mdi mdi-logout mr-2 text-primary\"></i> Signout </a>\n          </div>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" (click)=\"logoutNow()\">\n            <i class=\"mdi mdi-power\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-settings d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"mdi mdi-format-line-spacing\"></i>\n          </a>\n        </li>\n      </ul>\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n        <span class=\"mdi mdi-menu\"></span>\n      </button>\n    </div>\n  </nav>\n  <!-- partial -->\n  <div class=\"container-fluid page-body-wrapper\">\n    <!-- partial:partials/_sidebar.html -->\n    <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\n      <ul class=\"nav\">\n        <li class=\"nav-item nav-profile\">\n          <a href=\"#\" class=\"nav-link\">\n            <div class=\"nav-profile-text d-flex flex-column\">\n              <span class=\"font-weight-bold mb-2\">Doctor's Name</span>\n              <span class=\"text-secondary text-small\">Doctor</span>\n            </div>\n            <i class=\"mdi mdi-bookmark-check text-success nav-profile-badge\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/search\">\n            <span class=\"menu-title\">Dashboard</span>\n            <i class=\"mdi mdi-home menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/prescription\">\n            <span class=\"menu-title\">e-Prescription</span>\n            <i class=\"mdi mdi-format-list-bulleted menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Patient details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Disease details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- partial -->\n    <div class=\"main-panel\">\n      <div class=\"content-wrapper\">\n        <div class=\"row\" id=\"proBanner\">\n        </div>\n\n        <div class=\"row\">\n          <div id=\"services\" class=\"col-md-2 grid-margin stretch-card\">\n          </div>\n          <div id=\"services\" class=\"col-md-8 grid-margin stretch-card\">\n            <div class=\"box1\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Patient form</h4>\n                <form class=\"forms-sample\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputUsername1\">Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"patient.name\" name=\"name\" id=\"name\" placeholder=\"Username\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Gender</label>\n                    <input type=\"text\" [(ngModel)]=\"patient.gender\" name=\"gender\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Gender\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Age</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"patient.age\" name=\"age\" id=\"exampleInputPassword1\" placeholder=\"Age\">\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-gradient-primary mr-2\" name=\"submit_reg\" value=\"Patient\" (click)=\"patientNow()\">Submit</button>\n                  <button class=\"btn btn-light\" name=\"submit_view\" value=\"View\" (click)=\"getViews(patient)\">View</button>\n                </form>\n              </div>\n            </div>\n            </div>\n          </div>\n          <div id=\"services\" class=\"col-md-2 grid-margin stretch-card\">\n            </div>\n          </div>\n\n\n      </div>\n      <!-- content-wrapper ends -->\n      <!-- partial:partials/_footer.html -->\n      <footer class=\"footer\">\n        <div class=\"d-sm-flex justify-content-center justify-content-sm-between\">\n          <span class=\"text-muted text-center text-sm-left d-block d-sm-inline-block\">Copyright © 2017 <a href=\"https://www.bootstrapdash.com/\" target=\"_blank\">BootstrapDash</a>. All rights reserved.</span>\n          <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\">Hand-crafted & made with <i class=\"mdi mdi-heart text-danger\"></i></span>\n        </div>\n      </footer>\n      <!-- partial -->\n    </div>\n    <!-- main-panel ends -->\n  </div>\n  <!-- page-body-wrapper ends -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registration/registration.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n    <nav class=\"navbar navbar-dark default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n      <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n        <a class=\"navbar-brand brand-logo\" href=\"index.html\"><img src=\"assets/images/logo.svg\" alt=\"Rogahrt\" /></a>\n        \n      </div>\n      <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n        <ul class=\"navbar-nav navbar-nav-right\">\n          <li class=\"nav-item nav-profile dropdown\">\n            <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n              <div class=\"nav-profile-text\">\n                <p class=\"mb-1 text-black\">Pricing</p>\n              </div>\n            </a>\n            <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\n              <a class=\"dropdown-item\" href=\"#\"> e-Prescription </a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Dashboard </a>\n            </div>\n          </li>\n    \n          <li class=\"nav-item nav-profile dropdown\">\n            <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n              <div class=\"nav-profile-text\">\n                <p class=\"mb-1 text-black\">About us</p>\n              </div>\n            </a>\n          </li>\n    \n          <li class=\"nav-item nav-profile dropdown\">\n            <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n              <div class=\"nav-profile-text\">\n                <p class=\"mb-1 text-black\">Home</p>\n              </div>\n            </a>\n          </li>\n    \n          <li class=\"nav-item nav-profile dropdown\">\n            <a class=\"nav-link\" href=\"#\"  aria-expanded=\"false\">\n              <div class=\"nav-profile-text\">\n                <p class=\"mb-1 text-black\">Contact us</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n          <span class=\"mdi mdi-menu\"></span>\n        </button>\n      </div>\n    </nav>\n    <div class=\"container-fluid page-body-wrapper\">\n      <div class=\"content-wrapper\">\n    <div class=\"row\"></div>\n    <div class=\"row\"></div>\n\n\n      <div class=\"row justify-content-center align-self-center\">\n        <div class=\"col-lg-7 col-md-8 grid-margin stretch-card intro-img order-md-first order-last\">\n          <img src=\"assets/images/wallpaper.jpeg\" alt=\"\" class=\"img-fluid\">\n        </div>\n        \n        <div id=\"services\" class=\"col-lg-5 col-md-4 grid-margin stretch-card intro-info order-md-last order-first\">\n          <div class=\"box1\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Register form</h4>\n              <form class=\"forms-sample\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputUsername1\">Username</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name\" placeholder=\"Username\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" >\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.name.errors.required\">User Name is required</div>\n                </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputPassword1\">Password</label>\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" id=\"exampleInputPassword1\" placeholder=\"Password\"  formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputConfirmPassword1\">Confirm Password</label>\n                  <input type=\"password\" class=\"form-control\"  name=\"confirmPassword\" id=\"exampleInputConfirmPassword1\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"/>\n                  <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                </div>                  \n                </div>\n                <button type=\"submit\" class=\"btn btn-gradient-primary mr-2\" name=\"submit_reg\" value=\"Register\" (click)=\"registerNow()\">Submit</button>\n                <button class=\"btn btn-light\">Cancel</button>\n              </form>\n            </div>\n          </div>\n          </div>\n        </div>\n        \n      </div>\n\n\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serach-delete/serach-delete.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serach-delete/serach-delete.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n  <!-- partial:partials/_navbar.html -->\n  <nav class=\"navbar navbar-dark default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n    <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n    </div>\n    <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n      <ul class=\"navbar-nav navbar-nav-right\">\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"/prescription\">\n          <span class=\"menu-title\">e-Prescription</span>\n          <i class=\"mdi mdi-format-list-bulleted menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\"  href=\"search\"> <span class=\"menu-title\">Dashboard</span>\n            <i class=\"mdi mdi-home menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Disease details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" (click)=\"logoutNow()\">\n            <i class=\"mdi mdi-power\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-settings d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"mdi mdi-format-line-spacing\"></i>\n          </a>\n        </li>\n      </ul>\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n        <span class=\"mdi mdi-menu\"></span>\n      </button>\n    </div>\n  </nav>\n  <!-- partial -->\n  <div class=\"container-fluid page-body-wrapper\">\n    <!-- partial:partials/_sidebar.html -->\n    <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\n      <ul class=\"nav\">\n        <li class=\"nav-item nav-profile\">\n          <a href=\"#\" class=\"nav-link\">\n            <div class=\"nav-profile-text d-flex flex-column\">\n              <span class=\"font-weight-bold mb-2\">{{this.doctor}}</span>\n              <span class=\"text-secondary text-small\">Doctor</span>\n            </div>\n            <i class=\"mdi mdi-bookmark-check text-success nav-profile-badge\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"search\">\n            <span class=\"menu-title\">Dashboard</span>\n            <i class=\"mdi mdi-home menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/prescription\">\n            <span class=\"menu-title\">e-Prescription</span>\n            <i class=\"mdi mdi-format-list-bulleted menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Patient details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/disease\">\n            <span class=\"menu-title\">Disease details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- partial -->\n    <div class=\"main-panel\">\n      <div class=\"content-wrapper\">\n        <div class=\"row\" id=\"proBanner\">\n        </div>\n        <div class=\"page-header\">\n          <h3 class=\"page-title\">\n            <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n              <i class=\"mdi mdi-home\"></i>\n            </span> Dashboard </h3>\n          <nav aria-label=\"breadcrumb\">\n            <ul class=\"breadcrumb\">\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                <span></span>Yearly count :{{this.yearCount}}  <i class=\"mdi icon-sm text-primary align-middle\"></i>\n              </li>\n            </ul>\n          </nav>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 stretch-card grid-margin\">\n            <div class=\"card bg-gradient-danger card-img-holder text-white\">\n              <div class=\"card-body\">\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                <h4 class=\"font-weight-normal mb-3\" name=\"name\" >No. Of Patients this day<i class=\"float-right\"></i>\n                </h4>\n                <h2 class=\"mb-5\">{{this.name}}</h2> \n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 stretch-card grid-margin\">\n            <div class=\"card bg-gradient-info card-img-holder text-white\">\n              <div class=\"card-body\">\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                <h4 class=\"font-weight-normal mb-3\" name=\"name\" >No. Of Patients this Month<i class=\"float-right\"></i>\n                </h4>\n                <h2 class=\"mb-5\">{{this.count}}</h2> \n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 stretch-card grid-margin\">\n            <div class=\"card bg-gradient-success card-img-holder text-white\">\n              <div class=\"card-body\">\n                <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                <h4 class=\"font-weight-normal mb-3\" name=\"name\" >No. Of Patients this Week<i class=\"float-right\"></i>\n                </h4>\n                <h2 class=\"mb-5\">{{this.weekCount}}</h2> \n              </div>\n            </div>\n          </div>\n        </div>\n        \n\n\n\n\n        <div class=\"row\">\n          <div id=\"services\"  class=\"col-12 grid-margin\">\n            \n            <div class=\"box1\"> \n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Patients Details</h4>\n                <div class=\"table-responsive\">\n\n                  <input type=\"text\" class=\"search-query form-control\" placeholder=\"Search With Patient's name\"  name=\"email\" [(ngModel)]=\"email\"/>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-danger\" type=\"button\" (click)=\"findUserByEmailId()\">\n                          <span class=\" glyphicon glyphicon-search\"> Search</span>\n                      </button>\n                      </span>\n                      <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>ID\n                        </th>\n                        <th> Name </th>\n                        <th> Gender </th>\n                        <th> Age </th>\n                        <th>Date</th>\n                      </tr>\n                    </thead>\n                    <tbody >\n\n                      <tr *ngFor=\"let patient of patients\">\n                        <td>{{patient.id}}</td>\n                        <td> {{patient.name}} </td>\n          <td>{{patient.gender}}</td>\n          <td>{{patient.age}}</td>\n          <td>{{patient.patientdate}}</td>\n          <td>                  <span class=\"input-group-btn\">\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"getView(patient.id,patient.name,patient.gender,patient.age,patient.patientdate)\">\n                <span class=\" glyphicon glyphicon-search\"> view</span>\n            </button>\n            </span></td>\n          \n                      </tr>\n                      \n                    </tbody>\n                  </table>\n                </div>\n                </div>\n              </div>\n            </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n      <!-- content-wrapper ends -->\n      <!-- partial:partials/_footer.html -->\n      <footer class=\"footer\">\n        <div class=\"d-sm-flex justify-content-center justify-content-sm-between\">\n          <span class=\"text-muted text-center text-sm-left d-block d-sm-inline-block\">Copyright © 2017 <a href=\"https://www.bootstrapdash.com/\" target=\"_blank\">BootstrapDash</a>. All rights reserved.</span>\n          <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\">Hand-crafted & made with <i class=\"mdi mdi-heart text-danger\"></i></span>\n        </div>\n      </footer>\n      <!-- partial -->\n    </div>\n    <!-- main-panel ends -->\n  </div>\n  <!-- page-body-wrapper ends -->\n</div>\n<script src=\"assets/vendors/js/vendor.bundle.base.js\"></script>\n    <!-- endinject -->\n    <!-- Plugin js for this page -->\n    <script src=\"assets/vendors/chart.js/Chart.min.js\"></script>\n    <!-- End plugin js for this page -->\n    <!-- inject:js -->\n    <script src=\"assets/js/off-canvas.js\"></script>\n    <script src=\"assets/js/hoverable-collapse.js\"></script>\n    <script src=\"assets/js/misc.js\"></script>\n    <!-- endinject -->\n    <!-- Custom js for this page -->\n    <script src=\"assets/js/dashboard.js\"></script>\n    <script src=\"assets/js/todolist.js\"></script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/view.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n  <!-- partial:partials/_navbar.html -->\n  <nav class=\"navbar navbar-dark default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n    <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\n      <a class=\"navbar-brand brand-logo\" href=\"index.html\"><img src=\"assets/images/logo.jpg\" alt=\"logo\" /></a>\n    </div>\n    <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\n      <ul class=\"navbar-nav navbar-nav-right\">\n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <div class=\"nav-profile-text\">\n              <p class=\"mb-1 text-black\" >Activities</p>\n            </div>\n          </a>\n          <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"mdi mdi-cached mr-2 text-success\"></i> Activity Log </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"/logout\" >\n              <i class=\"mdi mdi-logout mr-2 text-primary\"></i> Signout </a>\n          </div>\n        </li>\n        <li class=\"nav-item nav-logout d-none d-lg-block\">\n          <a class=\"nav-link\" (click)=\"logoutNow()\">\n            <i class=\"mdi mdi-power\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-settings d-none d-lg-block\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"mdi mdi-format-line-spacing\"></i>\n          </a>\n        </li>\n      </ul>\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n        <span class=\"mdi mdi-menu\"></span>\n      </button>\n    </div>\n  </nav>\n  <!-- partial -->\n  <div class=\"container-fluid page-body-wrapper\">\n    <!-- partial:partials/_sidebar.html -->\n    <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\n      <ul class=\"nav\">\n        <li class=\"nav-item nav-profile\">\n          <a href=\"#\" class=\"nav-link\">\n            <div class=\"nav-profile-text d-flex flex-column\" *ngFor=\"let patient of patients\">\n              <span class=\"font-weight-bold mb-2\">{{patient.doctorName}}</span>\n              <span class=\"text-secondary text-small\">Doctor</span>\n            </div>\n            <i class=\"mdi mdi-bookmark-check text-success nav-profile-badge\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"search\">\n            <span class=\"menu-title\">Dashboard</span>\n            <i class=\"mdi mdi-home menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/prescription\">\n            <span class=\"menu-title\">e-Prescription</span>\n            <i class=\"mdi mdi-format-list-bulleted menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Patient details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\n            <span class=\"menu-title\">Disease details</span>\n            <i class=\"mdi mdi-table-large menu-icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- partial -->\n    <div class=\"main-panel\">\n      <div class=\"content-wrapper\">\n        <div class=\"row\" id=\"proBanner\">\n        </div>\n\n        \n\n        <div class=\"row\">\n          <div id=\"services\"  class=\"col-12 grid-margin\">\n\n            <div class=\"box1\"> \n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Patients Details</h4>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>ID</th>\n                        <th> Name </th>\n                        <th> Gender </th>\n                        <th> Age </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let patient of patients\">\n                        <td>{{patient.id}}</td>\n                        <td> {{patient.name}} </td>\n          <td>{{patient.gender}}</td>\n          <td>{{patient.age}}</td>\n          \n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            </div>\n\n          </div>\n        </div>\n\n\n\n      </div>\n      <!-- content-wrapper ends -->\n      <!-- partial:partials/_footer.html -->\n      <footer class=\"footer\">\n        <div class=\"d-sm-flex justify-content-center justify-content-sm-between\">\n          <span class=\"text-muted text-center text-sm-left d-block d-sm-inline-block\">Copyright © 2017 <a href=\"https://www.bootstrapdash.com/\" target=\"_blank\">BootstrapDash</a>. All rights reserved.</span>\n          <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\">Hand-crafted & made with <i class=\"mdi mdi-heart text-danger\"></i></span>\n        </div>\n      </footer>\n      <!-- partial -->\n    </div>\n    <!-- main-panel ends -->\n  </div>\n  <!-- page-body-wrapper ends -->\n</div>"

/***/ }),

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prescription/prescription.component */ "./src/app/prescription/prescription.component.ts");
/* harmony import */ var _disease_disease_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disease/disease.component */ "./src/app/disease/disease.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _serach_delete_serach_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serach-delete/serach-delete.component */ "./src/app/serach-delete/serach-delete.component.ts");











var routes = [
    { path: "register", redirectTo: "register", pathMatch: "full" },
    { path: "login", redirectTo: "login", pathMatch: "full" },
    { path: "logout", redirectTo: "logout", pathMatch: "full" },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "prescription", redirectTo: "prescription", pathMatch: "full" },
    { path: "view", redirectTo: "view", pathMatch: "full" },
    { path: "disease", redirectTo: "disease", pathMatch: "full" },
    { path: "register", component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"] },
    { path: "search", component: _serach_delete_serach_delete_component__WEBPACK_IMPORTED_MODULE_10__["SerachDeleteComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "logout", component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"] },
    { path: "prescription", component: _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_7__["PrescriptionComponent"] },
    { path: "view", component: _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"] },
    { path: "disease", component: _disease_disease_component__WEBPACK_IMPORTED_MODULE_8__["DiseaseComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'user-registration-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prescription/prescription.component */ "./src/app/prescription/prescription.component.ts");
/* harmony import */ var _disease_disease_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./disease/disease.component */ "./src/app/disease/disease.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _serach_delete_serach_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./serach-delete/serach-delete.component */ "./src/app/serach-delete/serach-delete.component.ts");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-registation.service */ "./src/app/user-registation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
                _serach_delete_serach_delete_component__WEBPACK_IMPORTED_MODULE_12__["SerachDeleteComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_9__["PrescriptionComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"],
                _disease_disease_component__WEBPACK_IMPORTED_MODULE_10__["DiseaseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
            ],
            providers: [_user_registation_service__WEBPACK_IMPORTED_MODULE_13__["UserRegistationService"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/disease/disease.component.css":
/*!***********************************************!*\
  !*** ./src/app/disease/disease.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXNlYXNlL2Rpc2Vhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC9kaXNlYXNlL2Rpc2Vhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbn1cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNjY2M7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxubGVnZW5kIHtcclxuICAgY29sb3I6ICM2Nzg7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbmxhYmVsIHNtYWxsIHtcclxuICAgIGNvbG9yOiAjNjc4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc3Bhbi5yZXEge1xyXG4gICAgY29sb3I6bWFyb29uO1xyXG4gICAgZm9udC1zaXplOiAxMTIlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/disease/disease.component.ts":
/*!**********************************************!*\
  !*** ./src/app/disease/disease.component.ts ***!
  \**********************************************/
/*! exports provided: DiseaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseComponent", function() { return DiseaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patient */ "./src/app/patient.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/view.component */ "./src/app/view/view.component.ts");








var DiseaseComponent = /** @class */ (function () {
    function DiseaseComponent(router, service, loginComponent, viewComponent) {
        this.router = router;
        this.service = service;
        this.loginComponent = loginComponent;
        this.viewComponent = viewComponent;
        this.patient = new _patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](0, "", "", 0, "", "");
    }
    DiseaseComponent.prototype.delteUser = function (id) {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            var resp = this.service.deleteUser(id);
            resp.subscribe(function (data) { return _this.users = data; });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    DiseaseComponent.prototype.findDiseaseByName = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            console.log("disease name from ui " + this.diseasename);
            var resp = this.service.getDiseaseByDiseaseName(this.diseasename);
            resp.subscribe(function (data) {
                _this.diseasess = data;
                console.log("disease details by name " + _this.diseasess);
            });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    DiseaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            var resp = this.service.getDiseases();
            resp.subscribe(function (data) {
                _this.diseasess = data;
                console.log(_this.diseasess);
            });
            var resp2 = this.service.getDoctorName();
            resp2.subscribe(function (data) {
                _this.doctor = data;
                console.log(_this.doctor);
            });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    DiseaseComponent.prototype.logoutNow = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            this.loginComponent.logOut();
            var resp = this.service.doLogout();
            resp.subscribe(function (data) { return _this.name = data; });
            this.router.navigate(['/login']);
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    DiseaseComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"] },
        { type: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
        { type: _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"] }
    ]; };
    DiseaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-disease',
            template: __webpack_require__(/*! raw-loader!./disease.component.html */ "./node_modules/raw-loader/index.js!./src/app/disease/disease.component.html"),
            styles: [__webpack_require__(/*! ./disease.component.css */ "./src/app/disease/disease.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"]])
    ], DiseaseComponent);
    return DiseaseComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbn1cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNjY2M7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxubGVnZW5kIHtcclxuICAgY29sb3I6ICM2Nzg7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbmxhYmVsIHNtYWxsIHtcclxuICAgIGNvbG9yOiAjNjc4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc3Bhbi5yZXEge1xyXG4gICAgY29sb3I6bWFyb29uO1xyXG4gICAgZm9udC1zaXplOiAxMTIlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, service) {
        this.router = router;
        this.service = service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "");
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("I am in home");
    };
    HomeComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0dBQ0csV0FBVztBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjY2NjOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbmxlZ2VuZCB7XHJcbiAgIGNvbG9yOiAjNjc4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5sYWJlbCBzbWFsbCB7XHJcbiAgICBjb2xvcjogIzY3OCAhaW1wb3J0YW50O1xyXG59XHJcbnNwYW4ucmVxIHtcclxuICAgIGNvbG9yOm1hcm9vbjtcclxuICAgIGZvbnQtc2l6ZTogMTEyJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    };
    LoginComponent.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    LoginComponent.prototype.loginFromLogout = function (names) {
        console.log("loginfromlogout name " + names);
        if (names === "" || names === undefined) {
            console.log("it is null");
            this.router.navigate(['/logout']);
        }
        else {
            console.log("it is not null" + names);
            sessionStorage.setItem('username', names);
            console.log("Session value " + sessionStorage.getItem('username'));
            this.router.navigate(['/search']);
        }
    };
    LoginComponent.prototype.loginNow = function () {
        var _this = this;
        var resp = this.service.doLogin(this.user);
        resp.subscribe(function (data) {
            _this.name = data;
            if (_this.name === "") {
                console.log("it is null");
                _this.router.navigate(['/logout']);
            }
            else {
                console.log("it is not null" + _this.name);
                sessionStorage.setItem('username', name);
                console.log("Session value " + sessionStorage.getItem('username'));
                _this.router.navigate(['/search']);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyxXQUFXO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2NjYzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG5sZWdlbmQge1xyXG4gICBjb2xvcjogIzY3ODtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxubGFiZWwgc21hbGwge1xyXG4gICAgY29sb3I6ICM2NzggIWltcG9ydGFudDtcclxufVxyXG5zcGFuLnJlcSB7XHJcbiAgICBjb2xvcjptYXJvb247XHJcbiAgICBmb250LXNpemU6IDExMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");






var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, service, loginComponent) {
        this.router = router;
        this.service = service;
        this.loginComponent = loginComponent;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "");
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logoutNow = function () {
        var _this = this;
        var resp = this.service.doLogout();
        resp.subscribe(function (data) { return _this.name = data; });
        this.loginComponent.logOut();
        this.router.navigate(['/login']);
    };
    LogoutComponent.prototype.loginNow = function () {
        var _this = this;
        var resp = this.service.doLogin(this.user);
        resp.subscribe(function (data) {
            _this.name = data;
            console.log("logout component name " + _this.name + _this.user);
            _this.loginComponent.name == _this.name;
            _this.loginComponent.user == _this.user;
            _this.loginComponent.loginFromLogout(_this.name);
        });
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_5__["UserRegistationService"] },
        { type: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
    ]; };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_5__["UserRegistationService"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/patient.ts":
/*!****************************!*\
  !*** ./src/app/patient.ts ***!
  \****************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
var Patient = /** @class */ (function () {
    function Patient(id, name, gender, age, doctorName, patientdate) {
    }
    Patient.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return Patient;
}());



/***/ }),

/***/ "./src/app/prescription/prescription.component.css":
/*!*********************************************************!*\
  !*** ./src/app/prescription/prescription.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmVzY3JpcHRpb24vcHJlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyxXQUFXO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvcHJlc2NyaXB0aW9uL3ByZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2NjYzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG5sZWdlbmQge1xyXG4gICBjb2xvcjogIzY3ODtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxubGFiZWwgc21hbGwge1xyXG4gICAgY29sb3I6ICM2NzggIWltcG9ydGFudDtcclxufVxyXG5zcGFuLnJlcSB7XHJcbiAgICBjb2xvcjptYXJvb247XHJcbiAgICBmb250LXNpemU6IDExMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/prescription/prescription.component.ts":
/*!********************************************************!*\
  !*** ./src/app/prescription/prescription.component.ts ***!
  \********************************************************/
/*! exports provided: PrescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionComponent", function() { return PrescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patient */ "./src/app/patient.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/view.component */ "./src/app/view/view.component.ts");









var PrescriptionComponent = /** @class */ (function () {
    function PrescriptionComponent(router, service, loginComponent, viewComponent) {
        this.router = router;
        this.service = service;
        this.loginComponent = loginComponent;
        this.viewComponent = viewComponent;
        this.user1 = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "");
        this.patient = new _patient__WEBPACK_IMPORTED_MODULE_3__["Patient"](0, "", "", 0, "", "");
    }
    PrescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            var resp = this.service.getUsers();
            resp.subscribe(function (data) {
                _this.users = data;
                _this.user = _this.users;
            });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    PrescriptionComponent.prototype.patientNow = function () {
        var _this = this;
        var resp = this.service.doPrescription(this.patient);
        resp.subscribe(function (data) {
            _this.message = data;
            console.log("presription id " + _this.message);
            _this.viewComponent.message = _this.message;
            console.log("viewcomponent prescription id " + _this.viewComponent.message);
        });
        console.log("In patientNow");
        //this.router.navigate(['/prescription']);
        //this.getView(this.patient);
    };
    PrescriptionComponent.prototype.getView = function () {
        console.log("I am here in getviewpatient");
        this.viewComponent.getView();
    };
    PrescriptionComponent.prototype.getViews = function (patient) {
        this.patient = patient;
        console.log("I am here in getviewpatient" + patient);
        this.viewComponent.getView();
    };
    PrescriptionComponent.prototype.logoutNow = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            this.loginComponent.logOut();
            var resp = this.service.doLogout();
            resp.subscribe(function (data) { return _this.name = data; });
            this.router.navigate(['/login']);
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    PrescriptionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_5__["UserRegistationService"] },
        { type: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
        { type: _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"] }
    ]; };
    PrescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescription',
            template: __webpack_require__(/*! raw-loader!./prescription.component.html */ "./node_modules/raw-loader/index.js!./src/app/prescription/prescription.component.html"),
            styles: [__webpack_require__(/*! ./prescription.component.css */ "./src/app/prescription/prescription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_5__["UserRegistationService"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"]])
    ], PrescriptionComponent);
    return PrescriptionComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyxXQUFXO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2NjYzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG5sZWdlbmQge1xyXG4gICBjb2xvcjogIzY3ODtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxubGFiZWwgc21hbGwge1xyXG4gICAgY29sb3I6ICM2NzggIWltcG9ydGFudDtcclxufVxyXG5zcGFuLnJlcSB7XHJcbiAgICBjb2xvcjptYXJvb247XHJcbiAgICBmb250LXNpemU6IDExMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");






// import custom validator to validate that password and confirm password fields match

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "");
        this.submitted = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegistrationComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    };
    RegistrationComponent.prototype.registerNow = function () {
        var _this = this;
        var resp = this.service.doRegistration(this.user);
        resp.subscribe(function (data) { return _this.message = data; });
        this.router.navigate(['/login']);
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/serach-delete/serach-delete.component.css":
/*!***********************************************************!*\
  !*** ./src/app/serach-delete/serach-delete.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.custab{\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n    margin: 10% 0;\r\n    box-shadow: 3px 3px 2px #ccc;\r\n    transition: 0.5s;\r\n    }\r\n.custab:hover{\r\n    box-shadow: 3px 3px 0px transparent;\r\n    transition: 0.5s;\r\n    }\r\n#custom-search-input {\r\n  margin:0;\r\n  margin-top: 24px;\r\n  padding: 2px;\r\n}\r\n.col-md-12 {\r\n  width: 62%;\r\n}\r\n#custom-search-input .search-query {\r\n  padding-right: 3px;\r\n  padding-right: 4px \\9;\r\n  padding-left: 3px;\r\n  padding-left: 4px \\9;\r\n  /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n\r\n  margin-bottom: 0;\r\n  border-radius: 43px;\r\n}\r\n#custom-search-input button {\r\n  border: 0;\r\n  background: none;\r\n  /** belows styles are working good */\r\n  padding: 2px 5px;\r\n  margin-top: 2px;\r\n  position: relative;\r\n  left: -28px;\r\n  /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n  margin-bottom: 0;\r\n  border-radius: 3px;\r\n  color:green;\r\n}\r\n.search-query:focus + button {\r\n  z-index: 3;  \r\n}\r\n.input-group {\r\n  position: relative;\r\n  display: table;\r\n  border-collapse: separate;\r\n  padding-right: 0px;\r\n  padding-left: 183px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJhY2gtZGVsZXRlL3NlcmFjaC1kZWxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEI7QUFDSjtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEI7QUFJSjtFQUNFLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrRUFBa0U7O0VBRWxFLGdCQUFnQjtFQUdoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrRUFBa0U7RUFDbEUsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhcHAvc2VyYWNoLWRlbGV0ZS9zZXJhY2gtZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uY3VzdGFie1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMTAlIDA7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAjY2NjO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuLmN1c3RhYjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuI2N1c3RvbS1zZWFyY2gtaW5wdXQge1xyXG4gIG1hcmdpbjowO1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5jb2wtbWQtMTIge1xyXG4gIHdpZHRoOiA2MiU7XHJcbn1cclxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgLnNlYXJjaC1xdWVyeSB7XHJcbiAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweCBcXDk7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHggXFw5O1xyXG4gIC8qIElFNy04IGRvZXNuJ3QgaGF2ZSBib3JkZXItcmFkaXVzLCBzbyBkb24ndCBpbmRlbnQgdGhlIHBhZGRpbmcgKi9cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA0M3B4O1xyXG59XHJcblxyXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCBidXR0b24ge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIC8qKiBiZWxvd3Mgc3R5bGVzIGFyZSB3b3JraW5nIGdvb2QgKi9cclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTI4cHg7XHJcbiAgLyogSUU3LTggZG9lc24ndCBoYXZlIGJvcmRlci1yYWRpdXMsIHNvIGRvbid0IGluZGVudCB0aGUgcGFkZGluZyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOmdyZWVuO1xyXG59XHJcblxyXG4uc2VhcmNoLXF1ZXJ5OmZvY3VzICsgYnV0dG9uIHtcclxuICB6LWluZGV4OiAzOyAgXHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxODNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/serach-delete/serach-delete.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/serach-delete/serach-delete.component.ts ***!
  \**********************************************************/
/*! exports provided: SerachDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerachDeleteComponent", function() { return SerachDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patient */ "./src/app/patient.ts");







var SerachDeleteComponent = /** @class */ (function () {
    function SerachDeleteComponent(router, service, loginComponent, viewComponent) {
        this.router = router;
        this.service = service;
        this.loginComponent = loginComponent;
        this.viewComponent = viewComponent;
        this.patient = new _patient__WEBPACK_IMPORTED_MODULE_6__["Patient"](0, "", "", 0, "", "");
    }
    SerachDeleteComponent.prototype.delteUser = function (id) {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            var resp = this.service.deleteUser(id);
            resp.subscribe(function (data) { return _this.users = data; });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    SerachDeleteComponent.prototype.findUserByEmailId = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            var resp = this.service.getUserByEmail(this.email);
            resp.subscribe(function (data) { return _this.patients = data; });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    SerachDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            var resp = this.service.getUsers();
            resp.subscribe(function (data) {
                _this.patients = data;
                console.log(_this.patients);
            });
            var resp1 = this.service.getByToday();
            resp1.subscribe(function (data) {
                _this.name = data;
                console.log("today count " + _this.name);
            });
            var resp3 = this.service.getByThisMonth();
            resp3.subscribe(function (data) {
                _this.count = data;
                console.log("this month count " + _this.count);
            });
            var resp4 = this.service.getByThisWeek();
            resp4.subscribe(function (data) {
                _this.weekCount = data;
                console.log("this week count " + _this.weekCount);
            });
            var resp5 = this.service.getByThisYear();
            resp5.subscribe(function (data) {
                _this.yearCount = data;
                console.log("this year count " + _this.yearCount);
            });
            var resp2 = this.service.getDoctorName();
            resp2.subscribe(function (data) {
                _this.doctor = data;
                console.log(_this.doctor);
            });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    SerachDeleteComponent.prototype.getView = function (patientid, patientname, patientgender, patientage, patientdate) {
        console.log("search page view " + patientid + patientname + patientgender + patientage + patientdate);
        this.viewComponent.getViews(patientid, patientname, patientgender, patientage, patientdate);
    };
    SerachDeleteComponent.prototype.findbyToday = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            var resp = this.service.getByToday();
            resp.subscribe(function (data) {
                _this.name = data;
                console.log("today count " + _this.name);
            });
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    SerachDeleteComponent.prototype.logoutNow = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            this.loginComponent.logOut();
            var resp = this.service.doLogout();
            resp.subscribe(function (data) { return _this.name = data; });
            this.router.navigate(['/login']);
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    SerachDeleteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistationService"] },
        { type: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
        { type: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] }
    ]; };
    SerachDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serach-delete',
            template: __webpack_require__(/*! raw-loader!./serach-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/serach-delete/serach-delete.component.html"),
            styles: [__webpack_require__(/*! ./serach-delete.component.css */ "./src/app/serach-delete/serach-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistationService"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"]])
    ], SerachDeleteComponent);
    return SerachDeleteComponent;
}());



/***/ }),

/***/ "./src/app/user-registation.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user-registation.service.ts ***!
  \*********************************************/
/*! exports provided: UserRegistationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistationService", function() { return UserRegistationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserRegistationService = /** @class */ (function () {
    function UserRegistationService(http) {
        this.http = http;
    }
    UserRegistationService.prototype.doRegistration = function (user) {
        return this.http.post("http://localhost:8080/register", user, { responseType: 'text' });
    };
    UserRegistationService.prototype.doPrescription = function (patient) {
        return this.http.post("http://localhost:8080/prescription", patient, { responseType: 'text' });
    };
    UserRegistationService.prototype.getView = function () {
        return this.http.get("http://localhost:8080/view");
    };
    UserRegistationService.prototype.getDoctorName = function () {
        return this.http.get("http://localhost:8080/doctorName");
    };
    UserRegistationService.prototype.getByToday = function () {
        return this.http.get("http://localhost:8080/findPatientsToday");
    };
    UserRegistationService.prototype.getByThisMonth = function () {
        return this.http.get("http://localhost:8080/findPatientsThisMonth");
    };
    UserRegistationService.prototype.getByThisWeek = function () {
        return this.http.get("http://localhost:8080/findPatientsThisWeek");
    };
    UserRegistationService.prototype.getByThisYear = function () {
        return this.http.get("http://localhost:8080/findPatientsThisYear");
    };
    UserRegistationService.prototype.doLogin = function (user) {
        return this.http.post("http://localhost:8080/login/", user, { responseType: 'text' });
    };
    UserRegistationService.prototype.doLogout = function () {
        return this.http.get("http://localhost:8080/logout/");
    };
    UserRegistationService.prototype.getUsers = function () {
        return this.http.get("http://localhost:8080/getAllUsers");
    };
    UserRegistationService.prototype.getDiseases = function () {
        return this.http.get("http://localhost:8080/getAllDiseases");
    };
    UserRegistationService.prototype.getUserByEmail = function (email) {
        return this.http.get("http://localhost:8080//findUser/" + email);
    };
    UserRegistationService.prototype.getDiseaseByDiseaseName = function (diseasename) {
        return this.http.get("http://localhost:8080//findDisease/" + diseasename);
    };
    UserRegistationService.prototype.deleteUser = function (id) {
        return this.http.delete("http://localhost:8080/cancel/" + id);
    };
    UserRegistationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserRegistationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserRegistationService);
    return UserRegistationService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, password) {
    }
    User.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbn1cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNjY2M7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxubGVnZW5kIHtcclxuICAgY29sb3I6ICM2Nzg7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbmxhYmVsIHNtYWxsIHtcclxuICAgIGNvbG9yOiAjNjc4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc3Bhbi5yZXEge1xyXG4gICAgY29sb3I6bWFyb29uO1xyXG4gICAgZm9udC1zaXplOiAxMTIlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patient */ "./src/app/patient.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-registation.service */ "./src/app/user-registation.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");







var ViewComponent = /** @class */ (function () {
    function ViewComponent(router, service, loginComponent) {
        this.router = router;
        this.service = service;
        this.loginComponent = loginComponent;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "");
        this.patient = new _patient__WEBPACK_IMPORTED_MODULE_3__["Patient"](0, "", "", 0, "", "");
        this.count = 0;
    }
    ViewComponent.prototype.ngOnInit = function () {
        console.log("count value " + this.count);
        this.getView();
    };
    ViewComponent.prototype.viewPatient = function (patients) {
        this.count = this.count + 1;
        console.log("count value inside new view" + this.count);
        console.log("logging values in view from search " + patients);
        this.router.navigate(['/view']);
    };
    ViewComponent.prototype.getViews = function (patientid, patientname, patientgender, patientage, patientdate) {
        console.log("search page view " + patientid + patientname + patientgender + patientage + patientdate);
        this.patients = { id: patientid, name: patientname, gender: patientgender, age: patientage, patientdate: patientdate };
        console.log(this.patients);
        this.viewPatient(this.patients);
    };
    ViewComponent.prototype.getView = function () {
        var _this = this;
        console.log("I am here in view nginit");
        var resp = this.service.getView();
        resp.subscribe(function (data) {
            _this.patients = data;
            console.log("logging data value" + data);
            console.log(_this.patients);
            _this.router.navigate(['/view']);
        });
    };
    ViewComponent.prototype.viewPatients = function (patients) {
        this.patients = patients;
        console.log(this.patients);
    };
    ViewComponent.prototype.patientNow = function () {
        var _this = this;
        var resp = this.service.doPrescription(this.patient);
        resp.subscribe(function (data) { return _this.message = data; });
    };
    ViewComponent.prototype.logoutNow = function () {
        var _this = this;
        if (this.loginComponent.isUserLoggedIn()) {
            this.loginComponent.logOut();
            var resp = this.service.doLogout();
            resp.subscribe(function (data) { return _this.name = data; });
            this.router.navigate(['/login']);
        }
        else {
            this.loginComponent.loginNow();
        }
    };
    ViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _user_registation_service__WEBPACK_IMPORTED_MODULE_5__["UserRegistationService"] },
        { type: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
    ]; };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_registation_service__WEBPACK_IMPORTED_MODULE_5__["UserRegistationService"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\e-prescription_code\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map