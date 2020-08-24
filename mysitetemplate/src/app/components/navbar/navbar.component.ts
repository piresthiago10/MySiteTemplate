import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public innerWidth: any;

  constructor() {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }


  @ViewChild('nav', { static: true }) myNav: ElementRef;

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 1.5) {
      this.myNav.nativeElement.style.backgroundColor = '#343a40';
    } else {
      this.myNav.nativeElement.style.backgroundColor = 'transparent';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 990){
      this.myNav.nativeElement.style.backgroundColor = '#343a40';
    }
  }

}
