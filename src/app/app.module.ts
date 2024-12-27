import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CategoryComponent } from './category/category.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TestComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
