import { Component, Input } from '@angular/core';

import { AbstractArrayFieldComponent } from '../abstract-array-field';
import { AddFieldDropdownComponent } from '../add-field-dropdown';
import { ObjectFieldComponent } from '../object-field';
import { ObjectArrayFieldComponent } from '../object-array-field';
import { PrimitiveArrayFieldComponent } from '../primitive-array-field';
import { PrimitiveFieldComponent } from '../primitive-field';

import { MapToIterablePipe } from '../shared/pipes';

import { EmptyValueService, JsonUtilService } from '../shared/services';

@Component({
  selector: 'array-in-array-field',
  directives: [
    AddFieldDropdownComponent,
    ObjectFieldComponent,
    ObjectArrayFieldComponent,
    PrimitiveFieldComponent,
    PrimitiveArrayFieldComponent
  ],
  pipes: [MapToIterablePipe],
  providers: [EmptyValueService, JsonUtilService],
  styles: [
    require('./array-in-array-field.component.scss')
  ],
  template: require('./array-in-array-field.component.html')
})
export class ArrayInArrayFieldComponent extends AbstractArrayFieldComponent {

  @Input() values: Array<Object>;
  @Input() schema: Object;

  constructor(public emptyValueService: EmptyValueService, private jsonUtilService: JsonUtilService) {
    super();
  }

  getType(value: any): string {
    return this.jsonUtilService.getType(value);
  }
}
