/**
 * @fileoverview added by tsickle
 * Generated from: _mock/_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MockStatusError } from '@delon/mock';
// region: mock data
/** @type {?} */
var titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
/** @type {?} */
var avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
/** @type {?} */
var covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
/** @type {?} */
var desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
/** @type {?} */
var user = [
    '卡色',
    'cipchk',
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼',
];
// endregion
/**
 * @param {?=} count
 * @return {?}
 */
function getFakeList(count) {
    if (count === void 0) { count = 20; }
    /** @type {?} */
    var list = [];
    for (var i = 0; i < count; i += 1) {
        list.push({
            id: "fake-list-" + i,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                },
            ],
        });
    }
    return list;
}
/**
 * @return {?}
 */
function getNotice() {
    return [
        {
            id: 'xxx1',
            title: titles[0],
            logo: avatars[0],
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            updatedAt: new Date(),
            member: '科学搬砖组',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx2',
            title: titles[1],
            logo: avatars[1],
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            updatedAt: new Date('2017-07-24'),
            member: '全组都是吴彦祖',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx3',
            title: titles[2],
            logo: avatars[2],
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            updatedAt: new Date(),
            member: '中二少女团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx4',
            title: titles[3],
            logo: avatars[3],
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            updatedAt: new Date('2017-07-23'),
            member: '程序员日常',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx5',
            title: titles[4],
            logo: avatars[4],
            description: '凛冬将至',
            updatedAt: new Date('2017-07-23'),
            member: '高逼格设计天团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx6',
            title: titles[5],
            logo: avatars[5],
            description: '生命就像一盒巧克力，结果往往出人意料',
            updatedAt: new Date('2017-07-23'),
            member: '骗你来学计算机',
            href: '',
            memberLink: '',
        },
    ];
}
/**
 * @return {?}
 */
function getActivities() {
    return [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: avatars[0],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: avatars[1],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: avatars[2],
            },
            group: {
                name: '中二少女团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: avatars[3],
            },
            project: {
                name: '5 月日常迭代',
                link: 'http://github.com/',
            },
            template: '将 @{project} 更新至已发布状态',
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: avatars[4],
            },
            project: {
                name: '工程效能',
                link: 'http://github.com/',
            },
            comment: {
                name: '留言',
                link: 'http://github.com/',
            },
            template: '在 @{project} 发布了 @{comment}',
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: avatars[5],
            },
            group: {
                name: '程序员日常',
                link: 'http://github.com/',
            },
            project: {
                name: '品牌迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
    ];
}
var ɵ0 = /**
 * @param {?} req
 * @return {?}
 */
function (req) { return getFakeList(req.queryString.count); }, ɵ1 = /**
 * @return {?}
 */
function () { return getNotice(); }, ɵ2 = /**
 * @return {?}
 */
function () { return getActivities(); }, ɵ3 = /**
 * @return {?}
 */
function () {
    throw new MockStatusError(401);
}, ɵ4 = /**
 * @return {?}
 */
function () {
    throw new MockStatusError(403);
}, ɵ5 = /**
 * @return {?}
 */
function () {
    throw new MockStatusError(404);
}, ɵ6 = /**
 * @return {?}
 */
