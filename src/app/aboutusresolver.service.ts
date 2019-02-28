import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostService } from './posts.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { of } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { tap, first } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AboutusresolverService implements Resolve<any> {

  constructor(
    private postService: PostService,
    private ts: TransferState,
    @Inject(PLATFORM_ID) private pid
  ) { }


  resolve(){
    console.log("From resolver");
    const POST = makeStateKey("POST")
    if(this.ts.hasKey(POST)){
      const posts = this.ts.get(POST, null);
      this.ts.remove(POST);
      return of(posts);
    }
    else{
      if(isPlatformServer(this.pid)){
        return this.postService.getPosts().pipe(
          first(),
          tap(
            posts => {
              console.log("RES", posts);
              this.ts.set(POST, posts);
            }
          )
        );
      }
    }
  }
}
