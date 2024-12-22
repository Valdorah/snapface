import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnap} from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  snaps!: FaceSnap[];

  ngOnInit() {
    this.snaps = [
      new FaceSnap(
        'Pikachu',
        'Mon meilleur pokémon !',
        new Date(),
        0,
        'https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/615px-Pikachu-DEPS.png?20220418180124'
      ),
      new FaceSnap(
        'Bulbizarre',
        'Mon deuxième meilleur pokémon !',
        new Date(),
        1036,
        'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/644px-Bulbizarre-RFVF.png?20141212043325'
      )
    ];

    this.snaps[0].setLocation('Johto');
  }
}
