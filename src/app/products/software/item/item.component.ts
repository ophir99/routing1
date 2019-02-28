import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product;
  details;
  constructor(
    private activatedR: ActivatedRoute,
    private simple: Meta,
    @Inject(DOCUMENT) private doc,
    private r2: Renderer2
  ) { 
    this.activatedR.params.subscribe(
      (params)=>{
        console.log('=>',params)
        this.product = params;
      }
    )

    this.activatedR.queryParams.subscribe(
      (queryParams)=>{
        console.log(queryParams);
        this.details = queryParams;
      }
    )

    console.log(this.doc.head);
    const link = this.r2.createElement('link');
    this.r2.setAttribute(link, "rel", "canonical");
    this.r2.setAttribute(link, "href", "http://simple.com");
    this.r2.appendChild(this.doc.head, link);
    console.log(this.doc.head);
  }

  ngOnInit() {
  }

}
