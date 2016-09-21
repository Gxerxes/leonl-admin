import { Component, ViewChild } from '@angular/core';
import {ModalDirective} from "../../../theme/components/myModal/modal.component";

// todo: change to ng2-bootstrap
// webpack html imports
let template = require('./ng2Modals.html');

@Component({
  selector: 'modal-demo',
  template: template
})
export class ModalDemoComponent {
  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
