import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import add from 'date-fns/add';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parse from 'date-fns/parse';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
/**
 * 菜单通知
 */
let HeaderNotifyComponent = class HeaderNotifyComponent {
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
};
HeaderNotifyComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [NzMessageService, NzI18nService])
], HeaderNotifyComponent);
export { HeaderNotifyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvbm90aWZ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFDL0IsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQ7O0dBRUc7QUFpQkgsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUEyQmhDLFlBQW9CLEdBQXFCLEVBQVUsTUFBcUI7UUFBcEQsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBMUJ4RSxTQUFJLEdBQWlCO1lBQ25CO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFVLEVBQUUscUVBQXFFO2dCQUNqRixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixVQUFV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cUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3RpY2VJY29uTGlzdCwgTm90aWNlSXRlbSB9IGZyb20gJ0BkZWxvbi9hYmMvbm90aWNlLWljb24nO1xyXG5pbXBvcnQgYWRkIGZyb20gJ2RhdGUtZm5zL2FkZCc7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3cnO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XHJcblxyXG4vKipcclxuICog6I+c5Y2V6YCa55+lXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1ub3RpZnknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bm90aWNlLWljb25cclxuICAgICAgW2RhdGFdPVwiZGF0YVwiXHJcbiAgICAgIFtjb3VudF09XCJjb3VudFwiXHJcbiAgICAgIFtsb2FkaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgICBidG5DbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCJcclxuICAgICAgYnRuSWNvbkNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0taWNvblwiXHJcbiAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudClcIlxyXG4gICAgICAoY2xlYXIpPVwiY2xlYXIoJGV2ZW50KVwiXHJcbiAgICAgIChwb3BvdmVyVmlzaWJsZUNoYW5nZSk9XCJsb2FkRGF0YSgpXCJcclxuICAgID48L25vdGljZS1pY29uPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJOb3RpZnlDb21wb25lbnQge1xyXG4gIGRhdGE6IE5vdGljZUl0ZW1bXSA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfpgJrnn6UnLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgZW1wdHlUZXh0OiAn5L2g5bey5p+l55yL5omA5pyJ6YCa55+lJyxcclxuICAgICAgZW1wdHlJbWFnZTogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC93QWh5SUNoT0R6c29LSU9CSGNCay5zdmcnLFxyXG4gICAgICBjbGVhclRleHQ6ICfmuIXnqbrpgJrnn6UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfmtojmga8nLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgZW1wdHlUZXh0OiAn5oKo5bey6K+75a6M5omA5pyJ5raI5oGvJyxcclxuICAgICAgZW1wdHlJbWFnZTogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9zQXVKZUp6U0tiVW1IZkJRUnptWi5zdmcnLFxyXG4gICAgICBjbGVhclRleHQ6ICfmuIXnqbrmtojmga8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICflvoXlip4nLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgZW1wdHlUZXh0OiAn5L2g5bey5a6M5oiQ5omA5pyJ5b6F5YqeJyxcclxuICAgICAgZW1wdHlJbWFnZTogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9Ic0lzeE1aaVdLck5VYXZRVVhxeC5zdmcnLFxyXG4gICAgICBjbGVhclRleHQ6ICfmuIXnqbrlvoXlip4nLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvdW50ID0gNTtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXNnOiBOek1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIG56STE4bjogTnpJMThuU2VydmljZSkge31cclxuXHJcbiAgdXBkYXRlTm90aWNlRGF0YShub3RpY2VzOiBOb3RpY2VJY29uTGlzdFtdKTogTm90aWNlSXRlbVtdIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoKTtcclxuICAgIGRhdGEuZm9yRWFjaCgoaSkgPT4gKGkubGlzdCA9IFtdKSk7XHJcblxyXG4gICAgbm90aWNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7IC4uLml0ZW0gfTtcclxuICAgICAgaWYgKHR5cGVvZiBuZXdJdGVtLmRhdGV0aW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG5ld0l0ZW0uZGF0ZXRpbWUgPSBwYXJzZShuZXdJdGVtLmRhdGV0aW1lLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdJdGVtLmRhdGV0aW1lKSB7XHJcbiAgICAgICAgbmV3SXRlbS5kYXRldGltZSA9IGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3SXRlbS5kYXRldGltZSBhcyBEYXRlLCB7IGxvY2FsZTogdGhpcy5uekkxOG4uZ2V0RGF0ZUxvY2FsZSgpIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdJdGVtLmV4dHJhICYmIG5ld0l0ZW0uc3RhdHVzKSB7XHJcbiAgICAgICAgbmV3SXRlbS5jb2xvciA9ICh7XHJcbiAgICAgICAgICB0b2RvOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nOiAnYmx1ZScsXHJcbiAgICAgICAgICB1cmdlbnQ6ICdyZWQnLFxyXG4gICAgICAgICAgZG9pbmc6ICdnb2xkJyxcclxuICAgICAgICB9IGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0pW25ld0l0ZW0uc3RhdHVzXTtcclxuICAgICAgfVxyXG4gICAgICBkYXRhLmZpbmQoKHcpID0+IHcudGl0bGUgPT09IG5ld0l0ZW0udHlwZSkubGlzdC5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGxvYWREYXRhKCkge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMudXBkYXRlTm90aWNlRGF0YShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDEnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RoWEFYZ2hiRXNCQ0NTRGloWnhZLnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+S9oOaUtuWIsOS6hiAxNCDku73mlrDlkajmiqUnLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6IGFkZChub3csIHsgZGF5czogMTAgfSksXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDAyJyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9PS0pYRFhybWtOc2hBTXZ3dHZodS5wbmcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfkvaDmjqjojZDnmoQg5puy5aau5aauIOW3sumAmui/h+esrOS4iei9rumdouivlScsXHJcbiAgICAgICAgICBkYXRldGltZTogYWRkKG5vdywgeyBkYXlzOiAtMyB9KSxcclxuICAgICAgICAgIHR5cGU6ICfpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDMnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2tJU1RkdnB5VEFodEd4cG92TldkLnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+i/meenjeaooeadv+WPr+S7peWMuuWIhuWkmuenjemAmuefpeexu+WeiycsXHJcbiAgICAgICAgICBkYXRldGltZTogYWRkKG5vdywgeyBtb250aHM6IC0zIH0pLFxyXG4gICAgICAgICAgcmVhZDogdHJ1ZSxcclxuICAgICAgICAgIHR5cGU6ICfpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDQnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0d2cUJuS2hGZ09idm5TR2tEc2plLnBuZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+W3puS+p+Wbvuagh+eUqOS6juWMuuWIhuS4jeWQjOeahOexu+WeiycsXHJcbiAgICAgICAgICBkYXRldGltZTogYWRkKG5vdywgeyB5ZWFyczogLTEgfSksXHJcbiAgICAgICAgICB0eXBlOiAn6YCa55+lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA1JyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9UaFhBWGdoYkVzQkNDU0RpaFp4WS5wbmcnLFxyXG4gICAgICAgICAgdGl0bGU6ICflhoXlrrnkuI3opoHotoXov4fkuKTooYzlrZfvvIzotoXlh7rml7boh6rliqjmiKrmlq0nLFxyXG4gICAgICAgICAgZGF0ZXRpbWU6ICcyMDE3LTA4LTA3JyxcclxuICAgICAgICAgIHR5cGU6ICfpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMDYnLFxyXG4gICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL2ZjSE1WTkNqUE9zYlVHZEVkdXV2LmpwZWcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmm7LkuL3kuL0g6K+E6K665LqG5L2gJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5o+P6L+w5L+h5oGv5o+P6L+w5L+h5oGv5o+P6L+w5L+h5oGvJyxcclxuICAgICAgICAgIGRhdGV0aW1lOiAnMjAxNy0wOC0wNycsXHJcbiAgICAgICAgICB0eXBlOiAn5raI5oGvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDA3JyxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9mY0hNVk5DalBPc2JVR2RFZHV1di5qcGVnJyxcclxuICAgICAgICAgIHRpdGxlOiAn5pyx5YGP5Y+zIOWbnuWkjeS6huS9oCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+i/meenjeaooeadv+eUqOS6juaPkOmGkuiwgeS4juS9oOWPkeeUn+S6huS6kuWKqO+8jOW3puS+p+aUvuOAjuiwgeOAj+eahOWktOWDjycsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDcnLFxyXG4gICAgICAgICAgdHlwZTogJ+a2iOaBrycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwOCcsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvZmNITVZOQ2pQT3NiVUdkRWR1dXYuanBlZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+agh+mimCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+i/meenjeaooeadv+eUqOS6juaPkOmGkuiwgeS4juS9oOWPkeeUn+S6huS6kuWKqO+8jOW3puS+p+aUvuOAjuiwgeOAj+eahOWktOWDjycsXHJcbiAgICAgICAgICBkYXRldGltZTogJzIwMTctMDgtMDcnLFxyXG4gICAgICAgICAgdHlwZTogJ+a2iOaBrycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAwOScsXHJcbiAgICAgICAgICB0aXRsZTogJ+S7u+WKoeWQjeensCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+S7u+WKoemcgOimgeWcqCAyMDE3LTAxLTEyIDIwOjAwIOWJjeWQr+WKqCcsXHJcbiAgICAgICAgICBleHRyYTogJ+acquW8gOWniycsXHJcbiAgICAgICAgICBzdGF0dXM6ICd0b2RvJyxcclxuICAgICAgICAgIHR5cGU6ICflvoXlip4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcwMDAwMDAwMTAnLFxyXG4gICAgICAgICAgdGl0bGU6ICfnrKzkuInmlrnntKfmgKXku6PnoIHlj5jmm7QnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICflhqDpnJbmj5DkuqTkuo4gMjAxNy0wMS0wNu+8jOmcgOWcqCAyMDE3LTAxLTA3IOWJjeWujOaIkOS7o+eggeWPmOabtOS7u+WKoScsXHJcbiAgICAgICAgICBleHRyYTogJ+mprOS4iuWIsOacnycsXHJcbiAgICAgICAgICBzdGF0dXM6ICd1cmdlbnQnLFxyXG4gICAgICAgICAgdHlwZTogJ+W+heWKnicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzAwMDAwMDAxMScsXHJcbiAgICAgICAgICB0aXRsZTogJ+S/oeaBr+WuieWFqOiAg+ivlScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+aMh+a0vuerueWwlOS6jiAyMDE3LTAxLTA5IOWJjeWujOaIkOabtOaWsOW5tuWPkeW4gycsXHJcbiAgICAgICAgICBleHRyYTogJ+W3suiAl+aXtiA4IOWkqScsXHJcbiAgICAgICAgICBzdGF0dXM6ICdkb2luZycsXHJcbiAgICAgICAgICB0eXBlOiAn5b6F5YqeJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMDAwMDAwMDEyJyxcclxuICAgICAgICAgIHRpdGxlOiAnQUJDRCDniYjmnKzlj5HluIMnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICflhqDpnJbmj5DkuqTkuo4gMjAxNy0wMS0wNu+8jOmcgOWcqCAyMDE3LTAxLTA3IOWJjeWujOaIkOS7o+eggeWPmOabtOS7u+WKoScsXHJcbiAgICAgICAgICBleHRyYTogJ+i/m+ihjOS4rScsXHJcbiAgICAgICAgICBzdGF0dXM6ICdwcm9jZXNzaW5nJyxcclxuICAgICAgICAgIHR5cGU6ICflvoXlip4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1zZy5zdWNjZXNzKGDmuIXnqbrkuoYgJHt0eXBlfWApO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KHJlczogYW55KSB7XHJcbiAgICB0aGlzLm1zZy5zdWNjZXNzKGDngrnlh7vkuoYgJHtyZXMudGl0bGV9IOeahCAke3Jlcy5pdGVtLnRpdGxlfWApO1xyXG4gIH1cclxufVxyXG4iXX0=