import { Loader } from '@googlemaps/js-api-loader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDjeGEEquSvDSNWEu_eTINLJGLbfEmre0A'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement,{
        center: { lat: 23.77817887695913, lng: 90.41557915205468 },
        zoom: 6
      })
    })
  }

}
