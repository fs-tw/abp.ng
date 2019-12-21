/**
 * @fileoverview added by tsickle
 * Generated from: _mock/_profile.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var basicGoods = [
    {
        id: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2.00',
        num: '1',
        amount: '2.00',
    },
    {
        id: '1234562',
        name: '凉茶 300ml',
        barcode: '12421432143214322',
        price: '3.00',
        num: '2',
        amount: '6.00',
    },
    {
        id: '1234563',
        name: '好吃的薯片',
        barcode: '12421432143214323',
        price: '7.00',
        num: '4',
        amount: '28.00',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
];
/** @type {?} */
var basicProgress = [
    {
        key: '1',
        time: '2017-10-01 14:10',
        rate: '联系客户',
        status: 'processing',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '2',
        time: '2017-10-01 14:05',
        rate: '取货员出发',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '1h',
    },
    {
        key: '3',
        time: '2017-10-01 13:05',
        rate: '取货员接单',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '4',
        time: '2017-10-01 13:00',
        rate: '申请审批通过',
        status: 'success',
        operator: '系统',
        cost: '1h',
    },
    {
        key: '5',
        time: '2017-10-01 12:00',
        rate: '发起退货申请',
        status: 'success',
        operator: '用户',
        cost: '5mins',
    },
];
/** @type {?} */
var advancedOperation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '林东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
/** @type {?} */
var advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
/** @type {?} */
var advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
/** @type {?} */
export var PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': {
        advancedOperation1: advancedOperation1,
        advancedOperation2: advancedOperation2,
        advancedOperation3: advancedOperation3,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3Byb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vIiwic291cmNlcyI6WyJfbW9jay9fcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxVQUFVLEdBQUc7SUFDakI7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLElBQUksRUFBRSxXQUFXO1FBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsS0FBSyxFQUFFLE1BQU07UUFDYixHQUFHLEVBQUUsR0FBRztRQUNSLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxTQUFTO1FBQ2IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixLQUFLLEVBQUUsTUFBTTtRQUNiLEdBQUcsRUFBRSxHQUFHO1FBQ1IsTUFBTSxFQUFFLE1BQU07S0FDZjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFNBQVM7UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsS0FBSyxFQUFFLE1BQU07UUFDYixHQUFHLEVBQUUsR0FBRztRQUNSLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixLQUFLLEVBQUUsTUFBTTtRQUNiLEdBQUcsRUFBRSxHQUFHO1FBQ1IsTUFBTSxFQUFFLE9BQU87S0FDaEI7Q0FDRjs7SUFFSyxhQUFhLEdBQUc7SUFDcEI7UUFDRSxHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsWUFBWTtRQUNwQixRQUFRLEVBQUUsWUFBWTtRQUN0QixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsU0FBUztRQUNqQixRQUFRLEVBQUUsWUFBWTtRQUN0QixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsU0FBUztRQUNqQixRQUFRLEVBQUUsWUFBWTtRQUN0QixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsU0FBUztRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRDtRQUNFLEdBQUcsRUFBRSxHQUFHO1FBQ1IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGOztJQUVLLGtCQUFrQixHQUFHO0lBQ3pCO1FBQ0UsR0FBRyxFQUFFLEtBQUs7UUFDVixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLE9BQU87UUFDZixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLElBQUksRUFBRSxHQUFHO0tBQ1Y7SUFDRDtRQUNFLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEO1FBQ0UsR0FBRyxFQUFFLEtBQUs7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLE9BQU87UUFDZixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLElBQUksRUFBRSxHQUFHO0tBQ1Y7SUFDRDtRQUNFLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxPQUFPO1FBQ2YsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsS0FBSztRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsT0FBTztRQUNmLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsSUFBSSxFQUFFLEdBQUc7S0FDVjtDQUNGOztJQUVLLGtCQUFrQixHQUFHO0lBQ3pCO1FBQ0UsR0FBRyxFQUFFLEtBQUs7UUFDVixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLE9BQU87UUFDZixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLElBQUksRUFBRSxHQUFHO0tBQ1Y7Q0FDRjs7SUFFSyxrQkFBa0IsR0FBRztJQUN6QjtRQUNFLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxPQUFPO1FBQ2YsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxJQUFJLEVBQUUsR0FBRztLQUNWO0NBQ0Y7O0FBRUQsTUFBTSxLQUFPLFFBQVEsR0FBRztJQUN0Qix1QkFBdUIsRUFBRSxhQUFhO0lBQ3RDLG9CQUFvQixFQUFFLFVBQVU7SUFDaEMsdUJBQXVCLEVBQUU7UUFDdkIsa0JBQWtCLG9CQUFBO1FBQ2xCLGtCQUFrQixvQkFBQTtRQUNsQixrQkFBa0Isb0JBQUE7S0FDbkI7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2ljR29vZHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICcxMjM0NTYxJyxcclxuICAgIG5hbWU6ICfnn7/ms4nmsLQgNTUwbWwnLFxyXG4gICAgYmFyY29kZTogJzEyNDIxNDMyMTQzMjE0MzIxJyxcclxuICAgIHByaWNlOiAnMi4wMCcsXHJcbiAgICBudW06ICcxJyxcclxuICAgIGFtb3VudDogJzIuMDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcxMjM0NTYyJyxcclxuICAgIG5hbWU6ICflh4nojLYgMzAwbWwnLFxyXG4gICAgYmFyY29kZTogJzEyNDIxNDMyMTQzMjE0MzIyJyxcclxuICAgIHByaWNlOiAnMy4wMCcsXHJcbiAgICBudW06ICcyJyxcclxuICAgIGFtb3VudDogJzYuMDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcxMjM0NTYzJyxcclxuICAgIG5hbWU6ICflpb3lkIPnmoTolq/niYcnLFxyXG4gICAgYmFyY29kZTogJzEyNDIxNDMyMTQzMjE0MzIzJyxcclxuICAgIHByaWNlOiAnNy4wMCcsXHJcbiAgICBudW06ICc0JyxcclxuICAgIGFtb3VudDogJzI4LjAwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMTIzNDU2NCcsXHJcbiAgICBuYW1lOiAn54m55Yir5aW95ZCD55qE6JuL5Y23JyxcclxuICAgIGJhcmNvZGU6ICcxMjQyMTQzMjE0MzIxNDMyNCcsXHJcbiAgICBwcmljZTogJzguNTAnLFxyXG4gICAgbnVtOiAnMycsXHJcbiAgICBhbW91bnQ6ICcyNS41MCcsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGJhc2ljUHJvZ3Jlc3MgPSBbXHJcbiAge1xyXG4gICAga2V5OiAnMScsXHJcbiAgICB0aW1lOiAnMjAxNy0xMC0wMSAxNDoxMCcsXHJcbiAgICByYXRlOiAn6IGU57O75a6i5oi3JyxcclxuICAgIHN0YXR1czogJ3Byb2Nlc3NpbmcnLFxyXG4gICAgb3BlcmF0b3I6ICflj5botKflkZggSUQxMjM0JyxcclxuICAgIGNvc3Q6ICc1bWlucycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICcyJyxcclxuICAgIHRpbWU6ICcyMDE3LTEwLTAxIDE0OjA1JyxcclxuICAgIHJhdGU6ICflj5botKflkZjlh7rlj5EnLFxyXG4gICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICBvcGVyYXRvcjogJ+WPlui0p+WRmCBJRDEyMzQnLFxyXG4gICAgY29zdDogJzFoJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzMnLFxyXG4gICAgdGltZTogJzIwMTctMTAtMDEgMTM6MDUnLFxyXG4gICAgcmF0ZTogJ+WPlui0p+WRmOaOpeWNlScsXHJcbiAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgIG9wZXJhdG9yOiAn5Y+W6LSn5ZGYIElEMTIzNCcsXHJcbiAgICBjb3N0OiAnNW1pbnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnNCcsXHJcbiAgICB0aW1lOiAnMjAxNy0xMC0wMSAxMzowMCcsXHJcbiAgICByYXRlOiAn55Sz6K+35a6h5om56YCa6L+HJyxcclxuICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgb3BlcmF0b3I6ICfns7vnu58nLFxyXG4gICAgY29zdDogJzFoJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzUnLFxyXG4gICAgdGltZTogJzIwMTctMTAtMDEgMTI6MDAnLFxyXG4gICAgcmF0ZTogJ+WPkei1t+mAgOi0p+eUs+ivtycsXHJcbiAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgIG9wZXJhdG9yOiAn55So5oi3JyxcclxuICAgIGNvc3Q6ICc1bWlucycsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGFkdmFuY2VkT3BlcmF0aW9uMSA9IFtcclxuICB7XHJcbiAgICBrZXk6ICdvcDEnLFxyXG4gICAgdHlwZTogJ+iuoui0reWFs+ezu+eUn+aViCcsXHJcbiAgICBuYW1lOiAn5puy5Li95Li9JyxcclxuICAgIHN0YXR1czogJ2FncmVlJyxcclxuICAgIHVwZGF0ZWRBdDogJzIwMTctMTAtMDMgIDE5OjIzOjEyJyxcclxuICAgIG1lbW86ICctJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ29wMicsXHJcbiAgICB0eXBlOiAn6LSi5Yqh5aSN5a6hJyxcclxuICAgIG5hbWU6ICfku5jlsI/lsI8nLFxyXG4gICAgc3RhdHVzOiAncmVqZWN0JyxcclxuICAgIHVwZGF0ZWRBdDogJzIwMTctMTAtMDMgIDE5OjIzOjEyJyxcclxuICAgIG1lbW86ICfkuI3pgJrov4fljp/lm6AnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnb3AzJyxcclxuICAgIHR5cGU6ICfpg6jpl6jliJ3lrqEnLFxyXG4gICAgbmFtZTogJ+WRqOavm+avmycsXHJcbiAgICBzdGF0dXM6ICdhZ3JlZScsXHJcbiAgICB1cGRhdGVkQXQ6ICcyMDE3LTEwLTAzICAxOToyMzoxMicsXHJcbiAgICBtZW1vOiAnLScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdvcDQnLFxyXG4gICAgdHlwZTogJ+aPkOS6pOiuouWNlScsXHJcbiAgICBuYW1lOiAn5p6X5Lic5LicJyxcclxuICAgIHN0YXR1czogJ2FncmVlJyxcclxuICAgIHVwZGF0ZWRBdDogJzIwMTctMTAtMDMgIDE5OjIzOjEyJyxcclxuICAgIG1lbW86ICflvojmo5InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnb3A1JyxcclxuICAgIHR5cGU6ICfliJvlu7rorqLljZUnLFxyXG4gICAgbmFtZTogJ+axl+eJmeeJmScsXHJcbiAgICBzdGF0dXM6ICdhZ3JlZScsXHJcbiAgICB1cGRhdGVkQXQ6ICcyMDE3LTEwLTAzICAxOToyMzoxMicsXHJcbiAgICBtZW1vOiAnLScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGFkdmFuY2VkT3BlcmF0aW9uMiA9IFtcclxuICB7XHJcbiAgICBrZXk6ICdvcDEnLFxyXG4gICAgdHlwZTogJ+iuoui0reWFs+ezu+eUn+aViCcsXHJcbiAgICBuYW1lOiAn5puy5Li95Li9JyxcclxuICAgIHN0YXR1czogJ2FncmVlJyxcclxuICAgIHVwZGF0ZWRBdDogJzIwMTctMTAtMDMgIDE5OjIzOjEyJyxcclxuICAgIG1lbW86ICctJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYWR2YW5jZWRPcGVyYXRpb24zID0gW1xyXG4gIHtcclxuICAgIGtleTogJ29wMScsXHJcbiAgICB0eXBlOiAn5Yib5bu66K6i5Y2VJyxcclxuICAgIG5hbWU6ICfmsZfniZnniZknLFxyXG4gICAgc3RhdHVzOiAnYWdyZWUnLFxyXG4gICAgdXBkYXRlZEF0OiAnMjAxNy0xMC0wMyAgMTk6MjM6MTInLFxyXG4gICAgbWVtbzogJy0nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUFJPRklMRVMgPSB7XHJcbiAgJ0dFVCAvcHJvZmlsZS9wcm9ncmVzcyc6IGJhc2ljUHJvZ3Jlc3MsXHJcbiAgJ0dFVCAvcHJvZmlsZS9nb29kcyc6IGJhc2ljR29vZHMsXHJcbiAgJ0dFVCAvcHJvZmlsZS9hZHZhbmNlZCc6IHtcclxuICAgIGFkdmFuY2VkT3BlcmF0aW9uMSxcclxuICAgIGFkdmFuY2VkT3BlcmF0aW9uMixcclxuICAgIGFkdmFuY2VkT3BlcmF0aW9uMyxcclxuICB9LFxyXG59O1xyXG4iXX0=