import {Routes, RouterModule} from "@angular/router";
import {Modals} from "./modals.component";

const routes: Routes = <Routes>[
  {
    path: '',
    component: Modals
  }
];

export const routing = RouterModule.forChild(routes);
