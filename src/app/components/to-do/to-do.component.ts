import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule,CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  imageUrl:string = "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";
  Title:string ="To Do List Application";
  tasks:string[] = [];
  newTask:string = '';
  isAvalible:boolean = false;
  constructor(){

  }

  addTask(){
    if(!this.isTaskEmpty()) this.tasks.push(this.newTask);
    this.resetNewTask();
    this.isTableAvalible();
  }

  isTaskEmpty() {
    return this.newTask.trim() == '';
  }

  resetNewTask(){
    return this.newTask = '';
  }

  isTableAvalible(){
    return this.isAvalible = true;
  }

  editTask(index:number , newTaskEdit:string ):string|void{
    const trimmedTask = newTaskEdit.trim();
    if( trimmedTask !==null){
      this.tasks[index] = trimmedTask;
    }else{
      newTaskEdit = this.tasks[index];
      return this.newTask = newTaskEdit
    }
  }

  removeTask(index:number){
    this.tasks.splice(index,1);
    this.isAvalible = this.tasks.length>0;
  }


}
