import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AnimalsComponent } from './animals/animals.component';
import { ViewAnimalComponent } from './view-animal/view-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AnimalsComponent,
    ViewAnimalComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
