import { effect, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: WritableSignal<any[]> = signal(localStorage.getItem('panier') ? JSON.parse(<string>localStorage.getItem('panier')) : [])

  constructor() { 
    effect(() => {
      console.log('le panier est modifie on modifie le localstorage')
      localStorage.setItem('panier', JSON.stringify(this.panier()))
    })
  }

  add() {
    this.panier.update(p => [...p, { nom: 'coca', quantity: 1 }])
  }


}
