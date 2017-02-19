import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">TODO LIST</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a routerLink="/show" routerLinkActive="active">Show Tasks</a></li>
      <li><a routerLink="/create" routerLinkActive="active">Create Tasks</a></li>
    </ul>
  </div>
</nav>

    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
