import { Component, OnInit, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StoreService{
  store;
  constructor() { 
    this.store = [
      {
        id: 1,
        name: "Mobile",
        price:20
      },
      {
        id: 2,
        name: "Mobilex",
        price:220
      },
      {
        id: 3,
        name: "Mobiley",
        price:320
      },
      {
        id: 4,
        name: "Mobilez",
        price:240
      }
    ]
  }
}
@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  products = [];
  constructor(
    private store: StoreService
  ) { 
      this.products = this.store.store;
  } 

  ngOnInit() {
  }

}

