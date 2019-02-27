import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class AboutusresolverService implements Resolve<any> {

  constructor(
    private postService: PostService
  ) { }


  resolve(){
    console.log("From resolver");
    return this.postService.getPosts();
  }
}
