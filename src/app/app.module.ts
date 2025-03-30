import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityFieldsComponent } from './entity-fields/entity-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EntitiesComponent,
    EntityFieldsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 