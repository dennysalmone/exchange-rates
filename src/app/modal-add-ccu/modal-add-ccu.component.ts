import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CurrencyService } from '../services/currency.service';
import { CurrencyList, Rates } from '../types/types';

@Component({
  selector: 'app-modal-add-ccu',
  templateUrl: './modal-add-ccu.component.html',
  styleUrls: ['./modal-add-ccu.component.scss']
})
export class ModalAddCcuComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { importantCcu: string[], currencyList: CurrencyList }, private dialogRef: MatDialogRef<ModalAddCcuComponent>, private currencyService: CurrencyService) { }


  ngOnInit(): void {

  }

  getClassOf(rate: Rates): string {
    if (rate.important) {
      return "active"
    }
    return ""
  }

  changeStatus(rate: Rates): void {
    if(rate.important) {
      var myIndex = this.data.importantCcu.indexOf(rate.ccu);
      this.data.importantCcu.splice(myIndex, 1);
    } else {
      this.data.importantCcu.push(rate.ccu)
    }
    rate.important = !rate.important
  }

  close(): void {
    this.currencyService.addCcuToLocalStorage(this.data.importantCcu)
    this.dialogRef.close();
  }
}
