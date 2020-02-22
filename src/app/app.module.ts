import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TestDevComponent } from './test-dev/test-dev.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HerosComponent, HeroDetailComponent, TestDevComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
