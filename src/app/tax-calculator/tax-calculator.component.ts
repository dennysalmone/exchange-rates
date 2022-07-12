import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProvincesList } from '../database/provinces';
import { cppContribution, eiContribution, taxeRates } from '../database/taxes';
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
    cpp: 0,
    ei: 0,
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
    const provinceName = this.formIncome.value.provinceResidense.value
    let totalCpp: number = this.findCpp(annualIncome)
    let totalEi: number = this.findEi(annualIncome)
    let taxBase = annualIncome - (totalCpp + totalEi)

    let totalFedTax: number = this.findFedTax(taxBase)
    let totalProvTax: number = this.findProvTax(taxBase, provinceName)
    this.calculatedData = {
      isCalculated : true,
      totalIncome: +(annualIncome).toFixed(2),
      cpp: +(totalCpp).toFixed(2),
      ei: +(totalEi).toFixed(2),
      totalTax: +(totalProvTax + totalFedTax).toFixed(2),
      provTax: totalProvTax,
      fedTax: totalFedTax,
      averageTaxRate: +((totalProvTax + totalFedTax)*100/annualIncome).toFixed(2),
      afterTaxIncome: +(annualIncome - (totalProvTax + totalFedTax + totalCpp + totalEi)).toFixed(2),
    }
  }


  findFedTax (incomeData: number): number {
    let scopeFederal: TaxeRatesList = this.ratesList.filter(prov => prov.provStatus === TaxBacket.Federal)[0];
    let income: number = incomeData - scopeFederal.basicPersonalAmount;
    let fedTaxAcc = 0;
    for (let i=0; i<scopeFederal.taxes.length; i++) {
      if(scopeFederal.taxes[i].backet <= income) {
        fedTaxAcc += ((income - scopeFederal.taxes[i].backet) * scopeFederal.taxes[i].rate)
        income = scopeFederal.taxes[i].backet
      }
    }
    return +fedTaxAcc.toFixed(2);
  }

  findProvTax (incomeData: number, provinceName: string): number {
    let scopeProv: TaxeRatesList = this.ratesList.filter(prov => prov.name === provinceName)[0];
    let income: number = incomeData - scopeProv.basicPersonalAmount;
    let provTaxAcc = 0;
    for (let i=0; i<scopeProv.taxes.length; i++) {
      if(scopeProv.taxes[i].backet <= income) {
        provTaxAcc += ((income - scopeProv.taxes[i].backet) * scopeProv.taxes[i].rate)
        income = scopeProv.taxes[i].backet
      }
    }
    return +provTaxAcc.toFixed(2);
  }

  calculateTotalIncome(a: number, b: number): number {
    return +(a + b).toFixed(2);
  }

  findCpp (income: number): number {
    let contr = income * cppContribution.rate;
    if(contr >= cppContribution.maxContr) {
      return cppContribution.maxContr;
    }
    return contr;
  }

  findEi (income: number): number {
    let contr = income * eiContribution.rate;
    if(contr >= eiContribution.maxContr) {
      return eiContribution.maxContr;
    }
    return contr;
  }
}
