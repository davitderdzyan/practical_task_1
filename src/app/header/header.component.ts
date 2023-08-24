import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isDrawerOpen: boolean = false;

  toggleDrawer() : void{
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer() : void {
    this.isDrawerOpen = false;
  }

  goHome() : void {
    window.location.reload();
  }
}
