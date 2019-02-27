import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product;
  details;
  constructor(
    private activatedR: ActivatedRoute
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
  }

  ngOnInit() {
  }

}
