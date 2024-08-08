import { CommonModule } from '@angular/common';
import { Component, computed, signal, Signal } from '@angular/core';
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

  count: Signal<number> = signal(0);

  constructor(
    public readonly translateService: TranslateService,
    public readonly panierService: PanierService
  ) {
    this.translateService.use('fr');

    this.count = computed(() => {
      return this.panierService.panier().reduce((prev, next) => {
        return prev + next.quantity
      }, 0)
    })
  }
  
  changeLang(l : string) {
    this.translateService.use(l);
  }
}
