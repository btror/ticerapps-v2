import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home/home.component';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { AppsComponent } from './apps-page/apps/apps.component';
import { GraphicComponent } from './shared/graphic/graphic.component';
import { AboutComponent } from './home-page/about/about.component';
import { AppSectionComponent } from './apps-page/app-section/app-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationMenuComponent,
    FooterComponent,
    ContactComponent,
    AppsComponent,
    GraphicComponent,
    AboutComponent,
    AppSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
