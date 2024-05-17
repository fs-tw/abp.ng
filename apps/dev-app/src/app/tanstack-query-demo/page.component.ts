import { Component, inject, signal } from '@angular/core';
import { TodoService } from './todo.service';
import { type Todo } from './types';

import {
  injectMutation,
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';

@Component({
  standalone: true,
  template: `
    <div>
      <button (click)="onAddTodo()" [disabled]="mutation.isPending()">
        Add Todo @if (mutation.isPending()) { 添加中... } @else { 添加 }
      </button>
      @if (todoListQuery.isFetching()) {
      <div>资料更新中</div>
      } @switch (todoListQuery.status()) { @case ('pending') {
      <div>资料加载中</div>
      } @case ('error') {
      <div>资料加载错误: {{ todoListQuery.error() }}</div>
      } @case ('success') {
      <ul>
        @for (todo of todoListQuery.data(); track todo.title) {
        <li>{{ todo.title }}</li>
        }
      </ul>
      }}
    </div>
  `,
})
export class PageComponent {
  todoService = inject(TodoService);
  queryClient = injectQueryClient();

  todoListQuery = injectQuery(() => ({
    queryKey: ['todos'],
    queryFn: () => this.todoService.getTodos(),
  }));

  // 用户通过UI选择todo
  todoIdSignal = signal<string | undefined>(undefined);

  todoQuery = injectQuery(() => ({
    // 获取todo的方法需要id，这里把这个值传递给queryKey
    queryKey: ['todo', this.todoIdSignal()],
    // 使用queryKey中的id，去呼接口
    queryFn: ({ queryKey: [_, todoId] }) => {
      if (!todoId) {
        // 如果用户没有选择todo，我们就不需要去呼接口，这里的写法主要是为了满足ts的类型检查
        throw new Error('todoId is required');
      }
      return this.todoService.getTodoById(todoId);
    },
    // 确保只有当用户选择了todo时，才会去呼接口
    enabled: !!this.todoIdSignal(),
  }));

  mutation = injectMutation((client) => ({
    mutationFn: (todo: Todo) => this.todoService.addTodo(todo),
    onSuccess: () => {
      // Invalidate and refetch by using the client directly
      client.invalidateQueries({ queryKey: ['todos'] });

      // OR use the queryClient that is injected into the component
      // this.queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  }));

  onAddTodo() {
    this.mutation.mutate({
      id: Date.now().toString(),
      title: 'Do Laundry',
    });
  }
}
