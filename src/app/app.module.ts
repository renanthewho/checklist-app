import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CategoryComponent } from './category/category.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
