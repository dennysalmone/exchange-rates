import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { CurrencyGeneric, CurrencyList, Rates } from '../types/types';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalAddCcuComponent } from '../modal-add-ccu/modal-add-ccu.component';
import { currencyName } from './decipherment/currencies';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  constructor(private currencyService: CurrencyService, private dialog: MatDialog) { }
  dialogSub!: Subscription;
  currencyList!: CurrencyList;
  modelList!: CurrencyList; // use in calculations
  aSub!: Subscription;
  multIndex: number = 1;
  importantCcu: string[] = ['USD', 'EUR']

  ngOnInit(): void {
    this.getCurrencyList()
    this.importantCcu = this.currencyService.getCcuFromLocalStorage()
  }

  openModal(): void {
    this.dialogSub = this.currencyService.addCcu$.subscribe(
      (data) => {
        console.log(data)
      }
    )
  this.dialog.open(ModalAddCcuComponent, { data: { importantCcu: this.importantCcu, currencyList: this.currencyList } } )
  }

  getCurrencyList(): void {
    this.aSub = this.currencyService.getCurrencyList().subscribe({
      next: (v: CurrencyGeneric) => {
        this.currencyList = this.setCurrencyList(v)
        this.modelList = Object.assign({}, this.currencyList );
        this.currencyList = this.checkForImportance(this.currencyList, this.importantCcu)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  setCurrencyList(v: CurrencyGeneric): CurrencyList {
    let list: CurrencyList = {
      base: v.base,
      date: v.date,
      rates: []
    }
    Object.keys(v.rates).forEach(key => {
      let index = currencyName.findIndex(el => el.key === key.toLowerCase())
      if (index === -1) {
        console.log(key)
      }
      let rate = {ccu: key, price: v.rates[key], important: false, fullName: currencyName[index]?.val || key}
      list.rates.push(rate)
    });
    console.log(list)
    return list;
  }

  checkForImportance (list: CurrencyList, importantCcu: string[]): CurrencyList {
    for(let i=0; i<importantCcu.length; i++) {
      for(let k=0; k<list.rates.length; k++) {
        let cur = importantCcu[i] // 'USD', 'BTC', 'UAH' etc
        if (list.rates[k].ccu === cur) {
          list.rates[k].important = true;
          break;
        }
      }
    }
    return list;
  }

  onChangeEvent (e: any, currency: Rates): void {
    let value = e.target.value
    let ccuFromModel = this.foundCurrencyInModelList(currency.ccu)
    if(!ccuFromModel) {return}
    this.multIndex = (value / (ccuFromModel as Rates).price)
  }

  foundCurrencyInModelList (ccu: string): Rates | null {
    for(let i=0; i<this.modelList.rates.length; i++) {
      if(this.modelList.rates[i].ccu === ccu) {
        return this.modelList.rates[i]
      }
    }
    return null;
  }
}
