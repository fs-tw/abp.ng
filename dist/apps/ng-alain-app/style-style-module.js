(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-style-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/colors/colors.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/colors/colors.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Colors\r\n    <small>Color Palettes</small>\r\n  </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\" class=\"list\">\r\n  <div nz-col [nzMd]=\"24\">\r\n    <nz-card nzTitle=\"Classic colors\">\r\n      <div nz-row *ngFor=\"let c of c.brands\">\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{ c }}-light p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{ c }}-light</p>\r\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{ c }}-light</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{ c }} p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{ c }}</p>\r\n            <p (click)=\"onCopy('text-' + c)\">.text-{{ c }}</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{ c }}-dark p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{ c }}-dark</p>\r\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{ c }}-dark</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\" class=\"list\">\r\n  <div nz-col [nzMd]=\"24\">\r\n    <nz-card nzTitle=\"Name colors\">\r\n      <div nz-row *ngFor=\"let c of c.names\">\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{ c }}-light p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{ c }}-light</p>\r\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{ c }}-light</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{ c }} p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{ c }}</p>\r\n            <p (click)=\"onCopy('text-' + c)\">.text-{{ c }}</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{ c }}-dark p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{ c }}-dark</p>\r\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{ c }}-dark</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-row>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-darker p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-darker')\">.bg-grey-darker</p>\r\n            <p (click)=\"onCopy('text-grey-darker')\">.text-grey-darker</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-dark p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-dark')\">.bg-grey-dark</p>\r\n            <p (click)=\"onCopy('text-grey-dark')\">.text-grey-dark</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"4\">\r\n          <div class=\"bg-grey p-lg\">\r\n            <p (click)=\"onCopy('bg-grey')\">.bg-grey</p>\r\n            <p (click)=\"onCopy('text-grey')\">.text-grey</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-light p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-light')\">.bg-grey-light</p>\r\n            <p (click)=\"onCopy('text-grey-light')\">.text-grey-light</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-lighter p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-lighter')\">.bg-grey-lighter</p>\r\n            <p (click)=\"onCopy('text-grey-lighter')\">.text-grey-lighter</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\" class=\"list\">\r\n  <div nz-col [nzMd]=\"24\">\r\n    <nz-card nzTitle=\"Full Colors\">\r\n      <div nz-row>\r\n        <div nz-col [nzSpan]=\"4\" *ngFor=\"let c of c.names\">\r\n          <div *ngFor=\"let i of nums\" class=\"bg-{{ c }}-{{ i }} p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-' + i)\">.bg-{{ c }}-{{ i }}</p>\r\n            <p (click)=\"onCopy('bg-' + c + '-' + i + '-h')\">.bg-{{ c }}-{{ i }}-h</p>\r\n            <p (click)=\"onCopy('text-' + c + '-' + i)\">.text-{{ c }}-{{ i }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/gridmasonry/gridmasonry.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/gridmasonry/gridmasonry.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Grid Masonry\r\n    <small\r\n      >Pure CSS and mobile first with a fallback to inline grid, Supported from IE10,\r\n      <a href=\"//caniuse.com/#feat=multicolumn\" target=\"_blank\">browser compatibility</a>\r\n    </small>\r\n  </h1>\r\n</div>\r\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Ipsum do ullamco laboris excepteur. Do incididunt commodo adipisicing officia sunt tempor. Deserunt exercitation\r\n        proident enim veniam laboris fugiat ipsum veniam dolore duis sit duis. In deserunt ut nulla ad eu.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Veniam non sunt quis ex consequat ea esse duis esse. Ut incididunt eiusmod occaecat esse aute adipisicing culpa.\r\n        Voluptate ullamco labore laboris et do in.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Esse elit et aute do aliqua ipsum cillum consectetur deserunt deserunt cupidatat aute aliqua aute. Aliquip ad\r\n        incididunt dolor cupidatat quis officia cillum sit ex. Irure ut sit Lorem sunt nulla excepteur ipsum ipsum\r\n        dolore cillum cupidatat ipsum. Do amet aliquip sunt consectetur nulla. Cupidatat ad consectetur veniam aliqua\r\n        non ullamco laboris eiusmod. In voluptate officia aliquip dolore sit qui consectetur fugiat aliqua duis\r\n        occaecat. Non mollit elit nisi ea mollit anim excepteur ut qui exercitation.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Ullamco incididunt do deserunt cillum veniam cillum amet ad. Deserunt laborum cupidatat mollit proident\r\n        adipisicing in culpa consequat adipisicing et non. Aliqua ea elit voluptate esse aliqua dolor ipsum. Ut officia\r\n        officia fugiat sint esse qui incididunt Lorem occaecat.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Ea non irure qui fugiat aliquip esse adipisicing. Cillum aliquip dolor non fugiat ad aliqua. In voluptate et non\r\n        irure elit. Tempor qui sunt incididunt amet tempor sint et voluptate sunt qui sit culpa proident ipsum. Sunt\r\n        duis pariatur officia ut magna pariatur fugiat dolor cillum laboris eu. Qui incididunt minim nostrud\r\n        exercitation aliquip.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Fugiat commodo ad consectetur reprehenderit. Officia fugiat ea proident exercitation occaecat mollit laboris\r\n        fugiat consequat deserunt anim ipsum magna ex. Esse do amet cillum aute ut ea.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Magna id fugiat laborum elit ullamco deserunt do laboris non qui. Duis et exercitation nulla labore cupidatat\r\n        nostrud pariatur reprehenderit in nostrud. Consequat consequat consectetur mollit adipisicing. Laborum amet sit\r\n        sint aliquip fugiat adipisicing enim reprehenderit. Voluptate nisi reprehenderit voluptate sit enim aute\r\n        deserunt cupidatat et dolore labore voluptate id dolore.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Reprehenderit non ullamco quis non excepteur irure excepteur anim ullamco labore. Sit occaecat consectetur\r\n        laborum consequat elit sint sit sunt. Duis aliquip magna ipsum consequat eiusmod officia.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Magna nostrud ex cupidatat id in non labore ad voluptate est irure tempor. Nostrud aliqua magna laborum\r\n        incididunt deserunt veniam nulla nulla labore cillum. Id laboris Lorem dolore minim reprehenderit eu proident\r\n        aliqua magna id aute aute. Aliqua est et nulla eu duis id laborum magna.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Sint pariatur eiusmod id sit est exercitation laboris mollit pariatur minim. Ex aliquip commodo nulla\r\n        reprehenderit et laboris consequat pariatur culpa culpa proident ullamco laboris. Ex aliquip deserunt labore\r\n        aliquip ea est sit quis amet tempor sunt amet. Id reprehenderit do elit sit consectetur. Aute amet sint tempor\r\n        ipsum sint laboris est do culpa tempor. Pariatur fugiat aute officia et laboris voluptate sit nisi in anim\r\n        excepteur amet eu.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Incididunt ut eu fugiat do deserunt voluptate id et est aliqua eu sint. Ad dolore excepteur ipsum nulla proident\r\n        dolore aute sunt. Aute enim do dolor laborum id eiusmod sit.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Amet elit et ad amet nulla minim deserunt mollit adipisicing. Laboris non ipsum ad laborum non magna velit\r\n        tempor cillum cillum. Proident dolore eiusmod ex elit cillum. Cupidatat duis pariatur ut id deserunt laboris.\r\n        Culpa excepteur est deserunt eiusmod do do ut est labore eiusmod. Eu eu veniam excepteur mollit anim est velit\r\n        nisi. Velit quis tempor laboris culpa.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Nostrud nulla nisi laboris officia anim nostrud nulla cupidatat veniam ea duis. Pariatur ea ullamco irure\r\n        laborum. Consectetur labore in occaecat ullamco est fugiat nisi sunt deserunt. Non sunt dolor elit culpa dolore\r\n        adipisicing. Fugiat mollit ex voluptate nulla deserunt dolore ea sunt commodo et qui laborum.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Quis pariatur ea nisi excepteur mollit nulla reprehenderit labore. Exercitation pariatur eu pariatur tempor\r\n        deserunt ad occaecat ad in pariatur id et dolore. Enim veniam aute magna fugiat eiusmod velit quis. Laborum sit\r\n        consequat dolore qui minim culpa aliqua pariatur cillum velit. Nostrud enim aliqua ut nisi consectetur pariatur\r\n        fugiat do esse fugiat enim et tempor ad. Eiusmod ut incididunt proident labore sint sit culpa excepteur id.\r\n        Fugiat mollit qui eu eu fugiat proident.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Tempor do officia magna do sunt. Nulla cillum anim excepteur adipisicing commodo culpa. Adipisicing pariatur qui\r\n        voluptate consectetur mollit quis sunt enim veniam ullamco. Duis nostrud anim aliqua adipisicing fugiat aute\r\n        excepteur deserunt enim occaecat pariatur ad. Qui aliquip aute labore minim ipsum in aute et. Aliqua laboris\r\n        magna aute incididunt esse ex. Eu ipsum occaecat aliquip enim aute.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Labore cillum id non anim eiusmod officia. Nostrud laboris sint aliquip cillum magna. Minim sit labore proident\r\n        culpa non nisi cillum non officia est. Proident elit sit adipisicing est cupidatat ex cupidatat labore aliqua\r\n        ad.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Officia tempor ea adipisicing ad sit qui dolore consequat irure veniam. Est sit magna deserunt sint aute commodo\r\n        fugiat fugiat irure sint dolore commodo amet. Duis cillum dolor quis consectetur dolor et et culpa id elit. Amet\r\n        ut nulla sunt non in non duis sit fugiat consequat. Velit incididunt ullamco sunt deserunt nulla ad adipisicing.\r\n        In fugiat ullamco deserunt amet. Ex voluptate amet magna minim ut incididunt veniam.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Occaecat anim do cillum est dolore sint. Do ut proident exercitation est incididunt irure duis ea laborum minim\r\n        cillum est. Mollit irure non qui veniam labore eu elit veniam ea amet nisi esse labore. Elit ut nulla\r\n        exercitation fugiat cupidatat non cupidatat sint id minim.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Voluptate incididunt tempor nulla voluptate esse dolor Lorem veniam voluptate adipisicing laborum in aliqua.\r\n        Proident voluptate exercitation mollit consectetur qui commodo minim. Ea esse veniam velit minim reprehenderit\r\n        incididunt reprehenderit do laborum aliqua. In quis et excepteur cupidatat qui duis. Pariatur Lorem laborum ut\r\n        consectetur deserunt consectetur officia tempor commodo aliqua aliqua ipsum.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Ullamco officia esse ex reprehenderit reprehenderit cupidatat. Sunt excepteur sint consectetur ex aliqua\r\n        excepteur. Laborum id cupidatat ea reprehenderit sit eiusmod ad exercitation ullamco nostrud. Nulla tempor\r\n        voluptate magna amet culpa exercitation ad laborum in. Aliqua voluptate deserunt pariatur excepteur. Ullamco\r\n        voluptate est dolore velit aliquip tempor nostrud deserunt. Minim excepteur dolor nulla commodo incididunt ex\r\n        ullamco excepteur cillum veniam quis reprehenderit.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<h3 class=\"my-md\">Masonry with any kind of element</h3>\r\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg1.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Proident est cillum magna qui pariatur. Deserunt ut voluptate sint aliquip anim nisi consequat. Elit laboris\r\n        anim anim dolor incididunt. Nostrud qui labore qui cillum excepteur mollit excepteur consequat esse anim enim ad\r\n        enim. Esse qui mollit et minim mollit laboris reprehenderit laborum fugiat do id. Mollit labore proident\r\n        cupidatat aliqua dolore exercitation consectetur commodo sint mollit nostrud esse sunt. Nostrud fugiat duis sit\r\n        excepteur excepteur mollit.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg2.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg3.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg4.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg5.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg6.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Dolore consequat elit est qui dolore dolore tempor amet magna adipisicing non in commodo. Veniam sint et\r\n        proident duis eu nulla commodo sunt duis aliquip eiusmod. Occaecat incididunt deserunt consectetur non aliquip\r\n        velit ullamco eu sit labore proident exercitation. Cillum deserunt voluptate eu eiusmod sint in esse. Velit anim\r\n        non Lorem proident eu sit nisi Lorem aute do sit ea. Esse nostrud amet excepteur occaecat incididunt amet\r\n        laborum aliqua qui mollit ullamco. Labore incididunt ullamco non ipsum Lorem duis commodo adipisicing in.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Amet est dolor id esse veniam duis eu ex velit. Id qui deserunt voluptate veniam. Voluptate ea ipsum in eiusmod\r\n        enim do velit commodo nulla sint. Fugiat ipsum esse pariatur voluptate exercitation magna ut proident\r\n        consectetur et. Sint qui elit exercitation anim duis nulla commodo aliqua excepteur pariatur.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg7.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg8.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>\r\n        Culpa amet adipisicing consequat nisi dolore sunt amet labore officia aliquip elit tempor officia aliqua.\r\n        Deserunt laborum enim ut laboris duis. Cillum non proident dolor ullamco cillum nostrud in sint aliqua cillum.\r\n        Proident magna incididunt occaecat eiusmod cillum dolor tempor Lorem adipisicing nisi adipisicing mollit ex\r\n        exercitation. Magna nostrud est sunt incididunt culpa. Duis nulla elit ut ea adipisicing duis esse ullamco.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg9.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg10.jpg\" alt=\"\" />\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/typography/typography.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/typography/typography.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Typography\r\n  </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Headings\">\r\n      <h1 class=\"h1\">\r\n        class=\"h1\"\r\n        <small>Sub-heading</small>\r\n      </h1>\r\n      <h2 class=\"h2\">\r\n        class=\"h2\"\r\n        <small>Sub-heading</small>\r\n      </h2>\r\n      <h3 class=\"h3\">\r\n        class=\"h3\"\r\n        <small>Sub-heading</small>\r\n      </h3>\r\n      <h4 class=\"h4\">\r\n        class=\"h4\"\r\n        <small>Sub-heading</small>\r\n      </h4>\r\n      <h5 class=\"h5\">\r\n        class=\"h5\"\r\n        <small>Sub-heading</small>\r\n      </h5>\r\n      <h6 class=\"h6\">\r\n        class=\"h6\"\r\n        <small>Sub-heading</small>\r\n      </h6>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Paragraphs\">\r\n      <p>\r\n        <small>This is an example of small, fine print text.</small>\r\n      </p>\r\n      <p class=\"mt-sm\">\r\n        <strong>This is an example of strong, bold text.</strong>\r\n      </p>\r\n      <p class=\"mt-sm\">\r\n        <em>This is an example of emphasized, italic text.</em>\r\n      </p>\r\n      <h4 class=\"mt-sm\">Alignment & Sizing Helpers</h4>\r\n      <p class=\"mt-sm text-left text-sm\">class=\"text-left text-sm\"</p>\r\n      <p class=\"mt-sm text-center text-md\">class=\"text-center text-md\"</p>\r\n      <p class=\"text-right text-lg\">class=\"text-right text-lg\"</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Text Colors\">\r\n      <p *ngFor=\"let color of c.names\" class=\"pb-0 text-{{ color }}\">class=\"text-{{ color }} bg-{{ color }}\"</p>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Formatting\">\r\n      <h4>text-nowrap</h4>\r\n      <p class=\"pt-sm text-nowrap\">\r\n        [class=\"text-nowrap\"].Ad eiusmod eu velit veniam laborum voluptate duis aliqua esse eiusmod.\r\n      </p>\r\n      <h4 class=\"pt-sm\">text-truncate</h4>\r\n      <p class=\"pt-sm text-truncate\">\r\n        [class=\"text-truncate\"].Officia nulla velit minim mollit laborum et irure ullamco nisi dolore qui. Sint aute\r\n        aliqua tempor commodo officia sunt non do id laborum mollit ex ea cupidatat. Amet ad non fugiat magna. Ut\r\n        cupidatat labore pariatur esse reprehenderit esse sint in proident elit minim sunt enim sit. Enim sint deserunt\r\n        exercitation duis. Aliquip cillum irure do incididunt do eu eiusmod excepteur culpa ex consectetur nulla duis\r\n        sit. Ex officia excepteur officia ea ea cupidatat veniam officia officia est.\r\n      </p>\r\n      <h4 class=\"pt-sm\">Transformation</h4>\r\n      <p class=\"pt-sm text-lowercase\">class=\"text-lowercase\"</p>\r\n      <p class=\"pt-sm text-uppercase\">class=\"text-uppercase\"</p>\r\n      <p class=\"pt-sm text-capitalize\">class=\"text-capitalize\"</p>\r\n      <p class=\"pt-sm text-deleted\">class=\"text-deleted\"</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Border\">\r\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border border-primary\">\r\n        class=\"border border-primary\"\r\n      </div>\r\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-top-1 border-success rounded-circle\">\r\n        class=\"border-top-1 border-success rounded-circle\"\r\n      </div>\r\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-bottom-1 border-error\">\r\n        class=\"border-bottom-1 border-error\"\r\n      </div>\r\n      <div class=\"p-sm m-sm text-center width-md d-inline-block border-right-1 border-warning\">\r\n        class=\"border-right-1 border-warning\"\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Padding & Margin\">\r\n      <strong>清除间距</strong>\r\n      <p>\r\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?0</code>\r\n      </p>\r\n      <p>eg: p0, pt0, mb0, mt0</p>\r\n      <strong>间距</strong>\r\n      <p>\r\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?-[<尺寸>sm|md|lg]</code>\r\n      </p>\r\n      <p>eg: p-sm, pb-sm, mt-md, mr-md</p>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Display\">\r\n      <p class=\"display-1\">class=\"display-1\"</p>\r\n      <p class=\"display-2\">class=\"display-2\"</p>\r\n      <p class=\"display-3\">class=\"display-3\"</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Code\">\r\n      <p>\r\n        This is an example of an inline code element within body copy. Wrap inline code within a <code>...</code>tag.\r\n      </p>\r\n      <pre class=\"mt-sm\"><code>This is an example of preformatted text.</code></pre>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Lists\">\r\n      <h4>list styled</h4>\r\n      <ol class=\"mt-sm list-styled\">\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n      </ol>\r\n      <h4 class=\"mt-sm\">Unstyled List</h4>\r\n      <ul class=\"mt-sm list-unstyled\">\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n      </ul>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/routes/style/color.service.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/style/color.service.ts ***!
  \***********************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ColorService = /** @class */ (function () {
    function ColorService() {
        this.APP_COLORS = {
            primary: '#1890ff',
            success: '#52c41a',
            error: '#f5222d',
            warning: '#fadb14',
            red: '#f5222d',
            volcano: '#fa541c',
            orange: '#fa8c16',
            gold: '#faad14',
            yellow: '#fadb14',
            lime: '#a0d911',
            green: '#52c41a',
            cyan: '#13c2c2',
            blue: '#1890ff',
            geekblue: '#2f54eb',
            purple: '#722ed1',
            magenta: '#eb2f96',
        };
    }
    Object.defineProperty(ColorService.prototype, "names", {
        get: function () {
            return Object.keys(this.APP_COLORS).filter(function (name, index) { return index > 3; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorService.prototype, "brands", {
        get: function () {
            return ['primary', 'success', 'error', 'warning'];
        },
        enumerable: true,
        configurable: true
    });
    ColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ColorService);
    return ColorService;
}());



/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.less":
/*!***********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .list p {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n:host ::ng-deep .list p:first-child {\n  margin-bottom: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbmctYWxhaW4tYXBwL3NyYy9hcHAvcm91dGVzL3N0eWxlL2NvbG9ycy9DOi9Vc2Vycy9ZaW5DaGFuZy9Eb2N1bWVudHMvV29ya3MvR2l0SHViL2FicC5uZy9hcHBzL25nLWFsYWluLWFwcC9zcmMvYXBwL3JvdXRlcy9zdHlsZS9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5sZXNzIiwiYXBwcy9uZy1hbGFpbi1hcHAvc3JjL2FwcC9yb3V0ZXMvc3R5bGUvY29sb3JzL2NvbG9ycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FER1E7RUFDRSxrQkFBQTtBQ0RWIiwiZmlsZSI6ImFwcHMvbmctYWxhaW4tYXBwL3NyYy9hcHAvcm91dGVzL3N0eWxlL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmxpc3Qge1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLmxpc3QgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAubGlzdCBwOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.ts ***!
  \*********************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "../../node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ColorsComponent = /** @class */ (function () {
    function ColorsComponent(c, msg) {
        this.c = c;
        this.msg = msg;
        this.nums = Array(10)
            .fill(1)
            .map(function (v, i) { return v + i; });
    }
    ColorsComponent.prototype.onCopy = function (str) {
        var _this = this;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])(str).then(function () { return _this.msg.success("Copied Success!"); });
    };
    ColorsComponent.ctorParameters = function () { return [
        { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./colors.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/colors/colors.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./colors.component.less */ "./src/app/routes/style/colors/colors.component.less")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .box-placeholder {\n  margin-bottom: 15px;\n  padding: 20px;\n  color: #444;\n  background: #fafafa;\n  border: 1px dashed #ddd;\n}\n:host ::ng-deep .box-placeholder > :last-child {\n  margin-bottom: 0;\n}\n:host ::ng-deep .box-placeholder-lg {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbmctYWxhaW4tYXBwL3NyYy9hcHAvcm91dGVzL3N0eWxlL2dyaWRtYXNvbnJ5L0M6L1VzZXJzL1lpbkNoYW5nL0RvY3VtZW50cy9Xb3Jrcy9HaXRIdWIvYWJwLm5nL2FwcHMvbmctYWxhaW4tYXBwL3NyYy9hcHAvcm91dGVzL3N0eWxlL2dyaWRtYXNvbnJ5L2dyaWRtYXNvbnJ5LmNvbXBvbmVudC5sZXNzIiwiYXBwcy9uZy1hbGFpbi1hcHAvc3JjL2FwcC9yb3V0ZXMvc3R5bGUvZ3JpZG1hc29ucnkvZ3JpZG1hc29ucnkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKO0FETkE7RUFRTSxnQkFBQTtBQ0NOO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDQ04iLCJmaWxlIjoiYXBwcy9uZy1hbGFpbi1hcHAvc3JjL2FwcC9yb3V0ZXMvc3R5bGUvZ3JpZG1hc29ucnkvZ3JpZG1hc29ucnkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAuYm94LXBsYWNlaG9sZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgICA+IDpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgICYtbGcge1xuICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuYm94LXBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM0NDQ7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ib3gtcGxhY2Vob2xkZXIgPiA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJveC1wbGFjZWhvbGRlci1sZyB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.ts ***!
  \*******************************************************************/
/*! exports provided: GridMasonryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMasonryComponent", function() { return GridMasonryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var GridMasonryComponent = /** @class */ (function () {
    function GridMasonryComponent() {
    }
    GridMasonryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gridmasonry',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gridmasonry.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/gridmasonry/gridmasonry.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gridmasonry.component.less */ "./src/app/routes/style/gridmasonry/gridmasonry.component.less")).default]
        })
    ], GridMasonryComponent);
    return GridMasonryComponent;
}());



/***/ }),

/***/ "./src/app/routes/style/style-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/style/style-routing.module.ts ***!
  \******************************************************/
/*! exports provided: StyleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoutingModule", function() { return StyleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");






var routes = [
    { path: 'gridmasonry', component: _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_3__["GridMasonryComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"] },
];
var StyleRoutingModule = /** @class */ (function () {
    function StyleRoutingModule() {
    }
    StyleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StyleRoutingModule);
    return StyleRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/style/style.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/style/style.module.ts ***!
  \**********************************************/
/*! exports provided: StyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleModule", function() { return StyleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _style_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-routing.module */ "./src/app/routes/style/style-routing.module.ts");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");








var COMPONENTS = [_gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_5__["GridMasonryComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"], _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"]];
var COMPONENTS_NOROUNT = [];
var StyleModule = /** @class */ (function () {
    function StyleModule() {
    }
    StyleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _style_routing_module__WEBPACK_IMPORTED_MODULE_3__["StyleRoutingModule"]],
            providers: [_color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT,
        })
    ], StyleModule);
    return StyleModule;
}());



/***/ }),

/***/ "./src/app/routes/style/typography/typography.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/style/typography/typography.component.ts ***!
  \*****************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(c) {
        this.c = c;
    }
    TypographyComponent.ctorParameters = function () { return [
        { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] }
    ]; };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typography.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/style/typography/typography.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=style-style-module.js.map