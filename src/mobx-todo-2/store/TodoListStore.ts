import { observable, action, computed } from "mobx";
import { TodoItemModel } from "../model/TodoItemModel";

export class TodoListStore {
  @observable
  list: TodoItemModel[] = [];

  constructor(todos: string[]) {
    todos.forEach(this.addTodo);
  }

  @action
  addTodo = (text: string) => {
    this.list.push(new TodoItemModel(text));
  };

  @action
  removeTodo = (todo: TodoItemModel) => {
    this.list.splice(this.list.indexOf(todo), 1);
  };

  //   @computed
  selectedTodo(id: number): TodoItemModel | undefined {
    return this.list.find((todo) => todo.id === id);
  }

  @computed
  get finishedTodos(): TodoItemModel[] {
    return this.list.filter((todo) => todo.isDone);
  }

  @computed
  get openTodos(): TodoItemModel[] {
    return this.list.filter((todo) => !todo.isDone);
  }
}
