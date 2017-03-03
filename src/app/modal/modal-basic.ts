/**
 * Created by Administrator on 3/1/2017.
 */
import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent} from './modal-component-content';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
  closeResult: string;
  modOptions: NgbModalOptions = {};

  constructor(private modalService: NgbModal) {
    this.modOptions.backdrop = 'static';
    this.modOptions.size = "sm";
  }

  open(){
  //open(content) {
    // this.modalService.open(content).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });

    var modalRef = this.modalService.open(NgbdModalContent, this.modOptions);
    modalRef.componentInstance.name = 'Modal';
    modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result.name}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
