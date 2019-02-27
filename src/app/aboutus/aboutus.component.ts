import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  posts:any[] = [];
  constructor(
    private postService: PostService,
    private aRoute: ActivatedRoute
  ) {
    console.log("From About us component");
    // this.postService.getPosts()
    //     .subscribe(
    //       (res:any) => {
    //         this.posts = res;
    //       }
    //     )

    this.aRoute.data.subscribe(
      (res:any) => {
        console.log(res); 
        this.posts = res.postsRes;
      }
    )
   }

  ngOnInit() {
  }

}
