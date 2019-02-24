import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
 // isExpanded : boolean= false;
  appTitle : string= "CryoLife Field Assurance Forms";
  appLogo : string= "assets/images/CryoLifeLogo.png";
  currentURL: string;
  isCollapsed: boolean;
  donorId: string = "";

  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        //console.log("current url", event.url); // event.url has current url
        this.currentURL = event.url;
      }
    });
  }
  ngOnInit() {
    this.donorId = localStorage.getItem("donorId");
  }
}
