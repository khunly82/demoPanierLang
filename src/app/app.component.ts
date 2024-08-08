import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PanierService } from './services/panier.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    public readonly translateService: TranslateService,
    public readonly panierService: PanierService
  ) {
    this.translateService.use('fr');
  }
  
  changeLang(l : string) {
    this.translateService.use(l);
  }
}
