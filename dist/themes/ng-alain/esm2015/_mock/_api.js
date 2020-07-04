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
const ɵ0 = (req) => getFakeList(req.queryString.count), ɵ1 = () => getNotice(), ɵ2 = () => getActivities(), ɵ3 = () => {
    throw new MockStatusError(401);
}, ɵ4 = () => {
    throw new MockStatusError(403);
}, ɵ5 = () => {
    throw new MockStatusError(404);
}, ɵ6 = () => {
    throw new MockStatusError(500);
};
export const APIS = {
    '/api/list': ɵ0,
    '/api/notice': ɵ1,
    '/api/activities': ɵ2,
    '/api/401': ɵ3,
    '/api/403': ɵ4,
    '/api/404': ɵ5,
    '/api/500': ɵ6,
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9zcmMvX21vY2svX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTNELG9CQUFvQjtBQUVwQixNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRTdHLE1BQU0sT0FBTyxHQUFHO0lBQ2QscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtDQUN0RSxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUc7SUFDYixxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7Q0FDdEUsQ0FBQztBQUNGLE1BQU0sSUFBSSxHQUFHO0lBQ1gsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtDQUMxQixDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUc7SUFDWCxJQUFJO0lBQ0osUUFBUTtJQUNSLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLElBQUk7SUFDSixJQUFJO0lBQ0osS0FBSztJQUNMLElBQUk7Q0FDTCxDQUFDO0FBRUYsWUFBWTtBQUVaLFNBQVMsV0FBVyxDQUFDLFFBQWdCLEVBQUU7SUFDckMsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO0lBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENB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LElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDbkI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLG9CQUFvQjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsb0JBQW9CO2FBQzNCO1lBQ0QsUUFBUSxFQUFFLDRCQUE0QjtTQUN2QztLQUNGLENBQUM7QUFDSixDQUFDO1dBR2MsQ0FBQyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FDdEQsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQ2IsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQzVCLEdBQUcsRUFBRTtJQUNmLE1BQU0sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQyxPQUNXLEdBQUcsRUFBRTtJQUNmLE1BQU0sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQyxPQUNXLEdBQUcsRUFBRTtJQUNmLE1BQU0sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQyxPQUNXLEdBQUcsRUFBRTtJQUNmLE1BQU0sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQWZILE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRztJQUNsQixXQUFXLElBQTBEO0lBQ3JFLGFBQWEsSUFBbUI7SUFDaEMsaUJBQWlCLElBQXVCO0lBQ3hDLFVBQVUsSUFFVDtJQUNELFVBQVUsSUFFVDtJQUNELFVBQVUsSUFFVDtJQUNELFVBQVUsSUFFVDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2NrUmVxdWVzdCwgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnQGRlbG9uL21vY2snO1xyXG5cclxuLy8gcmVnaW9uOiBtb2NrIGRhdGFcclxuXHJcbmNvbnN0IHRpdGxlcyA9IFsnQWxpcGF5JywgJ0FuZ3VsYXInLCAnQW50IERlc2lnbicsICdBbnQgRGVzaWduIFBybycsICdCb290c3RyYXAnLCAnUmVhY3QnLCAnVnVlJywgJ1dlYnBhY2snXTtcclxuXHJcbmNvbnN0IGF2YXRhcnMgPSBbXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9XZEdxbUhwYXl5TWppRWhjS29WRS5wbmcnLCAvLyBBbGlwYXlcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3pPc0tabUZSZFV0dnBxQ0ltT1ZZLnBuZycsIC8vIEFuZ3VsYXJcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2RVUklNa2tyUkZwUGdUdXprd25CLnBuZycsIC8vIEFudCBEZXNpZ25cclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3NmamJPcW5zWFhKZ05DakN6REJMLnBuZycsIC8vIEFudCBEZXNpZ24gUHJvXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9zaUNyQlhYaG12VFFHV1BOTEJvdy5wbmcnLCAvLyBCb290c3RyYXBcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2taekV6ZW1aeUtMS0Zzb2pYSXRFLnBuZycsIC8vIFJlYWN0XHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9Db21CQW9wZXZMd0VOUWRLV2lJbi5wbmcnLCAvLyBWdWVcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL254a3VPSmxGSnVBVWh6bE1UQ0VlLnBuZycsIC8vIFdlYnBhY2tcclxuXTtcclxuY29uc3QgY292ZXJzID0gW1xyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSHJ4Y1ZicktuQ0pPWnZ0elNxak4ucG5nJyxcclxuICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2FsYVBwS1dhakViSVlFVXZ2Vk5mLnBuZycsXHJcbiAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9STHdsS1NZR1NYR0h1V1Nvanl2cC5wbmcnLFxyXG4gICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZ0xhSUFvVldUdExiQldaTllFTWcucG5nJyxcclxuXTtcclxuY29uc3QgZGVzYyA9IFtcclxuICAn6YKj5piv5LiA56eN5YaF5Zyo55qE5Lic6KW/77yMIOS7luS7rOWIsOi+vuS4jeS6hu+8jOS5n+aXoOazleinpuWPiueahCcsXHJcbiAgJ+W4jOacm+aYr+S4gOS4quWlveS4nOilv++8jOS5n+iuuOaYr+acgOWlveeahO+8jOWlveS4nOilv+aYr+S4jeS8mua2iOS6oeeahCcsXHJcbiAgJ+eUn+WRveWwseWDj+S4gOebkuW3p+WFi+WKm++8jOe7k+aenOW+gOW+gOWHuuS6uuaEj+aWmScsXHJcbiAgJ+WfjumVh+S4reaciemCo+S5iOWkmueahOmFkummhu+8jOWlueWNtOWBj+WBj+i1sOi/m+S6huaIkeeahOmFkummhicsXHJcbiAgJ+mCo+aXtuWAmeaIkeWPquS8muaDs+iHquW3seaDs+imgeS7gOS5iO+8jOS7juS4jeaDs+iHquW3seaLpeacieS7gOS5iCcsXHJcbl07XHJcblxyXG5jb25zdCB1c2VyID0gW1xyXG4gICfljaHoibInLFxyXG4gICdjaXBjaGsnLFxyXG4gICfku5jlsI/lsI8nLFxyXG4gICfmm7LkuL3kuL0nLFxyXG4gICfmnpfkuJzkuJwnLFxyXG4gICflkajmmJ/mmJ8nLFxyXG4gICflkLTliqDlpb0nLFxyXG4gICfmnLHlgY/lj7MnLFxyXG4gICfpsbzphbEnLFxyXG4gICfkuZDlk6UnLFxyXG4gICfosK3lsI/ku6onLFxyXG4gICfku7LlsLwnLFxyXG5dO1xyXG5cclxuLy8gZW5kcmVnaW9uXHJcblxyXG5mdW5jdGlvbiBnZXRGYWtlTGlzdChjb3VudDogbnVtYmVyID0gMjApOiBhbnlbXSB7XHJcbiAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcclxuICAgIGxpc3QucHVzaCh7XHJcbiAgICAgIGlkOiBgZmFrZS1saXN0LSR7aX1gLFxyXG4gICAgICBvd25lcjogdXNlcltpICUgMTBdLFxyXG4gICAgICB0aXRsZTogdGl0bGVzW2kgJSA4XSxcclxuICAgICAgYXZhdGFyOiBhdmF0YXJzW2kgJSA4XSxcclxuICAgICAgY292ZXI6IHBhcnNlSW50KChpIC8gNCkudG9TdHJpbmcoKSwgMTApICUgMiA9PT0gMCA/IGNvdmVyc1tpICUgNF0gOiBjb3ZlcnNbMyAtIChpICUgNCldLFxyXG4gICAgICBzdGF0dXM6IFsnYWN0aXZlJywgJ2V4Y2VwdGlvbicsICdub3JtYWwnXVtpICUgM10sXHJcbiAgICAgIHBlcmNlbnQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNTApICsgNTAsXHJcbiAgICAgIGxvZ286IGF2YXRhcnNbaSAlIDhdLFxyXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMiAqIGkpLFxyXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gMTAwMCAqIDYwICogNjAgKiAyICogaSksXHJcbiAgICAgIHN1YkRlc2NyaXB0aW9uOiBkZXNjW2kgJSA1XSxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ+WcqOS4reWPsOS6p+WTgeeahOeglOWPkei/h+eoi+S4re+8jOS8muWHuueOsOS4jeWQjOeahOiuvuiuoeinhOiMg+WSjOWunueOsOaWueW8j++8jOS9huWFtuS4reW+gOW+gOWtmOWcqOW+iOWkmuexu+S8vOeahOmhtemdouWSjOe7hOS7tu+8jOi/meS6m+exu+S8vOeahOe7hOS7tuS8muiiq+aKveemu+aIkOS4gOWll+agh+WHhuinhOiMg+OAgicsXHJcbiAgICAgIGFjdGl2ZVVzZXI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSArIDEwMDAwMCxcclxuICAgICAgbmV3VXNlcjogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDAsXHJcbiAgICAgIHN0YXI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEwMCxcclxuICAgICAgbGlrZTogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTAwLFxyXG4gICAgICBtZXNzYWdlOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEwLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgICfmrrXokL3npLrmhI/vvJromoLomoHph5HmnI3orr7orqHlubPlj7AgYW50LmRlc2lnbu+8jOeUqOacgOWwj+eahOW3peS9nOmHj++8jOaXoOe8neaOpeWFpeiaguiagemHkeacjeeUn+aAge+8jOaPkOS+m+i3qOi2iuiuvuiuoeS4juW8gOWPkeeahOS9k+mqjOino+WGs+aWueahiOOAguiaguiagemHkeacjeiuvuiuoeW5s+WPsCBhbnQuZGVzaWdu77yM55So5pyA5bCP55qE5bel5L2c6YeP77yM5peg57yd5o6l5YWl6JqC6JqB6YeR5pyN55Sf5oCB77yM5o+Q5L6b6Leo6LaK6K6+6K6h5LiO5byA5Y+R55qE5L2T6aqM6Kej5Yaz5pa55qGI44CCJyxcclxuICAgICAgbWVtYmVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9aaUVTcVd3Q1hCUlFvYVBPTlNKZS5wbmcnLFxyXG4gICAgICAgICAgbmFtZTogJ+absuS4veS4vScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvdEJPeFpQbElUSHF3bEdqc0pXYUYucG5nJyxcclxuICAgICAgICAgIG5hbWU6ICfnjovmmK3lkJsnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3NCeGpncWl1SE1HUmtJanFsUUNkLnBuZycsXHJcbiAgICAgICAgICBuYW1lOiAn6JGj5aic5aicJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Tm90aWNlKCk6IGFueVtdIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ3h4eDEnLFxyXG4gICAgICB0aXRsZTogdGl0bGVzWzBdLFxyXG4gICAgICBsb2dvOiBhdmF0YXJzWzBdLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+mCo+aYr+S4gOenjeWGheWcqOeahOS4nOilv++8jCDku5bku6zliLDovr7kuI3kuobvvIzkuZ/ml6Dms5Xop6blj4rnmoQnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIG1lbWJlcjogJ+enkeWtpuaQrOeglue7hCcsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgICBtZW1iZXJMaW5rOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAneHh4MicsXHJcbiAgICAgIHRpdGxlOiB0aXRsZXNbMV0sXHJcbiAgICAgIGxvZ286IGF2YXRhcnNbMV0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn5biM5pyb5piv5LiA5Liq5aW95Lic6KW/77yM5Lmf6K645piv5pyA5aW955qE77yM5aW95Lic6KW/5piv5LiN5Lya5raI5Lqh55qEJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgnMjAxNy0wNy0yNCcpLFxyXG4gICAgICBtZW1iZXI6ICflhajnu4Tpg73mmK/lkLTlvabnpZYnLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgICAgbWVtYmVyTGluazogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3h4eDMnLFxyXG4gICAgICB0aXRsZTogdGl0bGVzWzJdLFxyXG4gICAgICBsb2dvOiBhdmF0YXJzWzJdLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+WfjumVh+S4reaciemCo+S5iOWkmueahOmFkummhu+8jOWlueWNtOWBj+WBj+i1sOi/m+S6huaIkeeahOmFkummhicsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgbWVtYmVyOiAn5Lit5LqM5bCR5aWz5ZuiJyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICAgIG1lbWJlckxpbms6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd4eHg0JyxcclxuICAgICAgdGl0bGU6IHRpdGxlc1szXSxcclxuICAgICAgbG9nbzogYXZhdGFyc1szXSxcclxuICAgICAgZGVzY3JpcHRpb246ICfpgqPml7blgJnmiJHlj6rkvJrmg7Poh6rlt7Hmg7PopoHku4DkuYjvvIzku47kuI3mg7Poh6rlt7Hmi6XmnInku4DkuYgnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDE3LTA3LTIzJyksXHJcbiAgICAgIG1lbWJlcjogJ+eoi+W6j+WRmOaXpeW4uCcsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgICBtZW1iZXJMaW5rOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAneHh4NScsXHJcbiAgICAgIHRpdGxlOiB0aXRsZXNbNF0sXHJcbiAgICAgIGxvZ286IGF2YXRhcnNbNF0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn5Yeb5Yas5bCG6IezJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgnMjAxNy0wNy0yMycpLFxyXG4gICAgICBtZW1iZXI6ICfpq5jpgLzmoLzorr7orqHlpKnlm6InLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgICAgbWVtYmVyTGluazogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3h4eDYnLFxyXG4gICAgICB0aXRsZTogdGl0bGVzWzVdLFxyXG4gICAgICBsb2dvOiBhdmF0YXJzWzVdLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+eUn+WRveWwseWDj+S4gOebkuW3p+WFi+WKm++8jOe7k+aenOW+gOW+gOWHuuS6uuaEj+aWmScsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoJzIwMTctMDctMjMnKSxcclxuICAgICAgbWVtYmVyOiAn6aqX5L2g5p2l5a2m6K6h566X5py6JyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICAgIG1lbWJlckxpbms6ICcnLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBY3Rpdml0aWVzKCk6IGFueVtdIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ3RyZW5kLTEnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiAn5p6X5Lic5LicJyxcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcnNbMF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgbmFtZTogJ+mrmOmAvOagvOiuvuiuoeWkqeWboicsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICBuYW1lOiAn5YWt5pyI6L+t5LujJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICflnKggQHtncm91cH0g5paw5bu66aG555uuIEB7cHJvamVjdH0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICd0cmVuZC0yJyxcclxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogJ+S7mOWwj+WwjycsXHJcbiAgICAgICAgYXZhdGFyOiBhdmF0YXJzWzFdLFxyXG4gICAgICB9LFxyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIG5hbWU6ICfpq5jpgLzmoLzorr7orqHlpKnlm6InLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgbmFtZTogJ+WFreaciOi/reS7oycsXHJcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiAn5ZyoIEB7Z3JvdXB9IOaWsOW7uumhueebriBAe3Byb2plY3R9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAndHJlbmQtMycsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6ICfmm7LkuL3kuL0nLFxyXG4gICAgICAgIGF2YXRhcjogYXZhdGFyc1syXSxcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICBuYW1lOiAn5Lit5LqM5bCR5aWz5ZuiJyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIG5hbWU6ICflha3mnIjov63ku6MnLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZTogJ+WcqCBAe2dyb3VwfSDmlrDlu7rpobnnm64gQHtwcm9qZWN0fScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3RyZW5kLTQnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiAn5ZGo5pif5pifJyxcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcnNbM10sXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICBuYW1lOiAnNSDmnIjml6XluLjov63ku6MnLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZTogJ+WwhiBAe3Byb2plY3R9IOabtOaWsOiHs+W3suWPkeW4g+eKtuaAgScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3RyZW5kLTUnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiAn5pyx5YGP5Y+zJyxcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcnNbNF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICBuYW1lOiAn5bel56iL5pWI6IO9JyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgY29tbWVudDoge1xyXG4gICAgICAgIG5hbWU6ICfnlZnoqIAnLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZTogJ+WcqCBAe3Byb2plY3R9IOWPkeW4g+S6hiBAe2NvbW1lbnR9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAndHJlbmQtNicsXHJcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6ICfkuZDlk6UnLFxyXG4gICAgICAgIGF2YXRhcjogYXZhdGFyc1s1XSxcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICBuYW1lOiAn56iL5bqP5ZGY5pel5bi4JyxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20vJyxcclxuICAgICAgfSxcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIG5hbWU6ICflk4HniYzov63ku6MnLFxyXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS8nLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZTogJ+WcqCBAe2dyb3VwfSDmlrDlu7rpobnnm64gQHtwcm9qZWN0fScsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBUElTID0ge1xyXG4gICcvYXBpL2xpc3QnOiAocmVxOiBNb2NrUmVxdWVzdCkgPT4gZ2V0RmFrZUxpc3QocmVxLnF1ZXJ5U3RyaW5nLmNvdW50KSxcclxuICAnL2FwaS9ub3RpY2UnOiAoKSA9PiBnZXROb3RpY2UoKSxcclxuICAnL2FwaS9hY3Rpdml0aWVzJzogKCkgPT4gZ2V0QWN0aXZpdGllcygpLFxyXG4gICcvYXBpLzQwMSc6ICgpID0+IHtcclxuICAgIHRocm93IG5ldyBNb2NrU3RhdHVzRXJyb3IoNDAxKTtcclxuICB9LFxyXG4gICcvYXBpLzQwMyc6ICgpID0+IHtcclxuICAgIHRocm93IG5ldyBNb2NrU3RhdHVzRXJyb3IoNDAzKTtcclxuICB9LFxyXG4gICcvYXBpLzQwNCc6ICgpID0+IHtcclxuICAgIHRocm93IG5ldyBNb2NrU3RhdHVzRXJyb3IoNDA0KTtcclxuICB9LFxyXG4gICcvYXBpLzUwMCc6ICgpID0+IHtcclxuICAgIHRocm93IG5ldyBNb2NrU3RhdHVzRXJyb3IoNTAwKTtcclxuICB9LFxyXG59O1xyXG4iXX0=