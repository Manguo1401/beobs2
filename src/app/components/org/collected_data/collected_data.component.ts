import { Component, AfterViewInit } from '@angular/core'

//banner
import { OrgBannerComponent } from '../org_banner/org_banner.component'
import { OrgMenuComponent } from '../org_banner/org_menu.component'

@Component({
  selector: 'collected_data',
  templateUrl: 'collected_data.component.html',
  //styleUrls: ['../../../app.component.css'],
   styleUrls: [
  '../../css/utils.style.scss'
  //'../user_banner.css'
  ]
})

export class CollectedDataComponent implements AfterViewInit{
  ngAfterViewInit() {

    $(function () {
      //$('[data-toggle="tooltip"]').tooltip()
    })
  }
}
