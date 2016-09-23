import {NgModule} from "@angular/core";
import {routing} from "./modals.routing";
import {Modals} from "./modals.component";
import {ModalDemoComponent} from "./ng2Modals/ng2Modals.component";
import {ModalModule} from "../../theme/components/myModal/modal.module";
import {TabsSampleAppModule} from "../../theme/components/myTab/tabs";

@NgModule({
  imports: [
    ModalModule,
    TabsSampleAppModule,
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
