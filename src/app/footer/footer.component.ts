import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  subscribeToEmail() : void{
    window.location.reload();
  }

  navigate() : void {
    window.location.reload();
  }
}
