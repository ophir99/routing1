import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProducthomeComponent } from '../producthome/producthome.component';
import { SoftwareComponent } from '../software/software.component';
import { MobileappsComponent } from '../mobileapps/mobileapps.component';
import { CloudappsComponent } from '../cloudapps/cloudapps.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ProductsComponent,
        ProducthomeComponent,
        SoftwareComponent,
        MobileappsComponent,
        CloudappsComponent
    ],
    imports: [RouterModule.forRoot([{
        path: "products",
        component: ProductsComponent,
        // redirectTo: 'aboutus',
        // pathMatch: 'full'
        children: [
          {
            path: "",
            component: ProducthomeComponent
          },
          {
            path: "software",
            component: SoftwareComponent
          },
          {
            path: "mobile",
            component: MobileappsComponent
          },
          {
            path: "cloud",
            component: CloudappsComponent
          }
        ]
      }])]
})
export class ProductsModule{

}