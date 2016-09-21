import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
import {ModalDirective} from "../../theme/components/myModal/modal.component";

@Component({
  selector: 'modals',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./modals.html')
})
export class Modals {

  constructor() {}

  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
