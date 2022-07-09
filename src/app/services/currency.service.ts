import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { CurrencyGeneric } from "../types/types";

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http: HttpClient) {}

  addCcu$ = new Subject<{name: string}>();

  getCurrencyList(): Observable<CurrencyGeneric> {
    return this.http.get<CurrencyGeneric>(`https://api.exchangerate.host/latest`)
  }

  addCcuToLocalStorage (arg: any): void {
    console.log(12)
    localStorage.setItem('ImportantCurrency', JSON.stringify(arg));
  }

  getCcuFromLocalStorage (): string[] {
    if (localStorage.getItem('ImportantCurrency')) {
      return JSON.parse(localStorage.getItem('ImportantCurrency') as string)
    }
    return ['USD', 'EUR'];
  }

}
