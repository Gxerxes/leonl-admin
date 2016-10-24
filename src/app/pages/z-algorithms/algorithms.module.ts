import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {AlgorithmSets} from "./components/sets/sets.component";
import {AlgorithmSortings} from "./components/sorting/sorting.component";
import {algorithmRouting} from "./algorithms.routing";
import {Algorithms} from "./algorithms.component";
import {TextMaskModule} from "../z-plugins/TextMaskModule";

import {FormsModule} from '@angular/forms';
import MaskedInput from 'angular2-text-mask'


@NgModule({
  imports: [
    CommonModule,
    algorithmRouting,
    FormsModule,
    TextMaskModule
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
