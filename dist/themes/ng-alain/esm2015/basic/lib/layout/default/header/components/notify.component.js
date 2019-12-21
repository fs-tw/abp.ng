/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/notify.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
// import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
/**
 * 菜单通知
 */
export class HeaderNotifyComponent {
    /**
     * @param {?} msg
     * @param {?} cdr
     */
    constructor(msg, cdr) {
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
    updateNoticeData(notices) {
        /** @type {?} */
        const data = this.data.slice();
        data.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.list = [])));
        notices.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const newItem = Object.assign({}, item);
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
            w => w.title === newItem.type)))).list.push(newItem);
        }));
        return data;
    }
    /**
     * @return {?}
     */
    loadData() {
        if (this.loading)
            return;
        this.loading = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.data = this.updateNoticeData([
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
            this.loading = false;
            this.cdr.detectChanges();
        }), 1000);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    clear(type) {
        this.msg.success(`清空了 ${type}`);
    }
    /**
     * @param {?} res
     * @return {?}
     */
    select(res) {
        this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    }
}
HeaderNotifyComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-notify',
                template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
HeaderNotifyComponent.ctorParameters = () => [
    { type: NzMessageService },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi9iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvZGVmYXVsdC9oZWFkZXIvY29tcG9uZW50cy9ub3RpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBc0JqRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQTJCaEMsWUFBb0IsR0FBcUIsRUFBVSxHQUFzQjtRQUFyRCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBMUJ6RSxTQUFJLEdBQWlCO1lBQ25CO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtTQUNGLENBQUM7UUFDRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUU0RCxDQUFDOzs7Ozs7SUFFckUsZ0JBQWdCLENBQUMsT0FBeUI7O2NBQzFDLElBQUksR0FBRyxJ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SSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUFqTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFyQlEsZ0JBQWdCO1lBRm9CLGlCQUFpQjs7OztJQXlCNUQscUNBc0JFOztJQUNGLHNDQUFVOztJQUNWLHdDQUFnQjs7Ozs7SUFFSixvQ0FBNkI7Ozs7O0lBQUUsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0ICogYXMgZGlzdGFuY2VJbldvcmRzVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBOb3RpY2VJdGVtLCBOb3RpY2VJY29uTGlzdCB9IGZyb20gJ0BkZWxvbi9hYmMnO1xyXG5cclxuLyoqXHJcbiAqIOiPnOWNlemAmuefpVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItbm90aWZ5JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5vdGljZS1pY29uXHJcbiAgICAgIFtkYXRhXT1cImRhdGFcIlxyXG4gICAgICBbY291bnRdPVwiY291bnRcIlxyXG4gICAgICBbbG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgICAgYnRuQ2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiXHJcbiAgICAgIGJ0bkljb25DbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtLWljb25cIlxyXG4gICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgKGNsZWFyKT1cImNsZWFyKCRldmVudClcIlxyXG4gICAgICAocG9wb3ZlclZpc2libGVDaGFuZ2UpPVwibG9hZERhdGEoKVwiXHJcbiAgICA+PC9ub3RpY2UtaWNvbj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyTm90aWZ5Q29tcG9uZW50IHtcclxuICBkYXRhOiBOb3RpY2VJdGVtW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn6YCa55+lJyxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIGVtcHR5VGV4dDogJ+S9oOW3suafpeeci+aJgOaciemAmuefpScsXHJcbiAgICAgIGVtcHR5SW1hZ2U6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd0FoeUlDaE9EenNvS0lPQkhjQmsuc3ZnJyxcclxuICAgICAgY2xlYXJUZXh0OiAn5riF56m66YCa55+lJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5raI5oGvJyxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIGVtcHR5VGV4dDogJ+aCqOW3suivu+WujOaJgOaciea2iOaBrycsXHJcbiAgICAgIGVtcHR5SW1hZ2U6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvc0F1SmVKelNLYlVtSGZCUVJ6bVouc3ZnJyxcclxuICAgICAgY2xlYXJUZXh0OiAn5riF56m65raI5oGvJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5b6F5YqeJyxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIGVtcHR5VGV4dDogJ+S9oOW3suWujOaIkOaJgOacieW+heWKnicsXHJcbiAgICAgIGVtcHR5SW1hZ2U6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSHNJc3hNWmlXS3JOVWF2UVVYcXguc3ZnJyxcclxuICAgICAgY2xlYXJUZXh0OiAn5riF56m65b6F5YqeJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb3VudCA9IDU7XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZU5vdGljZURhdGEobm90aWNlczogTm90aWNlSWNvbkxpc3RbXSk6IE5vdGljZUl0ZW1bXSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKCk7XHJcbiAgICBkYXRhLmZvckVhY2goaSA9PiAoaS5saXN0ID0gW10pKTtcclxuXHJcbiAgICBub3RpY2VzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7IC4uLml0ZW0gfTtcclxuICAgICAgLy8gaWYgKG5ld0l0ZW0uZGF0ZXRpbWUpXHJcbiAgICAgIC8vICBuZXdJdGVtLmRhdGV0aW1lID0gZGlzdGFuY2VJbldvcmRzVG9Ob3coaXRlbS5kYXRldGltZSEsIHtcclxuICAgICAgLy8gICAgbG9jYWxlOiAod2luZG93IGFzIGFueSkuX19sb2NhbGVfXyxcclxuICAgICAgLy8gIH0pO1xyXG4gICAgICBpZiAobmV3SXRlbS5leHRyYSAmJiBuZXdJdGVtLnN0YXR1cykge1xyXG4gICAgICAgIG5ld0l0ZW0uY29sb3IgPSB7XHJcbiAgICAgICAgICB0b2RvOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nOiAnYmx1ZScsXHJcbiAgICAgICAgICB1cmdlbnQ6ICdyZWQnLFxyXG4gICAgICAgICAgZG9pbmc6ICdnb2xkJyxcclxuICAgICAgICB9W25ld0l0ZW0uc3RhdHVzXTtcclxuICAgICAgfVxyXG4gICAgICBkYXRhLmZpbmQodyA9PiB3LnRpdGxlID09PSBuZXdJdGVtLnR5cGUpIS5saXN0LnB1c2gobmV3SXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgbG9hZERhdGEoKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkaW5nKSByZXR1cm47XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMudXBkYXRlTm90aWNlRGF0YShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDEnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RoWEFYZ2hiRXNCQ0NTRGloWnhZLnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+S9oOaUtuWIsOS6hiAxNCDku73mlrDlkajmiqUnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA5JyxcclxuICAgICAgICAgIHR5cGU6ICfpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDInLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL09LSlhEWHJta05zaEFNdnd0dmh1LnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+S9oOaOqOiNkOeahCDmm7Llpq7lpq4g5bey6YCa6L+H56ys5LiJ6L2u6Z2i6K+VJyxcclxuICAgICAgICAgIGRhdGV0aW1lOiAnMjAxNy0wOC0wOCcsXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDAzJyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9rSVNUZHZweVRBaHRHeHBvdk5XZC5wbmcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfov5nnp43mqKHmnb/lj6/ku6XljLrliIblpJrnp43pgJrnn6XnsbvlnosnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHJlYWQ6IHRydWUsXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA0JyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9HdnFCbktoRmdPYnZuU0drRHNqZS5wbmcnLFxyXG4gICAgICAgICAgdGl0bGU6ICflt6bkvqflm77moIfnlKjkuo7ljLrliIbkuI3lkIznmoTnsbvlnosnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHR5cGU6ICfpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDUnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RoWEFYZ2hiRXNCQ0NTRGloWnhZLnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+WGheWuueS4jeimgei2hei/h+S4pOihjOWtl++8jOi2heWHuuaXtuiHquWKqOaIquaWrScsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDcnLFxyXG4gICAgICAgICAgdHlwZTogJ+mAmuefpScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwNicsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZmNITVZOQ2pQT3NiVUdkRWR1dXYuanBlZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+absuS4veS4vSDor4TorrrkuobkvaAnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfmj4/ov7Dkv6Hmga/mj4/ov7Dkv6Hmga/mj4/ov7Dkv6Hmga8nLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHR5cGU6ICfmtojmga8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDcnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2ZjSE1WTkNqUE9zYlVHZEVkdXV2LmpwZWcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmnLHlgY/lj7Mg5Zue5aSN5LqG5L2gJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6L+Z56eN5qih5p2/55So5LqO5o+Q6YaS6LCB5LiO5L2g5Y+R55Sf5LqG5LqS5Yqo77yM5bem5L6n5pS+44CO6LCB44CP55qE5aS05YOPJyxcclxuICAgICAgICAgIGRhdGV0aW1lOiAnMjAxNy0wOC0wNycsXHJcbiAgICAgICAgICB0eXBlOiAn5raI5oGvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA4JyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9mY0hNVk5DalBPc2JVR2RFZHV1di5qcGVnJyxcclxuICAgICAgICAgIHRpdGxlOiAn5qCH6aKYJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6L+Z56eN5qih5p2/55So5LqO5o+Q6YaS6LCB5LiO5L2g5Y+R55Sf5LqG5LqS5Yqo77yM5bem5L6n5pS+44CO6LCB44CP55qE5aS05YOPJyxcclxuICAgICAgICAgIGRhdGV0aW1lOiAnMjAxNy0wOC0wNycsXHJcbiAgICAgICAgICB0eXBlOiAn5raI5oGvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA5JyxcclxuICAgICAgICAgIHRpdGxlOiAn5Lu75Yqh5ZCN56ewJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Lu75Yqh6ZyA6KaB5ZyoIDIwMTctMDEtMTIgMjA6MDAg5YmN5ZCv5YqoJyxcclxuICAgICAgICAgIGV4dHJhOiAn5pyq5byA5aeLJyxcclxuICAgICAgICAgIHN0YXR1czogJ3RvZG8nLFxyXG4gICAgICAgICAgdHlwZTogJ+W+heWKnicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAxMCcsXHJcbiAgICAgICAgICB0aXRsZTogJ+esrOS4ieaWuee0p+aApeS7o+eggeWPmOabtCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+WGoOmcluaPkOS6pOS6jiAyMDE3LTAxLTA277yM6ZyA5ZyoIDIwMTctMDEtMDcg5YmN5a6M5oiQ5Luj56CB5Y+Y5pu05Lu75YqhJyxcclxuICAgICAgICAgIGV4dHJhOiAn6ams5LiK5Yiw5pyfJyxcclxuICAgICAgICAgIHN0YXR1czogJ3VyZ2VudCcsXHJcbiAgICAgICAgICB0eXBlOiAn5b6F5YqeJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDExJyxcclxuICAgICAgICAgIHRpdGxlOiAn5L+h5oGv5a6J5YWo6ICD6K+VJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5oyH5rS+56u55bCU5LqOIDIwMTctMDEtMDkg5YmN5a6M5oiQ5pu05paw5bm25Y+R5biDJyxcclxuICAgICAgICAgIGV4dHJhOiAn5bey6ICX5pe2IDgg5aSpJyxcclxuICAgICAgICAgIHN0YXR1czogJ2RvaW5nJyxcclxuICAgICAgICAgIHR5cGU6ICflvoXlip4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMTInLFxyXG4gICAgICAgICAgdGl0bGU6ICdBQkNEIOeJiOacrOWPkeW4gycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+WGoOmcluaPkOS6pOS6jiAyMDE3LTAxLTA277yM6ZyA5ZyoIDIwMTctMDEtMDcg5YmN5a6M5oiQ5Luj56CB5Y+Y5pu05Lu75YqhJyxcclxuICAgICAgICAgIGV4dHJhOiAn6L+b6KGM5LitJyxcclxuICAgICAgICAgIHN0YXR1czogJ3Byb2Nlc3NpbmcnLFxyXG4gICAgICAgICAgdHlwZTogJ+W+heWKnicsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKHR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5tc2cuc3VjY2Vzcyhg5riF56m65LqGICR7dHlwZX1gKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChyZXM6IGFueSkge1xyXG4gICAgdGhpcy5tc2cuc3VjY2Vzcyhg54K55Ye75LqGICR7cmVzLnRpdGxlfSDnmoQgJHtyZXMuaXRlbS50aXRsZX1gKTtcclxuICB9XHJcbn1cclxuIl19