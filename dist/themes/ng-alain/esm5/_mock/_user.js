/**
 * @fileoverview added by tsickle
 * Generated from: _mock/_user.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var list = [];
/** @type {?} */
var total = 50;
for (var i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
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
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
/**
 * @param {?} params
 * @return {?}
 */
function genData(params) {
    /** @type {?} */
    var ret = tslib_1.__spread(list);
    /** @type {?} */
    var pi = +params.pi;
    /** @type {?} */
    var ps = +params.ps;
    /** @type {?} */
    var start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.no.indexOf(params.no) > -1; }));
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function saveData(id, value) {
    /** @type {?} */
    var item = list.find((/**
     * @param {?} w
     * @return {?}
     */
    function (w) { return w.id === id; }));
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
var ɵ0 = /**
 * @param {?} req
 * @return {?}
 */
function (req) { return genData(req.queryString); }, ɵ1 = /**
 * @param {?} req
 * @return {?}
 */
function (req) { return list.find((/**
 * @param {?} w
 * @return {?}
 */
function (w) { return w.id === +req.params.id; })); }, ɵ2 = /**
 * @param {?} req
 * @return {?}
 */
function (req) { return saveData(+req.params.id, req.body); }, ɵ3 = /**
 * @param {?} req
 * @return {?}
 */
function (req) {
    /** @type {?} */
    var data = req.body;
    if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
        return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
    }
    return {
        msg: 'ok',
        user: {
            token: '123456789',
            name: data.userName,
            email: data.userName + "@qq.com",
            id: 10000,
            time: +new Date(),
        },
    };
};
/** @type {?} */
export var USERS = {
    '/user': (ɵ0),
    '/user/:id': (ɵ1),
    'POST /user/:id': (ɵ2),
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': (ɵ3),
    'POST /register': {
        msg: 'ok',
    },
};
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3VzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vIiwic291cmNlcyI6WyJfbW9jay9fdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBRU0sSUFBSSxHQUFVLEVBQUU7O0lBQ2hCLEtBQUssR0FBRyxFQUFFO0FBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ1QsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNyQixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLE1BQU0sRUFBRTtZQUNOLHFFQUFxRTtZQUNyRSxxRUFBcUU7U0FDdEUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsRUFBRSxFQUFFLGVBQWEsQ0FBRztRQUNwQixLQUFLLEVBQUUsMENBQVUsQ0FBRztRQUNwQixLQUFLLEVBQUUsS0FBSztRQUNaLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDMUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGNBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFDdkQsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGNBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFDdkQsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJ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dEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUUsNkJBQTZCO1FBQ3BDLElBQUksRUFBRTtZQUNKO2dCQUNFLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRDtnQkFDRSxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsS0FBSyxFQUFFLE1BQU07YUFDZDtTQUNGO1FBQ0QsV0FBVyxFQUFFLEVBQUU7UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLFFBQVE7YUFDZDtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsS0FBSztnQkFDWixHQUFHLEVBQUUsUUFBUTthQUNkO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsY0FBYztRQUN2QixLQUFLLEVBQUUsV0FBVztLQUNuQjtJQUNELG1CQUFtQixFQUFFLElBQUk7SUFDekIscUJBQXFCLE1BZXBCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsR0FBRyxFQUFFLElBQUk7S0FDVjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICdAZGVsb24vbW9jayc7XHJcblxyXG5jb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xyXG5jb25zdCB0b3RhbCA9IDUwO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSArPSAxKSB7XHJcbiAgbGlzdC5wdXNoKHtcclxuICAgIGlkOiBpICsgMSxcclxuICAgIGRpc2FibGVkOiBpICUgNiA9PT0gMCxcclxuICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgYXZhdGFyOiBbXHJcbiAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZWVITWFaQndtVHZMZEl3TWZCcGcucG5nJyxcclxuICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC91ZHhBYk1FaHB3dGhWVmNqTFhpay5wbmcnLFxyXG4gICAgXVtpICUgMl0sXHJcbiAgICBubzogYFRyYWRlQ29kZSAke2l9YCxcclxuICAgIHRpdGxlOiBg5LiA5Liq5Lu75Yqh5ZCN56ewICR7aX1gLFxyXG4gICAgb3duZXI6ICfmm7LkuL3kuL0nLFxyXG4gICAgZGVzY3JpcHRpb246ICfov5nmmK/kuIDmrrXmj4/ov7AnLFxyXG4gICAgY2FsbE5vOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgIHN0YXR1czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICUgNCxcclxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoYDIwMTctMDctJHtNYXRoLmZsb29yKGkgLyAyKSArIDF9YCksXHJcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKGAyMDE3LTA3LSR7TWF0aC5mbG9vcihpIC8gMikgKyAxfWApLFxyXG4gICAgcHJvZ3Jlc3M6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuRGF0YShwYXJhbXM6IGFueSkge1xyXG4gIGxldCByZXQgPSBbLi4ubGlzdF07XHJcbiAgY29uc3QgcGkgPSArcGFyYW1zLnBpO1xyXG4gIGNvbnN0IHBzID0gK3BhcmFtcy5wcztcclxuICBjb25zdCBzdGFydCA9IChwaSAtIDEpICogcHM7XHJcblxyXG4gIGlmIChwYXJhbXMubm8pIHtcclxuICAgIHJldCA9IHJldC5maWx0ZXIoZGF0YSA9PiBkYXRhLm5vLmluZGV4T2YocGFyYW1zLm5vKSA+IC0xKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHRvdGFsOiByZXQubGVuZ3RoLCBsaXN0OiByZXQuc2xpY2Uoc3RhcnQsIHBzICogcGkpIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVEYXRhKGlkOiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcclxuICBjb25zdCBpdGVtID0gbGlzdC5maW5kKHcgPT4gdy5pZCA9PT0gaWQpO1xyXG4gIGlmICghaXRlbSkgcmV0dXJuIHsgbXNnOiAn5peg5pWI55So5oi35L+h5oGvJyB9O1xyXG4gIE9iamVjdC5hc3NpZ24oaXRlbSwgdmFsdWUpO1xyXG4gIHJldHVybiB7IG1zZzogJ29rJyB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUlMgPSB7XHJcbiAgJy91c2VyJzogKHJlcTogTW9ja1JlcXVlc3QpID0+IGdlbkRhdGEocmVxLnF1ZXJ5U3RyaW5nKSxcclxuICAnL3VzZXIvOmlkJzogKHJlcTogTW9ja1JlcXVlc3QpID0+IGxpc3QuZmluZCh3ID0+IHcuaWQgPT09ICtyZXEucGFyYW1zLmlkKSxcclxuICAnUE9TVCAvdXNlci86aWQnOiAocmVxOiBNb2NrUmVxdWVzdCkgPT4gc2F2ZURhdGEoK3JlcS5wYXJhbXMuaWQsIHJlcS5ib2R5KSxcclxuICAnL3VzZXIvY3VycmVudCc6IHtcclxuICAgIG5hbWU6ICdDaXBjaGsnLFxyXG4gICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0JpYXpmYW54bWFtTlJveHhWeGthLnBuZycsXHJcbiAgICB1c2VyaWQ6ICcwMDAwMDAwMScsXHJcbiAgICBlbWFpbDogJ2NpcGNoa0BxcS5jb20nLFxyXG4gICAgc2lnbmF0dXJlOiAn5rW357qz55m+5bed77yM5pyJ5a655LmD5aSnJyxcclxuICAgIHRpdGxlOiAn5Lqk5LqS5LiT5a62JyxcclxuICAgIGdyb3VwOiAn6JqC6JqB6YeR5pyN77yN5p+Q5p+Q5p+Q5LqL5Lia576k77yN5p+Q5p+Q5bmz5Y+w6YOo77yN5p+Q5p+Q5oqA5pyv6YOo77yNVUVEJyxcclxuICAgIHRhZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJzAnLFxyXG4gICAgICAgIGxhYmVsOiAn5b6I5pyJ5oOz5rOV55qEJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIGxhYmVsOiAn5LiT5rOo5pKp5aa5JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIGxhYmVsOiAn5biFficsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICBsYWJlbDogJ+mAmuWQgycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICc0JyxcclxuICAgICAgICBsYWJlbDogJ+S4k+iBjOWQjuerrycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICc1JyxcclxuICAgICAgICBsYWJlbDogJ+a1t+e6s+eZvuW3nScsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbm90aWZ5Q291bnQ6IDEyLFxyXG4gICAgY291bnRyeTogJ0NoaW5hJyxcclxuICAgIGdlb2dyYXBoaWM6IHtcclxuICAgICAgcHJvdmluY2U6IHtcclxuICAgICAgICBsYWJlbDogJ+S4iua1tycsXHJcbiAgICAgICAga2V5OiAnMzMwMDAwJyxcclxuICAgICAgfSxcclxuICAgICAgY2l0eToge1xyXG4gICAgICAgIGxhYmVsOiAn5biC6L6W5Yy6JyxcclxuICAgICAgICBrZXk6ICczMzAxMDAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6ICdYWOWMulhYWOi3ryBYWCDlj7cnLFxyXG4gICAgcGhvbmU6ICfkvaDnjJwt5L2g54yc5L2g54yc54yc54ycJyxcclxuICB9LFxyXG4gICdQT1NUIC91c2VyL2F2YXRhcic6ICdvaycsXHJcbiAgJ1BPU1QgL2xvZ2luL2FjY291bnQnOiAocmVxOiBNb2NrUmVxdWVzdCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKCEoZGF0YS51c2VyTmFtZSA9PT0gJ2FkbWluJyB8fCBkYXRhLnVzZXJOYW1lID09PSAndXNlcicpIHx8IGRhdGEucGFzc3dvcmQgIT09ICduZy1hbGFpbi5jb20nKSB7XHJcbiAgICAgIHJldHVybiB7IG1zZzogYEludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmTvvIhhZG1pbi9uZy1hbGFpbi5jb23vvIlgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtc2c6ICdvaycsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICB0b2tlbjogJzEyMzQ1Njc4OScsXHJcbiAgICAgICAgbmFtZTogZGF0YS51c2VyTmFtZSxcclxuICAgICAgICBlbWFpbDogYCR7ZGF0YS51c2VyTmFtZX1AcXEuY29tYCxcclxuICAgICAgICBpZDogMTAwMDAsXHJcbiAgICAgICAgdGltZTogK25ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgJ1BPU1QgL3JlZ2lzdGVyJzoge1xyXG4gICAgbXNnOiAnb2snLFxyXG4gIH0sXHJcbn07XHJcbiJdfQ==