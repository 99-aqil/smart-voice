import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*HEADER STARTS HERE*/
  id = "";
    drop(value: any) {
      if (this.id == value) {
          this.id = "";
      }
      else {
          this.id = value;
      }
    }
  /*HEADER ENDS HERE*/

}
