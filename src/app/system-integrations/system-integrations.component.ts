import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-system-integrations',
  templateUrl: './system-integrations.component.html',
  styleUrls: ['./system-integrations.component.css']
})
export class SystemIntegrationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projectcount:number = 0;
  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount ==15)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },70) //10 is milisecond you can control it

    /*MAIN BODY (PART-3 & 5) STARTS HERE*/
    testimonialSlider: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoplay: true,
      dots: true,
      navSpeed: 700,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 3
        },
        740: {
          items: 3
        },
        940: {
          items: 5
        }
      },
      nav: false
    }
    /*MAIN BODY (PART-3 & 5) ENDS HERE*/

}
