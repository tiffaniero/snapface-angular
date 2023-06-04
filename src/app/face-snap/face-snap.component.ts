import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText!:string;

  constructor(private faceSnapService: FaceSnapService,
              private router: Router){}

  ngOnInit(): void {
      this.buttonText = 'Snaps !';
  }

  onSnapp(){
    
    if (this.buttonText == 'Snaps !'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Unsnaps !'
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Snaps !';
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl('faceSnaps/' + this.faceSnap.id);
  }
}
