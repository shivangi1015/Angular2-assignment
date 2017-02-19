import {Injectable} from "@angular/core";
import {Task} from "./task";

@Injectable()

export class TaskService{
  static data:Task=null;
  static details:Task[]=[{
    date: '21/2/2017',
    title:'Birthday!!',
    description:'Bake a cake',
    priority: 'High'
  },
    {
      date: '22/2/2017',
      title:'Call Anjali',
      description:'Tell her about day',
      priority: 'Low'
    },
    {
      date: '23/2/2017',
      title:'Do Laundry',
      description:'Wash all ur clothes',
      priority: 'High'
    },
    {
      date: '25/2/2017',
      title:'Make an appointment',
      description:'Make an appointment with an orthopadetrian',
      priority: 'High'
    },
    {
      date: '26/2/2017',
      title:'Visit Mr. Grover',
      description:'Call him and ask about bank details',
      priority: 'High'
    }];

  setDetails(task:Task){
    TaskService.details.push(task);
  }
  store(task:Task){
    TaskService.data=task;
  }
}
