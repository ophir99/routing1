import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FallbackComponent } from './fallback/fallback.component';
import { ProductsModule } from './products/products.module';
import { ServiceModule } from './services/service.module';
import { CustomPreloading } from './custom.preloading';
import { HttpClientModule } from "@angular/common/http";
import { AboutusresolverService } from './aboutusresolver.service';
import { AboutusActivate } from './aboutus/aboutus.activate.guard';
import { AboutUsDeactivate } from './aboutus/aboutus.deactivate.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FallbackComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "aboutus",
        resolve:{
            postsRes: AboutusresolverService,
        },
        canActivate: [AboutusActivate],
        canDeactivate: [AboutUsDeactivate],
        component: AboutusComponent
      },
      {
        path: "contactus",
        component: AboutusComponent
      },
      {
        path: "**",
        component: FallbackComponent
      }
    ], {
      preloadingStrategy: CustomPreloading
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
