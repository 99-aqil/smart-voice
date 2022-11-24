import { DigitalEngagementsComponent } from './digital-engagements/digital-engagements.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { MessagingSolutionComponent } from './messaging-solution/messaging-solution.component';
import { AdTechAndPublisherComponent } from './ad-tech-and-publisher/ad-tech-and-publisher.component';
import { SystemIntegrationsComponent } from './system-integrations/system-integrations.component';
import { ContactComponent } from './contact/contact.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-partners', component: OurPartnersComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'system-integrations', component: SystemIntegrationsComponent },
  { path: 'ad-tech-and-publisher', component: AdTechAndPublisherComponent },
  { path: 'messaging-solution', component: MessagingSolutionComponent },
  { path: 'software-development', component: SoftwareDevelopmentComponent },
  { path: 'digital-engagements', component: DigitalEngagementsComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

