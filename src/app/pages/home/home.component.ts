import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, MenuBarComponent, SmallCardComponent, BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  implements OnInit {
  photoCover: string = ''
  contentTitle: string = ''
  contentDescription: string = ''

  ngOnInit(): void {
  }

}
