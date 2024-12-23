import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Pikachu',
      'Mon meilleur pokémon !',
      new Date(),
      0,
      'https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/615px-Pikachu-DEPS.png?20220418180124'
    ).withLocation('Johto'),
    new FaceSnap(
      'Bulbizarre',
      'Mon deuxième meilleur pokémon !',
      new Date(),
      1036,
      'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/644px-Bulbizarre-RFVF.png?20141212043325'
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
}
