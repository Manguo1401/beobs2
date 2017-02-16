import { Injectable } from '@angular/core'

import { DateAttrComponent } from './../../components/global/dynamic_attrs/temporal/date_attr.component'
import { TimeAttrComponent } from './../../components/global//dynamic_attrs/temporal/time_attr.component'
import { UndefinedAttrComponent } from './../../components/global//dynamic_attrs/undefined/undefined_attr.component'
import { BuilderListAttrComponent } from './../../components/global/dynamic_attrs/generic_component/builder.list_attr.component'

@Injectable()

export class AttrsDataMap {
	getComp(attrData) {
		const map = {
			'date': DateAttrComponent,
			'time': TimeAttrComponent,
			'builder.list': BuilderListAttrComponent,
		}
		if(map[attrData] === undefined) {
			return UndefinedAttrComponent;
		} else {
			return map[attrData];
		}
	}
}
