import { Component, inject } from '@angular/core';
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
      @if (query.isFetching()) {
      <div>资料更新中</div>
      } @switch (query.status()) { @case ('pending') {
      <div>资料加载中</div>
      } @case ('error') {
      <div>资料加载错误: {{ query.error() }}</div>
      } @case ('success') {
      <ul>
        @for (todo of query.data(); track todo.title) {
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

  query = injectQuery(() => ({
    queryKey: ['todos'],
    queryFn: () => this.todoService.getTodos(),
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
