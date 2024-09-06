import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavbarComponent, MainContentComponent, SidebarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
