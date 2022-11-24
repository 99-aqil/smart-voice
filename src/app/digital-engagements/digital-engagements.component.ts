import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-digital-engagements',
  templateUrl: './digital-engagements.component.html',
  styleUrls: ['./digital-engagements.component.css']
})
export class DigitalEngagementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*MAIN BODY (PART-3) STARTS HERE*/
  //this is a variable that hold number
  projectcount:number = 0;
  //same process
  accuratecount:number = 0;
  clientcount:number = 0;
  customerfeedback:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.

  accuratecountstop:any = setInterval(()=>{
    this.accuratecount++;
    if(this.accuratecount == 76)
    {
      
      clearInterval(this.accuratecountstop);
    }
  },50) 


  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 89)
    {
      
      clearInterval(this.clientcountstop);
    }
  },50)

  customerfeedbackstop:any = setInterval(()=>{
    this.customerfeedback++;
    if(this.customerfeedback == 85)
    {
      
      clearInterval(this.customerfeedbackstop);
    }
  },50)
/*MAIN BODY (PART-3) ENDS HERE*/

/*MAIN BODY (PART-5) STARTS HERE*/
url: string = "../assets/img1.jpg";
imageChange(event: any){
    this.url = event.target.src;
}
/*MAIN BODY (PART-5) ENDS HERE*/

/*MAIN BODY (PART-6) STARTS HERE*/
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
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }  
/*MAIN BODY (PART-6) ENDS HERE*/





}
