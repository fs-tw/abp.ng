/**
 * @fileoverview added by tsickle
 * Generated from: _mock/_rule.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var list = [];
for (var i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
/**
 * @param {?} params
 * @return {?}
 */
function getRule(params) {
    /** @type {?} */
    var ret = tslib_1.__spread(list);
    if (params.sorter) {
        /** @type {?} */
        var s_1 = params.sorter.split('_');
        ret = ret.sort((/**
         * @param {?} prev
         * @param {?} next
         * @return {?}
         */
        function (prev, next) {
            if (s_1[1] === 'descend') {
                return next[s_1[0]] - prev[s_1[0]];
            }
            return prev[s_1[0]] - next[s_1[0]];
        }));
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return params.statusList.indexOf(data.status) > -1; }));
    }
    if (params.no) {
        ret = ret.filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.no.indexOf(params.no) > -1; }));
    }
    return ret;
}
/**
 * @param {?} nos
 * @return {?}
 */
function removeRule(nos) {
    nos.split(',').forEach((/**
     * @param {?} no
     * @return {?}
     */
    function (no) {
        /** @type {?} */
        var idx = list.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.no === no; }));
        if (idx !== -1)
            list.splice(idx, 1);
    }));
    return true;
}
/**
 * @param {?} description
 * @return {?}
 */
