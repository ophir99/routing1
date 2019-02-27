import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class CustomPreloading implements PreloadingStrategy{


    preload(myRoute:Route, load){
            console.log(myRoute);
            if(myRoute.path == 'products'){
                let ob$ = of(null);
                return ob$;
            }
            return load();
    }

}