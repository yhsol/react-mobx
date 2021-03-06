import { observable, action } from "mobx";

export class TodoItemModel {
  id: number = Date.now();

  @observable
  text: string = "";
  @observable
  isDone: boolean = false;

  constructor(text: string) {
    this.text = text;
  }

  @action
  toggleIsDone = () => {
    this.isDone = !this.isDone;
  };

  @action
  updateText = (text: string) => {
    this.text = text;
  };
}
