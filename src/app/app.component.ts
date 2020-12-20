import { Component } from '@angular/core';
import {Todo} from "./todo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  todoValue!: string;
  list!: Todo[];

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if(this.todoValue !== ""){
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      //Add new item into the list
      this.list.push(newItem)
    }
    //clear the input box
    this.todoValue = "";
  }

  deleteItem(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
