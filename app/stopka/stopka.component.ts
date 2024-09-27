import { Component } from '@angular/core';

@Component({
  selector: 'app-stopka',
  standalone: true,
  imports: [],
  templateUrl: './stopka.component.html',
  styleUrl: './stopka.component.css'
})
export class StopkaComponent {
  data = new Date();
  rok = this.data.getFullYear()
}
