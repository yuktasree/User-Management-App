import { Component } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Task, TodosService } from '../service/data/todos.service';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, RouterLink, DatePipe, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  tasks: Task[] = []
  sessionVar = sessionStorage.getItem("userAuth")
  username = this.sessionVar ? this.sessionVar : ''
  delMsg: string = ''

  constructor(private router: Router,
    private todoservice: TodosService) { }

  refreshTasks() {
    this.todoservice.getTasks(this.username).subscribe({
      next: data => {this.tasks = data,
      console.log(data)
      },
      error: error => console.log("Error: " + error)
    });
  }

  ngOnInit() {
    this.refreshTasks();
  }

  deleteTask(id: number) {
    this.todoservice.deleteTask(this.username, id).subscribe({
      next: data => {
        console.log(data),
        this.refreshTasks()
        this.delMsg = `Task with id ${id} is successfully deleted`
      },
      error: error => console.log(error)
    });
  }

  updateTask(id: number) {
    this.todoservice.getTask(this.username, id)
    this.router.navigate(['task-actions', id]);
  }

  createTask() {
    this.router.navigate(['task-actions', -1])
  }

}
