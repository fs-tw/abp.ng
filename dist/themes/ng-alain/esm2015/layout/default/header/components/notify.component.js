import { ChangeDetectionStrategy, Component } from '@angular/core';
import add from 'date-fns/add';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parse from 'date-fns/parse';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/message";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@delon/abc/notice-icon";
/**
 * 菜单通知
 */
export class HeaderNotifyComponent {
    constructor(msg, nzI18n) {
        this.msg = msg;
        this.nzI18n = nzI18n;
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
    updateNoticeData(notices) {
        const data = this.data.slice();
        data.forEach((i) => (i.list = []));
        notices.forEach((item) => {
            const newItem = Object.assign({}, item);
            if (typeof newItem.datetime === 'string') {
                newItem.datetime = parse(newItem.datetime, 'yyyy-MM-dd', new Date());
            }
            if (newItem.datetime) {
                newItem.datetime = formatDistanceToNow(newItem.datetime, { locale: this.nzI18n.getDateLocale() });
            }
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find((w) => w.title === newItem.type).list.push(newItem);
        });
        return data;
    }
    loadData() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        setTimeout(() => {
            const now = new Date();
            this.data = this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: add(now, { days: 10 }),
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: add(now, { days: -3 }),
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: add(now, { months: -3 }),
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: add(now, { years: -1 }),
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
        }, 500);
    }
    clear(type) {
        this.msg.success(`清空了 ${type}`);
    }
    select(res) {
        this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    }
}
HeaderNotifyComponent.ɵfac = function HeaderNotifyComponent_Factory(t) { return new (t || HeaderNotifyComponent)(i0.ɵɵdirectiveInject(i1.NzMessageService), i0.ɵɵdirectiveInject(i2.NzI18nService)); };
HeaderNotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderNotifyComponent, selectors: [["header-notify"]], decls: 1, vars: 3, consts: [["btnClass", "alain-default__nav-item", "btnIconClass", "alain-default__nav-item-icon", 3, "data", "count", "loading", "select", "clear", "popoverVisibleChange"]], template: function HeaderNotifyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "notice-icon", 0);
        i0.ɵɵlistener("select", function HeaderNotifyComponent_Template_notice_icon_select_0_listener($event) { return ctx.select($event); })("clear", function HeaderNotifyComponent_Template_notice_icon_clear_0_listener($event) { return ctx.clear($event); })("popoverVisibleChange", function HeaderNotifyComponent_Template_notice_icon_popoverVisibleChange_0_listener() { return ctx.loadData(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("data", ctx.data)("count", ctx.count)("loading", ctx.loading);
    } }, directives: [i3.NoticeIconComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderNotifyComponent, [{
        type: Component,
        args: [{
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
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.NzMessageService }, { type: i2.NzI18nService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvbm90aWZ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQztBQUMvQixPQUFPLG1CQUFtQixNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sS0FBSyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFekQ7O0dBRUc7QUFpQkgsTUFBTSxPQUFPLHFCQUFxQjtJQTJCaEMsWUFBb0IsR0FBcUIsRUFBVSxNQUFxQjtRQUFwRCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7UUExQnhFLFNBQUksR0FBaUI7WUFDbkI7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLFVBQVU7Z0JBQ3JCLFVBQVUsRUFBRSxxRUFBcUU7Z0JBQ2pGLFNBQVMsRUFBRSxNQUFNO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLFVBQVU7Z0JBQ3JCLFVBQVUsRUFBRSxxRUFBcUU7Z0JBQ2pGLFNBQVMsRUFBRSxNQUFNO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLFVBQVU7Z0JBQ3JCLFVBQVUsRUFBRSxxRUFB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RUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTm90aWNlSWNvbkxpc3QsIE5vdGljZUl0ZW0gfSBmcm9tICdAZGVsb24vYWJjL25vdGljZS1pY29uJztcclxuaW1wb3J0IGFkZCBmcm9tICdkYXRlLWZucy9hZGQnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93JztcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5cclxuLyoqXHJcbiAqIOiPnOWNlemAmuefpVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItbm90aWZ5JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5vdGljZS1pY29uXHJcbiAgICAgIFtkYXRhXT1cImRhdGFcIlxyXG4gICAgICBbY291bnRdPVwiY291bnRcIlxyXG4gICAgICBbbG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgICAgYnRuQ2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiXHJcbiAgICAgIGJ0bkljb25DbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtLWljb25cIlxyXG4gICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgKGNsZWFyKT1cImNsZWFyKCRldmVudClcIlxyXG4gICAgICAocG9wb3ZlclZpc2libGVDaGFuZ2UpPVwibG9hZERhdGEoKVwiXHJcbiAgICA+PC9ub3RpY2UtaWNvbj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyTm90aWZ5Q29tcG9uZW50IHtcclxuICBkYXRhOiBOb3RpY2VJdGVtW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn6YCa55+lJyxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIGVtcHR5VGV4dDogJ+S9oOW3suafpeeci+aJgOaciemAmuefpScsXHJcbiAgICAgIGVtcHR5SW1hZ2U6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd0FoeUlDaE9EenNvS0lPQkhjQmsuc3ZnJyxcclxuICAgICAgY2xlYXJUZXh0OiAn5riF56m66YCa55+lJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5raI5oGvJyxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIGVtcHR5VGV4dDogJ+aCqOW3suivu+WujOaJgOaciea2iOaBrycsXHJcbiAgICAgIGVtcHR5SW1hZ2U6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvc0F1SmVKelNLYlVtSGZCUVJ6bVouc3ZnJyxcclxuICAgICAgY2xlYXJUZXh0OiAn5riF56m65raI5oGvJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5b6F5YqeJyxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIGVtcHR5VGV4dDogJ+S9oOW3suWujOaIkOaJgOacieW+heWKnicsXHJcbiAgICAgIGVtcHR5SW1hZ2U6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSHNJc3hNWmlXS3JOVWF2UVVYcXguc3ZnJyxcclxuICAgICAgY2xlYXJUZXh0OiAn5riF56m65b6F5YqeJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb3VudCA9IDU7XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBuekkxOG46IE56STE4blNlcnZpY2UpIHt9XHJcblxyXG4gIHVwZGF0ZU5vdGljZURhdGEobm90aWNlczogTm90aWNlSWNvbkxpc3RbXSk6IE5vdGljZUl0ZW1bXSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKCk7XHJcbiAgICBkYXRhLmZvckVhY2goKGkpID0+IChpLmxpc3QgPSBbXSkpO1xyXG5cclxuICAgIG5vdGljZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0geyAuLi5pdGVtIH07XHJcbiAgICAgIGlmICh0eXBlb2YgbmV3SXRlbS5kYXRldGltZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBuZXdJdGVtLmRhdGV0aW1lID0gcGFyc2UobmV3SXRlbS5kYXRldGltZSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3SXRlbS5kYXRldGltZSkge1xyXG4gICAgICAgIG5ld0l0ZW0uZGF0ZXRpbWUgPSBmb3JtYXREaXN0YW5jZVRvTm93KG5ld0l0ZW0uZGF0ZXRpbWUgYXMgRGF0ZSwgeyBsb2NhbGU6IHRoaXMubnpJMThuLmdldERhdGVMb2NhbGUoKSB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3SXRlbS5leHRyYSAmJiBuZXdJdGVtLnN0YXR1cykge1xyXG4gICAgICAgIG5ld0l0ZW0uY29sb3IgPSAoe1xyXG4gICAgICAgICAgdG9kbzogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgcHJvY2Vzc2luZzogJ2JsdWUnLFxyXG4gICAgICAgICAgdXJnZW50OiAncmVkJyxcclxuICAgICAgICAgIGRvaW5nOiAnZ29sZCcsXHJcbiAgICAgICAgfSBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9KVtuZXdJdGVtLnN0YXR1c107XHJcbiAgICAgIH1cclxuICAgICAgZGF0YS5maW5kKCh3KSA9PiB3LnRpdGxlID09PSBuZXdJdGVtLnR5cGUpLmxpc3QucHVzaChuZXdJdGVtKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBsb2FkRGF0YSgpIHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLnVwZGF0ZU5vdGljZURhdGEoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDAxJyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9UaFhBWGdoYkVzQkNDU0RpaFp4WS5wbmcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfkvaDmlLbliLDkuoYgMTQg5Lu95paw5ZGo5oqlJyxcclxuICAgICAgICAgIGRhdGV0aW1lOiBhZGQobm93LCB7IGRheXM6IDEwIH0pLFxyXG4gICAgICAgICAgdHlwZTogJ+mAmuefpScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwMicsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvT0tKWERYcm1rTnNoQU12d3R2aHUucG5nJyxcclxuICAgICAgICAgIHRpdGxlOiAn5L2g5o6o6I2Q55qEIOabsuWmruWmriDlt7LpgJrov4fnrKzkuInova7pnaLor5UnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6IGFkZChub3csIHsgZGF5czogLTMgfSksXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDAzJyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9rSVNUZHZweVRBaHRHeHBvdk5XZC5wbmcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfov5nnp43mqKHmnb/lj6/ku6XljLrliIblpJrnp43pgJrnn6XnsbvlnosnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6IGFkZChub3csIHsgbW9udGhzOiAtMyB9KSxcclxuICAgICAgICAgIHJlYWQ6IHRydWUsXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA0JyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9HdnFCbktoRmdPYnZuU0drRHNqZS5wbmcnLFxyXG4gICAgICAgICAgdGl0bGU6ICflt6bkvqflm77moIfnlKjkuo7ljLrliIbkuI3lkIznmoTnsbvlnosnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6IGFkZChub3csIHsgeWVhcnM6IC0xIH0pLFxyXG4gICAgICAgICAgdHlwZTogJ+mAmuefpScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwNScsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvVGhYQVhnaGJFc0JDQ1NEaWhaeFkucG5nJyxcclxuICAgICAgICAgIHRpdGxlOiAn5YaF5a655LiN6KaB6LaF6L+H5Lik6KGM5a2X77yM6LaF5Ye65pe26Ieq5Yqo5oiq5patJyxcclxuICAgICAgICAgIGRhdGV0aW1lOiAnMjAxNy0wOC0wNycsXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA2JyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9mY0hNVk5DalBPc2JVR2RFZHV1di5qcGVnJyxcclxuICAgICAgICAgIHRpdGxlOiAn5puy5Li95Li9IOivhOiuuuS6huS9oCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+aPj+i/sOS/oeaBr+aPj+i/sOS/oeaBr+aPj+i/sOS/oeaBrycsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDcnLFxyXG4gICAgICAgICAgdHlwZTogJ+a2iOaBrycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwNycsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZmNITVZOQ2pQT3NiVUdkRWR1dXYuanBlZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+acseWBj+WPsyDlm57lpI3kuobkvaAnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfov5nnp43mqKHmnb/nlKjkuo7mj5DphpLosIHkuI7kvaDlj5HnlJ/kuobkupLliqjvvIzlt6bkvqfmlL7jgI7osIHjgI/nmoTlpLTlg48nLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHR5cGU6ICfmtojmga8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDgnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2ZjSE1WTkNqUE9zYlVHZEVkdXV2LmpwZWcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmoIfpopgnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfov5nnp43mqKHmnb/nlKjkuo7mj5DphpLosIHkuI7kvaDlj5HnlJ/kuobkupLliqjvvIzlt6bkvqfmlL7jgI7osIHjgI/nmoTlpLTlg48nLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHR5cGU6ICfmtojmga8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDknLFxyXG4gICAgICAgICAgdGl0bGU6ICfku7vliqHlkI3np7AnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfku7vliqHpnIDopoHlnKggMjAxNy0wMS0xMiAyMDowMCDliY3lkK/liqgnLFxyXG4gICAgICAgICAgZXh0cmE6ICfmnKrlvIDlp4snLFxyXG4gICAgICAgICAgc3RhdHVzOiAndG9kbycsXHJcbiAgICAgICAgICB0eXBlOiAn5b6F5YqeJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDEwJyxcclxuICAgICAgICAgIHRpdGxlOiAn56ys5LiJ5pa557Sn5oCl5Luj56CB5Y+Y5pu0JyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Yag6ZyW5o+Q5Lqk5LqOIDIwMTctMDEtMDbvvIzpnIDlnKggMjAxNy0wMS0wNyDliY3lrozmiJDku6PnoIHlj5jmm7Tku7vliqEnLFxyXG4gICAgICAgICAgZXh0cmE6ICfpqazkuIrliLDmnJ8nLFxyXG4gICAgICAgICAgc3RhdHVzOiAndXJnZW50JyxcclxuICAgICAgICAgIHR5cGU6ICflvoXlip4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMTEnLFxyXG4gICAgICAgICAgdGl0bGU6ICfkv6Hmga/lronlhajogIPor5UnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfmjIfmtL7nq7nlsJTkuo4gMjAxNy0wMS0wOSDliY3lrozmiJDmm7TmlrDlubblj5HluIMnLFxyXG4gICAgICAgICAgZXh0cmE6ICflt7LogJfml7YgOCDlpKknLFxyXG4gICAgICAgICAgc3RhdHVzOiAnZG9pbmcnLFxyXG4gICAgICAgICAgdHlwZTogJ+W+heWKnicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAxMicsXHJcbiAgICAgICAgICB0aXRsZTogJ0FCQ0Qg54mI5pys5Y+R5biDJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Yag6ZyW5o+Q5Lqk5LqOIDIwMTctMDEtMDbvvIzpnIDlnKggMjAxNy0wMS0wNyDliY3lrozmiJDku6PnoIHlj5jmm7Tku7vliqEnLFxyXG4gICAgICAgICAgZXh0cmE6ICfov5vooYzkuK0nLFxyXG4gICAgICAgICAgc3RhdHVzOiAncHJvY2Vzc2luZycsXHJcbiAgICAgICAgICB0eXBlOiAn5b6F5YqeJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKHR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5tc2cuc3VjY2Vzcyhg5riF56m65LqGICR7dHlwZX1gKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChyZXM6IGFueSkge1xyXG4gICAgdGhpcy5tc2cuc3VjY2Vzcyhg54K55Ye75LqGICR7cmVzLnRpdGxlfSDnmoQgJHtyZXMuaXRlbS50aXRsZX1gKTtcclxuICB9XHJcbn1cclxuIl19