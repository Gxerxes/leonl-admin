import {Routes, RouterModule} from "@angular/router";
import {Algorithms} from "./algorithms.component";
import {AlgorithmSets} from "./components/sets/sets.component";
import {AlgorithmSortings} from "./components/sorting/sorting.component";

const routes: Routes = <Routes>[
  {
    path: '',
    component: Algorithms,
    children: [
      { path: 'sorting', component: AlgorithmSortings},
      { path: 'sets', component: AlgorithmSets}
    ]
  }
];
export const algorithmRouting = RouterModule.forChild(routes);
