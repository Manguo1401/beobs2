import { NgModule } from '@angular/core'

import { AttrDataWrapperComponent} from './attr_data_wrapper.component'

import { DateAttrComponent } from './temporal/date_attr.component'
import { TimeAttrComponent } from './temporal/time_attr.component'
import { UndefinedAttrComponent } from './undefined/undefined_attr.component'

@NgModule({
	imports: [
		
	],
	declarations: [
		AttrDataWrapperComponent,
		DateAttrComponent,
		TimeAttrComponent,
		UndefinedAttrComponent
	],
	entryComponents: [
		DateAttrComponent,
		TimeAttrComponent,
		UndefinedAttrComponent
	],
	providers: [

	],
	exports: [
		AttrDataWrapperComponent
	]
})

export class AttrDataWrapperModule {}