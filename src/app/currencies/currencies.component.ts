import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { CurrencyGeneric, CurrencyList, ImportantCcu, Rates } from '../types/types';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }
  currencyList!: CurrencyList; // not use yet, full list of currencies
  importantList!: CurrencyList;
  modelList!: CurrencyList; // use in calculations
  aSub!: Subscription;
  multIndex: number = 1;
  importantCcu: ImportantCcu = ['USD', 'GBP', 'JPY', 'CNY', 'CHF', 'UAH', 'EUR', 'BTC', 'XAU']

  ngOnInit(): void {
    this.getCurrencyList()
  }

  getCurrencyList(): void {
    this.aSub = this.currencyService.getCurrencyList().subscribe({
      next: (v: CurrencyGeneric) => {
        this.currencyList = this.setCurrencyList(v)
        this.importantList = this.foundImportantCurrencyes(this.currencyList, this.importantCcu)
        this.modelList = this.importantList
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  setCurrencyList(v: any): CurrencyList {
    let list: CurrencyList = {
      base: v.base,
      date: v.date,
      rates: []
    }
    Object.keys(v.rates).forEach(key => {
      let rate = {ccu: key, price: v.rates[key]}
      list.rates.push(rate)
    });
    return list;
  }

  foundImportantCurrencyes (list: CurrencyList, importantCcu: ImportantCcu): CurrencyList {
    let importantRates = []
    for(let i=0; i<importantCcu.length; i++) {
      for(let k=0; k<list.rates.length; k++) {
        let cur = importantCcu[i] // USD fyi
        if (list.rates[k].ccu === cur) {
          importantRates.push(list.rates[k])
          break;
        }
      }
    }
    list.rates = importantRates;
    console.log(list);
    return list;
  }

  onChangeEvent (e: any, currency: Rates): void {
    let value = e.target.value
    let ccuFromModel = this.foundCurrencyInModelList(currency.ccu)
    if(!ccuFromModel) {return}
    this.multIndex = (value / (ccuFromModel as Rates).price)
    // this.importantList.rates.forEach(item => Math.round(item.price * 100) / 100)
    // for(let i=0; i<this.importantList.rates.length; i++) {
    //   this.importantList.rates[i].price = Math.round(this.importantList.rates[i].price * 100) / 100
    // }
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
