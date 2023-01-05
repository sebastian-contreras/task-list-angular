import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task'


import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task = TASKS[0]
  faTimes = faTimes;

}
