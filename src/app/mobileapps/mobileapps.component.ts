import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-mobileapps',
  templateUrl: './mobileapps.component.html',
  styleUrls: ['./mobileapps.component.css']
})
export class MobileappsComponent implements OnInit {
  formDemo;
  constructor(
  ) { 
    this.formDemo = new FormGroup({})
  }

  ngOnInit() {
  }

}
