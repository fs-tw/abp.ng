/**
 * @fileoverview added by tsickle
 * Generated from: _mock/_user.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const list = [];
/** @type {?} */
const total = 50;
for (let i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}
/**
 * @param {?} params
 * @return {?}
 */
function genData(params) {
    /** @type {?} */
    let ret = [...list];
    /** @type {?} */
    const pi = +params.pi;
    /** @type {?} */
    const ps = +params.ps;
    /** @type {?} */
    const start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data.no.indexOf(params.no) > -1));
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
    const item = list.find((/**
     * @param {?} w
     * @return {?}
     */
    w => w.id === id));
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
const ɵ0 = /**
 * @param {?} req
 * @return {?}
 */
(req) => genData(req.queryString), ɵ1 = /**
 * @param {?} req
 * @return {?}
 */
(req) => list.find((/**
 * @param {?} w
 * @return {?}
 */
w => w.id === +req.params.id)), ɵ2 = /**
 * @param {?} req
 * @return {?}
 */
(req) => saveData(+req.params.id, req.body), ɵ3 = /**
 * @param {?} req
 * @return {?}
 */
(req) => {
    /** @type {?} */
    const data = req.body;
    if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
        return { msg: `Invalid username or password（admin/ng-alain.com）` };
    }
    return {
        msg: 'ok',
        user: {
            token: '123456789',
            name: data.userName,
            email: `${data.userName}@qq.com`,
            id: 10000,
            time: +new Date(),
        },
    };
};
/** @type {?} */
export const USERS = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3VzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vIiwic291cmNlcyI6WyJfbW9jay9fdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7TUFFTSxJQUFJLEdBQVUsRUFBRTs7TUFDaEIsS0FBSyxHQUFHLEVBQUU7QUFFaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDVCxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3JCLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsTUFBTSxFQUFFO1lBQ04scUVBQXFFO1lBQ3JFLHFFQUFxRTtTQUN0RSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUU7UUFDcEIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQ3BCLEtBQUssRUFBRSxLQUFLO1FBQ1osV0FBVyxFQUFFLFFBQVE7UUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN4QyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUMxQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN2RCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN2RCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0tBQ3pDLENBQUMsQ0FBQztDQUNKOzs7OztBQUVELFNBQVMsT0FBTyxDQUFDLE1BQVc7O1FBQ3RCLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDOztVQUNiLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztVQUNmLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztVQUNmLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO0lBRTNCLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUNiLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUM7S0FDM0Q7SUFFRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ2hFLENBQUM7Ozs7OztBQUVELFNBQVMsUUFBUSxDQUFDLEVBQVUsRUFBRSxLQUFVOztVQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDO0lBQ3hDLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3ZCLENBQUM7Ozs7O0FBR1UsQ0FBQyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzs7OztBQUMxQyxDQUFDLEdBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUM7Ozs7QUFDeEQsQ0FBQyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDOzs7O0FBbURuRCxDQUFDLEdBQWdCLEVBQUUsRUFBRTs7VUFDcEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJO0lBQ3JCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQUU7UUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxrREFBa0QsRUFBRSxDQUFDO0tBQ3BFO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxJQUFJO1FBQ1QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLFdBQVc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ25CLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLFNBQVM7WUFDaEMsRUFBRSxFQUFFLEtBQUs7WUFDVCxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtTQUNsQjtLQUNGLENBQUM7QUFDSixDQUFDOztBQXJFSCxNQUFNLE9BQU8sS0FBSyxHQUFHO0lBQ25CLE9BQU8sTUFBZ0Q7SUFDdkQsV0FBVyxNQUErRDtJQUMxRSxnQkFBZ0IsTUFBMEQ7SUFDMUUsZUFBZSxFQUFFO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUscUVBQXFFO1FBQzdFLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLEtBQUssRUFBRSxlQUFlO1FBQ3RCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLDZCQUE2QjtRQUNwQyxJQUFJLEVBQUU7WUFDSjtnQkFDRSxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRjtRQUNELFdBQVcsRUFBRSxFQUFFO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsVUFBVSxFQUFFO1lBQ1YsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxRQUFRO2FBQ2Q7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLEtBQUs7Z0JBQ1osR0FBRyxFQUFFLFFBQVE7YUFDZDtTQUNGO1FBQ0QsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLFdBQVc7S0FDbkI7SUFDRCxtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLHFCQUFxQixNQWVwQjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLEdBQUcsRUFBRSxJQUFJO0tBQ1Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnQGRlbG9uL21vY2snO1xyXG5cclxuY29uc3QgbGlzdDogYW55W10gPSBbXTtcclxuY29uc3QgdG90YWwgPSA1MDtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkgKz0gMSkge1xyXG4gIGxpc3QucHVzaCh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICBkaXNhYmxlZDogaSAlIDYgPT09IDAsXHJcbiAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgIGF2YXRhcjogW1xyXG4gICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2VlSE1hWkJ3bVR2TGRJd01mQnBnLnBuZycsXHJcbiAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvdWR4QWJNRWhwd3RoVlZjakxYaWsucG5nJyxcclxuICAgIF1baSAlIDJdLFxyXG4gICAgbm86IGBUcmFkZUNvZGUgJHtpfWAsXHJcbiAgICB0aXRsZTogYOS4gOS4quS7u+WKoeWQjeensCAke2l9YCxcclxuICAgIG93bmVyOiAn5puy5Li95Li9JyxcclxuICAgIGRlc2NyaXB0aW9uOiAn6L+Z5piv5LiA5q615o+P6L+wJyxcclxuICAgIGNhbGxObzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksXHJcbiAgICBzdGF0dXM6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQsXHJcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKGAyMDE3LTA3LSR7TWF0aC5mbG9vcihpIC8gMikgKyAxfWApLFxyXG4gICAgY3JlYXRlZEF0OiBuZXcgRGF0ZShgMjAxNy0wNy0ke01hdGguZmxvb3IoaSAvIDIpICsgMX1gKSxcclxuICAgIHByb2dyZXNzOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkRhdGEocGFyYW1zOiBhbnkpIHtcclxuICBsZXQgcmV0ID0gWy4uLmxpc3RdO1xyXG4gIGNvbnN0IHBpID0gK3BhcmFtcy5waTtcclxuICBjb25zdCBwcyA9ICtwYXJhbXMucHM7XHJcbiAgY29uc3Qgc3RhcnQgPSAocGkgLSAxKSAqIHBzO1xyXG5cclxuICBpZiAocGFyYW1zLm5vKSB7XHJcbiAgICByZXQgPSByZXQuZmlsdGVyKGRhdGEgPT4gZGF0YS5uby5pbmRleE9mKHBhcmFtcy5ubykgPiAtMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB0b3RhbDogcmV0Lmxlbmd0aCwgbGlzdDogcmV0LnNsaWNlKHN0YXJ0LCBwcyAqIHBpKSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlRGF0YShpZDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XHJcbiAgY29uc3QgaXRlbSA9IGxpc3QuZmluZCh3ID0+IHcuaWQgPT09IGlkKTtcclxuICBpZiAoIWl0ZW0pIHJldHVybiB7IG1zZzogJ+aXoOaViOeUqOaIt+S/oeaBrycgfTtcclxuICBPYmplY3QuYXNzaWduKGl0ZW0sIHZhbHVlKTtcclxuICByZXR1cm4geyBtc2c6ICdvaycgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJTID0ge1xyXG4gICcvdXNlcic6IChyZXE6IE1vY2tSZXF1ZXN0KSA9PiBnZW5EYXRhKHJlcS5xdWVyeVN0cmluZyksXHJcbiAgJy91c2VyLzppZCc6IChyZXE6IE1vY2tSZXF1ZXN0KSA9PiBsaXN0LmZpbmQodyA9PiB3LmlkID09PSArcmVxLnBhcmFtcy5pZCksXHJcbiAgJ1BPU1QgL3VzZXIvOmlkJzogKHJlcTogTW9ja1JlcXVlc3QpID0+IHNhdmVEYXRhKCtyZXEucGFyYW1zLmlkLCByZXEuYm9keSksXHJcbiAgJy91c2VyL2N1cnJlbnQnOiB7XHJcbiAgICBuYW1lOiAnQ2lwY2hrJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9CaWF6ZmFueG1hbU5Sb3h4VnhrYS5wbmcnLFxyXG4gICAgdXNlcmlkOiAnMDAwMDAwMDEnLFxyXG4gICAgZW1haWw6ICdjaXBjaGtAcXEuY29tJyxcclxuICAgIHNpZ25hdHVyZTogJ+a1t+e6s+eZvuW3ne+8jOacieWuueS5g+WkpycsXHJcbiAgICB0aXRsZTogJ+S6pOS6kuS4k+WuticsXHJcbiAgICBncm91cDogJ+iaguiagemHkeacje+8jeafkOafkOafkOS6i+S4mue+pO+8jeafkOafkOW5s+WPsOmDqO+8jeafkOafkOaKgOacr+mDqO+8jVVFRCcsXHJcbiAgICB0YWdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICcwJyxcclxuICAgICAgICBsYWJlbDogJ+W+iOacieaDs+azleeahCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICBsYWJlbDogJ+S4k+azqOaSqeWmuScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICBsYWJlbDogJ+W4hX4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgbGFiZWw6ICfpgJrlkIMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnNCcsXHJcbiAgICAgICAgbGFiZWw6ICfkuJPogYzlkI7nq68nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiAnNScsXHJcbiAgICAgICAgbGFiZWw6ICfmtbfnurPnmb7lt50nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIG5vdGlmeUNvdW50OiAxMixcclxuICAgIGNvdW50cnk6ICdDaGluYScsXHJcbiAgICBnZW9ncmFwaGljOiB7XHJcbiAgICAgIHByb3ZpbmNlOiB7XHJcbiAgICAgICAgbGFiZWw6ICfkuIrmtbcnLFxyXG4gICAgICAgIGtleTogJzMzMDAwMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNpdHk6IHtcclxuICAgICAgICBsYWJlbDogJ+W4gui+luWMuicsXHJcbiAgICAgICAga2V5OiAnMzMwMTAwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzOiAnWFjljLpYWFjot68gWFgg5Y+3JyxcclxuICAgIHBob25lOiAn5L2g54ycLeS9oOeMnOS9oOeMnOeMnOeMnCcsXHJcbiAgfSxcclxuICAnUE9TVCAvdXNlci9hdmF0YXInOiAnb2snLFxyXG4gICdQT1NUIC9sb2dpbi9hY2NvdW50JzogKHJlcTogTW9ja1JlcXVlc3QpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGlmICghKGRhdGEudXNlck5hbWUgPT09ICdhZG1pbicgfHwgZGF0YS51c2VyTmFtZSA9PT0gJ3VzZXInKSB8fCBkYXRhLnBhc3N3b3JkICE9PSAnbmctYWxhaW4uY29tJykge1xyXG4gICAgICByZXR1cm4geyBtc2c6IGBJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3Jk77yIYWRtaW4vbmctYWxhaW4uY29t77yJYCB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbXNnOiAnb2snLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgdG9rZW46ICcxMjM0NTY3ODknLFxyXG4gICAgICAgIG5hbWU6IGRhdGEudXNlck5hbWUsXHJcbiAgICAgICAgZW1haWw6IGAke2RhdGEudXNlck5hbWV9QHFxLmNvbWAsXHJcbiAgICAgICAgaWQ6IDEwMDAwLFxyXG4gICAgICAgIHRpbWU6ICtuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9LFxyXG4gICdQT1NUIC9yZWdpc3Rlcic6IHtcclxuICAgIG1zZzogJ29rJyxcclxuICB9LFxyXG59O1xyXG4iXX0=