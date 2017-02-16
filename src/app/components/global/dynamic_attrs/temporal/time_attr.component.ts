import { Component } from '@angular/core'

@Component({
	selector: 'my-time-attr',
	template: 'Around the clock {{props}}'
})

export class TimeAttrComponent {
	props: any;
}
