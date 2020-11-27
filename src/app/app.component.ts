import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Organizador de Tareas';
  item = '';
  tasks = [];

  addTask(item: string) {
    this.tasks.push(item);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
