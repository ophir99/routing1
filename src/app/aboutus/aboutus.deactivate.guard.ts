import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';



@Injectable({
    providedIn: "root"
})
export class AboutUsDeactivate implements CanDeactivate<any>{

    canDeactivate(a){
        console.log(a);
        return confirm("Are you sure you want to leave About us??")
    }
}