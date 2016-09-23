import {Directive, TemplateRef} from "@angular/core";

@Directive({
  selector: '[tabHeading]'
})
export class TabHeadingDirective {
  public templateRef: TemplateRef<any>;
  
  public constructor(templateRef:TemplateRef<any>) {
    
  }
}
