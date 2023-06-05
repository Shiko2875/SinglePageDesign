import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterHeaderComponent } from './footer-header/footer-header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TitleElementComponent } from './title-element/title-element.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterHeaderComponent,
    WrapperComponent,
    CarouselComponent,
    TitleElementComponent,
    NavigationBarComponent,
    BiographyComponent,
    ContactComponent,
    PrevDirective,
    NextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
