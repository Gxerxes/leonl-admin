import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {AlgorithmSets} from "./components/sets/sets.component";
import {AlgorithmSortings} from "./components/sorting/sorting.component";
import {algorithmRouting} from "./algorithms.routing";
import {Algorithms} from "./algorithms.component";

@NgModule({
  imports: [
    CommonModule,
    algorithmRouting
  ],
  declarations: [
    Algorithms,
    AlgorithmSets,
    AlgorithmSortings
  ],
  providers: [

  ]
})
export default class AlgorithmsModule {}
