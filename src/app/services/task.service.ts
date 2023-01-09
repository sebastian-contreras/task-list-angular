import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
   return this.http.delete<Task>(url)
  }
  toggleTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    task.reminder = !task.reminder
    return this.http.put<Task>(url,task,httpOptions)
  }
}
