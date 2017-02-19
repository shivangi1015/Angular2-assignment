import {Routes} from '@angular/router'
import {ShowTaskComponent} from "./Show Task/show.component";
import {CreateTaskComponent} from "./Create Task/create.component";



export const routes: Routes = [ {
  path: 'show',
  component: ShowTaskComponent
}, {
  path: 'create',
  component: CreateTaskComponent
}];
