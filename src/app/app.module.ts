import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbNavModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SkiresortsComponent } from './skiresorts/skiresorts.component';
import { StaticComponent } from './skiresorts/static/static.component';
import { WeatherComponent } from './skiresorts/weather/weather.component';
import { SkiPassComponent } from './skiresorts/ski-pass/ski-pass.component';
import { TracksComponent } from './skiresorts/tracks/tracks.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkiresortsComponent,
    StaticComponent,
    WeatherComponent,
    SkiPassComponent,
    TracksComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbNavModule,
    NgbDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
