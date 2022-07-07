import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { CurrencyGeneric, CurrencyList } from '../types/types';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }
  currencyList!: CurrencyList;
  aSub!: Subscription;

  ngOnInit(): void {
    console.log('hello')
    this.getCurrencyList()
  }

  getCurrencyList(): void {
    this.aSub = this.currencyService.getCurrencyList().subscribe({
      next: (v: CurrencyGeneric) => {
        this.currencyList = this.setCurrencyList(v)
        console.log(this.currencyList)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  setCurrencyList(v: any) {
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


}
