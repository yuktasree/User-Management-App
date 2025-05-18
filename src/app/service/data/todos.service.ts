import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  tid: number;
  tdesc: string;
  target: Date;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(private http: HttpClient) { }

  getTasks(username: string): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:8080/users/${username}/tasks`);
  }

  getTask(username: string, id: number) {
    return this.http.get<Task>(`http://localhost:8080/users/${username}/tasks/${id}`)
  }

  deleteTask (username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/tasks/${id}`);
  }

  updateTask (username: string, id: number, task: Task) {
    return this.http.put(`http://localhost:8080/users/${username}/tasks/${id}`,
                          task);
  }

  createTask (username: string, task: Task) {
    return this.http.post(`http://localhost:8080/users/${username}/tasks`,
                          task);
  }

}