function () {
    throw new MockStatusError(500);
};
/** @type {?} */
export var APIS = {
    '/api/list': (ɵ0),
    '/api/notice': (ɵ1),
    '/api/activities': (ɵ2),
    '/api/401': (ɵ3),
    '/api/403': (ɵ4),
    '/api/404': (ɵ5),
    '/api/500': (ɵ6),
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbIl9tb2NrL19hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7SUFJckQsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDOztJQUV0RyxPQUFPLEdBQUc7SUFDZCxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0NBQ3RFOztJQUNLLE1BQU0sR0FBRztJQUNiLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtDQUN0RTs7SUFDSyxJQUFJLEdBQUc7SUFDWCwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIseUJBQXlCO0NBQzFCOztJQUVLLElBQUksR0FBRztJQUNYLElBQUk7SUFDSixRQUFRO0lBQ1IsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsSUFBSTtJQUNKLElBQUk7SUFDSixLQUFLO0lBQ0wsSUFBSTtDQUNMOzs7Ozs7QUFJRCxTQUFTLFdBQVcsQ0FBQyxLQUFrQjtJQUFsQixzQkFBQSxFQUFBLFVBQWtCOztRQUMvQixJQUFJLEdBQVUsRUFBRTtJQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLEVBQUUsRUFBRSxlQUFhLENBQUc7WUFDcEIs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QkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsb0JBQW9CO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxvQkFBb0I7YUFDM0I7WUFDRCxRQUFRLEVBQUUsNEJBQTRCO1NBQ3ZDO0tBQ0YsQ0FBQztBQUNKLENBQUM7Ozs7O0FBR2MsVUFBQyxHQUFnQixJQUFLLE9BQUEsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQWxDLENBQWtDOzs7QUFDdEQsY0FBTSxPQUFBLFNBQVMsRUFBRSxFQUFYLENBQVc7OztBQUNiLGNBQU0sT0FBQSxhQUFhLEVBQUUsRUFBZixDQUFlOzs7QUFDNUI7SUFDVixNQUFNLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7OztBQUNXO0lBQ1YsTUFBTSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDOzs7QUFDVztJQUNWLE1BQU0sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQzs7O0FBQ1c7SUFDVixNQUFNLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7O0FBZkgsTUFBTSxLQUFPLElBQUksR0FBRztJQUNsQixXQUFXLE1BQTBEO0lBQ3JFLGFBQWEsTUFBbUI7SUFDaEMsaUJBQWlCLE1BQXVCO0lBQ3hDLFVBQVUsTUFFVDtJQUNELFVBQVUsTUFFVDtJQUNELFVBQVUsTUFFVDtJQUNELFVBQVUsTUFFVDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9ja1JlcXVlc3QsIE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJ0BkZWxvbi9tb2NrJztcclxuXHJcbi8vIHJlZ2lvbjogbW9jayBkYXRhXHJcblxyXG5jb25zdCB0aXRsZXMgPSBbJ0FsaXBheScsICdBbmd1bGFyJywgJ0FudCBEZXNpZ24nLCAnQW50IERlc2lnbiBQcm8nLCAnQm9vdHN0cmFwJywgJ1JlYWN0JywgJ1Z1ZScsICdXZWJwYWNrJ107XHJcblxyXG5jb25zdCBhdmF0YXJzID0gW1xyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvV2RHcW1IcGF5eU1qaUVoY0tvVkUucG5nJywgLy8gQWxpcGF5XHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC96T3NLWm1GUmRVdHZwcUNJbU9WWS5wbmcnLCAvLyBBbmd1bGFyXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9kVVJJTWtrclJGcFBnVHV6a3duQi5wbmcnLCAvLyBBbnQgRGVzaWduXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9zZmpiT3Fuc1hYSmdOQ2pDekRCTC5wbmcnLCAvLyBBbnQgRGVzaWduIFByb1xyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvc2lDckJYWGhtdlRRR1dQTkxCb3cucG5nJywgLy8gQm9vdHN0cmFwXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9rWnpFemVtWnlLTEtGc29qWEl0RS5wbmcnLCAvLyBSZWFjdFxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvQ29tQkFvcGV2THdFTlFkS1dpSW4ucG5nJywgLy8gVnVlXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9ueGt1T0psRkp1QVVoemxNVENFZS5wbmcnLCAvLyBXZWJwYWNrXHJcbl07XHJcbmNvbnN0IGNvdmVycyA9IFtcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0hyeGNWYnJLbkNKT1p2dHpTcWpOLnBuZycsXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9hbGFQcEtXYWpFYklZRVV2dlZOZi5wbmcnLFxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvUkx3bEtTWUdTWEdIdVdTb2p5dnAucG5nJyxcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2dMYUlBb1ZXVHRMYkJXWk5ZRU1nLnBuZycsXHJcbl07XHJcbmNvbnN0IGRlc2MgPSBbXHJcbiAgJ+mCo+aYr+S4gOenjeWGheWcqOeahOS4nOilv++8jCDku5bku6zliLDovr7kuI3kuobvvIzkuZ/ml6Dms5Xop6blj4rnmoQnLFxyXG4gICfluIzmnJvmmK/kuIDkuKrlpb3kuJzopb/vvIzkuZ/orrjmmK/mnIDlpb3nmoTvvIzlpb3kuJzopb/mmK/kuI3kvJrmtojkuqHnmoQnLFxyXG4gICfnlJ/lkb3lsLHlg4/kuIDnm5Llt6flhYvlipvvvIznu5PmnpzlvoDlvoDlh7rkurrmhI/mlpknLFxyXG4gICfln47plYfkuK3mnInpgqPkuYjlpJrnmoTphZLppobvvIzlpbnljbTlgY/lgY/otbDov5vkuobmiJHnmoTphZLppoYnLFxyXG4gICfpgqPml7blgJnmiJHlj6rkvJrmg7Poh6rlt7Hmg7PopoHku4DkuYjvvIzku47kuI3mg7Poh6rlt7Hmi6XmnInku4DkuYgnLFxyXG5dO1xyXG5cclxuY29uc3QgdXNlciA9IFtcclxuICAn5Y2h6ImyJyxcclxuICAnY2lwY2hrJyxcclxuICAn5LuY5bCP5bCPJyxcclxuICAn5puy5Li95Li9JyxcclxuICAn5p6X5Lic5LicJyxcclxuICAn5ZGo5pif5pifJyxcclxuICAn5ZC05Yqg5aW9JyxcclxuICAn5pyx5YGP5Y+zJyxcclxuICAn6bG86YWxJyxcclxuICAn5LmQ5ZOlJyxcclxuICAn6LCt5bCP5LuqJyxcclxuICAn5Luy5bC8JyxcclxuXTtcclxuXHJcbi8vIGVuZHJlZ2lvblxyXG5cclxuZnVuY3Rpb24gZ2V0RmFrZUxpc3QoY291bnQ6IG51bWJlciA9IDIwKTogYW55W10ge1xyXG4gIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XHJcbiAgICBsaXN0LnB1c2goe1xyXG4gICAgICBpZDogYGZha2UtbGlzdC0ke2l9YCxcclxuICAgICAgb3duZXI6IHVzZXJbaSAlIDEwXSxcclxuICAgICAgdGl0bGU6IHRpdGxlc1tpICUgOF0sXHJcbiAgICAgIGF2YXRhcjogYXZhdGFyc1tpICUgOF0sXHJcbiAgICAgIGNvdmVyOiBwYXJzZUludCgoaSAvIDQpLnRvU3RyaW5nKCksIDEwKSAlIDIgPT09IDAgPyBjb3ZlcnNbaSAlIDRdIDogY292ZXJzWzMgLSAoaSAlIDQpXSxcclxuICAgICAgc3RhdHVzOiBbJ2FjdGl2ZScsICdleGNlcHRpb24nLCAnbm9ybWFsJ11baSAlIDNdLFxyXG4gICAgICBwZXJjZW50OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDUwKSArIDUwLFxyXG4gICAgICBsb2dvOiBhdmF0YXJzW2kgJSA4XSxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgLSAxMDAwICogNjAgKiA2MCAqIDIgKiBpKSxcclxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMiAqIGkpLFxyXG4gICAgICBzdWJEZXNjcmlwdGlvbjogZGVzY1tpICUgNV0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICflnKjkuK3lj7Dkuqflk4HnmoTnoJTlj5Hov4fnqIvkuK3vvIzkvJrlh7rnjrDkuI3lkIznmoTorr7orqHop4TojIPlkozlrp7njrDmlrnlvI/vvIzkvYblhbbkuK3lvoDlvoDlrZjlnKjlvojlpJrnsbvkvLznmoTpobXpnaLlkoznu4Tku7bvvIzov5nkupvnsbvkvLznmoTnu4Tku7bkvJrooqvmir3nprvmiJDkuIDlpZfmoIflh4bop4TojIPjgIInLFxyXG4gICAgICBhY3RpdmVVc2VyOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgKyAxMDAwMDAsXHJcbiAgICAgIG5ld1VzZXI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDAwLFxyXG4gICAgICBzdGFyOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxMDAsXHJcbiAgICAgIGxpa2U6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEwMCxcclxuICAgICAgbWVzc2FnZTogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMCxcclxuICAgICAgY29udGVudDpcclxuICAgICAgICAn5q616JC956S65oSP77ya6JqC6JqB6YeR5pyN6K6+6K6h5bmz5Y+wIGFudC5kZXNpZ27vvIznlKjmnIDlsI/nmoTlt6XkvZzph4/vvIzml6DnvJ3mjqXlhaXomoLomoHph5HmnI3nlJ/mgIHvvIzmj5Dkvpvot6jotororr7orqHkuI7lvIDlj5HnmoTkvZPpqozop6PlhrPmlrnmoYjjgILomoLomoHph5HmnI3orr7orqHlubPlj7AgYW50LmRlc2lnbu+8jOeUqOacgOWwj+eahOW3peS9nOmHj++8jOaXoOe8neaOpeWFpeiaguiagemHkeacjeeUn+aAge+8jOaPkOS+m+i3qOi2iuiuvuiuoeS4juW8gOWPkeeahOS9k+mqjOino+WGs+aWueahiOOAgicsXHJcbiAgICAgIG1lbWJlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvWmlFU3FXd0NYQlJRb2FQT05TSmUucG5nJyxcclxuICAgICAgICAgIG5hbWU6ICfmm7LkuL3kuL0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3RCT3haUGxJVEhxd2xHanNKV2FGLnBuZycsXHJcbiAgICAgICAgICBuYW1lOiAn546L5pit5ZCbJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9zQnhqZ3FpdUhNR1JrSWpxbFFDZC5wbmcnLFxyXG4gICAgICAgICAgbmFtZTogJ+iRo+WonOWonCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5vdGljZSgpOiBhbnlbXSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgaWQ6ICd4eHgxJyxcclxuICAgICAgdGl0bGU6IHRpdGxlc1swXSxcclxuICAgICAgbG9nbzogYXZhdGFyc1swXSxcclxuICAgICAgZGVzY3JpcHRpb246ICfpgqPmmK/kuIDnp43lhoXlnKjnmoTkuJzopb/vvIwg5LuW5Lus5Yiw6L6+5LiN5LqG77yM5Lmf5peg5rOV6Kem5Y+K55qEJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICBtZW1iZXI6ICfnp5HlrabmkKznoJbnu4QnLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgICAgbWVtYmVyTGluazogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3h4eDInLFxyXG4gICAgICB0aXRsZTogdGl0bGVzWzFdLFxyXG4gICAgICBsb2dvOiBhdmF0YXJzWzFdLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+W4jOacm+aYr+S4gOS4quWlveS4nOilv++8jOS5n+iuuOaYr+acgOWlveeahO+8jOWlveS4nOilv+aYr+S4jeS8mua2iOS6oeeahCcsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoJzIwMTctMDctMjQnKSxcclxuICAgICAgbWVtYmVyOiAn5YWo57uE6YO95piv5ZC05b2m56WWJyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICAgIG1lbWJlckxpbms6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd4eHgzJyxcclxuICAgICAgdGl0bGU6IHRpdGxlc1syXSxcclxuICAgICAgbG9nbzogYXZhdGFyc1syXSxcclxuICAgICAgZGVzY3JpcHRpb246ICfln47plYfkuK3mnInpgqPkuYjlpJrnmoTphZLppobvvIzlpbnljbTlgY/lgY/otbDov5vkuobmiJHnmoTphZLppoYnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIG1lbWJlcjogJ+S4reS6jOWwkeWls+WboicsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgICBtZW1iZXJMaW5rOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAneHh4NCcsXHJcbiAgICAgIHRpdGxlOiB0aXRsZXNbM10sXHJcbiAgICAgIGxvZ286IGF2YXRhcnNbM10sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn6YKj5pe25YCZ5oiR5Y+q5Lya5oOz6Ieq5bex5oOz6KaB5LuA5LmI77yM5LuO5LiN5oOz6Ieq5bex5oul5pyJ5LuA5LmIJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgnMjAxNy0wNy0yMycpLFxyXG4gICAgICBtZW1iZXI6ICfnqIvluo/lkZjml6XluLgnLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgICAgbWVtYmVyTGluazogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3h4eDUnLFxyXG4gICAgICB0aXRsZTogdGl0bGVzWzRdLFxyXG4gICAgICBsb2dvOiBhdmF0YXJzWzRdLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+WHm+WGrOWwhuiHsycsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoJzIwMTctMDctMjMnKSxcclxuICAgICAgbWVtYmVyOiAn6auY6YC85qC86K6+6K6h5aSp5ZuiJyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICAgIG1lbWJlckxpbms6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd4eHg2JyxcclxuICAgICAgdGl0bGU6IHRpdGxlc1s1XSxcclxuICAgICAgbG9nbzogYXZhdGFyc1s1XSxcclxuICAgICAgZGVzY3JpcHRpb246ICfnlJ/lkb3lsLHlg4/kuIDnm5Llt6flhYvlipvvvIznu5PmnpzlvoDlvoDlh7rkurrmhI/mlpknLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDE3LTA3LTIzJyksXHJcbiAgICAgIG1lbWJlcjogJ+mql+S9oOadpeWtpuiuoeeul+acuicsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgICBtZW1iZXJMaW5rOiAnJyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aXZpdGllcygpOiBhbnlbXSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgaWQ6ICd0cmVuZC0xJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogJ+ael+S4nOS4nCcsXHJcbiAgICAgICAgYXZhdGFyOiBhdmF0YXJzWzBdLFxyXG4gICAgICB9LFxyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIG5hbWU6ICfpq5jpgLzmoLzorr7orqHlpKnlm6InLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgbmFtZTogJ+WFreaciOi/reS7oycsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiAn5ZyoIEB7Z3JvdXB9IOaWsOW7uumhueebriBAe3Byb2plY3R9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAndHJlbmQtMicsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6ICfku5jlsI/lsI8nLFxyXG4gICAgICAgIGF2YXRhcjogYXZhdGFyc1sxXSxcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICBuYW1lOiAn6auY6YC85qC86K6+6K6h5aSp5ZuiJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIG5hbWU6ICflha3mnIjov63ku6MnLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZTogJ+WcqCBAe2dyb3VwfSDmlrDlu7rpobnnm64gQHtwcm9qZWN0fScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3RyZW5kLTMnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiAn5puy5Li95Li9JyxcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcnNbMl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgbmFtZTogJ+S4reS6jOWwkeWls+WboicsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICBuYW1lOiAn5YWt5pyI6L+t5LujJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICflnKggQHtncm91cH0g5paw5bu66aG555uuIEB7cHJvamVjdH0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd0cmVuZC00JyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogJ+WRqOaYn+aYnycsXHJcbiAgICAgICAgYXZhdGFyOiBhdmF0YXJzWzNdLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgbmFtZTogJzUg5pyI5pel5bi46L+t5LujJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICflsIYgQHtwcm9qZWN0fSDmm7TmlrDoh7Plt7Llj5HluIPnirbmgIEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd0cmVuZC01JyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogJ+acseWBj+WPsycsXHJcbiAgICAgICAgYXZhdGFyOiBhdmF0YXJzWzRdLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgbmFtZTogJ+W3peeoi+aViOiDvScsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbW1lbnQ6IHtcclxuICAgICAgICBuYW1lOiAn55WZ6KiAJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICflnKggQHtwcm9qZWN0fSDlj5HluIPkuoYgQHtjb21tZW50fScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3RyZW5kLTYnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiAn5LmQ5ZOlJyxcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcnNbNV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgbmFtZTogJ+eoi+W6j+WRmOaXpeW4uCcsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICBuYW1lOiAn5ZOB54mM6L+t5LujJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICflnKggQHtncm91cH0g5paw5bu66aG555uuIEB7cHJvamVjdH0nLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVBJUyA9IHtcclxuICAnL2FwaS9saXN0JzogKHJlcTogTW9ja1JlcXVlc3QpID0+IGdldEZha2VMaXN0KHJlcS5xdWVyeVN0cmluZy5jb3VudCksXHJcbiAgJy9hcGkvbm90aWNlJzogKCkgPT4gZ2V0Tm90aWNlKCksXHJcbiAgJy9hcGkvYWN0aXZpdGllcyc6ICgpID0+IGdldEFjdGl2aXRpZXMoKSxcclxuICAnL2FwaS80MDEnOiAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgTW9ja1N0YXR1c0Vycm9yKDQwMSk7XHJcbiAgfSxcclxuICAnL2FwaS80MDMnOiAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgTW9ja1N0YXR1c0Vycm9yKDQwMyk7XHJcbiAgfSxcclxuICAnL2FwaS80MDQnOiAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgTW9ja1N0YXR1c0Vycm9yKDQwNCk7XHJcbiAgfSxcclxuICAnL2FwaS81MDAnOiAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgTW9ja1N0YXR1c0Vycm9yKDUwMCk7XHJcbiAgfSxcclxufTtcclxuIl19