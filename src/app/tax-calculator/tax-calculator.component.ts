import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProvincesList } from '../database/provinces';
import { taxeRates } from '../database/taxes';
import { IncomeData, TaxBacket, TaxeRatesList } from '../types/types';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  provinces = ProvincesList;
  ratesList = taxeRates;
  calculatedData = {
    isCalculated : false,
    totalIncome: 0,
    totalTax: 0,
    provTax: 0,
    fedTax: 0,
    averageTaxRate: 0,
    afterTaxIncome: 0,
  }


  formIncome = new FormGroup({
    provinceResidense: new FormControl(null, Validators.required),
    employmentIncome: new FormControl(0, [Validators.minLength(10), Validators.required, Validators.max(10000000), Validators.min(1)]),
    otherIncome: new FormControl(0, [Validators.maxLength(10), Validators.max(10000000), Validators.min(0)]),
  });
 
  onSubmit(): void {
    if(!this.formIncome.value.provinceResidense.value || !(this.formIncome.value.employmentIncome + this.formIncome.value.otherIncome)) {
      return;
    }
    const annualIncome: number = this.calculateTotalIncome(this.formIncome.value.employmentIncome, this.formIncome.value.otherIncome);
    const incomeData: IncomeData = {province: this.formIncome.value.provinceResidense.value, income: annualIncome};
    let totalFedTax: number = this.findFedTax(incomeData)
    let totalProvTax: number = this.findProvTax(incomeData)
    this.calculatedData = {
      isCalculated : true,
      totalIncome: incomeData.income,
      totalTax: totalProvTax + totalFedTax,
      provTax: totalProvTax,
      fedTax: totalFedTax,
      averageTaxRate: +((totalProvTax + totalFedTax)*100/incomeData.income).toFixed(2),
      afterTaxIncome: +(incomeData.income - (totalProvTax + totalFedTax)).toFixed(2),
    }
  }

  findFedTax (incomeData: IncomeData): number {
    let scopeFederal: TaxeRatesList = this.ratesList.filter(prov => prov.provStatus === TaxBacket.Federal)[0];
    let income: number = incomeData.income;
    let fedTaxAcc = 0;
    for (let i=0; i<scopeFederal.taxes.length; i++) {
      if(scopeFederal.taxes[i].backet <= income) {
        fedTaxAcc += ((income - scopeFederal.taxes[i].backet) * scopeFederal.taxes[i].rate)
        income = scopeFederal.taxes[i].backet
      }
    }
    return +fedTaxAcc.toFixed(2);
  }

  findProvTax (incomeData: IncomeData): number {
    let scopeProv: TaxeRatesList = this.ratesList.filter(prov => prov.name === incomeData.province)[0];
    let income1: number = incomeData.income;
    let provTaxAcc = 0;
    for (let i=0; i<scopeProv.taxes.length; i++) {
      if(scopeProv.taxes[i].backet <= income1) {
        provTaxAcc += ((income1 - scopeProv.taxes[i].backet) * scopeProv.taxes[i].rate)
        income1 = scopeProv.taxes[i].backet
      }
    }
    return +provTaxAcc.toFixed(2);
  }

  calculateTotalIncome(a: number, b: number): number {
    return +(a + b).toFixed(2);
  }
}
