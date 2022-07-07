import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { CurrencyGeneric } from "../types/types";

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http: HttpClient) {}

  getCurrencyList(): Observable<CurrencyGeneric> {
    return this.http.get<CurrencyGeneric>(`https://api.exchangerate.host/latest`)
  }

}
