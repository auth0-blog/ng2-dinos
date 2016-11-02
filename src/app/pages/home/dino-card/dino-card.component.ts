import { Component, Input } from '@angular/core';

import { Dino } from '../../../core/models/dino.model';

@Component({
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html'
})
export class DinoCardComponent {
  @Input() dino: Dino;
}
