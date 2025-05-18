import { Component } from '@angular/core';
import { Task, TodosService } from '../service/data/todos.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-actions',
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './task-actions.component.html',
  styleUrl: './task-actions.component.css'
})
export class TaskActionsComponent {

  constructor(private aroute: ActivatedRoute,
    private router: Router,
    private todoservice: TodosService
  ) { }

  sessionVar = sessionStorage.getItem('userAuth')
  username = this.sessionVar !== null ? this.sessionVar : ''
  task: Task = {tid: 0, tdesc: '', target: new Date(), done: false}

  ngOnInit() {
    let id = this.aroute.snapshot.params['id']
    if(id != -1) {
      this.todoservice.getTask(this.username, id).subscribe({
        next: data => this.task = data, 
        error: error => console.log('Error occurred in getting the task!')
      })
    }
  }

  saveTask (id: number) {
    if(id == -1) {
      this.todoservice.createTask(this.username, this.task).subscribe({
        next: data => {
          console.log(data)
          this.router.navigate(['tasks'])
        }
      })
    } else {
      this.todoservice.updateTask(this.username, id, this.task).subscribe({
        next: data => {
          console.log(data)
          this.router.navigate(['tasks'])
        }
      })
    }
  }
}
