import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FallbackComponent } from './fallback/fallback.component';
import { ProductsModule } from './products/products.module';
import { ServiceModule } from './services/service.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FallbackComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    ServiceModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "aboutus",
        component: AboutusComponent
      },
      {
        path: "contactus",
        component: ServiceComponent
      },
      {
        path: "**",
        component: FallbackComponent
      }
    ]),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
