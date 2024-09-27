import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { OsobyService } from '../osoby.service';
import { Osoba } from '../osoba';


@Component({
  selector: 'app-opis-czlowieka',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './opis-czlowieka.component.html',
  styleUrl: './opis-czlowieka.component.css'
})
export class OpisCzlowiekaComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  osobaService:OsobyService= inject(OsobyService)
  czlowiekId=-1
  wybranyczlowiek:Osoba |undefined
  constructor(){
    this.czlowiekId = Number(this.route.snapshot.params['id'])
    this.wybranyczlowiek=this.osobaService.getOsobaById(this.czlowiekId)
  }

}
