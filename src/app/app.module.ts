import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactComponent } from './contact/contact.component';
import { SystemIntegrationsComponent } from './system-integrations/system-integrations.component';
import { AdTechAndPublisherComponent } from './ad-tech-and-publisher/ad-tech-and-publisher.component';
import { MessagingSolutionComponent } from './messaging-solution/messaging-solution.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DigitalEngagementsComponent } from './digital-engagements/digital-engagements.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    OurPartnersComponent,
    OurClientsComponent,
    ContactComponent,
    SystemIntegrationsComponent,
    AdTechAndPublisherComponent,
    MessagingSolutionComponent,
    SoftwareDevelopmentComponent,
    DigitalEngagementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
