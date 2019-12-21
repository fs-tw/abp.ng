/**
 * @fileoverview added by tsickle
 * Generated from: _mock/_geo.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DATA = [
    {
        name: '上海',
        id: '310000',
    },
    {
        name: '市辖区',
        id: '310100',
    },
    {
        name: '北京',
        id: '110000',
    },
    {
        name: '市辖区',
        id: '110100',
    },
    {
        name: '浙江省',
        id: '330000',
    },
    {
        name: '杭州市',
        id: '330100',
    },
    {
        name: '宁波市',
        id: '330200',
    },
    {
        name: '温州市',
        id: '330300',
    },
    {
        name: '嘉兴市',
        id: '330400',
    },
    {
        name: '湖州市',
        id: '330500',
    },
    {
        name: '绍兴市',
        id: '330600',
    },
    {
        name: '金华市',
        id: '330700',
    },
    {
        name: '衢州市',
        id: '330800',
    },
    {
        name: '舟山市',
        id: '330900',
    },
    {
        name: '台州市',
        id: '331000',
    },
    {
        name: '丽水市',
        id: '331100',
    },
];
var ɵ0 = /**
 * @return {?}
 */
function () { return DATA.filter((/**
 * @param {?} w
 * @return {?}
 */
function (w) { return w.id.endsWith('0000'); })); }, ɵ1 = /**
 * @param {?} req
 * @return {?}
 */
function (req) {
    /** @type {?} */
    var pid = (req.params.id || '310000').slice(0, 2);
    return DATA.filter((/**
     * @param {?} w
     * @return {?}
     */
    function (w) { return w.id.slice(0, 2) === pid && !w.id.endsWith('0000'); }));
};
/** @type {?} */
export var GEOS = {
    '/geo/province': (ɵ0),
    '/geo/:id': (ɵ1),
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dlby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbIl9tb2NrL19nZW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLEtBQUs7UUFDWCxFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLEtBQUs7UUFDWCxFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLEtBQUs7UUFDWCxFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLEtBQUs7UUFDWCxFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxRQUFRO0tBQ2I7Q0FDRjs7OztBQUdrQixjQUFNLE9BQUEsSUFBSSxDQUFDLE1BQU07Ozs7QUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixFQUFDLEVBQXZDLENBQXVDOzs7O0FBQ2xELFVBQUMsR0FBZ0I7O1FBQ3JCLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sSUFBSSxDQUFDLE1BQU07Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBbEQsQ0FBa0QsRUFBQyxDQUFDO0FBQzlFLENBQUM7O0FBTEgsTUFBTSxLQUFPLElBQUksR0FBRztJQUNsQixlQUFlLE1BQStDO0lBQzlELFVBQVUsTUFHVDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICdAZGVsb24vbW9jayc7XHJcblxyXG5jb25zdCBEQVRBID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICfkuIrmtbcnLFxyXG4gICAgaWQ6ICczMTAwMDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+W4gui+luWMuicsXHJcbiAgICBpZDogJzMxMDEwMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn5YyX5LqsJyxcclxuICAgIGlkOiAnMTEwMDAwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfluILovpbljLonLFxyXG4gICAgaWQ6ICcxMTAxMDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+a1meaxn+ecgScsXHJcbiAgICBpZDogJzMzMDAwMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn5p2t5bee5biCJyxcclxuICAgIGlkOiAnMzMwMTAwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICflroHms6LluIInLFxyXG4gICAgaWQ6ICczMzAyMDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+a4qeW3nuW4gicsXHJcbiAgICBpZDogJzMzMDMwMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn5ZiJ5YW05biCJyxcclxuICAgIGlkOiAnMzMwNDAwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfmuZblt57luIInLFxyXG4gICAgaWQ6ICczMzA1MDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+e7jeWFtOW4gicsXHJcbiAgICBpZDogJzMzMDYwMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn6YeR5Y2O5biCJyxcclxuICAgIGlkOiAnMzMwNzAwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfooaLlt57luIInLFxyXG4gICAgaWQ6ICczMzA4MDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+iIn+WxseW4gicsXHJcbiAgICBpZDogJzMzMDkwMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn5Y+w5bee5biCJyxcclxuICAgIGlkOiAnMzMxMDAwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfkuL3msLTluIInLFxyXG4gICAgaWQ6ICczMzExMDAnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgR0VPUyA9IHtcclxuICAnL2dlby9wcm92aW5jZSc6ICgpID0+IERBVEEuZmlsdGVyKHcgPT4gdy5pZC5lbmRzV2l0aCgnMDAwMCcpKSxcclxuICAnL2dlby86aWQnOiAocmVxOiBNb2NrUmVxdWVzdCkgPT4ge1xyXG4gICAgY29uc3QgcGlkID0gKHJlcS5wYXJhbXMuaWQgfHwgJzMxMDAwMCcpLnNsaWNlKDAsIDIpO1xyXG4gICAgcmV0dXJuIERBVEEuZmlsdGVyKHcgPT4gdy5pZC5zbGljZSgwLCAyKSA9PT0gcGlkICYmICF3LmlkLmVuZHNXaXRoKCcwMDAwJykpO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==