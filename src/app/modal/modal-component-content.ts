/**
 * Created by Administrator on 3/1/2017.
 */
import {Component, Input} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss(returnObject)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close(returnObject)">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  returnObject: any = {};

  constructor(public activeModal: NgbActiveModal) {
    this.returnObject.name = "Cessna";
  }


}
