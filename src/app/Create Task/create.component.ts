import {Component} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task";

@Component({
  selector: 'my-create',
  template: `<br> <br>
<div class="container">
<h2><strong>Add a task</strong></h2>
<form (ngSubmit)="submit(date.value,title.value,description.value,priority.value)">
  <label>Date: </label><input type="date" required class="form-control" value="{{data.date}}" #date><br>
  <label>Title: </label><input type="text" required class="form-control" #title value="{{data.title}}"><br>
  <label>Description: </label><input type="text" required class="form-control" #description value="{{data.description}}"><br>
  <label>Priority: </label><select #priority   >
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select><br><br>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
</div>`,

  styles:[]
  ,
  providers: [TaskService]
})
export class CreateTaskComponent {
  details: Task[];
  data: Task;
  constructor(private service: TaskService) {
    this.details = TaskService.details;
  }

  submit(date: string, title: string, description: string, priority: string) {
    let service = new TaskService()
    let task = new Task()
    task.date = date;
    task.title = title;
    task.description = description;
    task.priority = priority;
    service.setDetails(task);
  }
  public ngOnInit() {
    if (TaskService.data != null) {
      this.data = TaskService.data;
    }else {
      this.data=new Task()
    }
  }
}
