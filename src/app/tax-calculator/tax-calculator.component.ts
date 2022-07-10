import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent implements OnInit {

  constructor() { }

  annualIncome = new FormGroup({
    provinceResidense: new FormControl(''),
    employmentIncome: new FormControl(''),
    otherIncome: new FormControl(''),
  });

  ngOnInit(): void {
  }

  provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island', 
    'Quebec', 
    'Saskatchewan',
    'Northwest Territories', 
    'Nunavut', 
    'Yukon'
  ]

  onSubmit() {
    // alert(this.annualIncome.value.provinceResidense)
    // alert(this.annualIncome.value.employmentIncome)
    // alert(this.annualIncome.value.otherIncome)
  }

}
