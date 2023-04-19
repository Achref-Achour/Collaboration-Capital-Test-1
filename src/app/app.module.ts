import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // import FormsModule

import { AppComponent } from './app.component';
import { OrderProcessComponent } from './order-process/order-process.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
