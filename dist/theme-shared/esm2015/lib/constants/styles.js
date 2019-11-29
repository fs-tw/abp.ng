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
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: calc(100% - 7px) !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.6) !important;
  z-index: 1040 !important;
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
  z-index: 1050 !important;
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
  box-sizing: border-box !important;
  border: 2px solid transparent !important;
  border-radius: 4px !important;
  background-color: #f4f4f7 !important;
  color: #1b1d29 !important;
}

.abp-toast .ui-toast-message-content {
  padding: 10px !important;
}

.abp-toast .ui-toast-message-content .ui-toast-icon {
  top: 0 !important;
  left: 0 !important;
  padding: 10px !important;
}

.abp-toast .ui-toast-summary {
  margin: 0 !important;
  font-weight: 700 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-error {
  border-color: #ba1659 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-error .ui-toast-message-content .ui-toast-icon {
  color: #ba1659 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-warning {
  border-color: #ed5d98 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-warning .ui-toast-message-content .ui-toast-icon {
  color: #ed5d98 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-success {
  border-color: #1c9174 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-success .ui-toast-message-content .ui-toast-icon {
  color: #1c9174 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-info {
  border-color: #fccb31 !important;
}

.abp-toast .ui-toast-message.ui-toast-message-info .ui-toast-message-content .ui-toast-icon {
  color: #fccb31 !important;
}

.abp-confirm .ui-toast-message {
  box-sizing: border-box !important;
  padding: 0px !important;
  border:0 none !important;
  border-radius: 4px !important;
  background-color: #fff !important;
  color: rgba(0, 0, 0, .65) !important;
  font-family: "Poppins", sans-serif;
  text-align: center !important;
}

.abp-confirm .ui-toast-message-content {
  padding: 0px !important;
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
  display: block !important;
  margin-top: 30px !important;
  padding: 16px !important;
  background-color: #f4f4f7 !important;
  text-align: right !important;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29uc3RhbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdVFkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBgXHJcbi5pcy1pbnZhbGlkIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pcy1pbnZhbGlkIC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4uaXMtaW52YWxpZCArICogLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZGF0YS10YWJsZXMtZmlsdGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tc3VibWVudSBhOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAxOHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IHtcclxuICBtaW4td2lkdGg6IDIxNXB4O1xyXG59XHJcblxyXG4udWktdGFibGUtc2Nyb2xsYWJsZS1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi51aS10YWJsZS1zY3JvbGxhYmxlLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjOGE4Njg2O1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDdweCkgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxMDQwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA3cHg7XHJcbn1cclxuXHJcbi5tb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi5tb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4YTg2ODY7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHotaW5kZXg6IDEwNTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC1lbGxpcHNpcy1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5hYnAtZWxsaXBzaXMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYWJwLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMxYjFkMjkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC10b2FzdCAudWktdG9hc3QtbWVzc2FnZS1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYnAtdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCAudWktdG9hc3QtaWNvbiB7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC10b2FzdCAudWktdG9hc3Qtc3VtbWFyeSB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2UtZXJyb3Ige1xyXG4gIGJvcmRlci1jb2xvcjogI2JhMTY1OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2UtZXJyb3IgLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCAudWktdG9hc3QtaWNvbiB7XHJcbiAgY29sb3I6ICNiYTE2NTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC10b2FzdCAudWktdG9hc3QtbWVzc2FnZS51aS10b2FzdC1tZXNzYWdlLXdhcm5pbmcge1xyXG4gIGJvcmRlci1jb2xvcjogI2VkNWQ5OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2Utd2FybmluZyAudWktdG9hc3QtbWVzc2FnZS1jb250ZW50IC51aS10b2FzdC1pY29uIHtcclxuICBjb2xvcjogI2VkNWQ5OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWM5MTc0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYnAtdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UudWktdG9hc3QtbWVzc2FnZS1zdWNjZXNzIC51aS10b2FzdC1tZXNzYWdlLWNvbnRlbnQgLnVpLXRvYXN0LWljb24ge1xyXG4gIGNvbG9yOiAjMWM5MTc0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYnAtdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UudWktdG9hc3QtbWVzc2FnZS1pbmZvIHtcclxuICBib3JkZXItY29sb3I6ICNmY2NiMzEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC10b2FzdCAudWktdG9hc3QtbWVzc2FnZS51aS10b2FzdC1tZXNzYWdlLWluZm8gLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCAudWktdG9hc3QtaWNvbiB7XHJcbiAgY29sb3I6ICNmY2NiMzEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC1jb25maXJtIC51aS10b2FzdC1tZXNzYWdlIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOjAgbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjUpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLWNvbmZpcm0gLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYnAtY29uZmlybSAuYWJwLWNvbmZpcm0taWNvbiB7XHJcbiAgbWFyZ2luOiAzMnB4IDUwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmOGJiODYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDUycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC1jb25maXJtIC51aS10b2FzdC1jbG9zZS1pY29uIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYnAtY29uZmlybSAuYWJwLWNvbmZpcm0tc3VtbWFyeSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTNweCAxNnB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFicC1jb25maXJtIC5hYnAtY29uZmlybS1ib2R5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLWNvbmZpcm0gLmFicC1jb25maXJtLWZvb3RlciB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjcgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJwLWNvbmZpcm0gLmFicC1jb25maXJtLWZvb3RlciAuYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWktd2lkZ2V0LW92ZXJsYXkge1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5jb2xvci13aGl0ZSB7XHJcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCA+IGxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIDxhbmltYXRpb25zICovXHJcblxyXG4uZmFkZS1pbi10b3Age1xyXG4gIGFuaW1hdGlvbjogZmFkZUluVG9wIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5mYWRlLW91dC10b3Age1xyXG4gIGFuaW1hdGlvbjogZmFkZU91dFRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYWJwLWNvbGxhcHNlZC1oZWlnaHQge1xyXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCBsaW5lYXIgMC4zNXM7XHJcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgbGluZWFyIDAuMzVzO1xyXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgbGluZWFyIDAuMzVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCBsaW5lYXIgMC4zNXM7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIHRyYW5zaXRpb246bWF4LWhlaWdodCAwLjM1cyBsaW5lYXI7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbiAgbWF4LWhlaWdodDogMDtcclxufVxyXG5cclxuLmFicC1taC0yNSB7XHJcbiAgbWF4LWhlaWdodDogMjV2aDtcclxufVxyXG5cclxuLmFicC1taC01MCB7XHJcbiAgdHJhbnNpdGlvbjptYXgtaGVpZ2h0IDAuNjVzIGxpbmVhcjtcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4uYWJwLW1oLTc1IHtcclxuICB0cmFuc2l0aW9uOm1heC1oZWlnaHQgMC44NXMgbGluZWFyO1xyXG4gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbi5hYnAtbWgtMTAwIHtcclxuICB0cmFuc2l0aW9uOm1heC1oZWlnaHQgMXMgbGluZWFyO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0VG9wIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLyogPC9hbmltYXRpb25zICovXHJcblxyXG5gO1xyXG4iXX0=