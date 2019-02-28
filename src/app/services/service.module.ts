import { NgModule } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { ServiceshomeComponent } from './serviceshome/serviceshome.component';
import { MobiledevComponent } from './mobiledev/mobiledev.component';
import { SoftwaredevComponent } from './softwaredev/softwaredev.component';
import { CloudComponent } from './cloud/cloud.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';


@NgModule({
    declarations: [
        ServiceComponent,
        ServiceshomeComponent,
        MobiledevComponent,
        SoftwaredevComponent,
        CloudComponent,
        ServicesComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: "",
            component: ServiceComponent,
            children: [
              {
                path: '',
                component: ServiceshomeComponent
              },
              {
                path: "softwaredev",
                component: SoftwaredevComponent
              },
              {
                path: "mobiledev",
                component: MobiledevComponent
              },
              {
                path: "cloud",
                component: CloudComponent
              }
            ]
          }])
    ]
})
export class ServiceModule{

}