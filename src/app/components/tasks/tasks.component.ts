import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

interface Task {
  value: string;
  completed: boolean;
  date: number;
  isEdit: boolean;
  selected: boolean;
}

const initialTasks: Task[] = [
  {
    value: "Angular",
    completed: false,
    date: + new Date,
    isEdit: false,
    selected: false,
  },
  {
    value: "React",
    completed: false,
    date: + new Date + 1,
    isEdit: false,
    selected: false,
  },
  {
    value: "Typescript",
    completed: false,
    date: + new Date + 2,
    isEdit: false,
    selected: false,
  },
  {
    value: "Vue",
    completed: false,
    date: + new Date + 3,
    isEdit: false,
    selected: false,
  },
  {
    value: "Ajax",
    completed: false,
    date: + new Date + 4,
    isEdit: false,
    selected: false,
  },
  {
    value: "Cypress",
    completed: false,
    date: + new Date + 5,
    isEdit: false,
    selected: false,
  },
  {
    value: "MongoDB",
    completed: false,
    date: + new Date + 6,
    isEdit: false,
    selected: false,
  },
];
@Component({
  selector: 'fa-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  completedTasks: Task[];

  taskInput: string = "";
  editTaskInput: string;
  disableButtons:boolean;

  constructor() {
    this.tasks = [];
    this.completedTasks = [];
    this.disableButtons = false;
  }

  ngOnInit(): void {
    this.tasks = _.cloneDeep(initialTasks);
  }

  addTask () {
    this.tasks.push({
      value: this.taskInput,
      completed: false,
      date: + new Date,
      isEdit: false,
      selected: false
    });
    this.taskInput = '';
  }

  areTasksSelected () {
    let areTasksSelected: boolean = true;
    this.tasks.map((task) => {
      if (task.selected) {
        areTasksSelected = false;
      };
    });
    return areTasksSelected;
  }

  editTask (id: number) {
    this.tasks.map((task)=> {
      if (id === task.date) {
        task.isEdit = true;
        this.editTaskInput = task.value;
      }
      return task;
    });
    this.disableButtons = true;
  }

  applyEditedTask () {
    this.tasks.map((task)=> {
      if (task.isEdit) {
        task.value = this.editTaskInput;
        task.isEdit = false;
        this.editTaskInput = '';
      }
      return task;
    });
    this.disableButtons = false;
  }

  selectTask (id: number) {
    this.tasks.map((task)=> {
      if (id === task.date) task.selected = !task.selected;
      return task;
    });
  }

  completeTasks () {
    for (let i = 0; i < this.tasks.length; i++){
      if (this.tasks[i].selected) {
        this.completedTasks.push(this.tasks[i]);
        this.tasks.splice(i, 1);
        i--;
      }
    }
  }

  sortTasks (tasksKind: any) {
    let orderedTasks = _.sortBy(this[tasksKind], [(task) => task.value]);
    if (_.isEqual(this[tasksKind], orderedTasks)) this[tasksKind] = _.reverse(orderedTasks);
    else this[tasksKind] = orderedTasks;
  }
}
