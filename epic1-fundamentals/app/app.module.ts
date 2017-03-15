/**
 * Created by Franz on 3/6/2017
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
//import {routing} from './components/routes/[pathToRoutes].routes';
import {AppComponent} from './app.component';
import {InventoryService} from './services/InventoryService.service';
import {BackendInventoryService} from './services/backendServices/backendInventoryService.service';
import {InventoryList} from './components/inventoryList/InventoryList.component';
@NgModule(({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
//    routing
  ],
  declarations: [
    AppComponent,
    InventoryList
  ],
  providers: [
    InventoryService,
    BackendInventoryService
  ],
  bootstrap: [AppComponent]
}))
export class AppModule {
}
