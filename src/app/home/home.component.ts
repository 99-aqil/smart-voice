import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*MAIN BODY (PART-1) STARTS HERE*/
  
  mainBodyPart1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    slideTransition: "",
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  /*MAIN BODY (PART-1) ENDS HERE*/

  /*MAIN BODY (PART-2) STARTS HERE*/
    url: string = "../assets/logo.png";
    imageChange(event: any){
        this.url = event.target.src;
    }
  /*MAIN BODY (PART-2) ENDS HERE*/

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

  /*MAIN BODY (PART-4) STARTS HERE*/
  //this is a variable that hold number
  projectcount:number = 0;
  //same process
  accuratecount:number = 0;
  clientcount:number = 0;
  customerfeedback:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount ==12)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },50) //10 is milisecond you can control it


  accuratecountstop:any = setInterval(()=>{
    this.accuratecount++;
    if(this.accuratecount == 50)
    {
      
      clearInterval(this.accuratecountstop);
    }
  },50) 


  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 25)
    {
      
      clearInterval(this.clientcountstop);
    }
  },50)

  customerfeedbackstop:any = setInterval(()=>{
    this.customerfeedback++;
    if(this.customerfeedback == 1)
    {
      
      clearInterval(this.customerfeedbackstop);
    }
  },50)
  /*MAIN BODY (PART-4) ENDS HERE*/


}
