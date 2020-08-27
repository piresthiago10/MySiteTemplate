import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardsComponent } from './components/cards/cards.component';
import { SocialNetworkBannerComponent } from './components/social-network-banner/social-network-banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarAddComponent } from './components/navbar-add/navbar-add.component';
import { NavbarAppComponent } from './components/navbar-app/navbar-app.component';
import { NavbarEditComponent } from './components/navbar-edit/navbar-edit.component';
import { PortfolioAppComponent } from './components/portfolio-app/portfolio-app.component';
import { PortfolioAddComponent } from './components/portfolio-add/portfolio-add.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    BannerComponent,
    CardsComponent,
    SocialNetworkBannerComponent,
    ProjectsComponent,
    FooterComponent,
    NavbarAddComponent,
    NavbarAppComponent,
    NavbarEditComponent,
    PortfolioAppComponent,
    PortfolioAddComponent,
    PortfolioEditComponent,
    ContactEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
