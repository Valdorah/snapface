import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;

  ngOnInit(): void {
    this.snapped = false;
  }

  onSnapped(): void {
    if(this.snapped) {
      this.faceSnap.removeSnap();
    } else {
      this.faceSnap.addSnap();
    }

    this.snapped = !this.snapped;
  }
}
