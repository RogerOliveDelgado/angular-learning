import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTask: NewTaskData = {
    title: '',
    summary: '',
    dueDate: '',
  };
  enteredTask1 = signal(''); // Alternative way to deal with two-way-binding on angular

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTask.title,
      summary: this.enteredTask.summary,
      dueDate: this.enteredTask.dueDate,
    });
  }
}
