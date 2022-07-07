import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesComponent } from './currencies/currencies.component';
import { MainComponent } from './main/main.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';

const routes: Routes = [
  {
      path: "", component: MainComponent, children: [
          {path: "currencyrates", component: CurrenciesComponent},
          {path: "taxcalculator", component: TaxCalculatorComponent},
          // {path: "", redirectTo: "currencyrates", pathMatch: 'full'},           
      ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
