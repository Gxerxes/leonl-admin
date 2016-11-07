import {
  Directive, IterableDiffer, IterableDiffers, ChangeDetectorRef, DoCheck, TemplateRef,
  ViewContainerRef, ViewRef
} from '@angular/core';

@Directive({
  selector: '[forAnyOrder]',
  inputs: ['forAnyOrder']
})
export class ForAnyOrder implements DoCheck {
  private collection: any;
  private differ: IterableDiffer;
  private viewMap: Map<any, ViewRef> = new Map<any, ViewRef>();

  set forAnyOrderOf(coll: any) {
    this.collection = coll;
    if (coll && !this.differ) {
      this.differ = this.differs.find(coll).create(this.changeDetector);
    }
  }

  constructor(private changeDetector: ChangeDetectorRef,
              private differs: IterableDiffers,
              private template: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }

  ngDoCheck() {
    if (this.differ) {
      const changes = this.differ.diff(this.collection);
      if (changes) {
        changes.forEachAddedItem((change) => {
          const view = this.viewContainer.createEmbeddedView(this.template);
          //view.setLocal('\$implicit', change.item);
        });
        changes.forEachRemovedItem((change) => {
          const view = this.viewMap.get(change.item);
          const viewIndex = this.viewContainer.indexOf(view);
          this.viewContainer.remove(viewIndex);
          this.viewMap.delete(change.item);
        });
      }
    }
  }

}
