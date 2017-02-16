import { Component } from '@angular/core'

@Component({
  selector: 'my-date-attr',
  templateUrl: 'date.component.html'
})

export class DateComponent {
  label = "label";
  defaultvalue = Date.now().toString();

}
