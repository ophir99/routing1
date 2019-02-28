import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({

    providedIn: "root"
})
export class AboutusActivate implements CanActivate{

    canActivate(){
            console.log("Logging from Gaurd")
            return confirm("Are you sure you wanna enter??")
    }
}