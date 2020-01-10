/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export default `
.is-invalid .form-control {
  border-color: #dc3545;
  border-style: solid !important;
}

.is-invalid .invalid-feedback,
.is-invalid + * .invalid-feedback {
  display: block;
}

.data-tables-filter {
  text-align: right;
}

.pointer {
  cursor: pointer;
}

.navbar .dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 16px;
  top: 18px;
}

.navbar .dropdown-menu {
  min-width: 215px;
}

.ui-table-scrollable-body::-webkit-scrollbar {
  height: 5px !important;
  width: 5px !important;
}

.ui-table-scrollable-body::-webkit-scrollbar-track {
  background: #ddd;
}

.ui-table-scrollable-body::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.modal.show {
  display: block !important;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.6);
}

.modal::-webkit-scrollbar {
  width: 7px;
}

.modal::-webkit-scrollbar-track {
  background: #ddd;
}

.modal::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.modal-dialog {
  z-index: 1050;
}

.abp-ellipsis-inline {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abp-ellipsis {
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abp-toast .ui-toast-message {
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 4px;
  color: #1b1d29;
}

.abp-toast .ui-toast-message-content {
  padding: 10px;
}

.abp-toast .ui-toast-message-content .ui-toast-icon {
  top: 0;
  left: 0;
  padding: 10px;
}

.abp-toast .ui-toast-summary {
  margin: 0;
  font-weight: 700;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-error {
  border: 2px solid #ba1659;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-error .ui-toast-message-content .ui-toast-icon {
  color: #ba1659;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn {
  border: 2px solid #ed5d98;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn .ui-toast-message-content .ui-toast-icon {
  color: #ed5d98;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-success {
  border: 2px solid #1c9174;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-success .ui-toast-message-content .ui-toast-icon {
  color: #1c9174;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-info {
  border: 2px solid #fccb31;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-info .ui-toast-message-content .ui-toast-icon {
  color: #fccb31;
}

.abp-confirm .ui-toast-message {
  box-sizing: border-box;
  padding: 0px;
  border:0 none;
  border-radius: 4px;
  background-color: transparent !important;
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.abp-confirm .ui-toast-message-content {
  padding: 0px;
}

.abp-confirm .abp-confirm-icon {
  margin: 32px 50px 5px !important;
  color: #f8bb86 !important;
  font-size: 52px !important;
}

.abp-confirm .ui-toast-close-icon {
  display: none !important;
}

.abp-confirm .abp-confirm-summary {
  display: block !important;
  margin-bottom: 13px !important;
  padding: 13px 16px 0px !important;
  font-weight: 600 !important;
  font-size: 18px !important;
}

.abp-confirm .abp-confirm-body {
  display: inline-block !important;
  padding: 0px 10px !important;
}

.abp-confirm .abp-confirm-footer {
  display: block;
  margin-top: 30px;
  padding: 16px;
  text-align: right;
}

.abp-confirm .abp-confirm-footer .btn {
  margin-left: 10px !important;
}

.ui-widget-overlay {
  z-index: 1000;
}

.color-white {
  color: #FFF !important;
}

.custom-checkbox > label {
  cursor: pointer;
}

/* <animations */

.fade-in-top {
  animation: fadeInTop 0.2s ease-in-out;
}

.fade-out-top {
  animation: fadeOutTop 0.2s ease-in-out;
}

.abp-collapsed-height {
  -moz-transition: max-height linear 0.35s;
  -ms-transition: max-height linear 0.35s;
  -o-transition: max-height linear 0.35s;
  -webkit-transition: max-height linear 0.35s;
  overflow:hidden;
  transition:max-height 0.35s linear;
  height:auto;
  max-height: 0;
}

.abp-mh-25 {
  max-height: 25vh;
}

.abp-mh-50 {
  transition:max-height 0.65s linear;
  max-height: 50vh;
}

.abp-mh-75 {
  transition:max-height 0.85s linear;
  max-height: 75vh;
}

.abp-mh-100 {
  transition:max-height 1s linear;
  max-height: 100vh;
}

[class^="sorting"] {
  opacity: .3;
  cursor: pointer;
}
[class^="sorting"]:before {
  right: 0.5rem;
  content: "↑";
}
[class^="sorting"]:after {
  right: 0.5rem;
  content: "↓";
}

.sorting_desc {
  opacity: 1;
}
.sorting_desc:before {
  opacity: .3;
}

.sorting_asc {
  opacity: 1;
}
.sorting_asc:after {
  opacity: .3;
}

@keyframes fadeInTop {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeOutTop {
  to {
    transform: translateY(-5px);
    opacity: 0;
  }
}

/* </animations */

`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29uc3RhbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E4UmQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGBcclxuLmlzLWludmFsaWQgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzLWludmFsaWQgLmludmFsaWQtZmVlZGJhY2ssXHJcbi5pcy1pbnZhbGlkICsgKiAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlcy1maWx0ZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1zdWJtZW51IGE6OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTZweDtcclxuICB0b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1pbi13aWR0aDogMjE1cHg7XHJcbn1cclxuXHJcbi51aS10YWJsZS1zY3JvbGxhYmxlLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi51aS10YWJsZS1zY3JvbGxhYmxlLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjOGE4Njg2O1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi5tb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA3cHg7XHJcbn1cclxuXHJcbi5tb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi5tb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4YTg2ODY7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbn1cclxuXHJcbi5hYnAtZWxsaXBzaXMtaW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYWJwLWVsbGlwc2lzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmFicC10b2FzdCAudWktdG9hc3QtbWVzc2FnZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICMxYjFkMjk7XHJcbn1cclxuXHJcbi5hYnAtdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmFicC10b2FzdCAudWktdG9hc3QtbWVzc2FnZS1jb250ZW50IC51aS10b2FzdC1pY29uIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYWJwLXRvYXN0IC51aS10b2FzdC1zdW1tYXJ5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuYm9keSBhYnAtdG9hc3QgLnVpLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2UtZXJyb3Ige1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYTE2NTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNztcclxufVxyXG5cclxuYm9keSBhYnAtdG9hc3QgLnVpLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2UtZXJyb3IgLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCAudWktdG9hc3QtaWNvbiB7XHJcbiAgY29sb3I6ICNiYTE2NTk7XHJcbn1cclxuXHJcbmJvZHkgYWJwLXRvYXN0IC51aS10b2FzdCAudWktdG9hc3QtbWVzc2FnZS51aS10b2FzdC1tZXNzYWdlLXdhcm4ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZDVkOTg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNztcclxufVxyXG5cclxuYm9keSBhYnAtdG9hc3QgLnVpLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2Utd2FybiAudWktdG9hc3QtbWVzc2FnZS1jb250ZW50IC51aS10b2FzdC1pY29uIHtcclxuICBjb2xvcjogI2VkNWQ5ODtcclxufVxyXG5cclxuYm9keSBhYnAtdG9hc3QgLnVpLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFjOTE3NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY3O1xyXG59XHJcblxyXG5ib2R5IGFicC10b2FzdCAudWktdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UudWktdG9hc3QtbWVzc2FnZS1zdWNjZXNzIC51aS10b2FzdC1tZXNzYWdlLWNvbnRlbnQgLnVpLXRvYXN0LWljb24ge1xyXG4gIGNvbG9yOiAjMWM5MTc0O1xyXG59XHJcblxyXG5ib2R5IGFicC10b2FzdCAudWktdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UudWktdG9hc3QtbWVzc2FnZS1pbmZvIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmNjYjMxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbn1cclxuXHJcbmJvZHkgYWJwLXRvYXN0IC51aS10b2FzdCAudWktdG9hc3QtbWVzc2FnZS51aS10b2FzdC1tZXNzYWdlLWluZm8gLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCAudWktdG9hc3QtaWNvbiB7XHJcbiAgY29sb3I6ICNmY2NiMzE7XHJcbn1cclxuXHJcbi5hYnAtY29uZmlybSAudWktdG9hc3QtbWVzc2FnZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyOjAgbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWJwLWNvbmZpcm0gLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uYWJwLWNvbmZpcm0gLmFicC1jb25maXJtLWljb24ge1xyXG4gIG1hcmdpbjogMzJweCA1MHB4IDVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZjhiYjg2ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiA1MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYnAtY29uZmlybSAudWktdG9hc3QtY2xvc2UtaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLWNvbmZpcm0gLmFicC1jb25maXJtLXN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEzcHggMTZweCAwcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYnAtY29uZmlybSAuYWJwLWNvbmZpcm0tYm9keSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC1jb25maXJtIC5hYnAtY29uZmlybS1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFicC1jb25maXJtIC5hYnAtY29uZmlybS1mb290ZXIgLmJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLXdpZGdldC1vdmVybGF5IHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uY29sb3Itd2hpdGUge1xyXG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tib3ggPiBsYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiA8YW5pbWF0aW9ucyAqL1xyXG5cclxuLmZhZGUtaW4tdG9wIHtcclxuICBhbmltYXRpb246IGZhZGVJblRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZmFkZS1vdXQtdG9wIHtcclxuICBhbmltYXRpb246IGZhZGVPdXRUb3AgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFicC1jb2xsYXBzZWQtaGVpZ2h0IHtcclxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgbGluZWFyIDAuMzVzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IGxpbmVhciAwLjM1cztcclxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IGxpbmVhciAwLjM1cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgbGluZWFyIDAuMzVzO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICB0cmFuc2l0aW9uOm1heC1oZWlnaHQgMC4zNXMgbGluZWFyO1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hYnAtbWgtMjUge1xyXG4gIG1heC1oZWlnaHQ6IDI1dmg7XHJcbn1cclxuXHJcbi5hYnAtbWgtNTAge1xyXG4gIHRyYW5zaXRpb246bWF4LWhlaWdodCAwLjY1cyBsaW5lYXI7XHJcbiAgbWF4LWhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLmFicC1taC03NSB7XHJcbiAgdHJhbnNpdGlvbjptYXgtaGVpZ2h0IDAuODVzIGxpbmVhcjtcclxuICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4uYWJwLW1oLTEwMCB7XHJcbiAgdHJhbnNpdGlvbjptYXgtaGVpZ2h0IDFzIGxpbmVhcjtcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuW2NsYXNzXj1cInNvcnRpbmdcIl0ge1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5bY2xhc3NePVwic29ydGluZ1wiXTpiZWZvcmUge1xyXG4gIHJpZ2h0OiAwLjVyZW07XHJcbiAgY29udGVudDogXCLihpFcIjtcclxufVxyXG5bY2xhc3NePVwic29ydGluZ1wiXTphZnRlciB7XHJcbiAgcmlnaHQ6IDAuNXJlbTtcclxuICBjb250ZW50OiBcIuKGk1wiO1xyXG59XHJcblxyXG4uc29ydGluZ19kZXNjIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zb3J0aW5nX2Rlc2M6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG5cclxuLnNvcnRpbmdfYXNjIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zb3J0aW5nX2FzYzphZnRlciB7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb3Age1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA8L2FuaW1hdGlvbnMgKi9cclxuXHJcbmA7XHJcbiJdfQ==