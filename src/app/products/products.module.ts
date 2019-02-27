import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProducthomeComponent } from '../producthome/producthome.component';
import { SoftwareComponent } from '../software/software.component';
import { MobileappsComponent } from '../mobileapps/mobileapps.component';
import { CloudappsComponent } from '../cloudapps/cloudapps.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './software/item/item.component';


@NgModule({
    declarations: [
        ProductsComponent,
        ProducthomeComponent,
        SoftwareComponent,
        MobileappsComponent,
        CloudappsComponent,
        ItemComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild([{
        path: "",
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
            component: SoftwareComponent,
            children: [
              {
                // http:localhost:4200/products/software/90/price/220
                path: ':pid/price/:price',
                component: ItemComponent
              }
            ]
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