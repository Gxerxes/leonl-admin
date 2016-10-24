import {Component} from "@angular/core";
import forEach = require("core-js/fn/array/for-each");

@Component({
  selector: 'algorithm-sets',
  styles: [`input {color: black}`],
  template: require('./sets.html')
})
export class AlgorithmSets {

  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  ngOnInit() {
    console.log(this.compressString('AAABCCDDDD'));
    console.log(this.compressString('AABBCCDD'));
  }

  compressString(str: any) {
    if (str === null || str.length === 0) {
      return str;
    }

    let result = '';
    let pre_char = str[0];
    let count = 0;

    for(let char in str) {
      if (str[char] == pre_char) {
        count++;
      } else {
        result += pre_char + (count > 1 ? count: '');
        pre_char = str[char];
        count = 1;
      }
    }
    result += pre_char + (count > 1 ? count: '');

    return result.length <  str.length ? result : str;
  }
}
