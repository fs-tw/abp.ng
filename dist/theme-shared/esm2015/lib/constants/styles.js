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

[dir=rtl] .data-tables-filter {
  text-align: left;
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

.datatable-scroll {
  margin-bottom: 5px !important;
  width: unset !important;
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
.ngx-datatable.material {
  box-shadow: none;
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
export const BOOTSTRAP = 'bootstrap-{{dir}}.min.css';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvY29uc3RhbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3S2QsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGBcclxuLmlzLWludmFsaWQgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzLWludmFsaWQgLmludmFsaWQtZmVlZGJhY2ssXHJcbi5pcy1pbnZhbGlkICsgKiAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlcy1maWx0ZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5bZGlyPXJ0bF0gLmRhdGEtdGFibGVzLWZpbHRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tc3VibWVudSBhOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAxOHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IHtcclxuICBtaW4td2lkdGg6IDIxNXB4O1xyXG59XHJcblxyXG4uZGF0YXRhYmxlLXNjcm9sbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS10YWJsZS1zY3JvbGxhYmxlLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi51aS10YWJsZS1zY3JvbGxhYmxlLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjOGE4Njg2O1xyXG59XHJcblxyXG4uYWJwLWVsbGlwc2lzLWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmFicC1lbGxpcHNpcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi51aS13aWRnZXQtb3ZlcmxheSB7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmNvbG9yLXdoaXRlIHtcclxuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94ID4gbGFiZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogPGFuaW1hdGlvbnMgKi9cclxuXHJcbi5mYWRlLWluLXRvcCB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5Ub3AgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZhZGUtb3V0LXRvcCB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlT3V0VG9wIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hYnAtY29sbGFwc2VkLWhlaWdodCB7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IGxpbmVhciAwLjM1cztcclxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCBsaW5lYXIgMC4zNXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCBsaW5lYXIgMC4zNXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IGxpbmVhciAwLjM1cztcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjptYXgtaGVpZ2h0IDAuMzVzIGxpbmVhcjtcclxuICBoZWlnaHQ6YXV0bztcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uYWJwLW1oLTI1IHtcclxuICBtYXgtaGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG4uYWJwLW1oLTUwIHtcclxuICB0cmFuc2l0aW9uOm1heC1oZWlnaHQgMC42NXMgbGluZWFyO1xyXG4gIG1heC1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5hYnAtbWgtNzUge1xyXG4gIHRyYW5zaXRpb246bWF4LWhlaWdodCAwLjg1cyBsaW5lYXI7XHJcbiAgbWF4LWhlaWdodDogNzV2aDtcclxufVxyXG5cclxuLmFicC1taC0xMDAge1xyXG4gIHRyYW5zaXRpb246bWF4LWhlaWdodCAxcyBsaW5lYXI7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbltjbGFzc149XCJzb3J0aW5nXCJdIHtcclxuICBvcGFjaXR5OiAuMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuW2NsYXNzXj1cInNvcnRpbmdcIl06YmVmb3JlIHtcclxuICByaWdodDogMC41cmVtO1xyXG4gIGNvbnRlbnQ6IFwi4oaRXCI7XHJcbn1cclxuW2NsYXNzXj1cInNvcnRpbmdcIl06YWZ0ZXIge1xyXG4gIHJpZ2h0OiAwLjVyZW07XHJcbiAgY29udGVudDogXCLihpNcIjtcclxufVxyXG5cclxuLnNvcnRpbmdfZGVzYyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uc29ydGluZ19kZXNjOmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuXHJcbi5zb3J0aW5nX2FzYyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uc29ydGluZ19hc2M6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0VG9wIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLyogPC9hbmltYXRpb25zICovXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJPT1RTVFJBUCA9ICdib290c3RyYXAte3tkaXJ9fS5taW4uY3NzJztcclxuIl19