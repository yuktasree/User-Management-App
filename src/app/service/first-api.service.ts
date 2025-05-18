import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirstApiService {

  constructor(private http: HttpClient) { }

  sayHelloUser(name: string): Observable<string> {
    return this.http.get(`http://localhost:8080/tasks/${name}`,  
      {responseType: 'text'}
    )};

}
