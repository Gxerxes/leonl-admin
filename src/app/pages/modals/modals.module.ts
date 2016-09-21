import {NgModule} from "@angular/core";
import {routing} from "./modals.routing";
import {Modals} from "./modals.component";
import {ModalDemoComponent} from "./ng2Modals/ng2Modals.component";
import {ModalModule} from "../../theme/components/myModal/modal.module";

@NgModule({
  imports: [
    ModalModule,
    routing
  ],
  declarations: [
    Modals,
    ModalDemoComponent
  ],
  providers: [

  ]
})
export default class ModalsModule {}
