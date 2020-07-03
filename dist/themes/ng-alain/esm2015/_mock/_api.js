import { MockStatusError } from '@delon/mock';
// region: mock data
const titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
const avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = [
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
function getFakeList(count = 20) {
    const list = [];
    for (let i = 0; i < count; i += 1) {
        list.push({
            id: `fake-list-${i}`,
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
export const APIS = {
    '/api/list': (req) => getFakeList(req.queryString.count),
    '/api/notice': () => getNotice(),
    '/api/activities': () => getActivities(),
    '/api/401': () => {
        throw new MockStatusError(401);
    },
    '/api/403': () => {
        throw new MockStatusError(403);
    },
    '/api/404': () => {
        throw new MockStatusError(404);
    },
    '/api/500': () => {
        throw new MockStatusError(500);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9zcmMvX21vY2svX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTNELG9CQUFvQjtBQUVwQixNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRTdHLE1BQU0sT0FBTyxHQUFHO0lBQ2QscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtDQUN0RSxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUc7SUFDYixxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7Q0FDdEUsQ0FBQztBQUNGLE1BQU0sSUFBSSxHQUFHO0lBQ1gsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtDQUMxQixDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUc7SUFDWCxJQUFJO0lBQ0osUUFBUTtJQUNSLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLElBQUk7SUFDSixJQUFJO0lBQ0osS0FBSztJQUNMLElBQUk7Q0FDTCxDQUFDO0FBRUYsWUFBWTtBQUVaLFNBQVMsV0FBVyxDQUFDLFFBQWdCLEVBQUU7SUFDckMsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO0lBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENB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LElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDbkI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLG9CQUFvQjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsb0JBQW9CO2FBQzNCO1lBQ0QsUUFBUSxFQUFFLDRCQUE0QjtTQUN2QztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLEdBQWdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUNyRSxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFO0lBQ2hDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRTtJQUN4QyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsTUFBTSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLE1BQU0sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixNQUFNLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsTUFBTSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vY2tSZXF1ZXN0LCBNb2NrU3RhdHVzRXJyb3IgfSBmcm9tICdAZGVsb24vbW9jayc7XHJcblxyXG4vLyByZWdpb246IG1vY2sgZGF0YVxyXG5cclxuY29uc3QgdGl0bGVzID0gWydBbGlwYXknLCAnQW5ndWxhcicsICdBbnQgRGVzaWduJywgJ0FudCBEZXNpZ24gUHJvJywgJ0Jvb3RzdHJhcCcsICdSZWFjdCcsICdWdWUnLCAnV2VicGFjayddO1xyXG5cclxuY29uc3QgYXZhdGFycyA9IFtcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1dkR3FtSHBheXlNamlFaGNLb1ZFLnBuZycsIC8vIEFsaXBheVxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvek9zS1ptRlJkVXR2cHFDSW1PVlkucG5nJywgLy8gQW5ndWxhclxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZFVSSU1ra3JSRnBQZ1R1emt3bkIucG5nJywgLy8gQW50IERlc2lnblxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvc2ZqYk9xbnNYWEpnTkNqQ3pEQkwucG5nJywgLy8gQW50IERlc2lnbiBQcm9cclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3NpQ3JCWFhobXZUUUdXUE5MQm93LnBuZycsIC8vIEJvb3RzdHJhcFxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwva1p6RXplbVp5S0xLRnNvalhJdEUucG5nJywgLy8gUmVhY3RcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0NvbUJBb3Bldkx3RU5RZEtXaUluLnBuZycsIC8vIFZ1ZVxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbnhrdU9KbEZKdUFVaHpsTVRDRWUucG5nJywgLy8gV2VicGFja1xyXG5dO1xyXG5jb25zdCBjb3ZlcnMgPSBbXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9IcnhjVmJyS25DSk9adnR6U3FqTi5wbmcnLFxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvYWxhUHBLV2FqRWJJWUVVdnZWTmYucG5nJyxcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1JMd2xLU1lHU1hHSHVXU29qeXZwLnBuZycsXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9nTGFJQW9WV1R0TGJCV1pOWUVNZy5wbmcnLFxyXG5dO1xyXG5jb25zdCBkZXNjID0gW1xyXG4gICfpgqPmmK/kuIDnp43lhoXlnKjnmoTkuJzopb/vvIwg5LuW5Lus5Yiw6L6+5LiN5LqG77yM5Lmf5peg5rOV6Kem5Y+K55qEJyxcclxuICAn5biM5pyb5piv5LiA5Liq5aW95Lic6KW/77yM5Lmf6K645piv5pyA5aW955qE77yM5aW95Lic6KW/5piv5LiN5Lya5raI5Lqh55qEJyxcclxuICAn55Sf5ZG95bCx5YOP5LiA55uS5ben5YWL5Yqb77yM57uT5p6c5b6A5b6A5Ye65Lq65oSP5paZJyxcclxuICAn5Z+O6ZWH5Lit5pyJ6YKj5LmI5aSa55qE6YWS6aaG77yM5aW55Y205YGP5YGP6LWw6L+b5LqG5oiR55qE6YWS6aaGJyxcclxuICAn6YKj5pe25YCZ5oiR5Y+q5Lya5oOz6Ieq5bex5oOz6KaB5LuA5LmI77yM5LuO5LiN5oOz6Ieq5bex5oul5pyJ5LuA5LmIJyxcclxuXTtcclxuXHJcbmNvbnN0IHVzZXIgPSBbXHJcbiAgJ+WNoeiJsicsXHJcbiAgJ2NpcGNoaycsXHJcbiAgJ+S7mOWwj+WwjycsXHJcbiAgJ+absuS4veS4vScsXHJcbiAgJ+ael+S4nOS4nCcsXHJcbiAgJ+WRqOaYn+aYnycsXHJcbiAgJ+WQtOWKoOWlvScsXHJcbiAgJ+acseWBj+WPsycsXHJcbiAgJ+mxvOmFsScsXHJcbiAgJ+S5kOWTpScsXHJcbiAgJ+iwreWwj+S7qicsXHJcbiAgJ+S7suWwvCcsXHJcbl07XHJcblxyXG4vLyBlbmRyZWdpb25cclxuXHJcbmZ1bmN0aW9uIGdldEZha2VMaXN0KGNvdW50OiBudW1iZXIgPSAyMCk6IGFueVtdIHtcclxuICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xyXG4gICAgbGlzdC5wdXNoKHtcclxuICAgICAgaWQ6IGBmYWtlLWxpc3QtJHtpfWAsXHJcbiAgICAgIG93bmVyOiB1c2VyW2kgJSAxMF0sXHJcbiAgICAgIHRpdGxlOiB0aXRsZXNbaSAlIDhdLFxyXG4gICAgICBhdmF0YXI6IGF2YXRhcnNbaSAlIDhdLFxyXG4gICAgICBjb3ZlcjogcGFyc2VJbnQoKGkgLyA0KS50b1N0cmluZygpLCAxMCkgJSAyID09PSAwID8gY292ZXJzW2kgJSA0XSA6IGNvdmVyc1szIC0gKGkgJSA0KV0sXHJcbiAgICAgIHN0YXR1czogWydhY3RpdmUnLCAnZXhjZXB0aW9uJywgJ25vcm1hbCddW2kgJSAzXSxcclxuICAgICAgcGVyY2VudDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1MCxcclxuICAgICAgbG9nbzogYXZhdGFyc1tpICUgOF0sXHJcbiAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gMTAwMCAqIDYwICogNjAgKiAyICogaSksXHJcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgLSAxMDAwICogNjAgKiA2MCAqIDIgKiBpKSxcclxuICAgICAgc3ViRGVzY3JpcHRpb246IGRlc2NbaSAlIDVdLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAn5Zyo5Lit5Y+w5Lqn5ZOB55qE56CU5Y+R6L+H56iL5Lit77yM5Lya5Ye6546w5LiN5ZCM55qE6K6+6K6h6KeE6IyD5ZKM5a6e546w5pa55byP77yM5L2G5YW25Lit5b6A5b6A5a2Y5Zyo5b6I5aSa57G75Ly855qE6aG16Z2i5ZKM57uE5Lu277yM6L+Z5Lqb57G75Ly855qE57uE5Lu25Lya6KKr5oq956a75oiQ5LiA5aWX5qCH5YeG6KeE6IyD44CCJyxcclxuICAgICAgYWN0aXZlVXNlcjogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApICsgMTAwMDAwLFxyXG4gICAgICBuZXdVc2VyOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwMCxcclxuICAgICAgc3RhcjogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTAwLFxyXG4gICAgICBsaWtlOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxMDAsXHJcbiAgICAgIG1lc3NhZ2U6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApICsgMTAsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgJ+auteiQveekuuaEj++8muiaguiagemHkeacjeiuvuiuoeW5s+WPsCBhbnQuZGVzaWdu77yM55So5pyA5bCP55qE5bel5L2c6YeP77yM5peg57yd5o6l5YWl6JqC6JqB6YeR5pyN55Sf5oCB77yM5o+Q5L6b6Leo6LaK6K6+6K6h5LiO5byA5Y+R55qE5L2T6aqM6Kej5Yaz5pa55qGI44CC6JqC6JqB6YeR5pyN6K6+6K6h5bmz5Y+wIGFudC5kZXNpZ27vvIznlKjmnIDlsI/nmoTlt6XkvZzph4/vvIzml6DnvJ3mjqXlhaXomoLomoHph5HmnI3nlJ/mgIHvvIzmj5Dkvpvot6jotororr7orqHkuI7lvIDlj5HnmoTkvZPpqozop6PlhrPmlrnmoYjjgIInLFxyXG4gICAgICBtZW1iZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1ppRVNxV3dDWEJSUW9hUE9OU0plLnBuZycsXHJcbiAgICAgICAgICBuYW1lOiAn5puy5Li95Li9JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC90Qk94WlBsSVRIcXdsR2pzSldhRi5wbmcnLFxyXG4gICAgICAgICAgbmFtZTogJ+eOi+aYreWQmycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvc0J4amdxaXVITUdSa0lqcWxRQ2QucG5nJyxcclxuICAgICAgICAgIG5hbWU6ICfokaPlqJzlqJwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROb3RpY2UoKTogYW55W10ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAneHh4MScsXHJcbiAgICAgIHRpdGxlOiB0aXRsZXNbMF0sXHJcbiAgICAgIGxvZ286IGF2YXRhcnNbMF0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn6YKj5piv5LiA56eN5YaF5Zyo55qE5Lic6KW/77yMIOS7luS7rOWIsOi+vuS4jeS6hu+8jOS5n+aXoOazleinpuWPiueahCcsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgbWVtYmVyOiAn56eR5a2m5pCs56CW57uEJyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICAgIG1lbWJlckxpbms6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd4eHgyJyxcclxuICAgICAgdGl0bGU6IHRpdGxlc1sxXSxcclxuICAgICAgbG9nbzogYXZhdGFyc1sxXSxcclxuICAgICAgZGVzY3JpcHRpb246ICfluIzmnJvmmK/kuIDkuKrlpb3kuJzopb/vvIzkuZ/orrjmmK/mnIDlpb3nmoTvvIzlpb3kuJzopb/mmK/kuI3kvJrmtojkuqHnmoQnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDE3LTA3LTI0JyksXHJcbiAgICAgIG1lbWJlcjogJ+WFqOe7hOmDveaYr+WQtOW9puellicsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgICBtZW1iZXJMaW5rOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAneHh4MycsXHJcbiAgICAgIHRpdGxlOiB0aXRsZXNbMl0sXHJcbiAgICAgIGxvZ286IGF2YXRhcnNbMl0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn5Z+O6ZWH5Lit5pyJ6YKj5LmI5aSa55qE6YWS6aaG77yM5aW55Y205YGP5YGP6LWw6L+b5LqG5oiR55qE6YWS6aaGJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICBtZW1iZXI6ICfkuK3kuozlsJHlpbPlm6InLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgICAgbWVtYmVyTGluazogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3h4eDQnLFxyXG4gICAgICB0aXRsZTogdGl0bGVzWzNdLFxyXG4gICAgICBsb2dvOiBhdmF0YXJzWzNdLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+mCo+aXtuWAmeaIkeWPquS8muaDs+iHquW3seaDs+imgeS7gOS5iO+8jOS7juS4jeaDs+iHquW3seaLpeacieS7gOS5iCcsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoJzIwMTctMDctMjMnKSxcclxuICAgICAgbWVtYmVyOiAn56iL5bqP5ZGY5pel5bi4JyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICAgIG1lbWJlckxpbms6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd4eHg1JyxcclxuICAgICAgdGl0bGU6IHRpdGxlc1s0XSxcclxuICAgICAgbG9nbzogYXZhdGFyc1s0XSxcclxuICAgICAgZGVzY3JpcHRpb246ICflh5vlhqzlsIboh7MnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDE3LTA3LTIzJyksXHJcbiAgICAgIG1lbWJlcjogJ+mrmOmAvOagvOiuvuiuoeWkqeWboicsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgICBtZW1iZXJMaW5rOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAneHh4NicsXHJcbiAgICAgIHRpdGxlOiB0aXRsZXNbNV0sXHJcbiAgICAgIGxvZ286IGF2YXRhcnNbNV0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn55Sf5ZG95bCx5YOP5LiA55uS5ben5YWL5Yqb77yM57uT5p6c5b6A5b6A5Ye65Lq65oSP5paZJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgnMjAxNy0wNy0yMycpLFxyXG4gICAgICBtZW1iZXI6ICfpqpfkvaDmnaXlraborqHnrpfmnLonLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgICAgbWVtYmVyTGluazogJycsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGl2aXRpZXMoKTogYW55W10ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAndHJlbmQtMScsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6ICfmnpfkuJzkuJwnLFxyXG4gICAgICAgIGF2YXRhcjogYXZhdGFyc1swXSxcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICBuYW1lOiAn6auY6YC85qC86K6+6K6h5aSp5ZuiJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIG5hbWU6ICflha3mnIjov63ku6MnLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZTogJ+WcqCBAe2dyb3VwfSDmlrDlu7rpobnnm64gQHtwcm9qZWN0fScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3RyZW5kLTInLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiAn5LuY5bCP5bCPJyxcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcnNbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgbmFtZTogJ+mrmOmAvOagvOiuvuiuoeWkqeWboicsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICBuYW1lOiAn5YWt5pyI6L+t5LujJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICflnKggQHtncm91cH0g5paw5bu66aG555uuIEB7cHJvamVjdH0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd0cmVuZC0zJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogJ+absuS4veS4vScsXHJcbiAgICAgICAgYXZhdGFyOiBhdmF0YXJzWzJdLFxyXG4gICAgICB9LFxyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIG5hbWU6ICfkuK3kuozlsJHlpbPlm6InLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgbmFtZTogJ+WFreaciOi/reS7oycsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiAn5ZyoIEB7Z3JvdXB9IOaWsOW7uumhueebriBAe3Byb2plY3R9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAndHJlbmQtNCcsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6ICflkajmmJ/mmJ8nLFxyXG4gICAgICAgIGF2YXRhcjogYXZhdGFyc1szXSxcclxuICAgICAgfSxcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIG5hbWU6ICc1IOaciOaXpeW4uOi/reS7oycsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiAn5bCGIEB7cHJvamVjdH0g5pu05paw6Iez5bey5Y+R5biD54q25oCBJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAndHJlbmQtNScsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6ICfmnLHlgY/lj7MnLFxyXG4gICAgICAgIGF2YXRhcjogYXZhdGFyc1s0XSxcclxuICAgICAgfSxcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIG5hbWU6ICflt6XnqIvmlYjog70nLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICBjb21tZW50OiB7XHJcbiAgICAgICAgbmFtZTogJ+eVmeiogCcsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiAn5ZyoIEB7cHJvamVjdH0g5Y+R5biD5LqGIEB7Y29tbWVudH0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd0cmVuZC02JyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogJ+S5kOWTpScsXHJcbiAgICAgICAgYXZhdGFyOiBhdmF0YXJzWzVdLFxyXG4gICAgICB9LFxyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIG5hbWU6ICfnqIvluo/lkZjml6XluLgnLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgbmFtZTogJ+WTgeeJjOi/reS7oycsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiAn5ZyoIEB7Z3JvdXB9IOaWsOW7uumhueebriBAe3Byb2plY3R9JyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFQSVMgPSB7XHJcbiAgJy9hcGkvbGlzdCc6IChyZXE6IE1vY2tSZXF1ZXN0KSA9PiBnZXRGYWtlTGlzdChyZXEucXVlcnlTdHJpbmcuY291bnQpLFxyXG4gICcvYXBpL25vdGljZSc6ICgpID0+IGdldE5vdGljZSgpLFxyXG4gICcvYXBpL2FjdGl2aXRpZXMnOiAoKSA9PiBnZXRBY3Rpdml0aWVzKCksXHJcbiAgJy9hcGkvNDAxJzogKCkgPT4ge1xyXG4gICAgdGhyb3cgbmV3IE1vY2tTdGF0dXNFcnJvcig0MDEpO1xyXG4gIH0sXHJcbiAgJy9hcGkvNDAzJzogKCkgPT4ge1xyXG4gICAgdGhyb3cgbmV3IE1vY2tTdGF0dXNFcnJvcig0MDMpO1xyXG4gIH0sXHJcbiAgJy9hcGkvNDA0JzogKCkgPT4ge1xyXG4gICAgdGhyb3cgbmV3IE1vY2tTdGF0dXNFcnJvcig0MDQpO1xyXG4gIH0sXHJcbiAgJy9hcGkvNTAwJzogKCkgPT4ge1xyXG4gICAgdGhyb3cgbmV3IE1vY2tTdGF0dXNFcnJvcig1MDApO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==