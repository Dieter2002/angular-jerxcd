import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <button (click)="test()" ></button>

      <strong>Hire this hero today!</strong>
    </div>
  `,
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  test() {
    this.addNewItem('geld');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
