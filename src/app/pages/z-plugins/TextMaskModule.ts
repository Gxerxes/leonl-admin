import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import MaskedInput from 'angular2-text-mask'

@NgModule({
  imports: [FormsModule],
  declarations: [MaskedInput],
  exports: [MaskedInput]
})
export class TextMaskModule {}
