import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  onSubmit(){
    if(this.text.length == 0){
      alert("Inserte una tarea")
    }
    const {text,day,reminder} = this
    const newTask = {text,day,reminder}
    this.onAddTask.emit(newTask)
  }
}
