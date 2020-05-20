import { GetService } from './../shared/get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private get: GetService) {}
  todoList = [];
  statId;
  ngOnInit(): void {
    this.getTodo();
  }
  getTodo() {
    var id = 1;
    this.get.getTodos(id).subscribe(
      (res) => {
        console.log(res);
        for (var i in res) this.todoList.push(res[i]);
        this.statId = this.todoList.length - 1;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  createTask(name) {
    var list;
    this.statId = this.statId + 1;
    console.log(this.statId);
    list = this.todoList;
    this.todoList = [];
    this.todoList.push({
      userId: 1,
      id: this.statId,
      title: name,
      completed: false,
    });
    for (var i in list) {
      this.todoList.push(list[i]);
    }
    console.log(name);
  }
  markComplete(id) {
    for (var i in this.todoList)
      if (id === this.todoList[i].id) this.todoList[i].completed = true;
  }
  markUncomplete(id) {
    for (var i in this.todoList)
      if (id === this.todoList[i].id) this.todoList[i].completed = false;
  }
}