function saveRule(description) {
    /** @type {?} */
    var i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
var ɵ0 = /**
 * @param {?} req
 * @return {?}
 */
function (req) { return getRule(req.queryString); }, ɵ1 = /**
 * @param {?} req
 * @return {?}
 */
function (req) { return removeRule(req.queryString.nos); }, ɵ2 = /**
 * @param {?} req
 * @return {?}
 */
function (req) { return saveRule(req.body.description); };
/** @type {?} */
export var RULES = {
    '/rule': (ɵ0),
    'DELETE /rule': (ɵ1),
    'POST /rule': (ɵ2),
};
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3J1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vIiwic291cmNlcyI6WyJfbW9jay9fcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBR00sSUFBSSxHQUFVLEVBQUU7QUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDUixHQUFHLEVBQUUsQ0FBQztRQUNOLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixNQUFNLEVBQUU7WUFDTixxRUFBcUU7WUFDckUscUVBQXFFO1NBQ3RFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLEVBQUUsRUFBRSxlQUFhLENBQUc7UUFDcEIsS0FBSyxFQUFFLDBDQUFVLENBQUc7UUFDcEIsS0FBSyxFQUFFLEtBQUs7UUFDWixXQUFXLEVBQUUsUUFBUTtRQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQzFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUNoRyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBVyxDQUFDLEdB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WixXQUFXLGFBQUE7UUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQzFDLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtRQUNyQixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztLQUN6QyxDQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUdVLFVBQUMsR0FBZ0IsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQXhCLENBQXdCOzs7O0FBQ3ZDLFVBQUMsR0FBZ0IsSUFBSyxPQUFBLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQjs7OztBQUN2RCxVQUFDLEdBQWdCLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBOUIsQ0FBOEI7O0FBSHBFLE1BQU0sS0FBTyxLQUFLLEdBQUc7SUFDbkIsT0FBTyxNQUFnRDtJQUN2RCxjQUFjLE1BQXVEO0lBQ3JFLFlBQVksTUFBc0Q7Q0FDbkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICdAZGVsb24vbW9jayc7XHJcblxyXG5jb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCA0NjsgaSArPSAxKSB7XHJcbiAgbGlzdC5wdXNoKHtcclxuICAgIGtleTogaSxcclxuICAgIGRpc2FibGVkOiBpICUgNiA9PT0gMCxcclxuICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgYXZhdGFyOiBbXHJcbiAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZWVITWFaQndtVHZMZEl3TWZCcGcucG5nJyxcclxuICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC91ZHhBYk1FaHB3dGhWVmNqTFhpay5wbmcnLFxyXG4gICAgXVtpICUgMl0sXHJcbiAgICBubzogYFRyYWRlQ29kZSAke2l9YCxcclxuICAgIHRpdGxlOiBg5LiA5Liq5Lu75Yqh5ZCN56ewICR7aX1gLFxyXG4gICAgb3duZXI6ICfmm7LkuL3kuL0nLFxyXG4gICAgZGVzY3JpcHRpb246ICfov5nmmK/kuIDmrrXmj4/ov7AnLFxyXG4gICAgY2FsbE5vOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgIHN0YXR1czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICUgNCxcclxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoYDIwMTctMDctJHtpIDwgMTggPyAnMCcgKyAoTWF0aC5mbG9vcihpIC8gMikgKyAxKSA6IE1hdGguZmxvb3IoaSAvIDIpICsgMX1gKSxcclxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoYDIwMTctMDctJHtpIDwgMTggPyAnMCcgKyAoTWF0aC5mbG9vcihpIC8gMikgKyAxKSA6IE1hdGguZmxvb3IoaSAvIDIpICsgMX1gKSxcclxuICAgIHByb2dyZXNzOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJ1bGUocGFyYW1zOiBhbnkpIHtcclxuICBsZXQgcmV0ID0gWy4uLmxpc3RdO1xyXG4gIGlmIChwYXJhbXMuc29ydGVyKSB7XHJcbiAgICBjb25zdCBzID0gcGFyYW1zLnNvcnRlci5zcGxpdCgnXycpO1xyXG4gICAgcmV0ID0gcmV0LnNvcnQoKHByZXYsIG5leHQpID0+IHtcclxuICAgICAgaWYgKHNbMV0gPT09ICdkZXNjZW5kJykge1xyXG4gICAgICAgIHJldHVybiBuZXh0W3NbMF1dIC0gcHJldltzWzBdXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJldltzWzBdXSAtIG5leHRbc1swXV07XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKHBhcmFtcy5zdGF0dXNMaXN0ICYmIHBhcmFtcy5zdGF0dXNMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgIHJldCA9IHJldC5maWx0ZXIoZGF0YSA9PiBwYXJhbXMuc3RhdHVzTGlzdC5pbmRleE9mKGRhdGEuc3RhdHVzKSA+IC0xKTtcclxuICB9XHJcbiAgaWYgKHBhcmFtcy5ubykge1xyXG4gICAgcmV0ID0gcmV0LmZpbHRlcihkYXRhID0+IGRhdGEubm8uaW5kZXhPZihwYXJhbXMubm8pID4gLTEpO1xyXG4gIH1cclxuICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSdWxlKG5vczogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgbm9zLnNwbGl0KCcsJykuZm9yRWFjaChubyA9PiB7XHJcbiAgICBjb25zdCBpZHggPSBsaXN0LmZpbmRJbmRleCh3ID0+IHcubm8gPT09IG5vKTtcclxuICAgIGlmIChpZHggIT09IC0xKSBsaXN0LnNwbGljZShpZHgsIDEpO1xyXG4gIH0pO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlUnVsZShkZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgY29uc3QgaSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDApO1xyXG4gIGxpc3QudW5zaGlmdCh7XHJcbiAgICBrZXk6IGksXHJcbiAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgIGF2YXRhcjogW1xyXG4gICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2VlSE1hWkJ3bVR2TGRJd01mQnBnLnBuZycsXHJcbiAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvdWR4QWJNRWhwd3RoVlZjakxYaWsucG5nJyxcclxuICAgIF1baSAlIDJdLFxyXG4gICAgbm86IGBUcmFkZUNvZGUgJHtpfWAsXHJcbiAgICB0aXRsZTogYOS4gOS4quS7u+WKoeWQjeensCAke2l9YCxcclxuICAgIG93bmVyOiAn5puy5Li95Li9JyxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgY2FsbE5vOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgIHN0YXR1czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICUgMixcclxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgIHByb2dyZXNzOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSVUxFUyA9IHtcclxuICAnL3J1bGUnOiAocmVxOiBNb2NrUmVxdWVzdCkgPT4gZ2V0UnVsZShyZXEucXVlcnlTdHJpbmcpLFxyXG4gICdERUxFVEUgL3J1bGUnOiAocmVxOiBNb2NrUmVxdWVzdCkgPT4gcmVtb3ZlUnVsZShyZXEucXVlcnlTdHJpbmcubm9zKSxcclxuICAnUE9TVCAvcnVsZSc6IChyZXE6IE1vY2tSZXF1ZXN0KSA9PiBzYXZlUnVsZShyZXEuYm9keS5kZXNjcmlwdGlvbiksXHJcbn07XHJcbiJdfQ==