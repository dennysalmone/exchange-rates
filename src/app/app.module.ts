import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalAddCcuComponent } from './modal-add-ccu/modal-add-ccu.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    CurrenciesComponent,
    TaxCalculatorComponent,
    ModalAddCcuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
