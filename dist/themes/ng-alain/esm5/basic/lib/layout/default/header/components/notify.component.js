/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/notify.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
// import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
/**
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg, cdr) {
        this.msg = msg;
        this.cdr = cdr;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    /**
     * @private
     * @param {?} notices
     * @return {?}
     */
    HeaderNotifyComponent.prototype.updateNoticeData = /**
     * @private
     * @param {?} notices
     * @return {?}
     */
    function (notices) {
        /** @type {?} */
        var data = this.data.slice();
        data.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.list = []); }));
        notices.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var newItem = tslib_1.__assign({}, item);
            // if (newItem.datetime)
            //  newItem.datetime = distanceInWordsToNow(item.datetime!, {
            //    locale: (window as any).__locale__,
            //  });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            (/** @type {?} */ (data.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.title === newItem.type; })))).list.push(newItem);
        }));
        return data;
    };
    /**
     * @return {?}
     */
    HeaderNotifyComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.data = _this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            _this.loading = false;
            _this.cdr.detectChanges();
        }), 1000);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    HeaderNotifyComponent.prototype.clear = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    /**
     * @param {?} res
     * @return {?}
     */
    HeaderNotifyComponent.prototype.select = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-notify',
                    template: "\n    <notice-icon\n      [data]=\"data\"\n      [count]=\"count\"\n      [loading]=\"loading\"\n      btnClass=\"alain-default__nav-item\"\n      btnIconClass=\"alain-default__nav-item-icon\"\n      (select)=\"select($event)\"\n      (clear)=\"clear($event)\"\n      (popoverVisibleChange)=\"loadData()\"\n    ></notice-icon>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderNotifyComponent.ctorParameters = function () { return [
        { type: NzMessageService },
        { type: ChangeDetectorRef }
    ]; };
    return HeaderNotifyComponent;
}());
export { HeaderNotifyComponent };
if (false) {
    /** @type {?} */
    HeaderNotifyComponent.prototype.data;
    /** @type {?} */
    HeaderNotifyComponent.prototype.count;
    /** @type {?} */
    HeaderNotifyComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    HeaderNotifyComponent.prototype.msg;
    /**
     * @type {?}
     * @private
     */
    HeaderNotifyComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi9iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvZGVmYXVsdC9oZWFkZXIvY29tcG9uZW50cy9ub3RpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXRGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU1qRDtJQTJDRSwrQkFBb0IsR0FBcUIsRUFBVSxHQUFzQjtRQUFyRCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBMUJ6RSxTQUFJLEdBQWlCO1lBQ25CO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtTQUNGLENBQUM7UUFDRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUU0RCxDQUFDOzs7Ozs7SUFFckUsZ0RBQWdCOzs7OztJQUF4QixVQUF5QixPQUF5Qjs7WUFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJ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c0NBQU07Ozs7SUFBTixVQUFPLEdBQVE7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBTyxHQUFHLENBQUMsS0FBSyxnQkFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQWpMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSw0VUFXVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBckJRLGdCQUFnQjtnQkFGb0IsaUJBQWlCOztJQTBMOUQsNEJBQUM7Q0FBQSxBQWxMRCxJQWtMQztTQWxLWSxxQkFBcUI7OztJQUNoQyxxQ0FzQkU7O0lBQ0Ysc0NBQVU7O0lBQ1Ysd0NBQWdCOzs7OztJQUVKLG9DQUE2Qjs7Ozs7SUFBRSxvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyBkaXN0YW5jZUluV29yZHNUb05vdyBmcm9tICdkYXRlLWZucy9kaXN0YW5jZV9pbl93b3Jkc190b19ub3cnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IE5vdGljZUl0ZW0sIE5vdGljZUljb25MaXN0IH0gZnJvbSAnQGRlbG9uL2FiYyc7XHJcblxyXG4vKipcclxuICog6I+c5Y2V6YCa55+lXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1ub3RpZnknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bm90aWNlLWljb25cclxuICAgICAgW2RhdGFdPVwiZGF0YVwiXHJcbiAgICAgIFtjb3VudF09XCJjb3VudFwiXHJcbiAgICAgIFtsb2FkaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgICBidG5DbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCJcclxuICAgICAgYnRuSWNvbkNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0taWNvblwiXHJcbiAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudClcIlxyXG4gICAgICAoY2xlYXIpPVwiY2xlYXIoJGV2ZW50KVwiXHJcbiAgICAgIChwb3BvdmVyVmlzaWJsZUNoYW5nZSk9XCJsb2FkRGF0YSgpXCJcclxuICAgID48L25vdGljZS1pY29uPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJOb3RpZnlDb21wb25lbnQge1xyXG4gIGRhdGE6IE5vdGljZUl0ZW1bXSA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfpgJrnn6UnLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgZW1wdHlUZXh0OiAn5L2g5bey5p+l55yL5omA5pyJ6YCa55+lJyxcclxuICAgICAgZW1wdHlJbWFnZTogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC93QWh5SUNoT0R6c29LSU9CSGNCay5zdmcnLFxyXG4gICAgICBjbGVhclRleHQ6ICfmuIXnqbrpgJrnn6UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfmtojmga8nLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgZW1wdHlUZXh0OiAn5oKo5bey6K+75a6M5omA5pyJ5raI5oGvJyxcclxuICAgICAgZW1wdHlJbWFnZTogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9zQXVKZUp6U0tiVW1IZkJRUnptWi5zdmcnLFxyXG4gICAgICBjbGVhclRleHQ6ICfmuIXnqbrmtojmga8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICflvoXlip4nLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgZW1wdHlUZXh0OiAn5L2g5bey5a6M5oiQ5omA5pyJ5b6F5YqeJyxcclxuICAgICAgZW1wdHlJbWFnZTogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9Ic0lzeE1aaVdLck5VYXZRVVhxeC5zdmcnLFxyXG4gICAgICBjbGVhclRleHQ6ICfmuIXnqbrlvoXlip4nLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvdW50ID0gNTtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXNnOiBOek1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTm90aWNlRGF0YShub3RpY2VzOiBOb3RpY2VJY29uTGlzdFtdKTogTm90aWNlSXRlbVtdIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoKTtcclxuICAgIGRhdGEuZm9yRWFjaChpID0+IChpLmxpc3QgPSBbXSkpO1xyXG5cclxuICAgIG5vdGljZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IHsgLi4uaXRlbSB9O1xyXG4gICAgICAvLyBpZiAobmV3SXRlbS5kYXRldGltZSlcclxuICAgICAgLy8gIG5ld0l0ZW0uZGF0ZXRpbWUgPSBkaXN0YW5jZUluV29yZHNUb05vdyhpdGVtLmRhdGV0aW1lISwge1xyXG4gICAgICAvLyAgICBsb2NhbGU6ICh3aW5kb3cgYXMgYW55KS5fX2xvY2FsZV9fLFxyXG4gICAgICAvLyAgfSk7XHJcbiAgICAgIGlmIChuZXdJdGVtLmV4dHJhICYmIG5ld0l0ZW0uc3RhdHVzKSB7XHJcbiAgICAgICAgbmV3SXRlbS5jb2xvciA9IHtcclxuICAgICAgICAgIHRvZG86IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHByb2Nlc3Npbmc6ICdibHVlJyxcclxuICAgICAgICAgIHVyZ2VudDogJ3JlZCcsXHJcbiAgICAgICAgICBkb2luZzogJ2dvbGQnLFxyXG4gICAgICAgIH1bbmV3SXRlbS5zdGF0dXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGEuZmluZCh3ID0+IHcudGl0bGUgPT09IG5ld0l0ZW0udHlwZSkhLmxpc3QucHVzaChuZXdJdGVtKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBsb2FkRGF0YSgpIHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmcpIHJldHVybjtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gdGhpcy51cGRhdGVOb3RpY2VEYXRhKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwMScsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvVGhYQVhnaGJFc0JDQ1NEaWhaeFkucG5nJyxcclxuICAgICAgICAgIHRpdGxlOiAn5L2g5pS25Yiw5LqGIDE0IOS7veaWsOWRqOaKpScsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDknLFxyXG4gICAgICAgICAgdHlwZTogJ+mAmuefpScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwMicsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvT0tKWERYcm1rTnNoQU12d3R2aHUucG5nJyxcclxuICAgICAgICAgIHRpdGxlOiAn5L2g5o6o6I2Q55qEIOabsuWmruWmriDlt7LpgJrov4fnrKzkuInova7pnaLor5UnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA4JyxcclxuICAgICAgICAgIHR5cGU6ICfpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDMnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2tJU1RkdnB5VEFodEd4cG92TldkLnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+i/meenjeaooeadv+WPr+S7peWMuuWIhuWkmuenjemAmuefpeexu+WeiycsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDcnLFxyXG4gICAgICAgICAgcmVhZDogdHJ1ZSxcclxuICAgICAgICAgIHR5cGU6ICfpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDQnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0d2cUJuS2hGZ09idm5TR2tEc2plLnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+W3puS+p+Wbvuagh+eUqOS6juWMuuWIhuS4jeWQjOeahOexu+WeiycsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDcnLFxyXG4gICAgICAgICAgdHlwZTogJ+mAmuefpScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwNScsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvVGhYQVhnaGJFc0JDQ1NEaWhaeFkucG5nJyxcclxuICAgICAgICAgIHRpdGxlOiAn5YaF5a655LiN6KaB6LaF6L+H5Lik6KGM5a2X77yM6LaF5Ye65pe26Ieq5Yqo5oiq5patJyxcclxuICAgICAgICAgIGRhdGV0aW1lOiAnMjAxNy0wOC0wNycsXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA2JyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9mY0hNVk5DalBPc2JVR2RFZHV1di5qcGVnJyxcclxuICAgICAgICAgIHRpdGxlOiAn5puy5Li95Li9IOivhOiuuuS6huS9oCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+aPj+i/sOS/oeaBr+aPj+i/sOS/oeaBr+aPj+i/sOS/oeaBrycsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDcnLFxyXG4gICAgICAgICAgdHlwZTogJ+a2iOaBrycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwNycsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZmNITVZOQ2pQT3NiVUdkRWR1dXYuanBlZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+acseWBj+WPsyDlm57lpI3kuobkvaAnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfov5nnp43mqKHmnb/nlKjkuo7mj5DphpLosIHkuI7kvaDlj5HnlJ/kuobkupLliqjvvIzlt6bkvqfmlL7jgI7osIHjgI/nmoTlpLTlg48nLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHR5cGU6ICfmtojmga8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDgnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2ZjSE1WTkNqUE9zYlVHZEVkdXV2LmpwZWcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmoIfpopgnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfov5nnp43mqKHmnb/nlKjkuo7mj5DphpLosIHkuI7kvaDlj5HnlJ/kuobkupLliqjvvIzlt6bkvqfmlL7jgI7osIHjgI/nmoTlpLTlg48nLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHR5cGU6ICfmtojmga8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDknLFxyXG4gICAgICAgICAgdGl0bGU6ICfku7vliqHlkI3np7AnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfku7vliqHpnIDopoHlnKggMjAxNy0wMS0xMiAyMDowMCDliY3lkK/liqgnLFxyXG4gICAgICAgICAgZXh0cmE6ICfmnKrlvIDlp4snLFxyXG4gICAgICAgICAgc3RhdHVzOiAndG9kbycsXHJcbiAgICAgICAgICB0eXBlOiAn5b6F5YqeJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDEwJyxcclxuICAgICAgICAgIHRpdGxlOiAn56ys5LiJ5pa557Sn5oCl5Luj56CB5Y+Y5pu0JyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Yag6ZyW5o+Q5Lqk5LqOIDIwMTctMDEtMDbvvIzpnIDlnKggMjAxNy0wMS0wNyDliY3lrozmiJDku6PnoIHlj5jmm7Tku7vliqEnLFxyXG4gICAgICAgICAgZXh0cmE6ICfpqazkuIrliLDmnJ8nLFxyXG4gICAgICAgICAgc3RhdHVzOiAndXJnZW50JyxcclxuICAgICAgICAgIHR5cGU6ICflvoXlip4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMTEnLFxyXG4gICAgICAgICAgdGl0bGU6ICfkv6Hmga/lronlhajogIPor5UnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfmjIfmtL7nq7nlsJTkuo4gMjAxNy0wMS0wOSDliY3lrozmiJDmm7TmlrDlubblj5HluIMnLFxyXG4gICAgICAgICAgZXh0cmE6ICflt7LogJfml7YgOCDlpKknLFxyXG4gICAgICAgICAgc3RhdHVzOiAnZG9pbmcnLFxyXG4gICAgICAgICAgdHlwZTogJ+W+heWKnicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAxMicsXHJcbiAgICAgICAgICB0aXRsZTogJ0FCQ0Qg54mI5pys5Y+R5biDJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Yag6ZyW5o+Q5Lqk5LqOIDIwMTctMDEtMDbvvIzpnIDlnKggMjAxNy0wMS0wNyDliY3lrozmiJDku6PnoIHlj5jmm7Tku7vliqEnLFxyXG4gICAgICAgICAgZXh0cmE6ICfov5vooYzkuK0nLFxyXG4gICAgICAgICAgc3RhdHVzOiAncHJvY2Vzc2luZycsXHJcbiAgICAgICAgICB0eXBlOiAn5b6F5YqeJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdKTtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1zZy5zdWNjZXNzKGDmuIXnqbrkuoYgJHt0eXBlfWApO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KHJlczogYW55KSB7XHJcbiAgICB0aGlzLm1zZy5zdWNjZXNzKGDngrnlh7vkuoYgJHtyZXMudGl0bGV9IOeahCAke3Jlcy5pdGVtLnRpdGxlfWApO1xyXG4gIH1cclxufVxyXG4iXX0=