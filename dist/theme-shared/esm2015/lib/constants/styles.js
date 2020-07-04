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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvY29uc3RhbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUtkLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBgXHJcbi5pcy1pbnZhbGlkIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pcy1pbnZhbGlkIC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4uaXMtaW52YWxpZCArICogLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZGF0YS10YWJsZXMtZmlsdGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuW2Rpcj1ydGxdIC5kYXRhLXRhYmxlcy1maWx0ZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXIgLmRyb3Bkb3duLXN1Ym1lbnUgYTo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIHRvcDogMThweDtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XHJcbiAgbWluLXdpZHRoOiAyMTVweDtcclxufVxyXG5cclxuLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWktdGFibGUtc2Nyb2xsYWJsZS1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4YTg2ODY7XHJcbn1cclxuXHJcbi5hYnAtZWxsaXBzaXMtaW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYWJwLWVsbGlwc2lzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnVpLXdpZGdldC1vdmVybGF5IHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uY29sb3Itd2hpdGUge1xyXG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tib3ggPiBsYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiA8YW5pbWF0aW9ucyAqL1xyXG5cclxuLmZhZGUtaW4tdG9wIHtcclxuICBhbmltYXRpb246IGZhZGVJblRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZmFkZS1vdXQtdG9wIHtcclxuICBhbmltYXRpb246IGZhZGVPdXRUb3AgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFicC1jb2xsYXBzZWQtaGVpZ2h0IHtcclxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgbGluZWFyIDAuMzVzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IGxpbmVhciAwLjM1cztcclxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IGxpbmVhciAwLjM1cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgbGluZWFyIDAuMzVzO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICB0cmFuc2l0aW9uOm1heC1oZWlnaHQgMC4zNXMgbGluZWFyO1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hYnAtbWgtMjUge1xyXG4gIG1heC1oZWlnaHQ6IDI1dmg7XHJcbn1cclxuXHJcbi5hYnAtbWgtNTAge1xyXG4gIHRyYW5zaXRpb246bWF4LWhlaWdodCAwLjY1cyBsaW5lYXI7XHJcbiAgbWF4LWhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLmFicC1taC03NSB7XHJcbiAgdHJhbnNpdGlvbjptYXgtaGVpZ2h0IDAuODVzIGxpbmVhcjtcclxuICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4uYWJwLW1oLTEwMCB7XHJcbiAgdHJhbnNpdGlvbjptYXgtaGVpZ2h0IDFzIGxpbmVhcjtcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuW2NsYXNzXj1cInNvcnRpbmdcIl0ge1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5bY2xhc3NePVwic29ydGluZ1wiXTpiZWZvcmUge1xyXG4gIHJpZ2h0OiAwLjVyZW07XHJcbiAgY29udGVudDogXCLihpFcIjtcclxufVxyXG5bY2xhc3NePVwic29ydGluZ1wiXTphZnRlciB7XHJcbiAgcmlnaHQ6IDAuNXJlbTtcclxuICBjb250ZW50OiBcIuKGk1wiO1xyXG59XHJcblxyXG4uc29ydGluZ19kZXNjIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zb3J0aW5nX2Rlc2M6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG5cclxuLnNvcnRpbmdfYXNjIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zb3J0aW5nX2FzYzphZnRlciB7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb3Age1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA8L2FuaW1hdGlvbnMgKi9cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQk9PVFNUUkFQID0gJ2Jvb3RzdHJhcC17e2Rpcn19Lm1pbi5jc3MnO1xyXG4iXX0=